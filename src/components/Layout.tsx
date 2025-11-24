
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu, X, Facebook, Instagram, Send, Youtube } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 1. Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. SCROLL TO TOP ON ROUTE CHANGE (Fixes the issue where links stay at bottom)
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Automatically close mobile menu when a link is clicked
  }, [location.pathname]);

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
            
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
                <Link to="/" className={`transition-colors duration-200 text-sm uppercase tracking-wider ${isActive('/')}`}>Home</Link>
                <Link to="/services" className={`transition-colors duration-200 text-sm uppercase tracking-wider ${isActive('/services')}`}>Services</Link>
                <Link to="/ebook" className={`transition-colors duration-200 text-sm uppercase tracking-wider ${isActive('/ebook')}`}>eBook</Link>
                <Link to="/gallery" className={`transition-colors duration-200 text-sm uppercase tracking-wider ${isActive('/gallery')}`}>Gallery</Link>
                <Link to="/about" className={`transition-colors duration-200 text-sm uppercase tracking-wider ${isActive('/about')}`}>About</Link>
                <Link to="/contact" className={`transition-colors duration-200 text-sm uppercase tracking-wider ${isActive('/contact')}`}>Contact</Link>
                <Link to="/register" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-secondary to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5">
                  Join Now
                </Link>
              </div>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 rounded-lg hover:bg-white/5">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden absolute w-full bg-dark-900/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[600px] shadow-2xl' : 'max-h-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/5">Home</Link>
            <Link to="/services" className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/5">Services</Link>
            <Link to="/ebook" className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/5">eBook</Link>
            <Link to="/gallery" className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/5">Gallery</Link>
            <Link to="/about" className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/5">About</Link>
            <Link to="/contact" className="block px-3 py-3 rounded-lg text-base font-medium text-white hover:bg-white/5">Contact</Link>
            <Link to="/register" className="block px-3 py-3 rounded-lg text-base font-medium text-secondary bg-blue-500/10 mt-4">Join Now</Link>
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
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
                Leading the way in institutional-grade forex trading services. Secure, fast, and reliable platform for traders worldwide.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1BMvvAmsNt/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all">
                    <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/greatmega1?igsh=NWIwdXA0c3k4dmdi&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                    <Instagram size={18} />
                </a>
                <a href="https://t.me/greatmega_eo" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                    <Send size={18} />
                </a>
                <a href="https://youtube.com/@greatmega1?si=mAI6_sSSw57tH8wO" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                    <Youtube size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
                <li><Link to="/ebook" className="hover:text-secondary transition-colors">Get eBook</Link></li>
                <li><Link to="/gallery" className="hover:text-secondary transition-colors">Analysis Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8">
            <div className="grid md:grid-cols-2 gap-8 text-xs text-gray-600 mb-8">
                <div>
                    <h4 className="text-gray-500 font-bold mb-2">Disclaimer</h4>
                    <p className="leading-relaxed">
                        Trading forex and CFDs involves significant risk and can result in the loss of your invested capital. 
                        You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. 
                        Past performance is not a guarantee of future results.
                    </p>
                </div>
                <div>
                    <h4 className="text-gray-500 font-bold mb-2">Refund Policy</h4>
                    <p className="leading-relaxed">
                        All payments made for services, signals, or digital products (eBooks) are final and non-refundable. 
                        By subscribing or purchasing, you acknowledge and agree to these terms. If you have any issues, please contact support.
                    </p>
                </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 text-xs">
                &copy; {new Date().getFullYear()} MegaTrades. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
