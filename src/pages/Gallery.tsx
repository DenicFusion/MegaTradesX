import React, { useEffect, useState } from 'react';
import { db, GalleryImage } from '../lib/storage';
import { Image as ImageIcon, Calendar } from 'lucide-react';
const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network delay for realism
    setTimeout(() => {
      setImages(db.getImages());
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Market Analysis Gallery</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Exclusive charts, trade setups, and market breakdowns from our expert analysts.
        </p>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-panel rounded-xl overflow-hidden h-80 animate-pulse">
              <div className="h-48 bg-white/5"></div>
              <div className="p-6 space-y-3">
                <div className="h-4 bg-white/5 rounded w-3/4"></div>
                <div className="h-3 bg-white/5 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-24 glass-panel rounded-3xl border-dashed border-2 border-white/10">
          <div className="w-20 h-20 bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <ImageIcon className="h-10 w-10 text-gray-600" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No Analysis Found</h3>
          <p className="text-gray-500">Check back later for new market updates.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div key={img.id} className="group glass-panel rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-dark-950 relative cursor-pointer">
                <img 
                  src={img.url} 
                  alt={img.description}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/0a1f3d/ffffff?text=Image+Error';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                    <span className="bg-secondary/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">
                        ANALYSIS
                    </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-100 mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {img.description}
                </h3>
                <div className="flex items-center text-gray-500 text-xs pt-4 border-t border-white/5 mt-2">
                  <Calendar className="w-3 h-3 mr-2" />
                  {new Date(img.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
