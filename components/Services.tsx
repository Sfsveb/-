import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">My Services</h2>
          <p className="text-neutral-400 text-lg">Premium creative solutions tailored for your brand</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-brand/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <service.icon size={100} />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-neutral-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-brand transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;