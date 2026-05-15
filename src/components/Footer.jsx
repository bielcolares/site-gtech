'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const tx = translations.footer;
  const nav = tx.nav;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand col */}
          <div className="col-span-1 md:col-span-5">
            <Link
              href="/"
              className="mb-6 block transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/selo 10 anos gtech.png"
                alt="GTech Soluções Ambientais - 10 Anos"
                width={64}
                height={64}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-md text-balance text-sm leading-relaxed text-slate-600">
              {t(tx.tagline, lang)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-bold tracking-wide text-primary shadow-sm">
                R2v3
              </div>
              <div className="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-500 shadow-sm">
                ISO 9001
              </div>
              <div className="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-500 shadow-sm">
                ISO 14001
              </div>
              <div className="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-500 shadow-sm">
                ISO 45001
              </div>
            </div>
          </div>

          {/* Company col */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-900">
              {t(tx.company_col, lang)}
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/sobre-nos"
                  className="transition hover:text-primary"
                >
                  {t(nav.about, lang)}
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="transition hover:text-primary"
                >
                  {t(nav.services, lang)}
                </Link>
              </li>
              <li>
                <Link
                  href="/fale-conosco"
                  className="transition hover:text-primary"
                >
                  {t(nav.contact, lang)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties col */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-900">
              {t(tx.specialties_col, lang)}
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {tx.specialties.map((item, idx) => (
                <li key={idx} className="cursor-default">
                  {t(item, lang)}
                </li>
              ))}
            </ul>
          </div>

          {/* B2B col */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-900">
              {t(tx.b2b_col, lang)}
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <p className="mb-1 block font-medium text-slate-500">
                  {t(tx.whatsapp_label, lang)}
                </p>
                <a
                  href="https://wa.me/5511988389974"
                  className="font-medium text-slate-800 transition hover:text-primary"
                >
                  +55 11 98838-9974
                </a>
              </li>
              <li>
                <p className="mb-1 mt-4 block font-medium text-slate-500">
                  {t(tx.email_label, lang)}
                </p>
                <a
                  href="mailto:comercial@gtech.com.br"
                  className="font-medium text-slate-800 transition hover:text-primary"
                >
                  comercial@gtech.com.br
                </a>
              </li>
              <li>
                <p className="mb-1 mt-4 block font-medium text-slate-500">
                  {t(tx.address_label, lang)}
                </p>
                <p className="font-medium text-slate-800">
                  Rua Kanebo 175, Distrito Industrial, Jundiaí - SP, Brasil
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between border-t border-slate-200 pt-6 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Gtech Soluções Ambientais. {t(tx.rights, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
}
