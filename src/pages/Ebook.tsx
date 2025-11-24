import React, { useState, useEffect } from 'react';
import { BookOpen, Check, Shield, CreditCard } from 'lucide-react';

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
  const [koraReady, setKoraReady] = useState(false);

  // ✅ Load KoraPay Script
  useEffect(() => {
    if (document.querySelector('#korapay-script')) return;

    const script = document.createElement('script');
    script.id = 'korapay-script';
    script.src = 'https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js';
    script.async = true;

    script.onload = () => setKoraReady(true);
    script.onerror = () => setKoraReady(false);

    document.body.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone) {
      alert('Please fill in all fields.');
      return;
    }

    if (!acceptedTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    if (!koraReady || typeof window === 'undefined' || !window.Korapay) {
      alert("Payment system not ready. Please refresh the page.");
      return;
    }

    setLoading(true);

    try {
      window.Korapay.initialize({
        key: 'pk_live_yRJ1XJDqp6P6YjrjY9fargo1LiHgQJrefZ',
        amount: 5500000, // ✅ ₦55,000 (kobo format)
        currency: 'NGN',
        reference: 'MegaTrades-' + Date.now(),
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone_number: formData.phone
        },

        onClose: () => {
          setLoading(false);
          alert('Payment window closed');
        },

        onSuccess: () => {
          setLoading(false);
          window.location.href = 'https://t.me/+SdoT8IlB2342OGVk';
        }
      });

    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Payment failed to initialize.");
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
            This personal trading eBook is more than just a journal — it’s a complete learning guide designed to help you grow faster and trade smarter.
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

        {/* PRICING + PAYMENT */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* PRICING */}
          <div className="glass-panel p-8 rounded-3xl h-fit border-t-4 border-secondary sticky top-24">
            <h3 className="text-lg font-bold text-gray-400 uppercase mb-4">Pricing</h3>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-4xl font-bold text-white">₦55,000</span>
              <span className="text-lg text-gray-500 line-through">₦120,000</span>
            </div>
            <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded mb-6">
              LIMITED TIME DISCOUNT
            </div>
          </div>

          {/* FORM */}
          <div className="glass-panel p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-dark-800 rounded-lg">
                <CreditCard className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Secure Checkout</h3>
            </div>

            <form onSubmit={handlePayment} className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="glass-input" required />
                <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="glass-input" required />
              </div>

              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="glass-input" required />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="glass-input" required />

              <label className="flex gap-3 text-xs text-gray-400">
                <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
                I accept the terms and understand payments are final.
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-secondary to-blue-600 rounded-xl font-bold text-white"
              >
                {loading ? 'Processing...' : 'Pay ₦55,000'}
              </button>

              <p className="text-center text-[10px] text-gray-600 mt-4">
                Secured by KoraPay • SSL Encryption
              </p>

            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Ebook;
