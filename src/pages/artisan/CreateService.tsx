import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { mockArtisans } from '../../data/mockData';
import { useScreenInit } from '../../useScreenInit';
export function CreateService() {
  useScreenInit();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get('id');
  const existing = editId ?
  mockArtisans[0].services.find((s) => s.id === editId) :
  undefined;
  const isEditing = Boolean(existing);
  const [type, setType] = useState<'fixed' | 'hourly' | 'quote'>(
    existing?.type || 'fixed'
  );
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pro/services');
  };
  return (
    <div className="h-full w-full bg-surface flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center gap-4 bg-white z-10">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
          
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-text">
          {isEditing ? 'Edit Service' : 'Add Service'}
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <form onSubmit={handleSave} className="space-y-6">
          {/* Service Type Segmented Control */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Pricing Type
            </label>
            <div className="flex p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setType('fixed')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${type === 'fixed' ? 'bg-white text-blue-600 shadow-sm' : 'text-text-muted'}`}>
                
                Fixed Price
              </button>
              <button
                type="button"
                onClick={() => setType('hourly')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${type === 'hourly' ? 'bg-white text-purple-600 shadow-sm' : 'text-text-muted'}`}>
                
                Hourly Rate
              </button>
              <button
                type="button"
                onClick={() => setType('quote')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${type === 'quote' ? 'bg-white text-amber-600 shadow-sm' : 'text-text-muted'}`}>
                
                Quote Based
              </button>
            </div>
          </div>

          {/* Common Fields */}
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">
              Service Name
            </label>
            <input
              type="text"
              defaultValue={existing?.name || ''}
              placeholder="e.g. Full House Wiring"
              className="w-full px-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
              required />
            
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-1.5">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Describe what is included in this service..."
              className="w-full px-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm resize-none"
              required>
            </textarea>
          </div>

          {/* Type Specific Fields */}
          {type === 'fixed' &&
          <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Fixed Price (₦)
                </label>
                <input
                type="number"
                defaultValue={
                existing?.type === 'fixed' ? existing?.price : ''
                }
                placeholder="25000"
                className="w-full px-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                required />
              
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Est. Duration
                </label>
                <input
                type="text"
                defaultValue={existing?.duration || ''}
                placeholder="e.g. 2 Days"
                className="w-full px-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                required />
              
              </div>
            </div>
          }

          {type === 'hourly' &&
          <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Hourly Rate (₦)
                </label>
                <input
                type="number"
                defaultValue={
                existing?.type === 'hourly' ? existing?.price : ''
                }
                placeholder="5000"
                className="w-full px-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                required />
              
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Min. Hours
                </label>
                <input
                type="number"
                placeholder="2"
                className="w-full px-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                required />
              
              </div>
            </div>
          }

          {type === 'quote' &&
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-800">
              Customers will describe their project and request a custom quote
              from you. You can negotiate the final price in the chat.
            </div>
          }

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
              
              <Save size={20} /> {isEditing ? 'Update Service' : 'Save Service'}
            </button>
          </div>
        </form>
      </div>
    </div>);

}