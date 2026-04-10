'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Leaf, Cpu } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Hero() {
  // Logic for the Recycling Meter
  const [count, setCount] = useState(0);
  const target = 1500; // Tons
  const meterRef = useRef(null);
  const isInView = useInView(meterRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-24 pt-32 lg:pb-32 lg:pt-48"
    >
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/fundo-gtech.jpeg"
          alt="Galpão GTech"
          className="h-full w-full object-cover"
        />
        {/* Light gradient overlay to preserve readability and B2B tone */}
        <div className="absolute inset-0 bg-white/85 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/40 sm:to-transparent"></div>
      </div>

      {/* Decorative gradients */}
      <div className="bg-primary/20 pointer-events-none absolute right-0 top-0 -mr-40 -mt-40 h-[600px] w-[600px] rounded-full blur-[100px]"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 -mb-40 -ml-40 h-[500px] w-[500px] rounded-full bg-slate-100 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center space-x-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 shadow-sm"
            >
              <ShieldCheck className="h-4 w-4 text-primary-dark" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Conformidade e Segurança Jurídica
              </span>
            </motion.div>

            <h1 className="mb-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-7xl">
              Recuperamos valor,{' '}
              <span className="text-primary-dark">protegemos marcas</span> e
              preservamos o futuro.
            </h1>
            <p className="mb-10 max-w-2xl text-balance text-lg text-slate-500 sm:text-xl">
              Transformamos o descarte eletrônico corporativo em um ativo
              estratégico. Promovemos a economia circular com mais de 95% de
              reaproveitamento, garantindo governança inquestionável.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/5511988389974"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 font-bold text-white shadow-[0_4px_14px_rgba(156,192,38,0.4)] transition-all hover:-translate-y-1 hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(156,192,38,0.6)]"
              >
                Falar com Especialista B2B{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/sobre-nos"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 shadow-sm transition-colors hover:-translate-y-1 hover:bg-slate-50"
              >
                Conheça a GTech
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-600 shadow-sm">
                  +
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-300 shadow-sm"></div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-400 shadow-sm"></div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-primary font-bold text-white shadow-sm"></div>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Operação validada por{' '}
                <span className="font-extrabold tracking-wide text-slate-800">
                  + de 400 clientes
                </span>{' '}
                em todo país.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:col-span-5 lg:block"
            ref={meterRef}
          >
            {/* Impact Meter Card Replacing the previous faux-dashboard */}
            <div className="border-primary-light relative flex h-[500px] flex-col justify-between overflow-hidden rounded-3xl border bg-primary shadow-[0_20px_50px_rgba(156,192,38,0.3)]">
              {/* Card Background Effects */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,_white_10%,_transparent_10%)] bg-[length:16px_16px] opacity-10"></div>
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-[50px]"></div>

              <div className="relative z-20 flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="mb-8 rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-md">
                  <Cpu className="h-10 w-10 text-white" />
                </div>

                <h2 className="mb-6 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-white/90">
                  <Leaf className="h-4 w-4" /> Nosso Impacto Ambiental
                </h2>

                <div className="mb-6 flex flex-col items-center justify-center">
                  <div className="flex items-start leading-none text-white">
                    <span className="mt-2 text-4xl font-extrabold">+</span>
                    <span className="mx-1 text-7xl font-black tabular-nums tracking-tighter drop-shadow-md">
                      {count.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <span className="mt-2 text-2xl font-bold uppercase tracking-widest text-white">
                    Toneladas
                  </span>
                </div>

                <p className="mt-4 max-w-sm px-4 text-base font-medium text-white/90">
                  Recuperadas e reinseridas na cadeia produtiva, menos mineração
                  e mais segurança.
                </p>
              </div>

              {/* R2v3 Badge Bottom */}
              <div className="relative z-20 flex w-full items-center justify-between border-t border-white/20 bg-emerald-950/20 p-4 backdrop-blur-sm">
                <span className="text-sm font-bold text-white/90">
                  Certificação Ouro Global
                </span>
                <div className="rounded border border-white/40 bg-white px-3 py-1 text-xs font-black uppercase text-primary-dark shadow-sm">
                  R2v3
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
