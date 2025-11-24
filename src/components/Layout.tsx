import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Send, Youtube } from 'lucide-react';

// Custom Logo Component (Pure SVG based on user reference)
const MegaTradeLogo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="mGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#4da3ff" />
      </linearGradient>
    </defs>

    {/* Left Candle (White) */}
    <rect x="10" y="30" width="16" height="40" rx="2" fill="white" />
    <line x1="18" y1="15" x2="18" y2="85" stroke="white" strokeWidth="3" />

    {/* Second Candle (Light Blue - matches screenshot blue) */}
    <rect x="35" y="22" width="16" height="56" rx="2" fill="#4da3ff" />
    <line x1="43" y1="10" x2="43" y2="90" stroke="#4da3ff" strokeWidth="3" />

    {/* M Shape (White → Blue Gradient) */}
    <path 
      d="M65 70 L85 30 L105 70 L105 40" 
      stroke="url(#mGradient)" 
      strokeWidth="12" 
      strokeLinecap="round" 
      fill="none" 
    />

    {/* Third Candle (Light Blue) */}
    <rect x="120" y="18" width="16" height="64" rx="2" fill="#4da3ff" />
    <line x1="128" y1="5" x2="128" y2="95" stroke="#4da3ff" strokeWidth="3" />
  </svg>
);

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

  // 2. SCROLL TO TOP ON ROUTE CHANGE
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); 
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path ? 'text-secondary font-medium' : 'text-gray-300 hover:text-white';

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-900/20 flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:shadow-blue-500/20 transition-all border border-white/5">
                <MegaTradeLogo className="h-8 w-8" />
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
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                    <MegaTradeLogo className="h-6 w-6" />
                </div>
                <span className="text-lg font-bold text-white">MEGA<span className="text-secondary">TRADE</span></span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
                Leading the way in institutional-grade forex trading services. Secure, fast, and reliable platform for traders worldwide.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all">
                    <Facebook size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                    <Instagram size={18} />
                </a>
                <a href="https://t.me/greatmega_eo" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                    <Send size={18} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
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
