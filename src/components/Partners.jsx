'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Atlas Schindler', logo: '/images/atlas-schindler-logo.jpg' },
  { name: 'Ipiranga', logo: '/images/Ipiranga_logo.png' },
  { name: 'Flex', logo: '/images/Flex_logo.png' },
  { name: 'OAB', logo: '/images/OAB_logo.png' },
  { name: 'Verifone', logo: '/images/verifone-logo.png' },
  { name: 'Toyota', logo: '/images/Toyota.png' },
  { name: 'Serasa Experian', logo: '/images/serasa_logo.png' },
  { name: 'Samsung', logo: '/images/samsung_logo.jpg' },
  { name: 'Volkswagen', logo: '/images/Volkswagen_logo.png' },
];

// Duplicating the array to create a seamless infinite loop
const infinitePartners = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-16">
      <div className="mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
          Confira alguns parceiros GTech
        </h3>
      </div>

      <div className="relative flex w-full items-center">
        {/* Gradients to fade edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-transparent"></div>

        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
        >
          {infinitePartners.map((partner, index) => (
            <div
              key={index}
              className="mx-8 flex h-12 w-32 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 lg:h-16 lg:w-48"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
