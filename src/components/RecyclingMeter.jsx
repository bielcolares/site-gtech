'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Target, Leaf, Cpu } from 'lucide-react';

export default function RecyclingMeter() {
  const [count, setCount] = useState(0);
  const target = 1500; // Tons
  const [isVisible, setIsVisible] = useState(false);
  const meterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (meterRef.current) {
      observer.observe(meterRef.current);
    }

    return () => {
      if (meterRef.current) observer.unobserve(meterRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, target]);

  return (
    <section
      ref={meterRef}
      className="relative w-full overflow-hidden bg-primary py-20"
    >
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,_white_10%,_transparent_10%)] bg-[length:24px_24px] opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-white md:text-base">
          <Leaf className="h-5 w-5" /> Nosso Impacto Ambiental
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="hidden rounded-full border border-white/30 bg-white/20 p-6 backdrop-blur-md md:block">
            <Cpu className="h-12 w-12 text-white" />
          </div>
          <div className="flex items-baseline gap-2 text-white">
            <span className="text-2xl font-extrabold md:text-5xl">+</span>
            <span className="text-7xl font-black tabular-nums tracking-tighter drop-shadow-md md:text-9xl">
              {count.toLocaleString('pt-BR')}
            </span>
            <div className="ml-2 flex flex-col items-start">
              <span className="text-2xl font-bold uppercase md:text-4xl">
                Toneladas
              </span>
              <span className="text-lg font-medium opacity-90 md:text-xl">
                Recicladas na Prática
              </span>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/90">
          Cada quilograma recuperado significa menos mineração no planeta, mais
          segurança jurídica corporativa e o avanço contínuo da economia
          circular.
        </p>
      </div>
    </section>
  );
}
