import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react';
import { useScreenInit } from '../useScreenInit';
export function Login() {
  useScreenInit();
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };
  return (
    <div className="h-full w-full bg-surface flex flex-col px-6 pt-8 pb-8 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text mb-2">Welcome back</h1>
        <p className="text-text-muted">Log in to find trusted artisans.</p>
      </div>

      <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
        <button
          onClick={() => setLoginMethod('email')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${loginMethod === 'email' ? 'bg-white text-text shadow-sm' : 'text-text-muted'}`}>
          
          Email
        </button>
        <button
          onClick={() => setLoginMethod('phone')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${loginMethod === 'phone' ? 'bg-white text-text shadow-sm' : 'text-text-muted'}`}>
          
          Phone Number
        </button>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col gap-5 mb-8">
        {loginMethod === 'email' ?
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
              placeholder="Enter your email"
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              required />
            
            </div>
          </div> :

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
        }

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
              placeholder="Enter your password"
              className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              required />
            
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-text">
              
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="flex justify-end mt-2">
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline">
              
              Forgot password?
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md active:scale-[0.98] transition-transform mt-2">
          
          Login
        </button>
      </form>

      <div className="relative flex items-center justify-center mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative bg-surface px-4 text-sm text-text-muted">
          Or continue with
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3.5 border border-border rounded-xl hover:bg-slate-50 transition-colors font-medium text-text">
          
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            
          </svg>
          Google
        </button>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3.5 border border-border rounded-xl hover:bg-slate-50 transition-colors font-medium text-text">
          
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.56.04 2.87.74 3.62 1.9-3.22 1.96-2.64 6.78.61 8.16-.71 1.73-1.68 3.4-2.9 4.87zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
          Apple
        </button>
      </div>

      <p className="text-center text-text-muted mt-auto">
        Don't have an account?{' '}
        <Link
          to="/register"
          className="text-primary font-semibold hover:underline">
          
          Register
        </Link>
      </p>

      <div className="mt-6 text-center">
        <Link
          to="/pro/register"
          className="text-xs text-text-muted font-medium hover:text-primary transition-colors">
          
          Are you a professional?{' '}
          <span className="underline">Become an Artisan</span>
        </Link>
      </div>
    </div>);

}