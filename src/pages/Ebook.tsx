import React, { useState } from 'react';
import { BookOpen, Check, Shield, Lock, CreditCard } from 'lucide-react';

declare global {
  interface Window {
    Korapay: any;
  }
}

const Ebook: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptedTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    if (!window.Korapay) {
      alert("Payment service is initializing. Please try again in a moment.");
      return;
    }

    setLoading(true);

    try {
      window.Korapay.initialize({
        key: 'pk_live_yRJ1XJDqp6P6YjrjY9fargo1LiHgQJrefZ',
        amount: 55000,
        currency: 'NGN',
        reference: 'DenicFX-' + Date.now(),
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone_number: formData.phone
        },
        onClose: () => {
          setLoading(false);
          alert('Payment cancelled.');
        },
        onSuccess: () => {
          setLoading(false);
          window.location.href = 'https://t.me/+SdoT8IlB2342OGVk';
        }
      });
    } catch (error) {
      console.error("Payment Error:", error);
      setLoading(false);
      alert("An error occurred initializing payment. Please check your connection.");
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className="pt-32 pb-16 bg-dark-950 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          My New Trading Journal eBook Is Finally Here 📘🔥
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          MegaTrades Personal Trading eBook
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        {/* INFO SECTION */}
        <div className="glass-panel p-8 rounded-3xl mb-12">
          <p className="text-gray-300 leading-relaxed mb-8 text-lg">
            This personal trading eBook is more than just a journal — it’s a complete learning guide designed to help you grow faster and trade smarter. It teaches you how to think like a trader, act with discipline, and make calculated decisions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-dark-900 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-white">What You Will Learn</h3>
              <ul className="space-y-3">
                {[
                  "How to analyze the market like a professional",
                  "Understand chart patterns & price movements",
                  "Control emotions & manage risk",
                  "Smart strategies for consistency"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check className="text-green-500 w-5 h-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-900 rounded-2xl overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=800&auto=format&fit=crop" 
                 className="w-full h-full object-cover opacity-50" 
                 alt="Preview" 
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <BookOpen className="text-white" />
                 </div>
               </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 bg-secondary/10 p-6 rounded-xl border border-secondary/20">
             <Shield className="text-secondary w-8 h-8" />
             <div className="text-center md:text-left">
                <p className="text-white font-bold">Trading involves risk.</p>
                <p className="text-sm text-gray-400">Knowledge, structure, and discipline give you the edge.</p>
             </div>
          </div>
        </div>

        {/* PRICING & FORM */}
        <div className="grid md:grid-cols-2 gap-8">
           {/* PRICING CARD */}
           <div className="glass-panel p-8 rounded-3xl h-fit border-t-4 border-secondary sticky top-24">
              <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-4">Pricing</h3>
              <div className="flex items-end gap-2 mb-2">
                 <span className="text-4xl font-bold text-white">₦55,000</span>
                 <span className="text-lg text-gray-500 line-through mb-1">₦120,000</span>
              </div>
              <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded mb-6">
                 LIMITED TIME DISCOUNT
              </div>
              <div className="space-y-4 pt-6 border-t border-white/10">
                 <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-secondary" /> Lifetime Access
                 </div>
                 <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-secondary" /> Free Updates
                 </div>
                 <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-secondary" /> Private Community Access
                 </div>
              </div>
           </div>

           {/* PAYMENT FORM */}
           <div className="glass-panel p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-dark-800 rounded-lg">
                    <CreditCard className="text-white" />
                 </div>
                 <h3 className="text-xl font-bold">Secure Checkout</h3>
              </div>

              <form onSubmit={handlePayment} className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <label className="text-xs text-gray-500 font-bold ml-1 mb-1 block">First Name</label>
                       <input 
                         type="text" 
                         name="firstName"
                         value={formData.firstName}
                         onChange={handleChange}
                         required
                         className="glass-input" 
                         placeholder="John"
                       />
                    </div>
                    <div>
                       <label className="text-xs text-gray-500 font-bold ml-1 mb-1 block">Last Name</label>
                       <input 
                         type="text" 
                         name="lastName"
                         value={formData.lastName}
                         onChange={handleChange}
                         required
                         className="glass-input" 
                         placeholder="Doe"
                       />
                    </div>
                 </div>
                 
                 <div>
                    <label className="text-xs text-gray-500 font-bold ml-1 mb-1 block">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass-input" 
                      placeholder="john@example.com"
                    />
                 </div>

                 <div>
                    <label className="text-xs text-gray-500 font-bold ml-1 mb-1 block">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="glass-input" 
                      placeholder="+234..."
                    />
                 </div>

                 <div className="pt-4 pb-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                       <input 
                         type="checkbox" 
                         checked={acceptedTerms}
                         onChange={(e) => setAcceptedTerms(e.target.checked)}
                         className="mt-1 accent-secondary" 
                       />
                       <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                          I accept the terms. I understand that all payments are final and <span className="text-red-400 font-bold">non-refundable</span>.
                       </span>
                    </label>
                 </div>

                 <button 
                   type="submit" 
                   disabled={loading}
                   className="w-full py-4 bg-gradient-to-r from-secondary to-blue-600 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                    {loading ? 'Processing...' : (
                        <>
                            Pay ₦55,000 <Lock size={16} />
                        </>
                    )}
                 </button>

                 <p className="text-center text-[10px] text-gray-600 mt-4">
                    Secured by KoraPay. 256-bit SSL Encryption.
                 </p>
              </form>
           </div>
        </div>
      </div>
    </>
  );
};

export default Ebook;
