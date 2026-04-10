import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="col-span-1 md:col-span-5">
            <Link
              href="/"
              className="mb-6 block transition-opacity hover:opacity-80"
            >
              <img
                src="/images/logo-gtech.png"
                alt="GTech Soluções Ambientais"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-md text-balance text-sm leading-relaxed text-slate-600">
              Recuperamos valor, protegemos marcas e preservamos o futuro.
              Especialistas em gestão de resíduos eletroeletrônicos e economia
              circular com governança sólida para a sua empresa.
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

          <div className="col-span-1 md:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-900">
              Empresa
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/sobre-nos"
                  className="transition hover:text-primary"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="transition hover:text-primary"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/fale-conosco"
                  className="transition hover:text-primary"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-900">
              Especialidades
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="cursor-default">Mineração Urbana</li>
              <li className="cursor-default">Economia Circular</li>
              <li className="cursor-default">Rastreabilidade Total</li>
              <li className="cursor-default">Descarte Responsável</li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-900">
              Atendimento B2B
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <p className="mb-1 block font-medium text-slate-500">
                  WhatsApp Comercial
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
                  Email Corporativo
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
                  Matriz Operacional
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
            &copy; {currentYear} GTech Soluções Ambientais. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
