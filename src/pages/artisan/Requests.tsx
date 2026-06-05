import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Clock,
  CheckCircle2,
  XCircle,
  MessageSquare } from
'lucide-react';
import { mockJobRequests } from '../../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { useScreenInit } from '../../useScreenInit';
export function ArtisanRequests() {
  useScreenInit();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'pending' | 'responded'>('pending');
  const [requests, setRequests] = useState(mockJobRequests);
  const [counterId, setCounterId] = useState<string | null>(null);
  const pendingReqs = requests.filter((r) => r.status === 'pending');
  const respondedReqs = requests.filter((r) => r.status !== 'pending');
  const handleAction = (id: string, action: 'accepted' | 'declined') => {
    setRequests((prev) =>
    prev.map((r) =>
    r.id === id ?
    {
      ...r,
      status: action
    } :
    r
    )
    );
  };
  const handleCounter = (id: string, e: React.FormEvent) => {
    e.preventDefault();
    setRequests((prev) =>
    prev.map((r) =>
    r.id === id ?
    {
      ...r,
      status: 'countered'
    } :
    r
    )
    );
    setCounterId(null);
  };
  return (
    <div className="h-full w-full bg-background flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 bg-white z-10">
        <h1 className="text-xl font-bold text-text mb-4">Job Requests</h1>
        <div className="flex p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'pending' ? 'bg-white text-text shadow-sm' : 'text-text-muted'}`}>
            
            Pending ({pendingReqs.length})
          </button>
          <button
            onClick={() => setActiveTab('responded')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'responded' ? 'bg-white text-text shadow-sm' : 'text-text-muted'}`}>
            
            Responded ({respondedReqs.length})
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence mode="popLayout">
          {(activeTab === 'pending' ? pendingReqs : respondedReqs).map(
            (req) =>
            <motion.div
              key={req.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.95
              }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-3">
                    <img
                    src={req.customerPhoto}
                    alt={req.customerName}
                    className="w-12 h-12 rounded-full object-cover" />
                  
                    <div>
                      <h3 className="font-bold text-sm text-text">
                        {req.customerName}
                      </h3>
                      <p className="text-xs text-text-muted">
                        {req.serviceName}
                      </p>
                    </div>
                  </div>
                  <span
                  className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${req.type === 'fixed' ? 'bg-blue-50 text-blue-600' : req.type === 'hourly' ? 'bg-purple-50 text-purple-600' : 'bg-amber-50 text-amber-600'}`}>
                  
                    {req.type}
                  </span>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <Clock size={14} className="text-primary" /> {req.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <MapPin size={14} className="text-primary" /> {req.location}
                  </div>
                  <p className="text-xs text-text mt-2 border-t border-slate-200 pt-2">
                    "{req.description}"
                  </p>
                </div>

                {req.proposedAmount &&
              <div className="flex justify-between items-center mb-4 px-1">
                    <span className="text-xs font-semibold text-text-muted">
                      Proposed Amount:
                    </span>
                    <span className="text-base font-bold text-primary">
                      ₦{req.proposedAmount.toLocaleString()}
                    </span>
                  </div>
              }

                {activeTab === 'pending' && (
              counterId === req.id ?
              <form
                onSubmit={(e) => handleCounter(req.id, e)}
                className="flex gap-2 animate-in fade-in slide-in-from-top-2">
                
                      <input
                  type="number"
                  placeholder="Enter counter amount"
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-primary"
                  required />
                
                      <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl">
                  
                        Send
                      </button>
                      <button
                  type="button"
                  onClick={() => setCounterId(null)}
                  className="px-3 py-2 bg-slate-100 text-slate-500 rounded-xl">
                  
                        <XCircle size={18} />
                      </button>
                    </form> :

              <div className="flex gap-2">
                      <button
                  onClick={() => handleAction(req.id, 'accepted')}
                  className="flex-1 py-2.5 bg-primary text-white font-semibold rounded-xl text-sm shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-1">
                  
                        <CheckCircle2 size={16} /> Accept
                      </button>
                      {req.type === 'quote' &&
                <button
                  onClick={() => setCounterId(req.id)}
                  className="flex-1 py-2.5 border border-primary text-primary font-semibold rounded-xl text-sm hover:bg-primary/5 transition-colors flex items-center justify-center gap-1">
                  
                          <MessageSquare size={16} /> Counter
                        </button>
                }
                      <button
                  onClick={() => handleAction(req.id, 'declined')}
                  className="px-4 py-2.5 border border-slate-200 text-slate-500 font-semibold rounded-xl text-sm hover:bg-slate-50 transition-colors">
                  
                        Decline
                      </button>
                    </div>)
              }

                {activeTab === 'responded' &&
              <div
                className={`py-2 text-center rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${req.status === 'accepted' ? 'bg-green-50 text-green-600' : req.status === 'declined' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                
                    {req.status === 'accepted' && <CheckCircle2 size={16} />}
                    {req.status === 'declined' && <XCircle size={16} />}
                    {req.status === 'countered' && <MessageSquare size={16} />}
                    {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                  </div>
              }
              </motion.div>

          )}
          {(activeTab === 'pending' ? pendingReqs : respondedReqs).length ===
          0 &&
          <div className="text-center py-12 text-text-muted text-sm">
              No {activeTab} requests.
            </div>
          }
        </AnimatePresence>
      </div>
    </div>);

}