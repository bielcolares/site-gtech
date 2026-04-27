'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    title: 'Total de materiais processados | Toneladas',
    value: '5.000',
  },
  {
    title: 'Quantidade de matéria prima poupada com a reciclagem | KG',
    value: '+1,1 milhão',
  },
  {
    title: 'Quantidade de CO2 evitado com o processamento | KG',
    value: '3.973.485,00',
  },
  {
    title: 'CO2 emitido através do transporte considerado | KG',
    value: '59.762,30',
  },
];

export default function RadarReciclagem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 50, mass: 0.5 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#015637] py-20 lg:py-28">
      {/* Background Graphic Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_10%,_transparent_10%)] bg-[length:24px_24px] opacity-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-primary opacity-20 blur-[150px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl"
          >
            Radar de Reciclagem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg font-medium text-white/80 sm:text-xl"
          >
            Métricas oficiais e auditadas de nosso impacto ambiental contínuo,
            transformando resíduos em matrizes seguras e circulares.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-dark/80 border-primary/30 group flex flex-col items-center justify-center rounded-2xl border p-8 text-center shadow-xl backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(63,171,54,0.3)] lg:p-10"
            >
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white/90 transition-colors group-hover:text-white md:text-base">
                {metric.title}
              </h3>
              <div className="text-5xl font-black tracking-tighter text-white drop-shadow-md md:text-6xl lg:text-7xl">
                {metric.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
