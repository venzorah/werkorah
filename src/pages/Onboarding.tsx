import React, { useState, createElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';
import { useScreenInit } from '../useScreenInit';
const slides = [
{
  id: 1,
  title: 'Find verified artisans near you.',
  description:
  'Browse through hundreds of background-checked professionals in your area ready to help.',
  icon: Search,
  color: 'bg-blue-100 text-blue-600'
},
{
  id: 2,
  title: 'Compare prices and portfolios.',
  description:
  'View past work, read real reviews, and get transparent pricing before you book.',
  icon: ShieldCheck,
  color: 'bg-amber-100 text-amber-600'
},
{
  id: 3,
  title: 'Pay securely through Werkorah.',
  description:
  'Your money is held safely in escrow until the job is completed to your satisfaction.',
  icon: CreditCard,
  color: 'bg-teal-100 text-teal-600'
}];

export function Onboarding() {
  useScreenInit();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      navigate('/login');
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  return (
    <div className="h-full w-full bg-surface flex flex-col px-6 pt-12 pb-8">
      <div className="flex justify-end mb-8">
        <button
          onClick={() => navigate('/login')}
          className="text-text-muted font-medium px-4 py-2">
          
          Skip
        </button>
      </div>

      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -20
            }}
            transition={{
              duration: 0.3
            }}
            className="flex flex-col items-center text-center h-full justify-center pb-20">
            
            <div
              className={`w-32 h-32 rounded-full ${slides[currentSlide].color} flex items-center justify-center mb-10 shadow-sm`}>
              
              {createElement(slides[currentSlide].icon, {
                size: 64,
                strokeWidth: 1.5
              })}
            </div>
            <h2 className="text-3xl font-bold text-text mb-4 leading-tight">
              {slides[currentSlide].title}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed px-4">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex gap-2">
          {slides.map((_, index) =>
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-slate-200'}`} />

          )}
        </div>

        <button
          onClick={handleNext}
          className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
          
          <ArrowRight size={24} />
        </button>
      </div>
    </div>);

}