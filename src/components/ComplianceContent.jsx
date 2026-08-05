'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Shield, ClipboardList, Mail, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ISO_IMAGES = [
  {
    image: '/images/iso-9001.png',
    alt: 'ISO 9001',
    file: '/Arquivos/iso-9001.pdf',
  },
  {
    image: '/images/iso-14001.png',
    alt: 'ISO 14001',
    file: '/Arquivos/iso-14001.pdf',
  },
  {
    image: '/images/iso-45001.png',
    alt: 'ISO 45001',
    file: '/Arquivos/iso-45001.pdf',
  },
];

const DOC_ICONS = [Shield, ClipboardList];
const DOC_FILES = [
  '/Arquivos/codigo-de-etica.pdf',
  '/Arquivos/politica-integrada.pdf',
];

export default function ComplianceContent() {
  const { lang } = useLanguage();
  const tx = translations.compliance;

  const isoCerts = tx.iso_certs.map((cert, i) => ({
    ...cert,
    ...ISO_IMAGES[i],
    description: t(cert.description, lang),
  }));

  const institutionalDocs = tx.institutional_docs.map((doc, i) => ({
    icon: DOC_ICONS[i],
    title: t(doc.title, lang),
    description: t(doc.description, lang),
    file: DOC_FILES[i],
  }));

  return (
    <div className="relative flex-grow overflow-hidden bg-white">
      {/* =================== HERO =================== */}
      <div className="relative overflow-hidden bg-slate-50 pb-20 pt-32 lg:pb-28 lg:pt-[136px]">
        {/* Design Verde — Lado Esquerdo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="pointer-events-none absolute left-0 top-0 z-[1] h-[700px] w-full max-w-[70%] select-none lg:h-[800px] lg:max-w-[50%]"
          style={{
            maskImage:
              'radial-gradient(ellipse at top left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at top left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)',
          }}
        >
          <Image
            src="/images/design verde.webp"
            alt=""
            fill
            sizes="50vw"
            className="object-cover object-left-top opacity-[0.15] mix-blend-multiply"
          />
        </motion.div>

        {/* Glow bg */}
        <div className="bg-primary/5 pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <motion.span
              variants={itemVariants}
              className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary"
            >
              {t(tx.hero_eyebrow, lang)}
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl"
            >
              {t(tx.hero_title, lang)}{' '}
              <span className="relative">
                <span className="relative z-10 text-primary">
                  {t(tx.hero_title_highlight, lang)}
                </span>
                <span className="bg-primary/30 absolute -bottom-1 left-0 right-0 h-1 rounded-full" />
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl"
            >
              {t(tx.hero_description, lang)}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* =================== SEÇÃO CERTIFICAÇÕES =================== */}
      <section className="bg-white py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-primary">
              {t(tx.certs_eyebrow, lang)}
            </span>
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900 lg:text-4xl">
              {t(tx.certs_title, lang)}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              {t(tx.certs_description, lang)}
            </p>
          </motion.div>

          {/* ISO Cards — grid 3 colunas */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {isoCerts.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="hover:border-primary/30 group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-6 flex h-32 items-center justify-center">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    width={110}
                    height={110}
                    className="h-28 w-auto object-contain transition-transform group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <h3 className="mb-3 text-xl font-extrabold text-slate-900">
                  {cert.name}
                </h3>
                <p className="mb-8 flex-1 text-center text-sm leading-relaxed text-slate-600">
                  {cert.description}
                </p>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:shadow-primary/20 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md"
                >
                  <Download className="h-4 w-4" />
                  {t(tx.download_cert, lang)}
                </a>
              </motion.div>
            ))}
          </div>

          {/* R2v3 — Card destaque centralizado */}
          <motion.div
            variants={itemVariants}
            className="group relative mx-auto max-w-3xl overflow-hidden rounded-3xl border-2 border-primary bg-gradient-to-br from-slate-900 to-primary-deep p-10 shadow-2xl lg:p-14"
          >
            {/* Glow decorativo */}
            <div className="bg-primary/20 pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full blur-[60px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/5 blur-[50px]" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Badge */}
              <span className="border-primary/40 bg-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-primary">
                <Award className="h-4 w-4" />
                {t(tx.r2v3_badge, lang)}
              </span>

              {/* Selo */}
              <div className="mb-6 flex h-36 items-center justify-center">
                <a
                  href="https://sustainableelectronics.org/r2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contents"
                >
                  <Image
                    src="/images/R2v3-selo.png"
                    alt="Selo R2v3"
                    width={120}
                    height={120}
                    className="h-32 w-auto object-contain transition-transform group-hover:scale-105"
                    unoptimized
                  />
                </a>
              </div>

              <h3 className="mb-4 text-3xl font-extrabold text-white lg:text-4xl">
                {t(tx.r2v3_title, lang)}
              </h3>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80">
                {t(tx.r2v3_description, lang)}
              </p>

              <a
                href="/Arquivos/r2v3-certificado.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:shadow-primary/20 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md"
              >
                <Download className="h-4 w-4" />
                {t(tx.download_cert, lang)}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =================== SEÇÃO DOCUMENTOS INSTITUCIONAIS =================== */}
      <section className="bg-slate-50 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-primary">
              {t(tx.docs_eyebrow, lang)}
            </span>
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900 lg:text-4xl">
              {t(tx.docs_title, lang)}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              {t(tx.docs_description, lang)}
            </p>
          </motion.div>

          {/* 2 cards lado a lado */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {institutionalDocs.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="hover:border-primary/30 group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg lg:p-10"
                >
                  {/* Ícone */}
                  <div className="bg-primary/10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 text-xl font-extrabold text-slate-900">
                    {doc.title}
                  </h3>
                  <p className="mb-8 flex-1 leading-relaxed text-slate-600">
                    {doc.description}
                  </p>

                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:shadow-primary/20 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md"
                  >
                    <Download className="h-4 w-4" />
                    {t(tx.download_doc, lang)}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* =================== SEÇÃO CANAL DE COMUNICAÇÃO =================== */}
      <section
        className="relative overflow-hidden py-24"
        style={{ backgroundColor: '#015637' }}
      >
        {/* Glow decorativo */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-[80px]" />
        <div className="bg-primary/20 pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full blur-[60px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        >
          <motion.span
            variants={itemVariants}
            className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary"
          >
            {t(tx.channel_eyebrow, lang)}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mb-8 text-3xl font-extrabold text-white lg:text-5xl"
          >
            {t(tx.channel_title, lang)}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl rounded-xl border-l-4 border-primary bg-white/5 p-8 backdrop-blur-sm"
          >
            <p className="text-lg leading-relaxed text-white/90">
              {t(tx.channel_description_prefix, lang)}{' '}
              <strong className="font-bold text-primary">
                {t(tx.channel_ethical, lang)}
              </strong>
              ,{' '}
              <strong className="font-bold text-primary">
                {t(tx.channel_conduct, lang)}
              </strong>
              ,{' '}
              <strong className="font-bold text-primary">
                {t(tx.channel_integrity, lang)}
              </strong>
              ,{' '}
              <strong className="font-bold text-primary">
                {t(tx.channel_harassment, lang)}
              </strong>{' '}
              {t(tx.channel_description_suffix, lang)}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4"
          >
            <a
              href="mailto:rh@gtechsolucoes.com.br"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-primary-deep shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
            >
              <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
              rh@gtechsolucoes.com.br
            </a>
            <span className="text-sm text-white/50">
              rh@gtechsolucoes.com.br
            </span>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
