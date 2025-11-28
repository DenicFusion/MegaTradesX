import { storage, db_firestore } from './firebase';

const STORAGE_KEYS = {
  ADMIN_PASS: 'gmf_admin_pass',
  SESSION: 'gmf_admin_session'
};

export interface GalleryImage {
  id: string;
  url: string;
  description: string;
  date: string;
  storagePath?: string; // To help delete the file from bucket later
}

// Keep simple Auth in LocalStorage for now (or upgrade to Firebase Auth later if desired)
if (!localStorage.getItem(STORAGE_KEYS.ADMIN_PASS)) {
  localStorage.setItem(STORAGE_KEYS.ADMIN_PASS, 'admin123');
}

export const db = {
  // --- AUTHENTICATION ---
  checkPassword: (password: string) => {
    return password === localStorage.getItem(STORAGE_KEYS.ADMIN_PASS);
  },
  
  updatePassword: (newPassword: string) => {
    localStorage.setItem(STORAGE_KEYS.ADMIN_PASS, newPassword);
    return true;
  },

  login: () => {
    localStorage.setItem(STORAGE_KEYS.SESSION, 'true');
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
  },

  isAuthenticated: () => {
    return localStorage.getItem(STORAGE_KEYS.SESSION) === 'true';
  },

  // --- FIREBASE DATA & STORAGE ---

  /**
   * Fetches all gallery images from Firestore
   */
  getImages: async (): Promise<GalleryImage[]> => {
    try {
      const querySnapshot = await db_firestore.collection("gallery").orderBy("date", "desc").get();
      const images: GalleryImage[] = [];
      
      querySnapshot.forEach((doc) => {
        images.push({ id: doc.id, ...doc.data() } as GalleryImage);
      });
      
      return images;
    } catch (error) {
      console.error("Error getting documents: ", error);
      return [];
    }
  },

  /**
   * Uploads an image to Firebase Storage and saves metadata to Firestore
   */
  addImage: async (file: File, description: string) => {
    try {
      // 1. Create a reference to 'images/filename'
      const timestamp = Date.now();
      const storagePath = `gallery/${timestamp}_${file.name}`;
      const storageRef = storage.ref(storagePath);

      // 2. Upload the file
      await storageRef.put(file);

      // 3. Get the download URL
      const url = await storageRef.getDownloadURL();

      // 4. Save metadata to Firestore
      const newImage = {
        url,
        description,
        date: new Date().toISOString(),
        storagePath
      };

      const docRef = await db_firestore.collection("gallery").add(newImage);

      return { success: true, image: { id: docRef.id, ...newImage } };
    } catch (error: any) {
      console.error("Error uploading image: ", error);
      return { success: false, error: error.message || 'Upload failed' };
    }
  },

  /**
   * Deletes an image from Firestore and Storage
   */
  deleteImage: async (image: GalleryImage) => {
    try {
      // 1. Delete from Firestore
      await db_firestore.collection("gallery").doc(image.id).delete();

      // 2. Delete from Storage (if path exists)
      if (image.storagePath) {
        const fileRef = storage.ref(image.storagePath);
        await fileRef.delete();
      } else {
        // Fallback for legacy items or items added via URL only (if implemented)
        console.warn("No storage path found for cleanup, deleted database record only.");
      }
      
      return true;
    } catch (error) {
      console.error("Error deleting image: ", error);
      return false;
    }
  }
};