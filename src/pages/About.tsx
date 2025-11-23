import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, BookOpen, Users, Mail, Play, BarChart2, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Office Team Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-secondary">MegaTrades</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            MegaTrades is a professional trading brand built on <span className="text-white font-bold">transparency</span>, <span className="text-white font-bold">discipline</span>, and <span className="text-white font-bold">consistent growth</span>.
          </p>
          
          <div className="glass-panel p-8 rounded-3xl max-w-4xl mx-auto text-left">
            <p className="text-gray-400 leading-relaxed mb-6">
              We are focused on helping traders understand the market, manage risk properly, and build steady success over time.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our team is made up of experienced traders who use tested strategies and strict risk control systems to help clients trade with confidence and clarity.
            </p>
          </div>
        </div>
      </div>

      {/* 2. WHY TRADE WITH US */}
      <div className="py-20 bg-dark-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-8">Why Trade With Us</h2>
              <div className="space-y-6">
                {[
                  "Experienced trading team with real, proven market results",
                  "Strong risk management tailored to different trading goals",
                  "Fast withdrawals with clear, transparent performance reports",
                  "Daily premium trading signals delivered through Telegram",
                  "Free and premium access to exclusive trading eBooks"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <span className="text-lg text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass-panel p-2 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/10 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                  alt="Trading Analysis" 
                  className="w-full h-full object-cover rounded-2xl relative z-10" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. WHAT WE OFFER */}
      <div className="py-24 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide complete tools and resources for traders at every level — from beginners to advanced professionals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Video Placeholder */}
            <div className="glass-panel p-2 rounded-3xl relative aspect-video group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-all z-10">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform">
                        <Play fill="white" className="w-6 h-6 text-white" />
                    </div>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1600&auto=format&fit=crop" 
                    alt="Services Video" 
                    className="w-full h-full object-cover rounded-2xl opacity-60" 
                />
            </div>

            <div className="grid gap-6">
                {[
                    { icon: Target, title: "Customized Guides", desc: "Trading guides customized to your risk level" },
                    { icon: BarChart2, title: "High-Accuracy Signals", desc: "Clear entries, stop-loss and targets" },
                    { icon: BookOpen, title: "Education", desc: "eBooks, courses, and strategy systems" },
                    { icon: Shield, title: "Mindset Coaching", desc: "Help you trade with discipline and control" }
                ].map((service, idx) => (
                    <div key={idx} className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                            <service.icon size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">{service.title}</h4>
                            <p className="text-sm text-gray-400">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 4. OUR MISSION */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
                <Users className="text-gray-300" />
            </div>
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <div className="glass-panel p-10 rounded-3xl border-t-4 border-secondary">
                <p className="text-xl text-white font-medium mb-8">
                    "To empower traders with real knowledge, practical tools, and long-term support."
                </p>
                <div className="space-y-4 text-gray-400">
                    <p>We don’t believe in hype, shortcuts, or fake promises.</p>
                    <p>We believe in <span className="text-secondary">clarity</span>, <span className="text-secondary">discipline</span>, and <span className="text-secondary">consistent progress</span>.</p>
                    <p className="pt-4 border-t border-white/5 mt-6">
                        Whether you’re just starting your trading journey or scaling to the next level, MegaTrades is here to guide you every step of the way.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* 5. CONTACT & CTA */}
      <div className="py-20 bg-dark-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
                <a href="mailto:info@megatrades.net" className="glass-panel px-8 py-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-all group">
                    <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                        <Mail />
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Email Support</p>
                        <p className="text-lg font-bold text-white">info@megatrades.net</p>
                    </div>
                </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/register" className="px-8 py-4 bg-white text-dark-950 font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                    <BookOpen size={20} /> Get a Trading eBook
                </Link>
                <Link to="/register" className="px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                    <Users size={20} /> Join Masterclass
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
