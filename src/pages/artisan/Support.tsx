import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronDown,
  MessageCircle,
  Phone,
  Mail } from
'lucide-react';
import { useScreenInit } from '../../useScreenInit';
const faqs = [
{
  q: 'How do I get paid?',
  a: 'Payments are held securely in escrow when a customer books. Once you complete the job and the customer confirms, funds are released to your available balance, minus the platform commission.'
},
{
  q: 'When can I withdraw my earnings?',
  a: 'You can withdraw your available balance anytime from the Earnings screen to your linked bank account. Withdrawals typically arrive within 24 hours.'
},
{
  q: 'How does verification work?',
  a: 'We review your Government ID, selfie, and utility bill within 24–48 hours. Verified artisans get a trust badge and appear higher in search results.'
},
{
  q: 'Can I edit or delete my job history?',
  a: 'No. Your job activity is a permanent record to maintain trust and transparency with customers. You can edit your services and portfolio, but completed job records stay locked.'
}];

export function Support() {
  useScreenInit();
  const navigate = useNavigate();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="h-full w-full bg-background flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center gap-4 bg-white z-10">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
          
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-text">Help & Support</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Contact options */}
        <div className="grid grid-cols-3 gap-3">
          {[
          {
            icon: MessageCircle,
            label: 'Live Chat'
          },
          {
            icon: Phone,
            label: 'Call Us'
          },
          {
            icon: Mail,
            label: 'Email'
          }].
          map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.label}
                className="bg-white border border-slate-100 shadow-sm rounded-2xl p-4 flex flex-col items-center gap-2 text-primary hover:bg-primary/5 transition-colors">
                
                <Icon size={22} />
                <span className="text-xs font-semibold text-text">
                  {c.label}
                </span>
              </button>);

          })}
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-sm font-bold text-text mb-3">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) =>
            <div
              key={idx}
              className="bg-white border border-slate-100 shadow-sm rounded-2xl overflow-hidden">
              
                <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full p-4 flex items-center justify-between text-left">
                
                  <span className="font-semibold text-sm text-text pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                  size={18}
                  className={`text-text-muted flex-shrink-0 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
                
                </button>
                {open === idx &&
              <div className="px-4 pb-4 text-sm text-text-muted leading-relaxed">
                    {faq.a}
                  </div>
              }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}