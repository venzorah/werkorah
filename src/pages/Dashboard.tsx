import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wallet,
  ChevronRight,
  Clock,
  CheckCircle2,
  ShieldCheck } from
'lucide-react';
import { mockArtisans } from '../data/mockData';
import { useScreenInit } from '../useScreenInit';
export function Dashboard() {
  useScreenInit();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');
  return (
    <div className="h-full w-full bg-background flex flex-col">
      <div className="bg-primary px-6 pt-8 pb-6 rounded-b-[32px] shadow-md z-10 text-white">
        <h1 className="text-2xl font-bold mb-6">My Dashboard</h1>

        {/* Wallet Summary Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/20 rounded-lg">
                <Wallet size={20} className="text-white" />
              </div>
              <span className="font-medium text-sm">Wallet Balance</span>
            </div>
            <button className="text-xs font-semibold bg-white text-primary px-3 py-1.5 rounded-full">
              Fund
            </button>
          </div>
          <div className="text-3xl font-bold">₦45,000</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex bg-slate-200/50 p-1 rounded-xl mb-6">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'active' ? 'bg-white text-text shadow-sm' : 'text-text-muted'}`}>
            
            Active Jobs (1)
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'completed' ? 'bg-white text-text shadow-sm' : 'text-text-muted'}`}>
            
            Completed (12)
          </button>
        </div>

        {activeTab === 'active' ?
        <div className="space-y-4">
            <div
            onClick={() => navigate('/live-job')}
            className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 cursor-pointer hover:border-primary/30 transition-colors">
            
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-primary font-bold text-xs">
                  <Clock size={14} /> IN PROGRESS
                </div>
                <div className="text-xs font-semibold text-text-muted">
                  Today, 10:00 AM
                </div>
              </div>

              <div className="flex gap-4">
                <img
                src={mockArtisans[0].photoUrl}
                alt="Artisan"
                className="w-14 h-14 rounded-xl object-cover" />
              
                <div className="flex-1">
                  <h3 className="font-bold text-text text-sm">
                    {mockArtisans[0].name}
                  </h3>
                  <p className="text-xs text-text-muted mb-2">
                    Pipe Installation
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-text text-sm">₦26,250</span>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                      <ShieldCheck size={12} /> IN ESCROW
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> :

        <div className="space-y-4">
            {[mockArtisans[1], mockArtisans[2]].map((artisan, idx) =>
          <div
            key={idx}
            className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 opacity-80">
            
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-green-600 font-bold text-xs">
                    <CheckCircle2 size={14} /> COMPLETED
                  </div>
                  <div className="text-xs font-semibold text-text-muted">
                    Oct {12 - idx}, 2023
                  </div>
                </div>

                <div className="flex gap-4">
                  <img
                src={artisan.photoUrl}
                alt="Artisan"
                className="w-14 h-14 rounded-xl object-cover" />
              
                  <div className="flex-1">
                    <h3 className="font-bold text-text text-sm">
                      {artisan.name}
                    </h3>
                    <p className="text-xs text-text-muted mb-2">
                      General Service
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-text text-sm">
                        ₦15,000
                      </span>
                      <button className="text-xs font-semibold text-primary">
                        View Receipt
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          )}
          </div>
        }
      </div>
    </div>);

}