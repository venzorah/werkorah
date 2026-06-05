import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Upload,
  Image as ImageIcon,
  Send,
  CheckCircle2 } from
'lucide-react';
import { mockArtisans } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { useScreenInit } from '../useScreenInit';
export function Quote() {
  useScreenInit();
  const { id } = useParams();
  const navigate = useNavigate();
  const artisan = mockArtisans.find((a) => a.id === id) || mockArtisans[0];
  const [step, setStep] = useState<'form' | 'negotiation'>('form');
  const [messages, setMessages] = useState([
  {
    sender: 'customer',
    text: 'I need a custom wardrobe built for my master bedroom. Attached are some reference images.',
    amount: 50000
  },
  {
    sender: 'artisan',
    text: 'Thanks for reaching out! Based on the materials and size, my quote is ₦70,000.',
    amount: 70000
  },
  {
    sender: 'customer',
    text: 'Can we do ₦60,000? I can provide some of the hinges.',
    amount: 60000
  }]
  );
  const handleAccept = () => {
    setMessages([
    ...messages,
    {
      sender: 'artisan',
      text: 'Deal! ₦60,000 works for me. I will generate the invoice now.',
      amount: 60000
    }]
    );
    setTimeout(() => {
      navigate('/payment');
    }, 2000);
  };
  return (
    <div className="h-full w-full bg-surface flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center gap-4 bg-white z-10">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
          
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="text-xl font-bold text-text">Request Quote</h1>
          <p className="text-xs text-text-muted">{artisan.name}</p>
        </div>
      </div>

      {step === 'form' ?
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Describe the job
            </label>
            <textarea
            rows={4}
            placeholder="E.g. I need a custom 6-door wardrobe built..."
            className="w-full p-4 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm resize-none">
          </textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Upload Images/Videos
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-slate-500 bg-slate-50">
              <Upload size={24} className="mb-2" />
              <p className="text-sm font-medium">Tap to upload media</p>
              <p className="text-xs mt-1">Max 5MB per file</p>
            </div>
            <div className="flex gap-2 mt-3">
              <div className="w-16 h-16 rounded-lg bg-slate-200 flex items-center justify-center text-slate-400">
                <ImageIcon size={20} />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Estimated Budget (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none font-bold text-text">
                ₦
              </div>
              <input
              type="number"
              placeholder="50,000"
              className="w-full pl-8 pr-4 py-3.5 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            
            </div>
          </div>

          <button
          onClick={() => setStep('negotiation')}
          className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md active:scale-[0.98] transition-transform mt-4">
          
            Submit Request
          </button>
        </div> :

      <div className="flex-1 flex flex-col bg-slate-50">
          <div className="bg-amber-50 p-3 text-center border-b border-amber-100 text-amber-800 text-xs font-medium">
            Negotiating quote with {artisan.name}
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((msg, idx) =>
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className={`flex flex-col max-w-[85%] ${msg.sender === 'customer' ? 'ml-auto items-end' : 'mr-auto items-start'}`}>
              
                  <div
                className={`p-3 rounded-2xl text-sm ${msg.sender === 'customer' ? 'bg-primary text-white rounded-tr-sm' : 'bg-white border border-slate-200 text-text rounded-tl-sm'}`}>
                
                    {msg.text}
                  </div>
                  {msg.amount &&
              <div
                className={`mt-1 text-xs font-bold ${msg.sender === 'customer' ? 'text-primary' : 'text-text-muted'}`}>
                
                      Offer: ₦{msg.amount.toLocaleString()}
                    </div>
              }
                </motion.div>
            )}
            </AnimatePresence>
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            {messages.length === 3 ?
          <div className="flex gap-2">
                <button
              onClick={handleAccept}
              className="flex-1 bg-primary text-white font-semibold py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2">
              
                  <CheckCircle2 size={18} /> Accept ₦60,000
                </button>
                <button className="px-6 py-3.5 border border-slate-200 text-text font-semibold rounded-xl">
                  Counter
                </button>
              </div> :

          <div className="text-center p-4">
                <div className="animate-pulse flex space-x-2 justify-center items-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-xs text-text-muted mt-2">
                  Generating Invoice...
                </p>
              </div>
          }
          </div>
        </div>
      }
    </div>);

}