import React from 'react';
import { ArrowRight, BarChart2, Globe, Shield, Users, CheckCircle2, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                LIVE MARKET ACCESS
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                Trade with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-blue-400 to-purple-500">
                  Precision
                </span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                Experience institutional-grade execution, deep liquidity, and advanced analytics. Built for the modern trader.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="px-8 py-4 bg-secondary rounded-full text-white font-bold text-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center">
                  Start Trading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/gallery" className="px-8 py-4 glass-panel rounded-full text-white font-bold text-lg hover:bg-white/5 transition-all">
                  View Analysis
                </Link>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
                <div>
                  <h4 className="text-2xl font-bold text-white">0.0</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Pips Spread</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">0.1s</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Execution</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">24/7</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Support</p>
                </div>
              </div>
            </div>

            {/* Hero Image / Visual */}
            <div className="relative hidden lg:block">
              <div className="glass-panel p-4 rounded-2xl transform rotate-[-5deg] translate-x-4 z-10 animate-fade-in">
                 <div className="bg-dark-800 rounded-xl overflow-hidden aspect-[16/10] relative border border-white/5 shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900">
                        <div className="text-center">
                            <BarChart2 className="h-20 w-20 text-secondary mx-auto mb-4 opacity-80" />
                            <div className="flex gap-2">
                                <div className="w-20 h-2 bg-white/10 rounded-full"></div>
                                <div className="w-12 h-2 bg-secondary/50 rounded-full"></div>
                            </div>
                            <div className="mt-4 w-32 h-2 bg-white/5 rounded-full mx-auto"></div>
                        </div>
                    </div>
                    {/* Floating Badges */}
                    <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded border border-green-500/30">
                        +2.4%
                    </div>
                 </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 right-10 w-full h-full border border-white/5 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-dark-950 py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MegaTrade</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We provide the technology and support you need to succeed in the global markets.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="h-8 w-8" />, title: "Global Markets", desc: "Access 1000+ instruments across Forex, Indices, and Commodities." },
              { icon: <Shield className="h-8 w-8" />, title: "Secure Funds", desc: "Your funds are kept in segregated accounts with top-tier banks." },
              { icon: <Smartphone className="h-8 w-8" />, title: "Mobile Trading", desc: "Trade on the go with our award-winning mobile application." }
            ].map((feature, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-b from-dark-900 to-dark-800">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
            <p className="text-gray-400 mb-10">Join thousands of traders who have already chosen Great Mega Forex.</p>
            <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark-900 font-bold rounded-full hover:bg-gray-200 transition-colors">
                Open Free Account
            </Link>
         </div>
      </div>
    </>
  );
};

export default Home;