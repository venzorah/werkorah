import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Lock, CheckCircle2, XCircle } from 'lucide-react';
import { mockJobHistory } from '../../data/mockData';
import { useScreenInit } from '../../useScreenInit';
export function JobHistory() {
  useScreenInit();
  const navigate = useNavigate();
  return (
    <div className="h-full w-full bg-background flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center gap-4 bg-white z-10">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
          
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-text">Job Activity</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Immutability notice */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-3 flex items-center gap-2.5">
          <Lock size={16} className="text-text-muted flex-shrink-0" />
          <p className="text-xs text-text-muted">
            Your job history is a permanent record and cannot be edited or
            removed. This builds trust with customers.
          </p>
        </div>

        {mockJobHistory.map((job) =>
        <div
          key={job.id}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          
            <div className="flex items-center gap-3 mb-3">
              <img
              src={job.customerPhoto}
              alt={job.customerName}
              className="w-12 h-12 rounded-full object-cover" />
            
              <div className="flex-1">
                <h3 className="font-bold text-sm text-text">
                  {job.serviceName}
                </h3>
                <p className="text-xs text-text-muted">
                  for {job.customerName}
                </p>
              </div>
              <div
              className={`text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 ${job.status === 'completed' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
              
                {job.status === 'completed' ?
              <CheckCircle2 size={12} /> :

              <XCircle size={12} />
              }
                {job.status.toUpperCase()}
              </div>
            </div>

            <div className="flex justify-between items-center bg-slate-50 rounded-xl p-3">
              <div className="text-xs text-text-muted">{job.date}</div>
              <div className="flex items-center gap-3">
                {job.rating &&
              <div className="flex items-center gap-1 text-xs font-semibold text-text">
                    <Star size={12} className="text-accent fill-accent" />
                    {job.rating}.0
                  </div>
              }
                <div className="font-bold text-primary text-sm">
                  ₦{job.amount.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);

}