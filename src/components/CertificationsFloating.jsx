'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

export default function CertificationsFloating() {
  const { lang } = useLanguage();
  const tx = translations.about;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-24 z-50 hidden md:block"
    >
      <Link
        href="/sobre-nos#certificacoes"
        className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 p-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
      >
        <div className="flex items-center gap-2 px-2">
          <Image
            src="/images/iso-9001.png"
            alt="ISO 9001"
            width={32}
            height={32}
            className="h-8 w-auto object-contain transition-transform group-hover:scale-110"
            unoptimized
          />
          <Image
            src="/images/iso-14001.png"
            alt="ISO 14001"
            width={32}
            height={32}
            className="h-8 w-auto object-contain transition-transform group-hover:scale-110"
            unoptimized
          />
          <Image
            src="/images/iso-45001.png"
            alt="ISO 45001"
            width={32}
            height={32}
            className="h-8 w-auto object-contain transition-transform group-hover:scale-110"
            unoptimized
          />
          {/* <div className="h-6 w-[1px] bg-slate-200" />
          <Image
            src="/images/R2v3-selo.png"
            alt="R2v3"
            width={32}
            height={32}
            className="h-8 w-auto object-contain transition-transform group-hover:scale-110"
            unoptimized
          /> */}
        </div>

        <div className="pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 whitespace-nowrap rounded-xl border border-slate-100 bg-white px-4 py-2 text-xs font-bold text-slate-800 opacity-0 shadow-lg transition-all group-hover:opacity-100">
          {t(tx.certs_title, lang)}
          <div className="border-l-6 border-r-6 border-t-6 absolute bottom-[-6px] left-1/2 h-0 w-0 -translate-x-1/2 transform border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      </Link>
    </motion.div>
  );
}
