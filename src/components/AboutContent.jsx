'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const popVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', bounce: 0.4 },
    },
  };

  return (
    <div className="relative flex-grow overflow-hidden bg-white py-24">
      {/* Glow bg */}
      <div className="bg-primary/10 pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full blur-[150px]"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mb-24 max-w-3xl border-l-4 border-primary pl-6 text-left"
        >
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-800 sm:text-6xl">
            A Conformidade como Vantagem Competitiva
          </h1>
          <p className="text-xl text-slate-600">
            Transformamos o descarte eletrônico em um ativo estratégico que
            protege sua marca.
          </p>
        </motion.div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-primary-dark">
              Nossa Essência
            </h2>
            <div className="space-y-6 text-balance text-lg leading-relaxed text-slate-600">
              <p>
                Por meio da <strong>Mineração Urbana</strong> e da{' '}
                <strong>Economia Circular</strong>, garantimos mais de 95% de
                reaproveitamento de resíduos eletrônicos, promovendo
                sustentabilidade de forma altamente eficiente.
              </p>
              <p>
                Oferecemos{' '}
                <strong>segurança jurídica e rastreabilidade total</strong> em
                todo o processo, protegendo a reputação e a integridade da sua
                marca contra riscos ambientais e vazamento de dados
                corporativos.
              </p>
              <p>
                Atuamos no gerenciamento especializado de resíduos eletrônicos,
                eletroeletrônicos e materiais não ferrosos em escala industrial.
                Na GTech, garantimos governança sólida e inquestionável para a
                sua empresa.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              variants={popVariants}
              className="hover:border-primary/40 flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mb-2 text-5xl font-black text-primary-dark">
                &gt;95%
              </span>
              <span className="text-sm font-bold uppercase tracking-wide text-slate-500">
                De Reaproveitamento
              </span>
            </motion.div>
            <motion.div
              variants={popVariants}
              className="hover:border-primary/40 flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mb-2 text-5xl font-black text-slate-800">
                Total
              </span>
              <span className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Rastreabilidade
              </span>
            </motion.div>
            <motion.div
              variants={popVariants}
              className="col-span-2 flex flex-col items-center justify-center rounded-2xl bg-primary p-8 text-center shadow-[0_4px_20px_rgba(156,192,38,0.3)] transition-transform hover:-translate-y-1"
            >
              <span className="mb-2 text-3xl font-black text-white">
                Certificação R2v3
              </span>
              <span className="font-bold text-emerald-950">
                Padrão Ouro Global na Gestão de Eletrônicos
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="mt-32 border-t border-slate-200 pt-16"
        >
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div variants={itemVariants}>
              <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-slate-800 lg:text-5xl">
                Resolução de Ação Climática
              </h2>
              <p className="mb-8 text-lg font-medium text-slate-600">
                Análise Gravimétrica de Redução de Emissões
              </p>

              <div className="space-y-6">
                <div className="rounded-r-xl border-l-4 border-primary bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                  <span className="mb-1 block text-4xl font-black tracking-tighter text-primary-dark">
                    580.252,00 kg
                  </span>
                  <p className="font-medium text-slate-600">
                    Aproximadamente de matérias primas de{' '}
                    <strong className="text-slate-800">eletrônicos</strong>{' '}
                    foram poupadas de ser extraídas.
                  </p>
                </div>
                <div className="rounded-r-xl border-l-4 border-slate-400 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                  <span className="mb-1 block text-4xl font-black tracking-tighter text-slate-700">
                    225.555,70 kg
                  </span>
                  <p className="font-medium text-slate-600">
                    Aproximadamente de matérias primas de{' '}
                    <strong className="text-slate-800">
                      metais ferrosos e não ferrosos
                    </strong>{' '}
                    foram poupadas de ser extraídas.
                  </p>
                </div>
                <div className="border-primary-light rounded-r-xl border-l-4 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                  <span className="mb-1 block text-4xl font-black tracking-tighter text-primary">
                    338.152,00 kg
                  </span>
                  <p className="font-medium text-slate-600">
                    Aproximadamente de matérias primas de{' '}
                    <strong className="text-slate-800">
                      resíduos diversos
                    </strong>{' '}
                    foram poupadas de ser extraídas.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative flex h-full min-h-[400px] flex-col justify-center overflow-hidden rounded-3xl bg-primary-deep p-10 shadow-xl lg:p-16"
            >
              <div className="bg-primary/20 pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full blur-[60px]"></div>
              <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-white/5 blur-[80px]"></div>
              <div className="relative z-10">
                <h3 className="mb-6 text-3xl font-extrabold leading-tight text-white lg:text-4xl">
                  Novo compromisso ambicioso
                </h3>
                <p className="mb-10 text-xl leading-relaxed text-white/90">
                  Estabelecemos a meta de redução ambiental em total alinhamento
                  com a diretriz mundial{' '}
                  <strong className="decoration-primary/50 px-1 text-2xl font-black text-primary underline underline-offset-4">
                    Science Based Targets (SBT)
                  </strong>
                  .
                </p>
                <div className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white shadow-lg">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-primary"></div>
                  Otimização de Energias Renováveis
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="mt-32 border-t border-slate-200 pt-16"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-extrabold text-slate-800">
              Nossos Alicerces de Excelência
            </h2>
            <p className="text-slate-600">
              Auditorias rigorosas comprovam nossa capacidade de gestão a nível
              de excelência internacional.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <motion.div
              variants={itemVariants}
              className="flex h-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="mb-2 text-3xl font-black text-primary-dark">
                ISO 9001
              </h3>
              <p className="text-sm font-medium text-slate-600">
                Sistema de Gestão da Qualidade
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex h-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="mb-2 text-3xl font-black text-primary-dark">
                ISO 14001
              </h3>
              <p className="text-sm font-medium text-slate-600">
                Sistema de Gestão Ambiental
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex h-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="mb-2 text-3xl font-black text-primary-dark">
                ISO 45001
              </h3>
              <p className="text-sm font-medium text-slate-600">
                Saúde e Segurança Ocupacional
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
