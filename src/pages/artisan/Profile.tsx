import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Star,
  Briefcase,
  Settings,
  LogOut,
  ExternalLink,
  UserCog,
  Building,
  History,
  HelpCircle,
  ChevronRight } from
'lucide-react';
import { mockArtisans } from '../../data/mockData';
import { useScreenInit } from '../../useScreenInit';
export function ArtisanProfile() {
  useScreenInit();
  const navigate = useNavigate();
  const artisan = mockArtisans[0];
  const menuItems = [
  {
    icon: UserCog,
    label: 'Edit Profile',
    path: '/pro/edit-profile'
  },
  {
    icon: Building,
    label: 'Business Details',
    path: '/pro/business'
  },
  {
    icon: History,
    label: 'Job Activity',
    path: '/pro/history'
  },
  {
    icon: HelpCircle,
    label: 'Help & Support',
    path: '/pro/support'
  }];

  return (
    <div className="h-full w-full bg-background flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 bg-white z-10 flex justify-between items-center">
        <h1 className="text-xl font-bold text-text">Profile</h1>
        <button
          onClick={() => navigate('/pro/edit-profile')}
          className="p-2 text-slate-400 hover:text-primary transition-colors bg-slate-50 rounded-lg">
          
          <Settings size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center relative">
          <button
            onClick={() => navigate('/pro/edit-profile')}
            className="absolute top-4 right-4 text-primary text-xs font-bold">
            
            Edit
          </button>

          <div className="w-24 h-24 mx-auto rounded-full p-1 border-2 border-primary/20 mb-3 relative">
            <img
              src={artisan.photoUrl}
              alt={artisan.name}
              className="w-full h-full rounded-full object-cover" />
            
            {artisan.verified &&
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full border-2 border-white">
                <ShieldCheck size={16} />
              </div>
            }
          </div>

          <h2 className="text-xl font-bold text-text">{artisan.name}</h2>
          <p className="text-sm text-text-muted mb-4">{artisan.category}</p>

          <div className="flex justify-center gap-6 border-t border-slate-100 pt-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-lg font-bold text-text">
                <Star size={16} className="text-accent fill-accent" />{' '}
                {artisan.rating}
              </div>
              <div className="text-xs text-text-muted">Rating</div>
            </div>
            <div className="w-px bg-slate-200"></div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-lg font-bold text-text">
                <Briefcase size={16} className="text-primary" />{' '}
                {artisan.jobsCompleted}
              </div>
              <div className="text-xs text-text-muted">Jobs</div>
            </div>
          </div>
        </div>

        {/* Switch View */}
        <button
          onClick={() => navigate('/home')}
          className="w-full bg-slate-800 text-white p-4 rounded-xl flex items-center justify-between hover:bg-slate-700 transition-colors">
          
          <div className="flex items-center gap-3 font-semibold text-sm">
            <ExternalLink size={18} /> Switch to Customer View
          </div>
        </button>

        {/* Menu */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left ${idx !== menuItems.length - 1 ? 'border-b border-slate-100' : ''}`}>
                
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