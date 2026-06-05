import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Plus,
  MapPin,
  Trash2,
  ImagePlus,
  X,
  FolderOpen } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockArtisans } from '../../data/mockData';
import { useScreenInit } from '../../useScreenInit';
interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  images: string[];
}
// Stock images used to simulate uploads in the prototype
const SAMPLE_UPLOADS = [
'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1607472586893-edb57cb31328?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=400&auto=format&fit=crop'];

export function ArtisanPortfolio() {
  useScreenInit();
  const navigate = useNavigate();
  const artisan = mockArtisans[0];
  const [projects, setProjects] = useState<PortfolioProject[]>([
  {
    id: 'p1',
    title: 'Kitchen Pipe Replacement',
    location: 'Lekki Phase 1, Lagos',
    images: artisan.portfolioImages
  },
  {
    id: 'p2',
    title: 'Bathroom Renovation',
    location: 'Ikeja GRA, Lagos',
    images: [SAMPLE_UPLOADS[3], SAMPLE_UPLOADS[4]]
  }]
  );
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [draftImages, setDraftImages] = useState<string[]>([]);
  const resetForm = () => {
    setTitle('');
    setLocation('');
    setDraftImages([]);
    setShowForm(false);
  };
  const addDraftImage = () => {
    // Simulate an upload by appending the next sample image
    const next = SAMPLE_UPLOADS[draftImages.length % SAMPLE_UPLOADS.length];
    setDraftImages((prev) => [...prev, next]);
  };
  const removeDraftImage = (idx: number) => {
    setDraftImages((prev) => prev.filter((_, i) => i !== idx));
  };
  const saveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !location.trim() || draftImages.length === 0) return;
    setProjects((prev) => [
    {
      id: `p${Date.now()}`,
      title: title.trim(),
      location: location.trim(),
      images: draftImages
    },
    ...prev]
    );
    resetForm();
  };
  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };
  return (
    <div className="h-full w-full bg-background flex flex-col">
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between bg-white z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-text hover:bg-slate-100 rounded-full transition-colors">
            
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-text">My Portfolio</h1>
        </div>
        {!showForm &&
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-3.5 py-2 rounded-xl shadow-sm hover:bg-primary-dark transition-colors">
          
            <Plus size={16} /> Add Project
          </button>
        }
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Add Project Form */}
        <AnimatePresence>
          {showForm &&
          <motion.form
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            onSubmit={saveProject}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4 overflow-hidden">
            
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-text">New Project</h2>
                <button
                type="button"
                onClick={resetForm}
                className="p-1.5 text-slate-400 hover:text-text hover:bg-slate-100 rounded-lg transition-colors">
                
                  <X size={18} />
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Project Name
                </label>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Full House Rewiring"
                className="w-full px-4 py-3 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                required />
              
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <MapPin size={18} className="text-slate-400" />
                  </div>
                  <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Victoria Island, Lagos"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  required />
                
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Project Images
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {draftImages.map((img, idx) =>
                <div key={idx} className="relative aspect-square">
                      <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover rounded-xl" />
                  
                      <button
                    type="button"
                    onClick={() => removeDraftImage(idx)}
                    className="absolute top-1 right-1 w-6 h-6 bg-white/90 text-red-500 rounded-full flex items-center justify-center shadow-sm">
                    
                        <X size={12} />
                      </button>
                    </div>
                )}
                  <button
                  type="button"
                  onClick={addDraftImage}
                  className="aspect-square border-2 border-dashed border-primary/40 rounded-xl flex flex-col items-center justify-center text-primary bg-primary/5 hover:bg-primary/10 transition-colors">
                  
                    <ImagePlus size={20} />
                    <span className="text-[10px] font-semibold mt-1">
                      Add Image
                    </span>
                  </button>
                </div>
                {draftImages.length === 0 &&
              <p className="text-xs text-text-muted mt-2">
                    Add at least one image to your project.
                  </p>
              }
              </div>

              <button
              type="submit"
              disabled={
              !title.trim() || !location.trim() || draftImages.length === 0
              }
              className={`w-full font-semibold py-3.5 rounded-xl transition-all ${title.trim() && location.trim() && draftImages.length > 0 ? 'bg-primary text-white shadow-md active:scale-[0.98]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>
              
                Save Project
              </button>
            </motion.form>
          }
        </AnimatePresence>

        {/* Projects List */}
        {projects.length === 0 && !showForm ?
        <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <FolderOpen size={26} />
            </div>
            <h3 className="text-lg font-bold text-text mb-1">
              No projects yet
            </h3>
            <p className="text-text-muted text-sm mb-5">
              Showcase your work to win more jobs.
            </p>
            <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm">
            
              <Plus size={16} /> Add Your First Project
            </button>
          </div> :

        <div className="space-y-5">
            {projects.map((project) =>
          <motion.div
            key={project.id}
            layout
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-text text-base">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-text-muted mt-0.5">
                      <MapPin size={12} /> {project.location}
                    </div>
                  </div>
                  <button
                onClick={() => deleteProject(project.id)}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {project.images.map((img, i) =>
              <img
                key={i}
                src={img}
                alt={`${project.title} ${i + 1}`}
                className="w-full aspect-square object-cover rounded-xl" />

              )}
                </div>
                <div className="mt-2 text-[11px] text-text-muted font-medium">
                  {project.images.length}{' '}
                  {project.images.length === 1 ? 'image' : 'images'}
                </div>
              </motion.div>
          )}
          </div>
        }
      </div>
    </div>);

}