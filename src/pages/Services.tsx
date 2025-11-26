import React from 'react';
import { TrendingUp, BookOpen, ExternalLink, Zap, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <>
      {/* 1. WELCOME SECTION */}
      <div className="pt-32 pb-20 bg-dark-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-6">
            START HERE
          </div>
          <h1 className="text-4xl font-bold mb-6">A Big Welcome to New Traders!</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            This video is essential for understanding the first step in learning about trading.
          </p>

          {/* Main Intro Video */}
          <div className="glass-panel p-2 rounded-3xl relative aspect-video overflow-hidden max-w-4xl mx-auto shadow-2xl border border-white/10">
            <video 
              controls 
              className="w-full h-full object-cover rounded-2xl"
              poster="https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1600"
            >
              <source src="/uploads/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                <span className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm">
                  How to Use Trading Signals
                </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE SERVICES */}
      <div className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Core Services</h2>
            <p className="text-gray-500 mt-2">Professional tools for consistent profitability.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Guides */}
            <div className="glass-panel p-8 rounded-3xl border-t-4 border-purple-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Trading Guides</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Professional traders follow structured trading guides that focus on risk management, strategy, and consistency. Instead of chasing profits blindly, traders operate with a defined risk profile.
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>Build discipline</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>Protect your capital</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>Achieve long-term growth</li>
              </ul>
            </div>

            {/* Signals */}
            <div className="glass-panel p-8 rounded-3xl border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp size={100} />
              </div>
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Zap className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Premium Signals</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                Our trading signals are designed to give you clarity and market advantage through strong technical analysis. Each signal includes clear entry points, stop-loss, and take-profit targets.
              </p>
              <div className="bg-dark-950/50 p-4 rounded-xl mb-6 relative z-10 border border-white/5">
                <p className="text-xs font-mono text-secondary mb-1">AUD/USD • BUY NOW</p>
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Entry: 0.6540</span>
                    <span>TP: 0.6590</span>
                </div>
              </div>
              <a href="https://t.me/+SdoT8IlB2342OGVk" target="_blank" rel="noreferrer" className="w-full block text-center py-3 bg-secondary rounded-xl font-bold text-white hover:bg-blue-600 transition-colors relative z-10">
                Join Signal Channel
              </a>
            </div>

            {/* Education */}
            <div className="glass-panel p-8 rounded-3xl border-t-4 border-green-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                <BarChart2 className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Take your trading knowledge to the next level through structured courses and mentorship. We cover chart analysis, trading psychology, and smart strategy creation.
              </p>
              <div className="mt-auto">
                <Link to="/ebook" className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                    <span className="font-semibold text-sm">Join Masterclass</span>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. HOW TO GET STARTED (VIDEO STEPS) */}
      <div className="py-24 bg-dark-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How To Get Started</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Step 1: Deposit */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-block px-4 py-1 bg-secondary text-white font-bold rounded-full mb-4">Step 1</div>
                    <h3 className="text-2xl font-bold mb-4">Deposit Funds</h3>
                    <p className="text-gray-400 mb-6">
                        Learn how to securely fund your trading account to start taking positions in the market.
                    </p>
                    <a href="#" className="text-secondary font-bold hover:underline flex items-center gap-2">
                        Join Deposit Channel <ExternalLink size={16} />
                    </a>
                </div>
                <div className="glass-panel p-2 rounded-2xl aspect-video relative flex items-center justify-center bg-dark-900 overflow-hidden border border-white/5">
                    <video 
                      controls 
                      className="w-full h-full object-cover rounded-xl"
                      poster="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800"
                    >
                      <source src="/uploads/deposit.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Step 2: Trade */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 glass-panel p-2 rounded-2xl aspect-video relative flex items-center justify-center bg-dark-900 overflow-hidden border border-white/5">
                    <video 
                      controls 
                      className="w-full h-full object-cover rounded-xl"
                      poster="https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=800"
                    >
                      <source src="/uploads/trading.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </div>
                <div className="order-1 md:order-2">
                    <div className="inline-block px-4 py-1 bg-purple-500 text-white font-bold rounded-full mb-4">Step 2</div>
                    <h3 className="text-2xl font-bold mb-4">Start Trading</h3>
                    <p className="text-gray-400 mb-6">
                        Understand how to place trades, set stop losses, and take profits using our platform recommendations.
                    </p>
                    <a href="#" className="text-purple-400 font-bold hover:underline flex items-center gap-2">
                        Join Trading Guide Channel <ExternalLink size={16} />
                    </a>
                </div>
            </div>

            {/* Step 3: Withdraw */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-block px-4 py-1 bg-green-500 text-white font-bold rounded-full mb-4">Step 3</div>
                    <h3 className="text-2xl font-bold mb-4">Withdraw Profits</h3>
                    <p className="text-gray-400 mb-6">
                        Enjoy the fruits of your labor. We guide you on the fastest ways to withdraw your earnings to your bank or wallet.
                    </p>
                    <a href="#" className="text-green-400 font-bold hover:underline flex items-center gap-2">
                        Join Withdrawal Guide Channel <ExternalLink size={16} />
                    </a>
                </div>
                <div className="glass-panel p-2 rounded-2xl aspect-video relative flex items-center justify-center bg-dark-900 overflow-hidden border border-white/5">
                    <video 
                      controls 
                      className="w-full h-full object-cover rounded-xl"
                      poster="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800"
                    >
                      <source src="/uploads/withdrawal.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SIMPLEST STRATEGY */}
      <div className="py-24 bg-gradient-to-br from-dark-900 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Zap className="w-8 h-8 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Simplest & Fastest Trading Strategy</h2>
            
            <div className="glass-panel p-8 md:p-12 rounded-3xl text-left border border-white/10">
                <div className="space-y-6">
                    {[
                        "Use candle chart and 1-minute timeframe",
                        "Apply Moving Average (SMA) period 8",
                        "For uptrend: wait for reversal + color change + 2 white candles",
                        "For downtrend: wait for reversal confirmation",
                        "Trades close automatically after 1 minute"
                    ].map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-dark-900/50 rounded-xl border border-white/5">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                                {idx + 1}
                            </div>
                            <span className="text-lg text-gray-200 pt-0.5">{step}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Services;
