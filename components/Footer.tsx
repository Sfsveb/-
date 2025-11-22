import React from 'react';
import { FOOTER_TEXT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-neutral-900">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold tracking-tighter text-white mb-6">
          AS<span className="text-brand">.</span>
        </h3>
        <p className="text-neutral-500 text-sm">
          {FOOTER_TEXT}
        </p>
      </div>
    </footer>
  );
};

export default Footer;