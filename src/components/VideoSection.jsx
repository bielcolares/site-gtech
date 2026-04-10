'use client';

import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-800 lg:text-5xl">
            Assista a GTech em Ação
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            Por dentro da nossa mineração urbana. Veja como a tecnologia somada
            a processos auditados garante segurança e rentabilidade.
          </p>
        </div>

        <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-xl">
          <iframe
            className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02]"
            src="https://www.youtube.com/embed/lUbX9tHuUyQ?autoplay=1&mute=1&loop=1&playlist=lUbX9tHuUyQ&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="Vídeo Institucional GTech"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="pointer-events-none absolute inset-0 bg-slate-900/10 transition-colors duration-500 group-hover:bg-slate-900/0"></div>

          <div className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-bold text-slate-800 shadow-md backdrop-blur">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary"></div>
            R2v3 Certified Process
          </div>
        </div>
      </div>
    </section>
  );
}
