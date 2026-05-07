'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

export default function ManifestoSection() {
  const { lang } = useLanguage();
  const b1 = translations.manifesto.block1;
  const b2 = translations.manifesto.block2;

  return (
    <>
      {/* BLOCO 1: Design Verde — Fundo branco */}
      <section className="relative overflow-hidden bg-white py-0">
        <div className="grid min-h-[600px] lg:grid-cols-2">
          {/* Coluna Esquerda: Texto Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-center bg-white px-8 py-20 lg:px-16 xl:px-24"
          >
            <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.25em] text-primary">
              {t(b1.eyebrow, lang)}
            </span>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-800 lg:text-5xl xl:text-6xl">
              {t(b1.title1, lang)}{' '}
              <span className="text-primary-dark">{t(b1.title2, lang)}</span>{' '}
              {t(b1.title3, lang)}
            </h2>
            <p className="mb-4 max-w-lg text-lg leading-relaxed text-slate-600">
              {t(b1.p1, lang)}
            </p>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-600">
              {t(b1.p2_prefix, lang)}{' '}
              <strong className="text-slate-800">
                {t(b1.p2_highlight, lang)}
              </strong>
              {t(b1.p2_suffix, lang)}
            </p>
            <Link
              href="/servicos"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary-dark px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-primary hover:shadow-[0_8px_24px_rgba(63,171,54,0.4)]"
            >
              {t(b1.cta, lang)} <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          {/* Coluna Direita: Design Verde */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative flex items-center justify-center bg-slate-50 p-8 lg:p-16"
          >
            <div className="from-primary/5 to-primary-dark/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
            <img
              src="/images/design verde.png"
              alt="Tecnologia e Natureza — GTech"
              className="relative z-10 w-full max-w-xl drop-shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* BLOCO 2: Fundo Verde Escuro */}
      <section className="relative overflow-hidden bg-primary-deep py-0">
        <div className="grid min-h-[600px] lg:grid-cols-2">
          {/* Coluna Esquerda: Design Branco */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative order-2 flex items-center justify-center p-8 lg:order-1 lg:p-16"
          >
            <div className="from-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-tr via-transparent to-white/5" />
            <img
              src="/images/design branco.png"
              alt="Economia Circular — GTech"
              className="relative z-10 w-full max-w-xl opacity-80"
            />
          </motion.div>

          {/* Coluna Direita: Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-1 flex flex-col justify-center px-8 py-20 lg:order-2 lg:px-16 xl:px-24"
          >
            <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.25em] text-primary">
              {t(b2.eyebrow, lang)}
            </span>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-5xl xl:text-6xl">
              {t(b2.title1, lang)}{' '}
              <span className="text-primary">{t(b2.title2, lang)}</span>{' '}
              {t(b2.title3, lang)}
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/80">
              {t(b2.description, lang)}
            </p>

            {/* Mini métricas */}
            <div className="mb-10 grid grid-cols-2 gap-4">
              {b2.metrics.map((item) => (
                <div
                  key={item.value}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="text-2xl font-black text-primary">
                    {item.value}
                  </div>
                  <div className="text-sm font-medium text-white/70">
                    {t(item.label, lang)}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/fale-conosco"
              className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/20"
            >
              {t(b2.cta, lang)} <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
