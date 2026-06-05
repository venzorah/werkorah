import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { mockArtisans } from '../data/mockData';
import { useScreenInit } from '../useScreenInit';
export function Booking() {
  useScreenInit();
  const { id } = useParams();
  const navigate = useNavigate();
  const artisan = mockArtisans.find((a) => a.id === id) || mockArtisans[0];
  // Assuming booking the first fixed service for demo
  const service =
  artisan.services.find((s) => s.type === 'fixed') || artisan.services[0];
  const servicePrice = service.price || 25000;
  const platformFee = servicePrice * 0.05; // 5% fee
  const total = servicePrice + platformFee;
  const [date, setDate] = useState('Tue 13');
  const [time, setTime] = useState('10:00 AM');
  return (
    <div className="h-full w-full bg-surface flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
          
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-text">Book Service</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* Service Summary */}
        <div className="bg-slate-50 rounded-2xl p-4 flex gap-4">
          <img
            src={artisan.photoUrl}
            alt={artisan.name}
            className="w-16 h-16 rounded-xl object-cover" />
          
          <div>
            <h3 className="font-bold text-text text-sm">{service.name}</h3>
            <p className="text-xs text-text-muted mb-2">by {artisan.name}</p>
            <div className="font-bold text-primary">
              ₦{servicePrice.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <section>
          <h2 className="text-base font-bold text-text mb-4 flex items-center gap-2">
            <Calendar size={18} className="text-primary" /> Select Date
          </h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Fri 16'].map((d) =>
            <button
              key={d}
              onClick={() => setDate(d)}
              className={`flex-shrink-0 w-16 py-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-colors ${date === d ? 'bg-primary border-primary text-white shadow-md' : 'bg-white border-slate-200 text-text'}`}>
              
                <span className="text-[10px] uppercase font-semibold opacity-80">
                  {d.split(' ')[0]}
                </span>
                <span className="text-lg font-bold">{d.split(' ')[1]}</span>
              </button>
            )}
          </div>

          <h2 className="text-base font-bold text-text mt-6 mb-4 flex items-center gap-2">
            <Clock size={18} className="text-primary" /> Select Time
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {['09:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'].map(
              (t) =>
              <button
                key={t}
                onClick={() => setTime(t)}
                className={`py-2.5 rounded-xl border text-sm font-semibold transition-colors ${time === t ? 'bg-primary border-primary text-white shadow-md' : 'bg-white border-slate-200 text-text'}`}>
                
                  {t}
                </button>

            )}
          </div>
        </section>

        {/* Address */}
        <section>
          <h2 className="text-base font-bold text-text mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-primary" /> Service Address
          </h2>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold text-sm text-text">Home</div>
              <button className="text-primary text-xs font-semibold">
                Edit
              </button>
            </div>
            <p className="text-sm text-text-muted">
              14 Admiralty Way, Lekki Phase 1<br />
              Lagos, Nigeria
            </p>
          </div>
        </section>

        {/* Payment Summary */}
        <section>
          <h2 className="text-base font-bold text-text mb-4">
            Payment Summary
          </h2>
          <div className="bg-slate-50 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Service Fee</span>
              <span className="font-medium text-text">
                ₦{servicePrice.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-muted flex items-center gap-1">
                Platform Fee <ShieldCheck size={12} className="text-primary" />
              </span>
              <span className="font-medium text-text">
                ₦{platformFee.toLocaleString()}
              </span>
            </div>
            <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
              <span className="font-bold text-text">Total</span>
              <span className="text-xl font-bold text-primary">
                ₦{total.toLocaleString()}
              </span>
            </div>
          </div>
        </section>
      </div>

      <div className="p-6 border-t border-slate-100 bg-white">
        <button
          onClick={() => navigate('/payment')}
          className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-md active:scale-[0.98] transition-transform">
          
          Proceed to Payment
        </button>
      </div>
    </div>);

}