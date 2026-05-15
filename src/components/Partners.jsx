'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

const partners = [
  { name: 'Atlas Schindler', logo: '/images/atlas-schindler-logo.webp' },
  { name: 'Ipiranga', logo: '/images/Ipiranga_logo.webp' },
  { name: 'Flex', logo: '/images/Flex_logo.webp' },
  { name: 'OAB', logo: '/images/OAB_logo.png' },
  { name: 'Verifone', logo: '/images/verifone-logo.png' },
  { name: 'Toyota', logo: '/images/Toyota.webp' },
  { name: 'Serasa Experian', logo: '/images/serasa_logo.webp' },
  { name: 'Samsung', logo: '/images/samsung_logo.webp' },
  { name: 'Volkswagen', logo: '/images/Volkswagen_logo.webp' },
];

// Duplicating the array to create a seamless infinite loop
const infinitePartners = [...partners, ...partners];

export default function Partners() {
  const { lang } = useLanguage();
  const tx = translations.partners;

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-16">
      <div className="mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
          {t(tx.title, lang)}
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
              <div className="relative h-full w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="192px"
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
