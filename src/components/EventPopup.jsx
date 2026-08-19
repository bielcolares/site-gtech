'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Calendar, Clock, MapPin } from 'lucide-react';

// Malha de nós/conexões decorativa (referência visual: tecnologia/rede).
const NETWORK_NODES = [
  { x: 120, y: 80, r: 2 },
  { x: 230, y: 150, r: 2 },
  { x: 340, y: 60, r: 3 },
  { x: 400, y: 220, r: 2 },
  { x: 480, y: 120, r: 5 },
  { x: 560, y: 260, r: 3 },
  { x: 620, y: 80, r: 2 },
  { x: 650, y: 180, r: 6 },
  { x: 700, y: 320, r: 3 },
  { x: 730, y: 120, r: 2 },
  { x: 760, y: 250, r: 4 },
  { x: 800, y: 60, r: 2 },
  { x: 820, y: 180, r: 5 },
  { x: 850, y: 320, r: 2 },
  { x: 880, y: 100, r: 3 },
  { x: 900, y: 220, r: 6 },
  { x: 930, y: 340, r: 2 },
  { x: 950, y: 150, r: 3 },
  { x: 960, y: 60, r: 2 },
  { x: 600, y: 400, r: 2 },
  { x: 680, y: 430, r: 3 },
  { x: 760, y: 400, r: 2 },
  { x: 840, y: 440, r: 4 },
  { x: 900, y: 400, r: 2 },
  { x: 500, y: 350, r: 2 },
];

const NETWORK_LINES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [5, 7],
  [6, 7],
  [7, 8],
  [7, 9],
  [8, 10],
  [9, 10],
  [9, 11],
  [10, 12],
  [11, 12],
  [12, 13],
  [12, 14],
  [13, 15],
  [14, 15],
  [15, 16],
  [15, 17],
  [16, 22],
  [17, 18],
  [3, 24],
  [24, 5],
  [24, 19],
  [19, 20],
  [20, 21],
  [21, 22],
  [22, 23],
  [8, 20],
  [10, 21],
  [17, 14],
];

function NetworkBackground() {
  return (
    <svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <filter
          id="event-node-glow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {NETWORK_LINES.map(([a, b], i) => {
        const nodeA = NETWORK_NODES[a];
        const nodeB = NETWORK_NODES[b];
        return (
          <line
            key={`line-${i}`}
            x1={nodeA.x}
            y1={nodeA.y}
            x2={nodeB.x}
            y2={nodeB.y}
            stroke="#22d3ee"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
        );
      })}
      {NETWORK_NODES.map((node, i) => (
        <circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill={node.r >= 5 ? '#67e8f9' : '#22d3ee'}
          fillOpacity={node.r >= 5 ? 0.9 : 0.55}
          filter={node.r >= 5 ? 'url(#event-node-glow)' : undefined}
        />
      ))}
    </svg>
  );
}

export default function EventPopup() {
  const [view, setView] = useState('popup'); // 'popup' | 'minimized'

  // Trava o scroll do body enquanto o popup completo está aberto.
  useEffect(() => {
    if (view === 'popup') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [view]);

  return (
    <AnimatePresence mode="wait">
      {view === 'popup' && (
        <motion.div
          key="event-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#002244] shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:max-w-4xl lg:max-w-5xl"
          >
            {/* Malha tecnológica de fundo */}
            <NetworkBackground />

            {/* Gradiente sutil para garantir legibilidade do texto, sem "lavar" a cor do logo */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#002244] via-[#002244]/70 to-transparent" />

            {/* Botão fechar */}
            <button
              type="button"
              onClick={() => setView('minimized')}
              aria-label="Fechar popup do evento"
              className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-white/10 p-2.5 text-white/80 backdrop-blur-md transition-all hover:bg-white/20 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative z-[1] max-h-[90vh] overflow-y-auto px-8 py-12 sm:px-12 sm:py-14 md:max-w-xl md:px-16 md:py-16">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300/90 md:text-base">
                Estaremos na
              </p>

              <div className="relative mb-8 h-16 w-full max-w-[320px] sm:h-20 md:h-24">
                <Image
                  src="/images/futurecom-by-informa.png"
                  alt="Futurecom 2026 by Informa"
                  fill
                  sizes="320px"
                  className="object-contain object-left"
                  unoptimized
                  priority
                />
              </div>

              <div className="mb-8 h-px w-20 bg-white/20" />

              <p className="mb-8 max-w-md text-base leading-relaxed text-slate-200/90 md:text-lg">
                O Futurecom é o ponto de encontro entre tecnologia e inovação,
                destacando soluções avançadas em infraestrutura digital,
                inteligência artificial e soberania tecnológica.
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 flex-shrink-0 text-cyan-300" />
                  <span className="text-base font-semibold uppercase tracking-wide text-white md:text-lg">
                    6 a 8 de Outubro
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 text-cyan-300" />
                  <span className="text-base font-semibold uppercase tracking-wide text-white md:text-lg">
                    10h às 20h
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-cyan-300" />
                  <span className="text-base font-semibold uppercase tracking-wide text-white md:text-lg">
                    São Paulo Expo
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {view === 'minimized' && (
        <motion.button
          key="event-popup-banner"
          type="button"
          onClick={() => setView('popup')}
          initial={{ opacity: 0, x: -40, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          aria-label="Reabrir informações do Futurecom 2026"
          className="group fixed bottom-6 left-6 z-[80] flex max-w-[calc(100vw-3rem)] items-center gap-3 rounded-2xl border border-white/10 bg-[#002244] py-2.5 pl-2.5 pr-4 shadow-[0_8px_28px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1"
        >
          <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Image
              src="/images/futurecom-by-informa.png"
              alt=""
              width={22}
              height={22}
              className="h-[18px] w-[18px] object-contain"
              unoptimized
            />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
          </span>
          <span className="flex flex-col items-start text-left">
            <span className="text-[13px] font-bold leading-tight text-white">
              Futurecom 2026
            </span>
            <span className="text-[11px] leading-tight text-cyan-300/90">
              Saiba mais →
            </span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
