'use client';

import React from 'react';
import Image from 'next/image';
import Card from './Card';
import { Award, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

export default function Features() {
  const { lang } = useLanguage();
  const tx = translations.features;

  const features = [
    {
      id: 1,
      icon: (
        <div className="flex items-center gap-3">
          <Image
            src="/images/iso-9001.webp"
            alt="ISO 9001"
            width={40}
            height={40}
            className="h-10 w-auto object-contain mix-blend-multiply drop-shadow-sm"
          />
          <Image
            src="/images/iso-14001.webp"
            alt="ISO 14001"
            width={40}
            height={40}
            className="h-10 w-auto object-contain mix-blend-multiply drop-shadow-sm"
          />
          <Image
            src="/images/iso-45001.webp"
            alt="ISO 45001"
            width={40}
            height={40}
            className="h-10 w-auto object-contain mix-blend-multiply drop-shadow-sm"
          />
          <Image
            src="/images/R2v3-selo.png"
            alt="R2v3"
            width={40}
            height={40}
            className="h-10 w-auto object-contain mix-blend-multiply drop-shadow-sm"
          />
        </div>
      ),
      title: t(tx.items[0].title, lang),
      description: t(tx.items[0].description, lang),
    },
    {
      id: 2,
      icon: <Award className="h-8 w-8 text-primary-dark" />,
      title: t(tx.items[1].title, lang),
      description: t(tx.items[1].description, lang),
    },
    {
      id: 3,
      icon: <Recycle className="h-8 w-8 text-primary-dark" />,
      title: t(tx.items[2].title, lang),
      description: t(tx.items[2].description, lang),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-slate-200 py-24 lg:py-32"
    >
      {/* Background Imagem Galpão */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/fundo-gtech.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <h2 className="mb-3 text-sm font-black uppercase tracking-widest text-primary-dark">
            {t(tx.eyebrow, lang)}
          </h2>
          <p className="mt-2 text-balance text-3xl font-extrabold leading-snug tracking-tight text-slate-800 sm:text-5xl">
            {t(tx.title, lang)}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            {t(tx.description, lang)}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              variants={itemVariants}
              key={feature.id}
              className="hover:border-primary/50 group rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="group-hover:bg-primary/10 group-hover:border-primary/30 mb-8 inline-flex h-16 min-w-[4rem] items-center justify-center rounded-xl border border-slate-100 bg-slate-50 px-3 shadow-inner transition-all group-hover:scale-105">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-800">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
