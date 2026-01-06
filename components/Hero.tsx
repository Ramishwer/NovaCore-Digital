
import React from 'react';
import { View } from '../App';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 blur-[120px] rounded-full opacity-50"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-emerald-100 blur-[100px] rounded-full opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Digital Frontier</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          NovaCore Digital provides end-to-end technology solutions for enterprises ready to lead the next era of industrial innovation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => onNavigate('contact')} 
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1"
          >
            Start Your Project
          </button>
          <button 
            onClick={() => onNavigate('services')} 
            className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-semibold rounded-lg shadow-sm hover:bg-slate-50 transition-all transform hover:-translate-y-1"
          >
            Explore Services
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center justify-center font-bold text-xl tracking-widest">TECHCORP</div>
          <div className="flex items-center justify-center font-bold text-xl tracking-widest">SOLARIS</div>
          <div className="flex items-center justify-center font-bold text-xl tracking-widest">QUANTUM</div>
          <div className="flex items-center justify-center font-bold text-xl tracking-widest">VENTURE</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
