import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureItem({ feature, isActive }: { feature: Feature, isActive: boolean, key?: React.Key }) {
  return (
    <div 
      className={`min-h-[60vh] flex flex-col justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isActive ? 'opacity-100 scale-100 translate-x-0' : 'opacity-20 scale-95 -translate-x-8'
      }`}
    >
      <div className="relative w-16 h-16 mb-8 group">
        <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur-lg transition-opacity duration-700 ${isActive ? 'opacity-50' : 'opacity-0'}`} />
        <div className={`relative w-full h-full bg-[#020617] backdrop-blur-xl rounded-2xl flex items-center justify-center transition-colors duration-700 border ${isActive ? 'border-indigo-500/50 text-indigo-400' : 'border-white/10 text-white/40'}`}>
          <feature.icon size={30} strokeWidth={1.5} />
        </div>
      </div>
      
      <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter text-transparent bg-clip-text transition-all duration-700 ${isActive ? 'bg-gradient-to-br from-white via-white/90 to-white/40' : 'bg-gradient-to-br from-white/50 to-white/20'}`}>
        {feature.title}
      </h3>
      
      <p className="text-lg md:text-xl text-white/50 max-w-md leading-relaxed mb-10 font-light">
        {feature.description}
      </p>
      
      <button 
        className={`w-fit px-8 py-4 rounded-full border transition-all duration-700 flex items-center gap-3 text-sm tracking-widest uppercase font-medium group ${
          isActive ? 'border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-white shadow-[0_0_30px_rgba(99,102,241,0.15)]' : 'border-white/10 text-white/30 bg-transparent'
        }`}
      >
        Explore Capability
        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${isActive ? 'bg-indigo-400 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]' : 'bg-white/20'}`} />
      </button>
    </div>
  );
}
