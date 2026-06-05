import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CreditCard,
  Wallet,
  Building2,
  ShieldCheck,
  Lock,
  CheckCircle2 } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScreenInit } from '../useScreenInit';
export function Payment() {
  useScreenInit();
  const navigate = useNavigate();
  const [method, setMethod] = useState('card');
  const [status, setStatus] = useState<'checkout' | 'processing' | 'escrow'>(
    'checkout'
  );
  const total = 26250;
  const handlePay = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus('escrow');
    }, 2000);
  };
  return (
    <div className="h-full w-full bg-surface flex flex-col">
      <div className="px-6 pt-6 pb-4 flex items-center gap-4 bg-white z-10">
        {status === 'checkout' &&
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
          
            <ArrowLeft size={24} />
          </button>
        }
        <h1 className="text-xl font-bold text-text">
          {status === 'checkout' ?
          'Payment' :
          status === 'escrow' ?
          'Payment Secured' :
          ''}
        </h1>
      </div>

      <AnimatePresence mode="wait">
        {status === 'checkout' &&
        <motion.div
          key="checkout"
          exit={{
            opacity: 0,
            x: -20
          }}
          className="flex-1 flex flex-col overflow-y-auto">
          
            <div className="p-6 space-y-6">
              {/* Amount */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                <p className="text-sm text-text-muted mb-1">Total to pay</p>
                <h2 className="text-3xl font-bold text-primary">
                  ₦{total.toLocaleString()}
                </h2>
              </div>

              {/* Escrow Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                <ShieldCheck size={24} className="text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-amber-900 mb-1">
                    Secure Escrow Payment
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Your money is held safely by Werkorah. It will only be
                    released to the artisan when you confirm the job is
                    completed.
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-sm font-bold text-text mb-3">
                  Select Payment Method
                </h3>
                <div className="space-y-3">
                  {[
                {
                  id: 'card',
                  name: 'Credit/Debit Card',
                  icon: CreditCard
                },
                {
                  id: 'transfer',
                  name: 'Bank Transfer',
                  icon: Building2
                },
                {
                  id: 'wallet',
                  name: 'Werkorah Wallet',
                  icon: Wallet,
                  balance: '₦5,000'
                }].
                map((m) =>
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${method === m.id ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-slate-200 bg-white'}`}>
                  
                      <div className="flex items-center gap-3">
                        <div
                      className={`p-2 rounded-lg ${method === m.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                      
                          <m.icon size={20} />
                        </div>
                        <span className="font-semibold text-sm text-text">
                          {m.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        {m.balance &&
                    <span className="text-xs text-text-muted">
                            {m.balance}
                          </span>
                    }
                        <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === m.id ? 'border-primary' : 'border-slate-300'}`}>
                      
                          {method === m.id &&
                      <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                      }
                        </div>
                      </div>
                    </button>
                )}
                </div>
              </div>
            </div>

            <div className="p-6 mt-auto border-t border-slate-100 bg-white">
              <button
              onClick={handlePay}
              className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
              
                <Lock size={18} /> Pay ₦{total.toLocaleString()} Securely
              </button>
            </div>
          </motion.div>
        }

        {status === 'processing' &&
        <motion.div
          key="processing"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="flex-1 flex flex-col items-center justify-center p-6">
          
            <div className="w-16 h-16 border-4 border-slate-200 border-t-primary rounded-full animate-spin mb-4"></div>
            <h3 className="text-lg font-bold text-text">
              Processing Payment...
            </h3>
            <p className="text-sm text-text-muted mt-2">
              Securing your funds in escrow
            </p>
          </motion.div>
        }

        {status === 'escrow' &&
        <motion.div
          key="escrow"
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
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 relative">
                <CheckCircle2 size={48} />
                <motion.div
                initial={{
                  scale: 0
                }}
                animate={{
                  scale: 1
                }}
                transition={{
                  delay: 0.3,
                  type: 'spring'
                }}
                className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                
                  <Lock size={20} className="text-primary" />
                </motion.div>
              </div>
              <h2 className="text-2xl font-bold text-text mb-2">
                Payment Secured!
              </h2>
              <p className="text-text-muted text-sm max-w-[250px] mx-auto mb-8">
                ₦{total.toLocaleString()} is now held safely in Werkorah Escrow.
              </p>

              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left">
                <h4 className="font-bold text-sm text-text mb-4">
                  What happens next?
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <p className="text-sm text-text-muted">
                      Artisan completes the job to your satisfaction.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm text-text-muted">
                      You click "Release Payment" in the app.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <p className="text-sm text-text-muted">
                      Funds are transferred to the artisan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
            onClick={() => navigate('/live-job')}
            className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md active:scale-[0.98] transition-transform mt-6">
            
              Track Job Status
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}