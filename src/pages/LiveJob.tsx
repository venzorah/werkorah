import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  MessageSquare,
  Phone,
  Video,
  MapPin,
  ShieldCheck,
  CheckCircle2 } from
'lucide-react';
import { mockArtisans } from '../data/mockData';
import { useScreenInit } from '../useScreenInit';
export function LiveJob() {
  useScreenInit();
  const navigate = useNavigate();
  const artisan = mockArtisans[0]; // Demo with first artisan
  // Mocking status progression
  const [statusIndex, setStatusIndex] = useState(2); // 0: Pending, 1: Accepted, 2: En Route, 3: In Progress, 4: Completed
  const statuses = [
  'Pending',
  'Accepted',
  'En Route',
  'In Progress',
  'Completed'];

  return (
    <div className="h-full w-full bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-6 pb-4 border-b border-slate-100 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/home')}
              className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
              
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-lg font-bold text-text">Job Status</h1>
          </div>
          <div className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <ShieldCheck size={14} /> ESCROW
          </div>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl">
          <img
            src={artisan.photoUrl}
            alt={artisan.name}
            className="w-12 h-12 rounded-full object-cover" />
          
          <div className="flex-1">
            <h3 className="font-bold text-sm text-text">{artisan.name}</h3>
            <p className="text-xs text-text-muted">Pipe Installation</p>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-slate-100">
              <MessageSquare size={14} />
            </button>
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-slate-100">
              <Phone size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Map Placeholder for En Route */}
        {statusIndex === 2 &&
        <div className="w-full h-40 bg-slate-200 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-300">
            <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
              'radial-gradient(#94a3b8 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
          </div>

            {/* Route Line Mock */}
            <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none">
            
              <path
              d="M 50 120 Q 150 120 200 80 T 350 40"
              fill="none"
              stroke="#0F766E"
              strokeWidth="4"
              strokeDasharray="8 8"
              className="opacity-50" />
            
            </svg>

            <div className="absolute top-8 right-12 flex flex-col items-center">
              <div className="bg-white p-1 rounded-full shadow-md mb-1 relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=150&auto=format&fit=crop"
                className="w-8 h-8 rounded-full object-cover" />
              
              </div>
              <div className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full mt-1 font-medium shadow-sm">
                You
              </div>
            </div>

            <div className="absolute bottom-8 left-12 flex flex-col items-center">
              <div className="bg-white p-1 rounded-full shadow-md mb-1">
                <img
                src={artisan.photoUrl}
                className="w-8 h-8 rounded-full object-cover" />
              
              </div>
              <div className="bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded-full mt-1 font-medium shadow-sm flex items-center gap-1">
                <MapPin size={10} /> 12 mins away
              </div>
            </div>
          </div>
        }

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h3 className="font-bold text-base text-text mb-6">Timeline</h3>

          <div className="relative pl-4 space-y-6">
            {/* Vertical Line */}
            <div className="absolute left-[23px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
            <div
              className="absolute left-[23px] top-2 w-0.5 bg-primary transition-all duration-500"
              style={{
                height: `${statusIndex / (statuses.length - 1) * 100}%`
              }}>
            </div>

            {statuses.map((status, idx) => {
              const isCompleted = idx < statusIndex;
              const isCurrent = idx === statusIndex;
              return (
                <div key={status} className="relative flex items-start gap-4">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center relative z-10 flex-shrink-0 transition-colors ${isCompleted ? 'bg-primary text-white' : isCurrent ? 'bg-white border-2 border-primary text-primary' : 'bg-slate-100 text-slate-400'}`}>
                    
                    {isCompleted ?
                    <CheckCircle2 size={14} /> :

                    <div
                      className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-primary' : 'bg-transparent'}`} />

                    }
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-bold ${isCompleted || isCurrent ? 'text-text' : 'text-text-muted'}`}>
                      
                      {status}
                    </h4>
                    {isCurrent &&
                    <p className="text-xs text-text-muted mt-1">
                        {idx === 2 ?
                      'Artisan is on the way to your location.' :
                      idx === 3 ?
                      'Work is currently ongoing.' :
                      ''}
                      </p>
                    }
                  </div>
                </div>);

            })}
          </div>
        </div>

        {/* Action Buttons for Demo */}
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => setStatusIndex(Math.max(0, statusIndex - 1))}
            className="text-xs text-slate-400 px-3 py-1 border rounded">
            
            Prev Step
          </button>
          <button
            onClick={() => setStatusIndex(Math.min(4, statusIndex + 1))}
            className="text-xs text-slate-400 px-3 py-1 border rounded">
            
            Next Step
          </button>
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-6 bg-white border-t border-slate-100">
        {statusIndex === 4 ?
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          
            <ShieldCheck size={20} /> Release Payment
          </button> :

        <div className="text-center">
            <p className="text-xs text-text-muted mb-3 flex items-center justify-center gap-1">
              <ShieldCheck size={14} className="text-primary" /> Funds are
              secure in escrow
            </p>
            <button className="w-full py-3.5 bg-slate-100 text-slate-400 font-semibold rounded-xl cursor-not-allowed">
              Release Payment
            </button>
          </div>
        }
      </div>
    </div>);

}