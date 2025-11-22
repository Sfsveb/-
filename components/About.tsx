import React from 'react';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white inline-block border-b-4 border-brand pb-2">
            {ABOUT_CONTENT.title}
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed text-neutral-300 font-light">
            "{ABOUT_CONTENT.text}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;