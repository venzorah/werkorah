import React, { useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  MapPin,
  Search,
  Star,
  ShieldCheck,
  Map as MapIcon,
  List,
  ChevronRight } from
'lucide-react';
import { motion } from 'framer-motion';
import { categories, mockArtisans } from '../data/mockData';
import * as Icons from 'lucide-react';
import { useScreenInit } from '../useScreenInit';
export function Home() {
  useScreenInit();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search');
  };
  return (
    <div className="h-full w-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary px-6 pt-6 pb-6 rounded-b-[32px] shadow-md z-10">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate('/profile')}
            className="flex items-center gap-3 text-left">
            
            <div className="w-12 h-12 rounded-full bg-white/20 p-0.5">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=150&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full rounded-full object-cover" />
              
            </div>
            <div>
              <p className="text-primary-light text-xs font-medium">
                Current Location
              </p>
              <div className="flex items-center gap-1 text-white">
                <MapPin size={14} />
                <span className="font-semibold text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white relative hover:bg-white/20 transition-colors">
            
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-accent rounded-full border-2 border-primary"></span>
          </button>
        </div>

        <form onSubmit={handleSearch} className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={20} className="text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search for plumber, electrician..."
            className="w-full pl-11 pr-4 py-3.5 bg-white rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-accent text-sm"
            onClick={() => navigate('/search')} />
          
        </form>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 px-6 pt-6 space-y-8">
        {/* Categories */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold text-text">Services</h2>
            <button
              onClick={() => setShowAllCategories((prev) => !prev)}
              className="text-primary text-sm font-medium flex items-center hover:underline">
              
              {showAllCategories ? 'Show Less' : 'See All'}{' '}
              <ChevronRight
                size={16}
                className={`transition-transform ${showAllCategories ? 'rotate-90' : ''}`} />
              
            </button>
          </div>
          <div className="grid grid-cols-4 gap-y-4 gap-x-2">
            {(showAllCategories ? categories : categories.slice(0, 8)).map(
              (cat) => {
                const IconComponent = (Icons as any)[cat.icon] || Icons.Wrench;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() =>
                    navigate(
                      `/search?category=${encodeURIComponent(cat.name)}`
                    )
                    }>
                    
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-medium text-text-muted text-center leading-tight">
                      {cat.name}
                    </span>
                  </button>);

              }
            )}
          </div>
        </section>

        {/* Featured Artisans */}
        <section>
          <h2 className="text-lg font-bold text-text mb-4">
            Featured Artisans
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
            {mockArtisans.
            filter((a) => a.rating >= 4.7).
            map((artisan) =>
            <motion.div
              key={artisan.id}
              whileTap={{
                scale: 0.98
              }}
              onClick={() => navigate(`/artisan/${artisan.id}`)}
              className="min-w-[240px] bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex-shrink-0">
              
                  <div className="flex gap-3 mb-3">
                    <img
                  src={artisan.photoUrl}
                  alt={artisan.name}
                  className="w-14 h-14 rounded-xl object-cover" />
                
                    <div>
                      <div className="flex items-center gap-1">
                        <h3 className="font-bold text-text text-sm truncate max-w-[120px]">
                          {artisan.name}
                        </h3>
                        {artisan.verified &&
                    <ShieldCheck size={14} className="text-primary" />
                    }
                      </div>
                      <p className="text-xs text-text-muted">
                        {artisan.category}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star size={12} className="text-accent fill-accent" />
                        <span className="text-xs font-semibold">
                          {artisan.rating}
                        </span>
                        <span className="text-[10px] text-text-muted">
                          ({artisan.jobsCompleted} jobs)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-text-muted text-xs">
                      <MapPin size={12} /> {artisan.distance}
                    </div>
                    <div className="text-primary font-bold text-sm">
                      ₦{artisan.startingPrice.toLocaleString()}{' '}
                      <span className="text-[10px] font-normal text-text-muted">
                        up
                      </span>
                    </div>
                  </div>
                </motion.div>
            )}
          </div>
        </section>

        {/* Nearby Artisans */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-text">Nearby Artisans</h2>
            <div className="bg-slate-200 p-1 rounded-lg flex">
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-primary' : 'text-text-muted'}`}>
                
                <List size={16} />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-1.5 rounded-md transition-colors ${viewMode === 'map' ? 'bg-white shadow-sm text-primary' : 'text-text-muted'}`}>
                
                <MapIcon size={16} />
              </button>
            </div>
          </div>

          {viewMode === 'list' ?
          <div className="space-y-4">
              {mockArtisans.map((artisan) =>
            <div
              key={artisan.id}
              onClick={() => navigate(`/artisan/${artisan.id}`)}
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4 cursor-pointer">
              
                  <img
                src={artisan.photoUrl}
                alt={artisan.name}
                className="w-20 h-20 rounded-xl object-cover" />
              
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="font-bold text-text text-sm">
                            {artisan.name}
                          </h3>
                          {artisan.verified &&
                      <ShieldCheck size={14} className="text-primary" />
                      }
                        </div>
                        <p className="text-xs text-text-muted">
                          {artisan.category}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 px-1.5 py-0.5 rounded text-accent-dark">
                        <Star size={10} className="fill-current" />
                        <span className="text-[10px] font-bold">
                          {artisan.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-3">
                      <div className="text-xs text-text-muted flex items-center gap-1">
                        <MapPin size={12} /> {artisan.distance}
                      </div>
                      <div className="text-sm font-bold text-text">
                        ₦{artisan.startingPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
            )}
            </div> :

          <div className="w-full h-[300px] bg-slate-200 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-300">
              {/* Simple illustrative map placeholder */}
              <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                'radial-gradient(#94a3b8 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}>
            </div>

              {/* Map Pins */}
              <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                <div className="bg-white p-1 rounded-full shadow-md mb-1">
                  <img
                  src={mockArtisans[0].photoUrl}
                  className="w-8 h-8 rounded-full object-cover" />
                
                </div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white drop-shadow-md"></div>
              </div>

              <div className="absolute top-1/2 right-1/3 flex flex-col items-center">
                <div className="bg-white p-1 rounded-full shadow-md mb-1">
                  <img
                  src={mockArtisans[1].photoUrl}
                  className="w-8 h-8 rounded-full object-cover" />
                
                </div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white drop-shadow-md"></div>
              </div>

              <div className="absolute bottom-1/3 left-1/2 flex flex-col items-center">
                <div className="bg-white p-1 rounded-full shadow-md mb-1 relative">
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                  <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=150&auto=format&fit=crop"
                  className="w-10 h-10 rounded-full object-cover" />
                
                </div>
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white drop-shadow-md"></div>
                <div className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full mt-1 font-medium shadow-sm">
                  You
                </div>
              </div>
            </div>
          }
        </section>
      </div>
    </div>);

}