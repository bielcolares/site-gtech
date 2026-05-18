'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Network,
  SearchCheck,
  Factory,
  ArrowRight,
  Shield,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

export default function ServicosContent() {
  const { lang } = useLanguage();
  const tx = translations.services;
  const [activeCert, setActiveCert] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };
  const slideRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };
  const slideLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const certData = tx.certs_data;

  return (
    <div className="flex-grow overflow-hidden bg-white pb-24">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 pb-16 pt-32 lg:pb-24 lg:pt-[136px]">
        <div className="from-primary/20 pointer-events-none absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-30"></div>
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
          <Image
            src="/images/design verde.webp"
            alt=""
            fill
            sizes="50vw"
            className="object-cover object-right-top opacity-[0.15] mix-blend-multiply"
          />
        </motion.div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={fadeUp}
              className="mb-6 text-balance text-4xl font-extrabold tracking-tight text-slate-800 md:text-6xl"
            >
              {t(tx.hero_title1, lang)}{' '}
              <span className="text-primary-dark">
                {t(tx.hero_title2, lang)}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mb-10 max-w-3xl text-balance text-xl leading-relaxed text-slate-600"
            >
              {t(tx.hero_description, lang)}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/fale-conosco"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-white shadow-[0_4px_14px_rgba(156,192,38,0.4)] transition-transform hover:-translate-y-1 hover:bg-primary-dark"
              >
                {t(tx.hero_cta, lang)} <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── S1: Urban Mining ─── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideRight}
              className="order-2 lg:order-1"
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3 text-primary-dark shadow-sm">
                <Network className="h-8 w-8" />
              </div>
              <h2 className="mb-6 text-balance text-3xl font-extrabold text-slate-800 lg:text-5xl">
                {t(tx.s1_title, lang)}
              </h2>
              <p className="mb-6 text-balance text-lg leading-relaxed text-slate-600">
                {t(tx.s1_p1_prefix, lang)}{' '}
                <strong>{t(tx.s1_p1_strong1, lang)}</strong>{' '}
                {t(tx.s1_p1_mid, lang)}{' '}
                <strong>{t(tx.s1_p1_strong2, lang)}</strong>
                {t(tx.s1_p1_suffix, lang)}
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/20 mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="h-2 w-2 rounded-full bg-primary-dark"></div>
                  </div>
                  <span className="font-medium text-slate-700">
                    {t(tx.s1_li1, lang)} <strong>95%</strong>{' '}
                    {lang === 'pt' ? 'na prática.' : 'in practice.'}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="h-2 w-2 rounded-full bg-primary-dark"></div>
                  </div>
                  <span className="font-medium text-slate-700">
                    {t(tx.s1_li2, lang)}
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideLeft}
              className="order-1 hidden md:block lg:order-2"
            >
              <div className="relative flex h-[450px] w-full items-center justify-center">
                <div className="absolute inset-4 flex items-center justify-center overflow-hidden rounded-3xl border border-slate-200 shadow-inner sm:inset-10">
                  <Image
                    src="/images/fundo-gtech-2.webp"
                    alt="Operação GTech"
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/60"></div>
                </div>
                <div className="absolute bottom-20 left-0 z-20 w-64 -rotate-3 transform rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-transform hover:z-30 hover:rotate-0">
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <Network className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {t(tx.s1_card_label, lang)}
                      </p>
                      <p className="font-bold text-slate-800">
                        {t(tx.s1_card_title, lang)}
                      </p>
                    </div>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[100%] bg-slate-800"></div>
                  </div>
                </div>
                <div className="relative z-20 ml-auto w-72 translate-x-4 translate-y-12 transform rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_40px_rgba(156,192,38,0.4)] transition-transform hover:-translate-y-1">
                  <span className="mb-1 block text-6xl font-black tracking-tighter text-primary-dark">
                    +95%
                  </span>
                  <span className="text-sm font-extrabold uppercase tracking-widest text-slate-800">
                    {t(tx.s1_metric_label, lang)}
                  </span>
                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="text-sm font-semibold leading-snug text-slate-600">
                      {t(tx.s1_metric_desc, lang)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Catalog Grid ─── */}
      <section className="relative overflow-hidden bg-[#015637] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_10%,_transparent_10%)] bg-[length:24px_24px] opacity-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-primary opacity-20 blur-[150px]"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 inline-flex flex-wrap items-center justify-center gap-4 text-3xl font-extrabold tracking-tight text-white lg:text-5xl">
              {t(tx.catalog_title, lang)}
              <Image
                src="/images/logo branco.png"
                alt="Gtech"
                width={56}
                height={56}
                className="h-10 w-auto object-contain lg:h-14"
                unoptimized
              />
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-lg text-slate-200">
              {t(tx.catalog_description, lang)}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {tx.catalog_items.map((svc, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className={`group flex flex-col rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg ${
                  i === 0
                    ? 'border-primary/30 items-center justify-center bg-gradient-to-br from-slate-50 to-white p-8 text-center shadow-sm md:col-span-2 lg:col-span-3 lg:p-12'
                    : 'items-start border-slate-200 bg-white p-8 text-left'
                } ${t(svc.title, lang) === 'Data Wipe' ? 'lg:col-start-2' : ''}`}
              >
                <div
                  className={`mb-4 inline-flex rounded border px-3 py-1 text-sm font-extrabold uppercase tracking-wider transition-colors ${
                    i === 0
                      ? 'border-primary bg-primary text-white'
                      : 'bg-primary/10 border-primary/20 text-primary-dark group-hover:bg-primary group-hover:text-white'
                  }`}
                >
                  {t(svc.title, lang)}
                </div>
                <p
                  className={`font-medium leading-relaxed ${i === 0 ? 'mx-auto max-w-5xl text-base text-slate-700 md:text-lg' : 'text-sm text-slate-600'}`}
                >
                  {t(svc.desc, lang)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── S2: Legal Security ─── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideRight}
              className="relative hidden md:block"
            >
              <div className="relative flex aspect-square flex-col items-center justify-center gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-12 shadow-lg">
                <Shield className="center absolute h-32 w-32 text-primary-dark opacity-10" />
                {['ISO 9001', 'ISO 14001', 'ISO 45001'].map((iso) => (
                  <div
                    key={iso}
                    className="relative z-10 flex w-full items-center justify-between rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-transform hover:scale-105"
                  >
                    <span className="font-bold text-slate-800">{iso}</span>
                    <SearchCheck className="h-5 w-5 text-primary-dark" />
                  </div>
                ))}
                {/* <div className="relative z-10 flex w-full scale-105 transform items-center justify-between rounded-xl bg-primary p-4 shadow-[0_4px_15px_rgba(156,192,38,0.4)]">
                  <span className="font-black text-white">
                    {lang === 'pt' ? 'Certificação R2v3' : 'R2v3 Certification'}
                  </span>
                  <Shield className="h-5 w-5 text-white" />
                </div> */}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideLeft}
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3 text-primary-dark shadow-sm">
                <SearchCheck className="h-8 w-8" />
              </div>
              <h2 className="mb-6 text-balance text-3xl font-extrabold text-slate-800 lg:text-5xl">
                {t(tx.s2_title, lang)}
              </h2>
              <p className="mb-6 text-balance text-lg leading-relaxed text-slate-600">
                {t(tx.s2_p1_prefix, lang)}{' '}
                <strong>{t(tx.s2_p1_strong, lang)}</strong>{' '}
                {t(tx.s2_p1_suffix, lang)}
              </p>
              <div className="mb-6 rounded-r-xl border-l-4 border-primary bg-slate-50 p-6 italic text-slate-700 shadow-sm">
                {t(tx.s2_quote, lang)}
              </div>
              <p className="font-medium text-slate-600">
                {t(tx.s2_suffix, lang)}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── S3: Industrial Scale ─── */}
      <section className="border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-primary-dark shadow-sm">
              <Factory className="h-8 w-8" />
            </div>
            <h2 className="mb-6 text-balance text-3xl font-extrabold text-slate-800 lg:text-5xl">
              {t(tx.s3_title, lang)}
            </h2>
            <p className="text-balance text-lg text-slate-600">
              {t(tx.s3_p_prefix, lang)}{' '}
              <strong>{t(tx.s3_p_strong, lang)}</strong>{' '}
              {t(tx.s3_p_suffix, lang)}{' '}
              <strong>{t(tx.s3_p_strong2, lang)}</strong>
            </p>
          </motion.div>

          <div className="relative z-10 grid gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="hover:border-primary/50 group rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 transition-colors group-hover:bg-primary group-hover:text-white">
                <Network className="h-8 w-8 text-primary-dark group-hover:text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-extrabold text-slate-800">
                {t(tx.s3_reee_title, lang)}
              </h3>
              <p className="mb-8 text-lg text-slate-600">
                {t(tx.s3_reee_desc, lang)}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              className="hover:border-primary/50 group rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 transition-colors group-hover:bg-primary group-hover:text-white">
                <Factory className="h-8 w-8 text-primary-dark group-hover:text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-extrabold text-slate-800">
                {t(tx.s3_nf_title, lang)}
              </h3>
              <p className="mb-8 text-lg text-slate-600">
                {t(tx.s3_nf_desc, lang)}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Certifications ─── */}
      <section className="border-t border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-800 lg:text-4xl">
              {t(tx.certs_title, lang)}
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-600">
              {t(tx.certs_description, lang)}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {certData.map((cert) => (
              <motion.button
                key={cert.id}
                variants={fadeUp}
                onClick={() => setActiveCert(cert)}
                className="group flex w-full flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg focus:outline-none"
              >
                <Image
                  src={cert.logo}
                  alt={cert.alt}
                  width={96}
                  height={96}
                  className="mb-6 h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
                <span className="text-sm font-bold text-slate-700">
                  {cert.alt}
                </span>
                <span className="mt-1 text-xs font-medium text-slate-500">
                  {t(cert.subtitle, lang)}
                </span>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-dark opacity-0 transition-opacity group-hover:opacity-100">
                  {t(tx.certs_see, lang)}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Cert Modal ─── */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setActiveCert(null)}
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${activeCert.badgeColor}`}
              >
                {t(activeCert.badge, lang)}
              </span>
              <button
                onClick={() => setActiveCert(null)}
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="px-8 py-8">
              <div className="mb-6 flex items-center gap-6">
                <Image
                  src={activeCert.logo}
                  alt={activeCert.alt}
                  width={80}
                  height={80}
                  className="h-20 w-auto flex-shrink-0 object-contain"
                  unoptimized
                />
                <div>
                  <h3 className="text-xl font-extrabold leading-tight text-slate-800">
                    {t(activeCert.title, lang)}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    {t(activeCert.subtitle, lang)}
                  </p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-slate-700">
                {t(activeCert.body, lang)}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-8 py-4">
              <span className="text-sm text-slate-500">
                {t(tx.modal_footer, lang)}
              </span>
              <a
                href="#whatsapp"
                onClick={() => setActiveCert(null)}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark"
              >
                {t(tx.modal_cta, lang)}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
