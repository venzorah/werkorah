import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Search as SearchIcon,
  ArrowLeft,
  SlidersHorizontal,
  Star,
  ShieldCheck,
  MapPin,
  Briefcase } from
'lucide-react';
import { mockArtisans } from '../data/mockData';
import { useScreenInit } from '../useScreenInit';
export function Search() {
  useScreenInit();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Plumber';
  const [searchQuery, setSearchQuery] = useState(initialCategory);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const filters = ['Distance', 'Rating', 'Price Range', 'Availability'];
  const toggleFilter = (filter: string) =>
  setActiveFilters((prev) =>
  prev.includes(filter) ?
  prev.filter((f) => f !== filter) :
  [...prev, filter]
  );
  const results = mockArtisans.filter(
    (a) =>
    (a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.name.toLowerCase().includes(searchQuery.toLowerCase())) && (
    !verifiedOnly || a.verified)
  );
  return (
    <div className="h-full w-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-6 pb-4 border-b border-slate-100 z-10">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
            
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium" />
            
          </div>
          <button className="p-2.5 bg-slate-100 text-text rounded-xl hover:bg-slate-200 transition-colors">
            <SlidersHorizontal size={20} />
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          <button
            onClick={() => setVerifiedOnly(!verifiedOnly)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium border transition-colors flex items-center gap-1.5 ${verifiedOnly ? 'bg-primary/10 border-primary text-primary' : 'bg-white border-slate-200 text-text-muted'}`}>
            
            <ShieldCheck size={14} /> Verified Only
          </button>
          {filters.map((filter) => {
            const isActive = activeFilters.includes(filter);
            return (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${isActive ? 'bg-primary/10 border-primary text-primary' : 'bg-white border-slate-200 text-text-muted'}`}>
                
                {filter}
              </button>);

          })}
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <p className="text-sm text-text-muted font-medium mb-2">
          Found {results.length} artisans for "{searchQuery}"
        </p>

        {results.map((artisan) =>
        <div
          key={artisan.id}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          
            <div className="flex gap-4 mb-4">
              <img
              src={artisan.photoUrl}
              alt={artisan.name}
              className="w-20 h-20 rounded-xl object-cover" />
            
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-bold text-text text-base">
                        {artisan.name}
                      </h3>
                      {artisan.verified &&
                    <ShieldCheck size={16} className="text-primary" />
                    }
                    </div>
                    <p className="text-xs text-text-muted mt-0.5">
                      {artisan.category}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                  <div className="flex items-center gap-1 text-xs font-medium">
                    <Star size={12} className="text-accent fill-accent" />
                    {artisan.rating}{' '}
                    <span className="text-text-muted font-normal">
                      ({artisan.jobsCompleted})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <Briefcase size={12} /> {artisan.yearsExperience} yrs exp
                  </div>
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <MapPin size={12} /> {artisan.distance}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4 bg-slate-50 p-3 rounded-xl">
              <span className="text-xs text-text-muted">Starting from</span>
              <span className="text-base font-bold text-primary">
                ₦{artisan.startingPrice.toLocaleString()}
              </span>
            </div>

            <div className="flex gap-2">
              <button
              onClick={() => navigate(`/artisan/${artisan.id}`)}
              className="flex-1 py-2.5 border border-primary text-primary font-semibold rounded-xl text-sm hover:bg-primary/5 transition-colors">
              
                View Profile
              </button>
              <button
              onClick={() => navigate(`/quote/${artisan.id}`)}
              className="flex-1 py-2.5 border border-slate-200 text-text font-semibold rounded-xl text-sm hover:bg-slate-50 transition-colors">
              
                Request Quote
              </button>
              <button
              onClick={() => navigate(`/booking/${artisan.id}`)}
              className="flex-1 py-2.5 bg-primary text-white font-semibold rounded-xl text-sm shadow-sm active:scale-95 transition-transform">
              
                Book Now
              </button>
            </div>
          </div>
        )}

        {results.length === 0 &&
        <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <SearchIcon size={24} />
            </div>
            <h3 className="text-lg font-bold text-text mb-1">
              No artisans found
            </h3>
            <p className="text-text-muted text-sm">
              Try adjusting your search or filters.
            </p>
          </div>
        }
      </div>
    </div>);

}