import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, MapPin, Eye, EyeOff } from 'lucide-react';
import { useScreenInit } from '../useScreenInit';
export function Register() {
  useScreenInit();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [enableGps, setEnableGps] = useState(true);
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };
  return (
    <div className="h-full w-full bg-surface flex flex-col px-6 pt-8 pb-8 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text mb-2">Create Account</h1>
        <p className="text-text-muted">
          Join Werkorah to find trusted artisans.
        </p>
      </div>

      <form onSubmit={handleRegister} className="flex flex-col gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User size={20} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              required />
            
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail size={20} className="text-slate-400" />
            </div>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              required />
            
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone size={20} className="text-slate-400" />
            </div>
            <input
              type="tel"
              placeholder="+234 800 000 0000"
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              required />
            
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock size={20} className="text-slate-400" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              required />
            
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-text">
              
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="bg-slate-50 border border-border rounded-xl p-4 mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-text">Enable Location</p>
              <p className="text-xs text-text-muted">To find nearby artisans</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setEnableGps(!enableGps)}
            className={`w-12 h-6 rounded-full transition-colors relative ${enableGps ? 'bg-primary' : 'bg-slate-300'}`}>
            
            <div
              className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${enableGps ? 'translate-x-6' : 'translate-x-0.5'}`} />
            
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md active:scale-[0.98] transition-transform mt-4">
          
          Create Account
        </button>
      </form>

      <p className="text-center text-text-muted mt-auto">
        Already have an account?{' '}
        <Link
          to="/login"
          className="text-primary font-semibold hover:underline">
          
          Login
        </Link>
      </p>
    </div>);

}