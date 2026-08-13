'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Wrench,
  Truck,
  Filter,
  CheckSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';
import { trackCtaClick, trackWhatsAppLead } from '@/lib/analytics';

// ─── Dados dos slides ────────────────────────────────────────────────────────
const WA_LINK =
  'https://wa.me/5511989046274?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Tenho%20interesse%20em%20conversar%20com%20um%20especialista.';

const slideConfig = [
  {
    ctaPrimaryHref: WA_LINK,
    ctaPrimaryIsWhatsApp: true,
    ctaSecondaryHref: '/sobre-nos',
    ctaSecondaryIsWhatsApp: false,
    bgImage: '/images/design verde.webp',
    bgType: 'abstract',
    sideImage: '/images/robo_gtech.png',
    sideImageType: 'robot',
    bgAlt: 'Design verde GTech — conformidade e segurança jurídica',
    statsBlockValue: null,
  },
  {
    ctaPrimaryHref: '/sobre-nos',
    ctaPrimaryIsWhatsApp: false,
    ctaSecondaryHref: WA_LINK,
    ctaSecondaryIsWhatsApp: true,
    bgImage: '/images/hub-jundiai-aereo.png',
    bgType: 'full',
    sideImage: null,
    bgAlt: 'Vista aérea do Hub GTech em Jundiaí — 9.300m² de operação segura',
    statsBlockValue: '9.300m²',
  },
  {
    ctaPrimaryHref: '/compliance',
    ctaPrimaryIsWhatsApp: false,
    ctaSecondaryHref: WA_LINK,
    ctaSecondaryIsWhatsApp: true,
    bgImage: '/images/design verde.webp',
    bgType: 'abstract',
    sideImage: null,
    sideImageType: 'process_diagram',
    bgAlt:
      'Processo de reciclagem eletrônica GTech — rastreabilidade MTR, CADRI e CDF',
    statsBlockValue: null,
  },
  {
    ctaPrimaryHref: WA_LINK,
    ctaPrimaryIsWhatsApp: true,
    ctaSecondaryHref: '/sobre-nos',
    ctaSecondaryIsWhatsApp: false,
    bgImage: '/images/fundo-gtech.webp',
    bgType: 'full',
    sideImage: null,
    sideImageType: null,
    bgAlt: 'Fundo GTech — gestão ambiental',
    statsBlockValue: null,
  },
];

// ─── Variantes de animação ────────────────────────────────────────────────────
const slideVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const bgVariants = {
  enter: { opacity: 0 },
  center: { opacity: 0.15 },
  exit: { opacity: 0 },
};

const AUTOPLAY_MS = 15000;
const TRANSITION_S = 0.5;

function renderTitleWithHighlight(title, highlight) {
  if (!highlight || !title.includes(highlight)) return title;
  const parts = title.split(highlight);
  return (
    <>
      {parts[0]}
      <span className="text-primary-dark">{highlight}</span>
      {parts[1]}
    </>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const tx = translations.hero;

  const heroSlides = tx.slides.map((tSlide, index) => {
    const conf = slideConfig[index];
    return {
      ...conf,
      id: tSlide.id,
      eyebrow: t(tSlide.eyebrow, lang),
      title: t(tSlide.title, lang),
      titleHighlight: t(tSlide.titleHighlight, lang),
      subtitle: t(tSlide.subtitle, lang),
      ctaPrimary: {
        label: t(tSlide.ctaPrimaryLabel, lang),
        href: conf.ctaPrimaryHref,
        isWhatsApp: conf.ctaPrimaryIsWhatsApp,
      },
      ctaSecondary: {
        label: t(tSlide.ctaSecondaryLabel, lang),
        href: conf.ctaSecondaryHref,
        isWhatsApp: conf.ctaSecondaryIsWhatsApp,
      },
      customSocialProofSuffix: tSlide.customSocialProofSuffix
        ? t(tSlide.customSocialProofSuffix, lang)
        : null,
      statsBlock: conf.statsBlockValue
        ? {
            value: conf.statsBlockValue,
            label: t(tSlide.statsBlockLabel, lang),
          }
        : null,
    };
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const goTo = useCallback((index) => {
    setActiveIndex(
      ((index % slideConfig.length) + slideConfig.length) % slideConfig.length
    );
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slideConfig.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + slideConfig.length) % slideConfig.length
    );
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex, goNext]);

  const slide = heroSlides[activeIndex];

  return (
    <section
      id="hero"
      className="group relative overflow-hidden bg-slate-50 pb-16 pt-32 lg:pb-24 lg:pt-[136px]"
    >
      {/* ── Fundo dinâmico abstrato (lado direito) ── */}
      <AnimatePresence mode="wait">
        {slide.bgType === 'abstract' && (
          <motion.div
            key={'bg-' + slide.id}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: TRANSITION_S, ease: 'easeInOut' }}
            className="pointer-events-none absolute bottom-0 right-0 top-0 z-[1] w-full max-w-[70%] select-none lg:max-w-[50%]"
            style={{
              maskImage:
                'radial-gradient(ellipse at top right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at top right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
            }}
          >
            <Image
              src={slide.bgImage}
              alt={slide.bgAlt}
              fill
              sizes="50vw"
              className="object-cover object-right-top mix-blend-multiply"
              priority={activeIndex === 0}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Gradientes decorativos fixos ── */}
      <div className="bg-primary/20 pointer-events-none absolute right-0 top-0 -mr-40 -mt-40 h-[600px] w-[600px] rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -mb-40 -ml-40 h-[500px] w-[500px] rounded-full bg-slate-100 blur-[100px]" />

      {/* ── Imagem lateral (Robô ou Foto) ── */}
      <AnimatePresence>
        {slide.sideImage && slide.sideImageType === 'robot' && (
          <motion.div
            key="robot"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 hidden items-center justify-end pr-4 lg:flex xl:pr-8"
            style={{ width: '44%' }}
          >
            <motion.div
              className="relative h-[115%] w-full"
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <Image
                src={slide.sideImage}
                alt="Robô GTech"
                fill
                sizes="44vw"
                className="object-contain object-center drop-shadow-2xl"
                priority
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
        {slide.sideImage && slide.sideImageType === 'photo' && (
          <motion.div
            key="photo"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute bottom-0 right-0 top-0 z-10 hidden items-center justify-end pr-4 lg:flex xl:pr-10"
            style={{ width: '45%' }}
          >
            <div className="relative flex h-[65%] w-full items-center justify-center rounded-2xl drop-shadow-xl">
              <div className="relative h-full w-full">
                <Image
                  src={slide.sideImage}
                  alt={slide.bgAlt}
                  fill
                  sizes="45vw"
                  className="object-contain object-center"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        )}
        {slide.sideImageType === 'process_diagram' && (
          <motion.div
            key="process_diagram"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute bottom-0 right-0 top-0 z-10 hidden items-center justify-end pr-4 lg:flex xl:pr-10"
            style={{ width: '45%' }}
          >
            <div className="relative flex h-auto w-full max-w-[850px] flex-col justify-center rounded-[40px] rounded-tl-[100px] bg-[#1a5f32] p-8 text-white shadow-2xl lg:p-10">
              <div className="relative z-10 grid grid-cols-4 gap-4 md:gap-6">
                {/* SETAS DE CONEXÃO (Absolute/background) */}
                <div className="pointer-events-none absolute left-0 top-[40px] z-0 flex w-full justify-between px-[12%] opacity-50">
                  <ArrowRight className="h-8 w-8 text-white/50 md:h-10 md:w-10" />
                  <ArrowRight className="h-8 w-8 text-white/50 md:h-10 md:w-10" />
                  <ArrowRight className="h-8 w-8 text-white/50 md:h-10 md:w-10" />
                </div>

                {/* STEP 1 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 text-white">
                    <Wrench className="h-12 w-12 md:h-16 md:w-16" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold md:text-xl">
                    {t(tx.process_diagram.step1_title, lang)}
                  </h3>
                  <p className="max-w-[140px] text-xs text-green-50/80 md:text-sm">
                    {t(tx.process_diagram.step1_desc, lang)}
                  </p>
                </div>

                {/* STEP 2 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 text-white">
                    <Truck className="h-12 w-12 md:h-16 md:w-16" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold md:text-xl">
                    {t(tx.process_diagram.step2_title, lang)}
                  </h3>
                  <p className="max-w-[140px] text-xs text-green-50/80 md:text-sm">
                    {t(tx.process_diagram.step2_desc, lang)}
                  </p>
                </div>

                {/* STEP 3 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 text-white">
                    <Filter className="h-12 w-12 md:h-16 md:w-16" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold md:text-xl">
                    {t(tx.process_diagram.step3_title, lang)}
                  </h3>
                  <p className="max-w-[140px] text-xs text-green-50/80 md:text-sm">
                    {t(tx.process_diagram.step3_desc, lang)}
                  </p>
                </div>

                {/* STEP 4 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 inline-flex rounded-xl bg-white p-1 text-white">
                    <CheckSquare className="h-10 w-10 text-[#1a5f32] md:h-14 md:w-14" />
                  </div>
                  <h3 className="mb-3 mt-1 text-lg font-bold md:text-xl">
                    {t(tx.process_diagram.step4_title, lang)}
                  </h3>
                  <p className="max-w-[140px] text-xs text-green-50/80 md:text-sm">
                    {t(tx.process_diagram.step4_desc, lang)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Foto de fundo estendida (full) ── */}
      <AnimatePresence>
        {slide.bgType === 'full' && (
          <motion.div
            key={'fullbg-' + slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: TRANSITION_S, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-0 z-[2] hidden lg:block"
          >
            {/* Overlay gradiente claro na esquerda para garantir leitura do texto escuro */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
            <Image
              src={slide.bgImage}
              alt={slide.bgAlt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Conteúdo principal ── */}
      <div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="grid items-center lg:grid-cols-12">
          <div className="relative z-10 max-w-3xl lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: TRANSITION_S, ease: 'easeOut' }}
              >
                {/* Badge eyebrow */}
                <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 shadow-sm">
                  <ShieldCheck className="h-4 w-4 text-primary-dark" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    {slide.eyebrow}
                  </span>
                </div>

                {/* Título */}
                {activeIndex === 0 ? (
                  <h1 className="mb-4 text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-7xl">
                    {renderTitleWithHighlight(
                      slide.title,
                      slide.titleHighlight
                    )}
                  </h1>
                ) : (
                  <p
                    role="heading"
                    aria-level="2"
                    className="mb-4 text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-7xl"
                  >
                    {renderTitleWithHighlight(
                      slide.title,
                      slide.titleHighlight
                    )}
                  </p>
                )}

                {/* Subtítulo */}
                <p className="mb-8 max-w-2xl text-balance text-lg text-slate-500 sm:text-xl">
                  {slide.subtitle}
                </p>

                {/* Bloco numérico (apenas slide 2) */}
                {slide.statsBlock && (
                  <div className="mb-8 flex items-center space-x-4 border-l-4 border-primary pl-4">
                    <span className="text-4xl font-black tracking-tight text-slate-800">
                      {slide.statsBlock.value}
                    </span>
                    <span className="max-w-[120px] text-sm font-medium leading-tight text-slate-500">
                      {slide.statsBlock.label}
                    </span>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  {slide.ctaPrimary.isWhatsApp ? (
                    <a
                      href={slide.ctaPrimary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackCtaClick('hero', slide.ctaPrimary.label);
                        trackWhatsAppLead('direct');
                      }}
                      className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 font-bold text-white shadow-[0_4px_14px_rgba(156,192,38,0.4)] transition-all hover:-translate-y-1 hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(156,192,38,0.6)]"
                    >
                      {slide.ctaPrimary.label}{' '}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  ) : (
                    <Link
                      href={slide.ctaPrimary.href}
                      onClick={() =>
                        trackCtaClick('hero', slide.ctaPrimary.label)
                      }
                      className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 font-bold text-white shadow-[0_4px_14px_rgba(156,192,38,0.4)] transition-all hover:-translate-y-1 hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(156,192,38,0.6)]"
                    >
                      {slide.ctaPrimary.label}{' '}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  )}

                  {slide.ctaSecondary.isWhatsApp ? (
                    <a
                      href={slide.ctaSecondary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackCtaClick('hero', slide.ctaSecondary.label);
                        trackWhatsAppLead('direct');
                      }}
                      className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 shadow-sm transition-colors hover:-translate-y-1 hover:bg-slate-50"
                    >
                      {slide.ctaSecondary.label}
                    </a>
                  ) : (
                    <Link
                      href={slide.ctaSecondary.href}
                      onClick={() =>
                        trackCtaClick('hero', slide.ctaSecondary.label)
                      }
                      className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 shadow-sm transition-colors hover:-translate-y-1 hover:bg-slate-50"
                    >
                      {slide.ctaSecondary.label}
                    </Link>
                  )}
                </div>

                {/* Badge +400 clientes */}
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-600 shadow-sm">
                      +
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-300 shadow-sm" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-400 shadow-sm" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-primary font-bold text-white shadow-sm" />
                  </div>
                  <p className="text-sm font-medium text-slate-500">
                    {t(tx.social_proof, lang)}{' '}
                    <span className="font-extrabold tracking-wide text-slate-800">
                      {t(tx.social_proof_highlight, lang)}
                    </span>{' '}
                    {slide.customSocialProofSuffix
                      ? slide.customSocialProofSuffix
                      : t(tx.social_proof_suffix, lang)}
                  </p>
                </div>

                {/* Dots de navegação + setas unificadas no rodapé */}
                <div
                  className="mt-12 flex items-center gap-4"
                  role="tablist"
                  aria-label="Slides do Hero"
                >
                  <button
                    onClick={goPrev}
                    aria-label="Slide anterior"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-3">
                    {heroSlides.map((s, i) => (
                      <button
                        key={s.id}
                        role="tab"
                        aria-selected={i === activeIndex}
                        aria-label={'Slide ' + (i + 1) + ': ' + s.eyebrow}
                        onClick={() => goTo(i)}
                        className={
                          'h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ' +
                          (i === activeIndex
                            ? 'w-8 bg-primary'
                            : 'w-2.5 bg-slate-300 hover:bg-slate-400')
                        }
                      />
                    ))}

                    <div className="ml-2 h-0.5 w-16 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        key={'progress-' + activeIndex}
                        className="h-full bg-primary"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{
                          duration: AUTOPLAY_MS / 1000,
                          ease: 'linear',
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={goNext}
                    aria-label="Próximo slide"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
