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
    <div className="relative flex-grow overflow-hidden bg-slate-50 pb-16 pt-32 lg:pb-24 lg:pt-[136px]">
      {/* Design Verde — Lado Esquerdo, Degradê Esquerda para Direita e Cima para Baixo */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="pointer-events-none absolute left-0 top-0 z-[1] h-[700px] w-full max-w-[70%] select-none lg:h-[800px] lg:max-w-[50%]"
        style={{
          maskImage:
            'radial-gradient(ellipse at top left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at top left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)',
        }}
      >
        <img
          src="/images/design verde.png"
          alt=""
          className="h-full w-full object-cover object-left-top opacity-[0.15] mix-blend-multiply"
        />
      </motion.div>
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
            A conformidade como vantagem competitiva
          </h1>
          <p className="text-xl text-slate-600">
            Transformamos o descarte eletrônico em um ativo estratégico que
            protege sua marca.
          </p>
        </motion.div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-primary-dark">
              Nossa essência
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
                Na Gtech, garantimos governança sólida e inquestionável para a
                sua empresa.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:p-12"
          >
            {/* Textura de fundo sutil */}
            <div className="bg-primary/5 pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="bg-primary/10 mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary-dark sm:text-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary"></div>
                Serviço em Destaque
              </div>
              <h3 className="mb-6 text-3xl font-extrabold leading-tight text-slate-800 sm:text-4xl">
                Logística Reversa
              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
                Oferecemos soluções completas de logística reversa, incluindo a
                coleta, transporte e armazenagem temporária de resíduos,
                garantindo a destinação final ambientalmente adequada. Nossa
                infraestrutura permite o gerenciamento de grandes volumes de
                materiais com total segurança e controle.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Galeria Institucional em Grid (Bento Box) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 lg:mt-28"
        >
          {[
            {
              src: '/images/fundo-gtech.png',
              span: 'sm:col-span-2 sm:row-span-2',
            },
            {
              src: '/images/fundo-gtech-2.png',
              span: 'sm:col-span-1 sm:row-span-1',
            },
            {
              src: '/images/fundo-gtech-3.png',
              span: 'sm:col-span-1 sm:row-span-1',
            },
            {
              src: '/images/fundo-gtech-4.png',
              span: 'sm:col-span-1 sm:row-span-1',
            },
            {
              src: '/images/fundo-gtech-5.png',
              span: 'sm:col-span-1 sm:row-span-1',
            },
            {
              src: '/images/fundo-gtech-6.png',
              span: 'sm:col-span-1 sm:row-span-1',
            },
          ].map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group relative w-full overflow-hidden rounded-3xl shadow-md transition-shadow hover:shadow-xl ${img.span} ${
                idx === 0
                  ? 'aspect-video sm:aspect-auto'
                  : 'aspect-[4/3] sm:aspect-square'
              }`}
            >
              <img
                src={img.src}
                alt={`Operação Gtech ${idx + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="bg-primary-dark/10 absolute inset-0 transition-colors group-hover:bg-transparent"></div>
            </motion.div>
          ))}
        </motion.div>

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
                Resolução de ação climática
              </h2>
              <p className="mb-8 text-lg font-medium text-slate-600">
                Análise gravimétrica de redução de emissões
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
              {/* Design branco como textura decorativa no card verde escuro */}
              <div className="pointer-events-none absolute inset-0 select-none opacity-[0.06]">
                <img
                  src="/images/design branco.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
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
              Nossos alicerces de excelência
            </h2>
            <p className="text-slate-600">
              Auditorias rigorosas comprovam nossa capacidade de gestão a nível
              de excelência internacional.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
            {/* Certificação R2v3 movida para cá */}
            <motion.div
              variants={itemVariants}
              className="group flex h-full flex-col items-center justify-center rounded-xl border-2 border-primary bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src="/images/R2v3-selo.png"
                alt="Selo R2v3"
                className="mb-6 h-24 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <p className="mb-1 text-sm font-black uppercase tracking-widest text-slate-800">
                Certificação R2v3
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Padrão Ouro Global
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group flex h-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src="/images/iso-9001.png"
                alt="ISO 9001"
                className="mb-6 h-28 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <p className="text-sm font-bold uppercase tracking-widest text-slate-600">
                Sistema de Gestão da Qualidade
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group flex h-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src="/images/iso-14001.png"
                alt="ISO 14001"
                className="mb-6 h-28 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <p className="text-sm font-bold uppercase tracking-widest text-slate-600">
                Sistema de Gestão Ambiental
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group flex h-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src="/images/iso-45001.png"
                alt="ISO 45001"
                className="mb-6 h-28 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <p className="text-sm font-bold uppercase tracking-widest text-slate-600">
                Saúde e Segurança Ocupacional
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
