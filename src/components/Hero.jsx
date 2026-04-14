'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-slate-50 pb-16 pt-32 lg:pb-24 lg:pt-[136px]"
    >
      {/* Design Verde — Lado Direito, Degradê Direita para Esquerda e Cima para Baixo */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="pointer-events-none absolute bottom-0 right-0 top-0 z-[1] w-full max-w-[70%] select-none lg:max-w-[50%]"
        style={{
          maskImage:
            'radial-gradient(ellipse at top right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at top right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
        }}
      >
        <img
          src="/images/design verde.png"
          alt=""
          className="h-full w-full object-cover object-right-top opacity-[0.15] mix-blend-multiply"
        />
      </motion.div>

      {/* Decorative gradients */}
      <div className="bg-primary/20 pointer-events-none absolute right-0 top-0 -mr-40 -mt-40 h-[600px] w-[600px] rounded-full blur-[100px]"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 -mb-40 -ml-40 h-[500px] w-[500px] rounded-full bg-slate-100 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 max-w-3xl lg:col-span-8"
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
              <a
                href="#whatsapp"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 font-bold text-white shadow-[0_4px_14px_rgba(156,192,38,0.4)] transition-all hover:-translate-y-1 hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(156,192,38,0.6)]"
              >
                Falar com Especialista B2B{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
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

          {/* Robô GTech — lado direito, acima do design verde */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative z-10 hidden items-center justify-center lg:col-span-4 lg:flex"
          >
            <motion.img
              src="/images/robo_gtech.png"
              alt="Robô GTech — tecnologia e inovação na gestão de resíduos"
              className="w-full drop-shadow-2xl"
              style={{
                marginTop: '-100px',
                marginBottom: '-100px',
                maxWidth: '520px',
              }}
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
