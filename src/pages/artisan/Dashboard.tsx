import React, { Children } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  ShieldCheck,
  Wallet,
  Briefcase,
  Star,
  Clock,
  ChevronRight,
  PlusCircle,
  Image as ImageIcon } from
'lucide-react';
import { motion } from 'framer-motion';
import { mockEarningsSummary, mockJobRequests } from '../../data/mockData';
import { useScreenInit } from '../../useScreenInit';
export function ArtisanDashboard() {
  useScreenInit();
  const navigate = useNavigate();
  const pendingRequests = mockJobRequests.filter((r) => r.status === 'pending');
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return (
    <div className="h-full w-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary px-6 pt-6 pb-8 rounded-b-[32px] shadow-md z-10 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-primary-light text-sm font-medium mb-1">
              Welcome back,
            </p>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">Chinedu O.</h1>
              <div className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                <ShieldCheck size={12} /> VERIFIED
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/pro/requests')}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white relative hover:bg-white/20 transition-colors">
            
            <Bell size={20} />
            {pendingRequests.length > 0 &&
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-accent rounded-full border-2 border-primary"></span>
            }
          </button>
        </div>

        {/* Main Metric */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Wallet size={18} className="text-primary-light" />
              <span className="font-medium text-sm text-white/90">
                Available Balance
              </span>
            </div>
            <button
              onClick={() => navigate('/pro/earnings')}
              className="text-xs font-semibold bg-white text-primary px-3 py-1.5 rounded-full">
              
              Withdraw
            </button>
          </div>
          <div className="text-3xl font-bold">
            ₦{mockEarningsSummary.availableBalance.toLocaleString()}
          </div>
          <div className="text-xs text-white/70 mt-2 flex items-center gap-1">
            <Clock size={12} /> ₦
            {mockEarningsSummary.pendingBalance.toLocaleString()} in Escrow
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-6 space-y-8">
        {/* Metrics Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4">
          
          <motion.div
            variants={item}
            className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            
            <Briefcase size={20} className="text-primary mb-2" />
            <div className="text-2xl font-bold text-text">
              {mockEarningsSummary.jobsCompleted}
            </div>
            <div className="text-xs text-text-muted">Jobs Completed</div>
          </motion.div>
          <motion.div
            variants={item}
            className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            
            <Star size={20} className="text-accent mb-2" />
            <div className="text-2xl font-bold text-text flex items-baseline gap-1">
              {mockEarningsSummary.rating}{' '}
              <span className="text-sm font-normal text-text-muted">/ 5.0</span>
            </div>
            <div className="text-xs text-text-muted">Overall Rating</div>
          </motion.div>
        </motion.div>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-bold text-text mb-4">Quick Actions</h2>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/pro/create-service')}
              className="flex-1 bg-primary/10 border border-primary/20 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-primary hover:bg-primary/20 transition-colors">
              
              <PlusCircle size={24} />
              <span className="text-sm font-semibold">Add Service</span>
            </button>
            <button
              onClick={() => navigate('/pro/portfolio')}
              className="flex-1 bg-amber-50 border border-amber-100 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-amber-700 hover:bg-amber-100 transition-colors">
              
              <ImageIcon size={24} />
              <span className="text-sm font-semibold">Portfolio</span>
            </button>
          </div>
        </section>

        {/* New Requests Preview */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold text-text">New Requests</h2>
            <button
              onClick={() => navigate('/pro/requests')}
              className="text-primary text-sm font-medium flex items-center">
              
              View All <ChevronRight size={16} />
            </button>
          </div>

          <div className="space-y-3">
            {pendingRequests.slice(0, 2).map((req) =>
            <div
              key={req.id}
              onClick={() => navigate('/pro/requests')}
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4 cursor-pointer hover:border-primary/30 transition-colors">
              
                <img
                src={req.customerPhoto}
                alt={req.customerName}
                className="w-12 h-12 rounded-full object-cover" />
              
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm text-text">
                      {req.customerName}
                    </h3>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">
                      {req.type}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mb-2">
                    {req.serviceName}
                  </p>
                  <div className="flex justify-between items-center text-xs font-medium">
                    <span className="text-text-muted flex items-center gap-1">
                      <Clock size={12} /> {req.date.split(',')[0]}
                    </span>
                    {req.proposedAmount &&
                  <span className="text-primary font-bold">
                        ₦{req.proposedAmount.toLocaleString()}
                      </span>
                  }
                  </div>
                </div>
              </div>
            )}
            {pendingRequests.length === 0 &&
            <div className="text-center py-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-sm text-text-muted">
                  No new requests right now.
                </p>
              </div>
            }
          </div>
        </section>
      </div>
    </div>);

}