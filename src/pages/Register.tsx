import React, { FormEvent, useState } from 'react';
import { UserPlus, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';

const Register: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      alert('Registration successful! Welcome to MegaTrade.');
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-md w-full glass-panel p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-blue-600"></div>
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
            <UserPlus className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400 text-sm">Join the world's fastest growing trading platform</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="relative group">
              <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
              <input type="text" className="glass-input pl-10" placeholder="First Name" required />
            </div>
            <div className="relative group">
              <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
              <input type="text" className="glass-input pl-10" placeholder="Last Name" required />
            </div>
          </div>

          <div className="relative group">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
            <input type="email" className="glass-input pl-10" placeholder="Email Address" required />
          </div>

          <div className="relative group">
            <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
            <input type="tel" className="glass-input pl-10" placeholder="Phone Number" />
          </div>

          <div className="relative group">
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
            <input type="password" className="glass-input pl-10" placeholder="Password" required />
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={submitted}
              className="w-full bg-gradient-to-r from-secondary to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 flex items-center justify-center"
            >
              {submitted ? 'Creating Account...' : (
                <>
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-6">
            By registering, you agree to our <a href="#" className="text-secondary hover:underline">Terms of Service</a> and <a href="#" className="text-secondary hover:underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;