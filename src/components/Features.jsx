'use client';

import React from 'react';
import Card from './Card';
import { ShieldAlert, Recycle, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      id: 1,
      icon: <ShieldAlert className="h-8 w-8 text-primary-dark" />,
      title: 'SGI & Certificados',
      description:
        'Sistema de Gestão Integrado (SGI). ISO 9001, 14001 e 45001. Todo fluxo atende as minúcias da Política Nacional de Resíduos Sólidos (PNRS).',
    },
    {
      id: 2,
      icon: <Award className="h-8 w-8 text-primary-dark" />,
      title: 'Emissão de Laudos de Destruição',
      description:
        'Após o processo limpo e rastreável, disponibilizamos ao cliente o Certificado de Destinação Final (CDF) acompanhado do Laudo de Destruição Fotográfico.',
    },
    {
      id: 3,
      icon: <Recycle className="h-8 w-8 text-primary-dark" />,
      title: 'Logística Reversa Implacável',
      description:
        'Atendimentos em todo território nacional com agendamento em até 48h. Frota impecável < 5 anos (Sider, Julieta 40t, Caminhão Garra e Rolon).',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-slate-200 py-24 lg:py-32"
    >
      {/* Background Imagem Galpão (Clean + Nítido) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/images/fundo-gtech.jpeg"
          alt="Galpão Corporativo GTech"
          className="h-full w-full object-cover grayscale"
        />
        {/* Camada branca limpa apenas para contraste, sem blur */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <h2 className="mb-3 text-sm font-black uppercase tracking-widest text-primary-dark">
            Vantagem Competitiva
          </h2>
          <p className="mt-2 text-balance text-3xl font-extrabold leading-snug tracking-tight text-slate-800 sm:text-5xl">
            Elevando o Padrão do Descarte Corporativo
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Na GTech, o compliance deixa de ser um custo obrigatório para se
            tornar uma certificação de excelência que valoriza a imagem e
            protege a reputação da sua marca.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              variants={itemVariants}
              key={feature.id}
              className="hover:border-primary/50 group rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="group-hover:bg-primary/10 group-hover:border-primary/30 mb-8 flex h-16 w-16 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 shadow-inner transition-all group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-800">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
