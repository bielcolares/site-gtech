'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Recycle,
  ShieldCheck,
  TrendingUp,
  Leaf,
  BarChart3,
  RefreshCw,
  ArrowRight,
  CalendarDays,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';
import { trackCtaClick, trackWhatsAppLead } from '@/lib/analytics';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function BlogContent() {
  const { lang } = useLanguage();
  const tx = translations.blog;

  const steps = tx.steps;
  const benefits = tx.benefits;
  const materials = tx.materials;
  const whyGtech = tx.whyGtech;

  return (
    <div className="relative bg-white">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-[#015637] pb-20 pt-36 lg:pt-40">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 60% 0%, #3fab36 0%, transparent 70%)',
          }}
        />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 text-sm text-slate-400"
          >
            <Link href="/" className="transition hover:text-primary">
              {t(tx.breadcrumb_home, lang)}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-300">
              {t(tx.breadcrumb_blog, lang)}
            </span>
          </motion.nav>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 flex flex-wrap items-center gap-3"
          >
            <span className="bg-primary/20 ring-primary/30 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary ring-1">
              <Leaf className="h-3.5 w-3.5" />
              {t(tx.category, lang)}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <CalendarDays className="h-3.5 w-3.5" />
              {t(tx.date, lang)}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="h-3.5 w-3.5" />
              {t(tx.readTime, lang)}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t(tx.hero_title_pre, lang)}{' '}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              {t(tx.hero_title_highlight, lang)}
            </span>{' '}
            {t(tx.hero_title_pos, lang)}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300"
          >
            {t(tx.hero_subtitle, lang)}
          </motion.p>
        </div>
      </section>

      {/* ============ MAIN CONTENT + SIDEBAR ============ */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* ---- Article ---- */}
          <article className="min-w-0 flex-1">
            {/* Intro */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-14"
            >
              <motion.p
                variants={fadeUp}
                className="mb-5 text-lg leading-relaxed text-slate-700"
              >
                {t(tx.intro_p1, lang)}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mb-5 text-lg leading-relaxed text-slate-700"
              >
                {t(tx.intro_p2, lang)}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-lg leading-relaxed text-slate-700"
              >
                {t(tx.intro_p3, lang)}
              </motion.p>
            </motion.section>

            {/* O que é logística reversa */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-14"
            >
              <motion.h2
                variants={fadeUp}
                className="mb-4 text-2xl font-bold text-slate-900 lg:text-3xl"
              >
                {t(tx.section1_title, lang)}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mb-5 leading-relaxed text-slate-700"
              >
                {t(tx.section1_p1, lang)}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mb-5 leading-relaxed text-slate-700"
              >
                {t(tx.section1_p2, lang)}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="leading-relaxed text-slate-700"
              >
                {t(tx.section1_p3, lang)}
              </motion.p>
            </motion.section>

            {/* Por que o descarte exige atenção */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-14"
            >
              <motion.h2
                variants={fadeUp}
                className="mb-4 text-2xl font-bold text-slate-900 lg:text-3xl"
              >
                {t(tx.section2_title, lang)}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mb-5 leading-relaxed text-slate-700"
              >
                {t(tx.section2_p1, lang)}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="leading-relaxed text-slate-700"
              >
                {t(tx.section2_p2, lang)}
              </motion.p>
            </motion.section>

            {/* Como a Gtech realiza */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-14"
            >
              <motion.h2
                variants={fadeUp}
                className="mb-6 text-2xl font-bold text-slate-900 lg:text-3xl"
              >
                {t(tx.section3_title, lang)}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mb-8 leading-relaxed text-slate-700"
              >
                {t(tx.section3_intro, lang)}
              </motion.p>

              {/* Process Steps */}
              <motion.div variants={stagger} className="space-y-5">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-shadow hover:shadow-md"
                  >
                    <div className="bg-primary/10 ring-primary/20 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-primary ring-1">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="mb-1.5 font-bold text-slate-900">
                        {t(step.title, lang)}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {t(step.desc, lang)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Gestão de resíduos */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-14"
            >
              <motion.h2
                variants={fadeUp}
                className="mb-4 text-2xl font-bold text-slate-900 lg:text-3xl"
              >
                {t(tx.section4_title, lang)}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mb-5 leading-relaxed text-slate-700"
              >
                {t(tx.section4_p1, lang)}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mb-5 leading-relaxed text-slate-700"
              >
                {t(tx.section4_p2, lang)}
              </motion.p>
              <motion.ul variants={stagger} className="space-y-2">
                {tx.section4_list.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {t(item, lang)}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>

            {/* Economia circular */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="to-primary/5 ring-primary/10 mb-14 rounded-3xl bg-gradient-to-br from-[#015637]/5 p-8 ring-1"
            >
              <motion.h2
                variants={fadeUp}
                className="mb-4 text-2xl font-bold text-slate-900 lg:text-3xl"
              >
                {t(tx.section5_title, lang)}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mb-5 leading-relaxed text-slate-700"
              >
                {t(tx.section5_p1, lang)}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mb-6 leading-relaxed text-slate-700"
              >
                {t(tx.section5_p2, lang)}
              </motion.p>
              {/* Materials grid */}
              <motion.div
                variants={stagger}
                className="grid grid-cols-2 gap-2 sm:grid-cols-4"
              >
                {materials.map((mat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-100"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {t(mat, lang)}
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mt-5 leading-relaxed text-slate-700"
              >
                {t(tx.section5_p3, lang)}
              </motion.p>
            </motion.section>

            {/* Benefícios - Cards */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-14"
            >
              <motion.h2
                variants={fadeUp}
                className="mb-8 text-2xl font-bold text-slate-900 lg:text-3xl"
              >
                {t(tx.section6_title, lang)}
              </motion.h2>
              <motion.div
                variants={stagger}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                {benefits.map((benefit, i) => {
                  const IconComp = [
                    ShieldCheck,
                    ShieldCheck,
                    TrendingUp,
                    Leaf,
                    BarChart3,
                    RefreshCw,
                  ][i];
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="hover:ring-primary/20 group flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:ring-1"
                    >
                      <div className="bg-primary/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-bold text-slate-900">
                          {t(benefit.title, lang)}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                          {t(benefit.desc, lang)}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.section>

            {/* Por que a Gtech */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-14"
            >
              <motion.h2
                variants={fadeUp}
                className="mb-4 text-2xl font-bold text-slate-900 lg:text-3xl"
              >
                {t(tx.section7_title, lang)}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mb-5 leading-relaxed text-slate-700"
              >
                {t(tx.section7_p1, lang)}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mb-6 leading-relaxed text-slate-700"
              >
                {t(tx.section7_p2, lang)}
              </motion.p>
              <motion.ul variants={stagger} className="space-y-2">
                {whyGtech.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {t(item, lang)}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>

            {/* Conclusão */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-10 rounded-3xl bg-slate-900 p-8 text-white"
            >
              <motion.h2
                variants={fadeUp}
                className="mb-4 text-2xl font-bold lg:text-3xl"
              >
                {t(tx.conclusion_title, lang)}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mb-4 leading-relaxed text-slate-300"
              >
                {t(tx.conclusion_p1, lang)}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mb-4 leading-relaxed text-slate-300"
              >
                {t(tx.conclusion_p2, lang)}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="font-semibold text-primary"
              >
                {t(tx.conclusion_tagline, lang)}
              </motion.p>
            </motion.section>
          </article>

          {/* ---- Sidebar ---- */}
          <aside className="w-full shrink-0 lg:w-72 xl:w-80">
            <div className="sticky top-28 space-y-6">
              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="shadow-primary/20 overflow-hidden rounded-3xl bg-gradient-to-br from-[#015637] to-primary p-6 text-white shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <Recycle className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold">
                  {t(tx.sidebar_cta_title, lang)}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-white/80">
                  {t(tx.sidebar_cta_desc, lang)}
                </p>
                <a
                  href="https://wa.me/5511989046274?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Tenho%20interesse%20em%20conversar%20com%20um%20especialista%20sobre%20log%C3%ADstica%20reversa."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackCtaClick('blog_sidebar', t(tx.sidebar_cta_btn, lang));
                    trackWhatsAppLead('blog');
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {t(tx.sidebar_cta_btn, lang)}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              {/* About Gtech quick card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-6"
              >
                <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-500">
                  {t(tx.sidebar_about_label, lang)}
                </h3>
                <ul className="space-y-3">
                  {tx.sidebar_stats.map((stat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm text-slate-700">
                        {t(stat, lang)}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/compliance"
                  className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:underline"
                >
                  {t(tx.sidebar_compliance_link, lang)}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
