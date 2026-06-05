import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useScreenInit } from '../useScreenInit';
export function Splash() {
  useScreenInit();
  const navigate = useNavigate();
  return (
    <div className="h-full w-full bg-primary flex flex-col items-center justify-center relative px-6">
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut'
        }}
        className="flex flex-col items-center">
        
        <div className="w-24 h-24 bg-surface rounded-3xl flex items-center justify-center shadow-float mb-6 relative overflow-hidden">
          <ShieldCheck size={48} className="text-primary" strokeWidth={1.5} />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent"
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'linear'
            }} />
          
        </div>

        <h1 className="text-4xl font-bold text-white tracking-tight mb-3">
          Werkorah
        </h1>
        <p className="text-primary-light text-center font-medium text-lg max-w-[250px] leading-snug">
          Find Trusted Artisans. Get Work Done. Securely.
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.8
        }}
        className="absolute bottom-12 w-full px-6">
        
        <button
          onClick={() => navigate('/onboarding')}
          className="w-full bg-white text-primary font-semibold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-transform">
          
          Continue
        </button>
      </motion.div>
    </div>);

}