import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  Upload,
  FileText,
  Camera,
  FileCheck,
  CheckCircle2 } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScreenInit } from '../../useScreenInit';
export function ArtisanKyc() {
  useScreenInit();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'form' | 'pending'>('form');
  const [uploads, setUploads] = useState({
    id: false,
    selfie: false,
    utility: false
  });
  const allUploaded = uploads.id && uploads.selfie && uploads.utility;
  const handleSubmit = () => {
    setStatus('pending');
  };
  const simulateUpload = (type: keyof typeof uploads) => {
    setUploads((prev) => ({
      ...prev,
      [type]: true
    }));
  };
  return (
    <div className="h-full w-full bg-surface flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center gap-4 bg-white z-10">
        {status === 'form' &&
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
          
            <ArrowLeft size={24} />
          </button>
        }
        <h1 className="text-xl font-bold text-text">Identity Verification</h1>
      </div>

      <AnimatePresence mode="wait">
        {status === 'form' ?
        <motion.div
          key="form"
          exit={{
            opacity: 0,
            x: -20
          }}
          className="flex-1 flex flex-col overflow-y-auto">
          
            <div className="p-6 space-y-6">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
                <ShieldCheck size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-primary-dark mb-1">
                    Why do we need this?
                  </h4>
                  <p className="text-xs text-primary-dark/80 leading-relaxed">
                    Werkorah is a trusted platform. We verify all artisans to
                    ensure customer safety and build trust, which helps you get
                    more jobs.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Government ID */}
                <div className="border border-slate-200 rounded-2xl p-4 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-text">
                        Government ID
                      </h3>
                      <p className="text-xs text-text-muted">
                        NIN Slip, Driver's License, or Passport
                      </p>
                    </div>
                  </div>
                  {uploads.id ?
                <div className="h-24 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center text-green-600 gap-2">
                      <CheckCircle2 size={20} /> Uploaded Successfully
                    </div> :

                <button
                  onClick={() => simulateUpload('id')}
                  className="w-full h-24 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-500 bg-slate-50 hover:bg-slate-100 transition-colors">
                  
                      <Upload size={20} className="mb-1" />
                      <span className="text-xs font-medium">
                        Tap to upload front & back
                      </span>
                    </button>
                }
                </div>

                {/* Selfie */}
                <div className="border border-slate-200 rounded-2xl p-4 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      <Camera size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-text">
                        Clear Selfie
                      </h3>
                      <p className="text-xs text-text-muted">
                        Take a photo of yourself right now
                      </p>
                    </div>
                  </div>
                  {uploads.selfie ?
                <div className="h-24 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center text-green-600 gap-2">
                      <CheckCircle2 size={20} /> Uploaded Successfully
                    </div> :

                <button
                  onClick={() => simulateUpload('selfie')}
                  className="w-full h-24 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-500 bg-slate-50 hover:bg-slate-100 transition-colors">
                  
                      <Camera size={20} className="mb-1" />
                      <span className="text-xs font-medium">
                        Tap to take selfie
                      </span>
                    </button>
                }
                </div>

                {/* Utility Bill */}
                <div className="border border-slate-200 rounded-2xl p-4 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      <FileCheck size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-text">
                        Utility Bill
                      </h3>
                      <p className="text-xs text-text-muted">
                        Proof of address (Electricity, Water, etc.)
                      </p>
                    </div>
                  </div>
                  {uploads.utility ?
                <div className="h-24 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center text-green-600 gap-2">
                      <CheckCircle2 size={20} /> Uploaded Successfully
                    </div> :

                <button
                  onClick={() => simulateUpload('utility')}
                  className="w-full h-24 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-500 bg-slate-50 hover:bg-slate-100 transition-colors">
                  
                      <Upload size={20} className="mb-1" />
                      <span className="text-xs font-medium">
                        Tap to upload document
                      </span>
                    </button>
                }
                </div>
              </div>
            </div>

            <div className="p-6 mt-auto border-t border-slate-100 bg-white">
              <button
              onClick={handleSubmit}
              disabled={!allUploaded}
              className={`w-full font-semibold py-4 rounded-xl shadow-md transition-all ${allUploaded ? 'bg-primary text-white active:scale-[0.98]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>
              
                Submit for Verification
              </button>
            </div>
          </motion.div> :

        <motion.div
          key="pending"
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          className="flex-1 flex flex-col p-6">
          
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6 relative">
                <ShieldCheck size={48} />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-text mb-2">
                Verification Pending
              </h2>
              <p className="text-text-muted text-sm max-w-[280px] mx-auto mb-8 leading-relaxed">
                We've received your documents. Our team will review them within
                24-48 hours. You can set up your profile in the meantime.
              </p>
            </div>

            <button
            onClick={() => navigate('/pro/dashboard')}
            className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md active:scale-[0.98] transition-transform mt-6">
            
              Continue to Dashboard
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}