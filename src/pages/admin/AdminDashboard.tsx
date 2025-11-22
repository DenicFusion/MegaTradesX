import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, GalleryImage } from '../../lib/storage';
import { Trash2, LogOut, Key, Plus, Image as ImageIcon, Upload, X, CheckCircle, ShieldCheck } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [activeTab, setActiveTab] = useState<'images' | 'settings'>('images');
  
  // Upload State
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageDesc, setNewImageDesc] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  
  // Password State
  const [newPassword, setNewPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!db.isAuthenticated()) {
      navigate('/myadmin');
      return;
    }
    setImages(db.getImages());
  }, [navigate]);

  const handleLogout = () => {
    db.logout();
    navigate('/myadmin');
  };

  // --- Drag and Drop Logic ---
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Basic validation
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload an image file');
      return;
    }
    
    const reader = new FileReader();
    reader.onloadend = () => {
      // This Base64 string is what we'll save
      setUploadedFile(reader.result as string);
      setNewImageUrl(reader.result as string); // Update the input too for visibility
    };
    reader.readAsDataURL(file);
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    const urlToSave = uploadedFile || newImageUrl;

    if (urlToSave && newImageDesc) {
      const result = db.addImage({ url: urlToSave, description: newImageDesc });
      if (result.success) {
        setImages(db.getImages());
        setNewImageUrl('');
        setNewImageDesc('');
        setUploadedFile(null);
        setSuccessMsg('Image added to gallery');
        setTimeout(() => setSuccessMsg(''), 3000);
      } else {
        setErrorMsg(result.error || 'Failed to save');
        setTimeout(() => setErrorMsg(''), 4000);
      }
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this image permanently?')) {
      db.deleteImage(id);
      setImages(db.getImages());
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 4) {
        setErrorMsg('Password must be at least 4 characters');
        return;
    }
    db.updatePassword(newPassword);
    setNewPassword('');
    setSuccessMsg('Admin password updated');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans">
      {/* Admin Header */}
      <div className="bg-dark-900 border-b border-white/5 px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary">
                <ShieldCheck size={18} />
            </div>
            Control Panel
          </h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white bg-white/5 px-4 py-2 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-all">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-6 mb-10 border-b border-white/5">
          <button 
            onClick={() => setActiveTab('images')}
            className={`pb-4 px-2 font-medium text-sm transition-all relative ${activeTab === 'images' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Gallery Management
            {activeTab === 'images' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`pb-4 px-2 font-medium text-sm transition-all relative ${activeTab === 'settings' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Security Settings
            {activeTab === 'settings' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full"></span>}
          </button>
        </div>

        {/* Alerts */}
        {successMsg && (
          <div className="mb-6 bg-green-500/10 text-green-400 px-4 py-3 rounded-xl border border-green-500/20 flex items-center gap-2 animate-fade-in">
            <CheckCircle size={18} /> {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="mb-6 bg-red-500/10 text-red-400 px-4 py-3 rounded-xl border border-red-500/20 flex items-center gap-2 animate-fade-in">
            <X size={18} /> {errorMsg}
          </div>
        )}

        {activeTab === 'images' ? (
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Upload Area */}
            <div className="lg:col-span-1">
              <div className="glass-panel p-6 rounded-2xl sticky top-24">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                  <Plus size={20} className="text-secondary" /> Add Image
                </h3>
                
                <form onSubmit={handleAddImage} className="space-y-5">
                  {/* Drag and Drop Zone */}
                  <div 
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer relative overflow-hidden ${dragActive ? 'border-secondary bg-secondary/10' : 'border-white/10 bg-dark-900/50 hover:border-white/20'}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <input 
                        type="file" 
                        id="file-upload" 
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleFileInput}
                    />
                    {uploadedFile ? (
                        <div className="relative h-32 w-full">
                            <img src={uploadedFile} alt="Preview" className="h-full w-full object-contain rounded-lg" />
                            <button 
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setUploadedFile(null); setNewImageUrl(''); }}
                                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full transform translate-x-1/2 -translate-y-1/2 shadow-md"
                            >
                                <X size={12} />
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-2 text-gray-400">
                            <Upload size={24} />
                            <p className="text-xs font-medium">Click or Drag image here</p>
                            <span className="text-[10px] text-gray-600">Supports JPG, PNG (Max 5MB local)</span>
                        </div>
                    )}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/5"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                        <span className="px-2 bg-[#0b1521] text-gray-500">OR URL</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Image URL</label>
                    <input 
                      type="url" 
                      value={newImageUrl}
                      onChange={(e) => { setNewImageUrl(e.target.value); setUploadedFile(null); }}
                      className="glass-input text-sm"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Description / Title</label>
                    <input 
                      type="text" 
                      value={newImageDesc}
                      onChange={(e) => setNewImageDesc(e.target.value)}
                      className="glass-input text-sm"
                      placeholder="e.g. Gold Analysis H4"
                      required
                    />
                  </div>

                  <button type="submit" className="w-full bg-secondary hover:bg-blue-600 text-white py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-900/20 transition-all transform active:scale-95">
                    Publish to Gallery
                  </button>
                </form>
              </div>
            </div>

            {/* Image Grid */}
            <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-white">Active Gallery ({images.length})</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                {images.map((img) => (
                    <div key={img.id} className="bg-dark-900 rounded-xl overflow-hidden group border border-white/5 relative hover:border-white/10 transition-all">
                    <div className="aspect-video bg-black relative">
                        <img src={img.url} alt={img.description} className="w-full h-full object-cover" />
                        {/* Overlay Actions */}
                        <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-sm">
                            <button 
                                onClick={() => handleDelete(img.id)}
                                className="bg-red-500/20 text-red-400 p-3 rounded-full hover:bg-red-500 hover:text-white transition-all border border-red-500/30"
                                title="Delete Permanently"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="p-3 bg-dark-800/50">
                        <p className="text-sm font-medium text-gray-200 truncate pr-2">{img.description}</p>
                        <p className="text-[10px] text-gray-500 mt-1 font-mono">ID: {img.id} • {new Date(img.date).toLocaleDateString()}</p>
                    </div>
                    </div>
                ))}
                {images.length === 0 && (
                    <div className="col-span-full py-16 text-center border-2 border-dashed border-white/5 rounded-2xl bg-white/0">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ImageIcon className="text-gray-600" />
                        </div>
                        <p className="text-gray-500">Gallery is empty.</p>
                    </div>
                )}
                </div>
            </div>
          </div>
        ) : (
          <div className="max-w-lg">
             <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                  <Key size={20} className="text-secondary" /> Change Admin Password
                </h3>
                <form onSubmit={handleChangePassword} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">New Password</label>
                    <input 
                      type="password" 
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="glass-input"
                      placeholder="Enter new password"
                      required
                    />
                    <p className="text-[10px] text-gray-500 mt-2 ml-1">Make sure to remember this. There is no reset function.</p>
                  </div>
                  <button type="submit" className="bg-white text-dark-950 hover:bg-gray-200 py-3 px-8 rounded-xl text-sm font-bold transition-colors">
                    Update Password
                  </button>
                </form>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;