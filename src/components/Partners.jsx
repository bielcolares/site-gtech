'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  'Atlas Schindler',
  'Ipiranga',
  'Flex',
  'OAB',
  'Verifone',
  'Toyota',
  'Serasa Experian',
  'Samsung',
  'Volkswagen',
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
              className="mx-8 cursor-default select-none text-2xl font-extrabold text-slate-300 transition-colors duration-500 hover:text-slate-800 md:text-3xl lg:mx-16 lg:text-4xl"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
