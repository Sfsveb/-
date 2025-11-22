import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-brand font-semibold tracking-widest uppercase mb-4 text-sm animate-fade-in-up">
              {HERO_CONTENT.greeting}
            </h2>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
              {HERO_CONTENT.name}
            </h1>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
               {HERO_CONTENT.roles.map((role, index) => (
                 <span key={index} className="px-4 py-1.5 rounded-full border border-neutral-700 text-neutral-300 text-sm font-medium bg-neutral-900/50">
                   {role}
                 </span>
               ))}
            </div>
            <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {HERO_CONTENT.description}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-brand hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-white/10"
            >
              {HERO_CONTENT.cta}
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Image/Graphic Content */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
             <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
                <div className="absolute inset-0 border-2 border-neutral-800 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }}></div>
                <div className="absolute inset-4 border border-neutral-800 rounded-full animate-spin-slow-reverse" style={{ animationDuration: '20s' }}></div>
                <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt="Ashraf Saber" 
                  className="absolute inset-0 w-full h-full object-cover rounded-full border-8 border-neutral-950 grayscale hover:grayscale-0 transition-all duration-700 z-10"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;