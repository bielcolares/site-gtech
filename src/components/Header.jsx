'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-shrink-0 items-center transition-opacity hover:opacity-80">
            <Link href="/">
              <img
                src="/images/selo 10 anos gtech.png"
                alt="GTech Soluções Ambientais - 10 Anos"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className="cursor-pointer font-medium text-slate-600 transition hover:text-primary"
            >
              Início
            </Link>
            <Link
              href="/sobre-nos"
              className="cursor-pointer font-medium text-slate-600 transition hover:text-primary"
            >
              Sobre Nós
            </Link>
            <Link
              href="/servicos"
              className="cursor-pointer font-medium text-slate-600 transition hover:text-primary"
            >
              Serviços
            </Link>
            <Link
              href="/fale-conosco"
              className="cursor-pointer font-medium text-slate-600 transition hover:text-primary"
            >
              Contato
            </Link>
            <a href="#whatsapp">
              <button className="cursor-pointer rounded bg-primary px-5 py-2.5 font-semibold text-white shadow-[0_4px_14px_rgba(156,192,38,0.3)] transition-all hover:-translate-y-1 hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(156,192,38,0.4)]">
                Falar com Especialista
              </button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 transition-transform hover:text-primary focus:outline-none active:scale-95"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="animate-in slide-in-from-top-2 border-b border-slate-200 bg-white duration-200 md:hidden">
          <div className="flex flex-col space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary"
            >
              Início
            </Link>
            <Link
              href="/sobre-nos"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary"
            >
              Sobre Nós
            </Link>
            <Link
              href="/servicos"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary"
            >
              Serviços
            </Link>
            <Link
              href="/fale-conosco"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary"
            >
              Contato
            </Link>
            <div className="px-3 pt-2">
              <a
                href="#whatsapp"
                onClick={() => setIsOpen(false)}
                className="block w-full"
              >
                <button className="w-full rounded bg-primary px-4 py-2 font-semibold text-white transition hover:bg-primary-dark active:scale-95">
                  Falar com Especialista
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
