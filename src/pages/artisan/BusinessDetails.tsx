import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Building, Briefcase, MapPin, Save } from 'lucide-react';
import { mockArtisans } from '../../data/mockData';
import { useScreenInit } from '../../useScreenInit';
export function BusinessDetails() {
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
        <h1 className="text-xl font-bold text-text">Business Details</h1>
      </div>

      <form
        onSubmit={handleSave}
        className="flex-1 overflow-y-auto p-6 space-y-5">
        
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            Business Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Building size={20} className="text-slate-400" />
            </div>
            <input
              type="text"
              defaultValue="Okafor Plumbing Services"
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" />
            
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            Primary Category
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Briefcase size={20} className="text-slate-400" />
            </div>
            <input
              type="text"
              defaultValue={artisan.category}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" />
            
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            Service Area
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin size={20} className="text-slate-400" />
            </div>
            <input
              type="text"
              defaultValue="Lekki, Lagos"
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" />
            
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            About Your Business
          </label>
          <textarea
            rows={4}
            defaultValue={artisan.bio}
            className="w-full px-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm resize-none" />
          
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          
          <Save size={20} /> Save Changes
        </button>
      </form>
    </div>);

}