import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Settings,
  LogOut,
  ArrowRightLeft,
  Heart,
  Bell,
  Star,
  ChevronRight,
  HelpCircle,
  ShieldCheck } from
'lucide-react';
import { useScreenInit } from '../useScreenInit';
export function Profile() {
  useScreenInit();
  const navigate = useNavigate();
  return (
    <div className="h-full w-full bg-background flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 bg-white z-10 flex justify-between items-center">
        <h1 className="text-xl font-bold text-text">Profile</h1>
        <button className="p-2 text-slate-400 hover:text-primary transition-colors bg-slate-50 rounded-lg">
          <Settings size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4 relative">
          <button className="absolute top-4 right-4 text-primary text-xs font-bold">
            Edit
          </button>
          <div className="w-20 h-20 rounded-full p-1 border-2 border-primary/20">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=150&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full rounded-full object-cover" />
            
          </div>
          <div>
            <h2 className="text-xl font-bold text-text">Adaeze Nwosu</h2>
            <p className="text-sm text-text-muted">adaeze.n@example.com</p>
            <p className="text-xs text-text-muted mt-0.5">Lagos, Nigeria</p>
          </div>
        </div>

        {/* Switch to Artisan Mode — prominent action */}
        <button
          onClick={() => navigate('/pro/dashboard')}
          className="w-full bg-primary text-white p-4 rounded-2xl flex items-center justify-between shadow-md hover:bg-primary-dark transition-colors active:scale-[0.98]">
          
          <div className="flex items-center gap-3 text-left">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <ArrowRightLeft size={22} />
            </div>
            <div>
              <div className="font-bold text-sm flex items-center gap-1.5">
                Switch to Artisan Mode <ShieldCheck size={14} />
              </div>
              <div className="text-xs text-primary-light">
                Offer your services & earn on Werkorah
              </div>
            </div>
          </div>
          <ChevronRight size={20} className="text-white/80" />
        </button>

        {/* Account Menu */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {[
          {
            icon: Heart,
            label: 'Saved Artisans',
            onClick: () => navigate('/search')
          },
          {
            icon: Star,
            label: 'My Reviews',
            onClick: () => navigate('/dashboard')
          },
          {
            icon: Bell,
            label: 'Notifications',
            onClick: () => {}
          },
          {
            icon: HelpCircle,
            label: 'Help & Support',
            onClick: () => {}
          }].
          map((item, idx, arr) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left ${idx !== arr.length - 1 ? 'border-b border-slate-100' : ''}`}>
                
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                    <Icon size={18} />
                  </div>
                  <span className="font-semibold text-sm text-text">
                    {item.label}
                  </span>
                </div>
                <ChevronRight size={18} className="text-slate-300" />
              </button>);

          })}
        </div>

        {/* Log Out */}
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-white border border-slate-100 shadow-sm p-4 rounded-2xl flex items-center gap-3 hover:bg-red-50 transition-colors text-red-500">
          
          <LogOut size={18} />
          <span className="font-semibold text-sm">Log Out</span>
        </button>
      </div>
    </div>);

}