import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../lib/storage';
import { Lock, ShieldCheck, AlertCircle } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (db.checkPassword(password)) {
      db.login();
      navigate('/myadmin/dashboard');
    } else {
      setError('Incorrect password');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]"></div>
      </div>

      <div className={`max-w-sm w-full glass-panel p-8 rounded-3xl border-t border-white/10 shadow-2xl relative z-10 ${shake ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-dark-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/5 shadow-inner">
            <ShieldCheck className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold text-white">Admin Portal</h2>
          <p className="text-gray-500 text-sm mt-1">Secure Access Required</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-white transition-colors" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-input pl-10 bg-dark-900/80"
                placeholder="Enter admin key"
                required
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <AlertCircle size={14} />
              {error}
            </div>
          )}

          <button type="submit" className="w-full bg-white text-dark-950 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors mt-2">
            Authenticate
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-gray-600 font-mono">System ID: MGT-{Math.floor(Math.random() * 10000)}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;