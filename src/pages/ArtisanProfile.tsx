import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  Heart,
  Star,
  ShieldCheck,
  MapPin,
  Briefcase,
  Calendar as CalendarIcon,
  Clock,
  MessageSquare,
  ChevronRight } from
'lucide-react';
import { mockArtisans } from '../data/mockData';
import { useScreenInit } from '../useScreenInit';
export function ArtisanProfile() {
  useScreenInit();
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'about' | 'services' | 'reviews'>(
    'services'
  );
  const artisan = mockArtisans.find((a) => a.id === id) || mockArtisans[0];
  return (
    <div className="h-full w-full bg-background flex flex-col relative">
      {/* Header Image & Actions */}
      <div className="relative h-64 flex-shrink-0">
        <img
          src={artisan.photoUrl}
          alt={artisan.name}
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            
            <ArrowLeft size={20} />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Share2 size={18} />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Heart size={18} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold">{artisan.name}</h1>
            {artisan.verified &&
            <div className="bg-primary/90 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                <ShieldCheck size={12} /> VERIFIED
              </div>
            }
          </div>
          <p className="text-white/80 text-sm mb-3">{artisan.category}</p>

          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-accent fill-accent" />
              {artisan.rating}{' '}
              <span className="text-white/60 font-normal">
                ({artisan.jobsCompleted} jobs)
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-white/60" /> {artisan.distance}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-background -mt-4 rounded-t-[24px] relative z-10 flex flex-col">
        {/* Tabs */}
        <div className="flex px-6 pt-6 border-b border-slate-200">
          {['services', 'about', 'reviews'].map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`flex-1 pb-3 text-sm font-semibold capitalize transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-text-muted'}`}>
            
              {tab}
              {activeTab === tab &&
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></div>
            }
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'services' &&
          <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-text mb-4">
                  Available Services
                </h3>
                <div className="space-y-4">
                  {artisan.services.map((service) =>
                <div
                  key={service.id}
                  className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                  
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-text">{service.name}</h4>
                        {service.type === 'fixed' &&
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded">
                            FIXED PRICE
                          </span>
                    }
                        {service.type === 'hourly' &&
                    <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-2 py-1 rounded">
                            HOURLY
                          </span>
                    }
                        {service.type === 'quote' &&
                    <span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2 py-1 rounded">
                            QUOTE BASED
                          </span>
                    }
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-sm">
                        {service.price &&
                    <div className="font-bold text-primary">
                            ₦{service.price.toLocaleString()}
                            {service.type === 'hourly' &&
                      <span className="text-text-muted text-xs font-normal">
                                /hr
                              </span>
                      }
                          </div>
                    }
                        {service.duration &&
                    <div className="flex items-center gap-1 text-text-muted text-xs">
                            <Clock size={12} /> {service.duration}
                          </div>
                    }
                        {service.type === 'quote' &&
                    <div className="text-text-muted text-xs">
                            Price depends on project scope
                          </div>
                    }
                      </div>

                      <button
                    onClick={() =>
                    navigate(
                      service.type === 'quote' ?
                      `/quote/${artisan.id}` :
                      `/booking/${artisan.id}`
                    )
                    }
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-transform active:scale-[0.98] ${service.type === 'quote' ? 'bg-white border-2 border-primary text-primary' : 'bg-primary text-white shadow-md'}`}>
                    
                        {service.type === 'quote' ?
                    'Request Quote' :
                    'Book Now'}
                      </button>
                    </div>
                )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text mb-4">
                  Availability
                </h3>
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-text font-medium">
                      <CalendarIcon size={18} className="text-primary" />
                      Select Date & Time
                    </div>
                    <ChevronRight size={18} className="text-text-muted" />
                  </div>
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                    {['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15'].map((date, i) =>
                  <div
                    key={date}
                    className={`flex-shrink-0 w-16 py-2 rounded-xl border flex flex-col items-center justify-center gap-1 ${i === 1 ? 'bg-primary border-primary text-white' : 'bg-white border-slate-200 text-text'}`}>
                    
                        <span className="text-[10px] uppercase font-semibold opacity-80">
                          {date.split(' ')[0]}
                        </span>
                        <span className="text-lg font-bold">
                          {date.split(' ')[1]}
                        </span>
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          }

          {activeTab === 'about' &&
          <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-text mb-2">Biography</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {artisan.bio}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <Briefcase size={20} className="text-primary mb-2" />
                  <div className="text-xl font-bold text-text">
                    {artisan.yearsExperience} Years
                  </div>
                  <div className="text-xs text-text-muted">Experience</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <ShieldCheck size={20} className="text-primary mb-2" />
                  <div className="text-xl font-bold text-text">Verified</div>
                  <div className="text-xs text-text-muted">
                    Background Checked
                  </div>
                </div>
              </div>

              {artisan.portfolioImages.length > 0 &&
            <div>
                  <h3 className="text-lg font-bold text-text mb-4">
                    Portfolio
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {artisan.portfolioImages.map((img, i) =>
                <img
                  key={i}
                  src={img}
                  alt="Portfolio work"
                  className="w-full h-32 object-cover rounded-xl" />

                )}
                  </div>
                </div>
            }
            </div>
          }

          {activeTab === 'reviews' &&
          <div className="space-y-6">
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                <div className="text-4xl font-bold text-text">
                  {artisan.rating}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) =>
                  <Star
                    key={star}
                    size={16}
                    className={
                    star <= Math.round(artisan.rating) ?
                    'text-accent fill-accent' :
                    'text-slate-300'
                    } />

                  )}
                  </div>
                  <div className="text-xs text-text-muted">
                    Based on {artisan.jobsCompleted} completed jobs
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {artisan.reviews.length > 0 ?
              artisan.reviews.map((review) =>
              <div
                key={review.id}
                className="border-b border-slate-100 pb-4 last:border-0">
                
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold text-sm text-text">
                          {review.customerName}
                        </div>
                        <div className="text-xs text-text-muted">
                          {review.date}
                        </div>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {[1, 2, 3, 4, 5].map((star) =>
                  <Star
                    key={star}
                    size={12}
                    className={
                    star <= review.rating ?
                    'text-accent fill-accent' :
                    'text-slate-300'
                    } />

                  )}
                      </div>
                      <p className="text-sm text-text-muted">
                        {review.comment}
                      </p>
                    </div>
              ) :

              <div className="text-center py-8 text-text-muted text-sm">
                    No reviews yet.
                  </div>
              }
              </div>
            </div>
          }
        </div>
      </div>
    </div>);

}