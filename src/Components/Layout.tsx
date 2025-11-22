import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu, X, ChevronRight } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path ? 'text-secondary font-medium' : 'text-gray-300 hover:text-white';

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:shadow-blue-500/20 transition-all">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-wide text-white">MEGA<span className="text-secondary">TRADE</span></span>
            </Link>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link to="/" className={`transition-colors duration-200 text-sm uppercase tracking-wider ${isActive('/')}`}>Home</Link>
                <Link to="/gallery" className={`transition-colors duration-200 text-sm uppercase tracking-wider ${isActive('/gallery')}`}>Gallery</Link>
                <Link to="/register" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-secondary to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5">
                  Start Trading
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 rounded-lg hover:bg-white/5">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden absolute w-full bg-dark-900/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/5">Home</Link>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/5">Gallery</Link>
            <Link to="/register" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-secondary bg-blue-500/10">Join Now</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-dark-950 border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-secondary" />
                <span className="text-lg font-bold text-white">MEGA<span className="text-secondary">TRADE</span></span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Leading the way in institutional-grade forex trading services. Secure, fast, and reliable platform for traders worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
                <li><Link to="/gallery" className="hover:text-secondary transition-colors">Analysis Gallery</Link></li>
                <li><Link to="/register" className="hover:text-secondary transition-colors">Open Account</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
                <li><Link to="/myadmin" className="hover:text-secondary transition-colors flex items-center gap-1">Admin Access <ChevronRight size={12}/></Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} Great Mega Forex. All rights reserved. Trading involves risk.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;