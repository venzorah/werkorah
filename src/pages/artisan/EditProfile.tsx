import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, Camera, Save } from 'lucide-react';
import { mockArtisans } from '../../data/mockData';
import { useScreenInit } from '../../useScreenInit';
export function EditProfile() {
  useScreenInit();
  const navigate = useNavigate();
  const artisan = mockArtisans[0];
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pro/profile');
  };
  return (
    <div className="h-full w-full bg-surface flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center gap-4 bg-white z-10">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
          
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-text">Edit Profile</h1>
      </div>

      <form
        onSubmit={handleSave}
        className="flex-1 overflow-y-auto p-6 space-y-5">
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full p-1 border-2 border-primary/20">
              <img
                src={artisan.photoUrl}
                alt={artisan.name}
                className="w-full h-full rounded-full object-cover" />
              
            </div>
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full border-2 border-white shadow-sm">
              
              <Camera size={14} />
            </button>
          </div>
        </div>

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
              defaultValue={artisan.name}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" />
            
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail size={20} className="text-slate-400" />
            </div>
            <input
              type="email"
              defaultValue="chinedu.okafor@example.com"
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" />
            
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
              defaultValue="+234 803 123 4567"
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" />
            
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          
          <Save size={20} /> Save Profile
        </button>
      </form>
    </div>);

}