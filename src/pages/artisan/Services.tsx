import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Clock, Edit2, Trash2 } from 'lucide-react';
import { mockArtisans } from '../../data/mockData';
import { useScreenInit } from '../../useScreenInit';
export function ArtisanServices() {
  useScreenInit();
  const navigate = useNavigate();
  const artisan = mockArtisans[0]; // Demo with first artisan's services
  return (
    <div className="h-full w-full bg-background flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex justify-between items-center bg-white z-10">
        <h1 className="text-xl font-bold text-text">My Services</h1>
        <button
          onClick={() => navigate('/pro/create-service')}
          className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-sm hover:bg-primary-dark transition-colors">
          
          <Plus size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {artisan.services.map((service) =>
        <div
          key={service.id}
          className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-text text-base mb-1">
                  {service.name}
                </h4>
                <div className="flex gap-2">
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
              </div>
              <div className="flex gap-2">
                <button
                onClick={() =>
                navigate(`/pro/create-service?id=${service.id}`)
                }
                className="p-2 text-slate-400 hover:text-primary transition-colors bg-slate-50 rounded-lg">
                
                  <Edit2 size={16} />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors bg-slate-50 rounded-lg">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm bg-slate-50 p-3 rounded-xl">
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
            <div className="flex items-center gap-1 text-text-muted text-xs font-medium border-l border-slate-300 pl-4">
                  <Clock size={14} /> {service.duration}
                </div>
            }
              {service.type === 'quote' &&
            <div className="text-text-muted text-xs font-medium">
                  Custom pricing based on project scope
                </div>
            }
            </div>
          </div>
        )}
      </div>
    </div>);

}