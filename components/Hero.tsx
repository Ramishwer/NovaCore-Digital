
import React from 'react';
import { View } from '../App';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 blur-[140px] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100 blur-[120px] rounded-full opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8 border border-blue-100">
          ✨ Leading the 2024 Tech Shift
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tighter mb-8 leading-[0.9]">
          Architecting the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Digital Frontier</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          NovaCore Digital provides end-to-end technology solutions for enterprises ready to lead the next era of industrial innovation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => onNavigate('contact')} 
            className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-2xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Start Your Project
          </button>
          <button 
            onClick={() => onNavigate('services')} 
            className="px-10 py-5 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl shadow-sm hover:bg-slate-50 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Explore Services
          </button>
        </div>
        
        <div className="mt-24 pt-12 border-t border-slate-200">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">Trusted by Forward-Thinking Brands</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 items-center">
            <div className="text-2xl font-black text-slate-900 tracking-widest">TECHCORP</div>
            <div className="text-2xl font-black text-slate-900 tracking-widest">SOLARIS</div>
            <div className="text-2xl font-black text-slate-900 tracking-widest">QUANTUM</div>
            <div className="text-2xl font-black text-slate-900 tracking-widest">VENTURE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
