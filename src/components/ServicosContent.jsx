'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Network,
  SearchCheck,
  Factory,
  ArrowRight,
  Shield,
} from 'lucide-react';

export default function ServicosContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <div className="flex-grow overflow-hidden bg-white pb-24">
      {/* Header Services */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 pb-16 pt-32 lg:pb-24 lg:pt-[136px]">
        <div className="from-primary/20 pointer-events-none absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-30"></div>
        {/* Design Verde — Lado Direito, Degradê Direita para Esquerda e Cima para Baixo */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="pointer-events-none absolute bottom-0 right-0 top-0 z-[1] w-full max-w-[70%] select-none lg:max-w-[50%]"
          style={{
            maskImage:
              'radial-gradient(ellipse at top right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at top right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
          }}
        >
          <img
            src="/images/design verde.png"
            alt=""
            className="h-full w-full object-cover object-right-top opacity-[0.15] mix-blend-multiply"
          />
        </motion.div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={fadeUp}
              className="mb-6 text-balance text-4xl font-extrabold tracking-tight text-slate-800 md:text-6xl"
            >
              Soluções Especializadas para a{' '}
              <span className="text-primary-dark">Sua Corporação</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mb-10 max-w-3xl text-balance text-xl leading-relaxed text-slate-600"
            >
              Um portfólio completo estruturado exatamente para atender demandas
              de alta complexidade em gestão de ativos tecnológicos.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/fale-conosco"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-white shadow-[0_4px_14px_rgba(156,192,38,0.4)] transition-transform hover:-translate-y-1 hover:bg-primary-dark"
              >
                Agendar Consultoria <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Serviço 1: Mineração Urbana & Economia Circular */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideRight}
              className="order-2 lg:order-1"
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3 text-primary-dark shadow-sm">
                <Network className="h-8 w-8" />
              </div>
              <h2 className="mb-6 text-balance text-3xl font-extrabold text-slate-800 lg:text-5xl">
                Transformando o Descarte em Ativo Estratégico
              </h2>
              <p className="mb-6 text-balance text-lg leading-relaxed text-slate-600">
                Por meio das mais avançadas técnicas de{' '}
                <strong>Mineração Urbana</strong> e{' '}
                <strong>Economia Circular</strong>, não apenas descartamos, nós
                reintroduzimos componentes valiosos.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/20 mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="h-2 w-2 rounded-full bg-primary-dark"></div>
                  </div>
                  <span className="font-medium text-slate-700">
                    Reaproveitamento superior a <strong>95%</strong> na prática.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="h-2 w-2 rounded-full bg-primary-dark"></div>
                  </div>
                  <span className="font-medium text-slate-700">
                    Sustentabilidade eficiente que emite créditos de imagem
                    positiva.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideLeft}
              className="order-1 hidden md:block lg:order-2"
            >
              <div className="relative flex h-[450px] w-full items-center justify-center">
                {/* Bg Box / Texture (fundo-gtech) */}
                <div className="absolute inset-4 flex items-center justify-center overflow-hidden rounded-3xl border border-slate-200 shadow-inner sm:inset-10">
                  <img
                    src="/images/fundo-gtech.jpeg"
                    alt="Operação GTech"
                    className="absolute h-full w-full object-cover"
                  />
                  {/* Overlay escuro para dar destaque aos cards menores da frente */}
                  <div className="absolute inset-0 bg-slate-900/60"></div>
                </div>

                {/* Left floating card */}
                <div className="absolute bottom-20 left-0 z-20 w-64 -rotate-3 transform rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-transform hover:z-30 hover:rotate-0">
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <Network className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Descaracterização
                      </p>
                      <p className="font-bold text-slate-800">
                        Segurança de Dados
                      </p>
                    </div>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[100%] bg-slate-800"></div>
                  </div>
                </div>

                {/* Right floating card (Main Metric) */}
                <div className="relative z-20 ml-auto w-72 translate-x-4 translate-y-12 transform rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_40px_rgba(156,192,38,0.4)] transition-transform hover:-translate-y-1">
                  <span className="mb-1 block text-6xl font-black tracking-tighter text-primary-dark">
                    +95%
                  </span>
                  <span className="text-sm font-extrabold uppercase tracking-widest text-slate-800">
                    Reaproveitamento
                  </span>
                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="text-sm font-semibold leading-snug text-slate-600">
                      Índice real certificado e rastreável gerado pela nossa
                      mineração urbana.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Oficial de Serviços (9 Itens) - Movido para cima */}
      <section className="border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-800 lg:text-5xl">
              Catálogo de Serviços GTech
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-lg text-slate-600">
              Conheça todas as frentes operacionais em que atuamos para entregar
              proteção à sua marca e compliance ambiental total.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: 'Desmobilização',
                desc: 'Com a nossa equipe fazemos desmobilização de unidades dos clientes de maneira correta e organizada.',
              },
              {
                title: 'Coleta',
                desc: 'A coleta programada visa otimizar tempo e espaço descartando as sucatas de maneira versátil e prática com frota própria.',
              },
              {
                title: 'Destruição de Equipamento',
                desc: 'Gerenciamento desde a coleta até a descaracterização, destinação final e atendimento pleno à legislação vigente.',
              },
              {
                title: 'Gerenciamento de Resíduo Local',
                desc: 'Gestão da central de resíduos com mão de obra no cliente, garantindo coleta, separação e destruição com total transparência documental.',
              },
              {
                title: 'Inventário e Triagem no Local',
                desc: 'Serviço de inventário, separação de equipamentos (A/B/C), segregação de peças, lista técnica detalhada e acondicionamento.',
              },
              {
                title: 'Warehouse',
                desc: 'Maneira correta de armazenamento de mercadorias temporárias para clientes, em local dedicado, posições fechadas e controladas.',
              },
              {
                title: 'Descaracterização de Produtos',
                desc: 'Processo adequado para destinação de resíduos ostentando logomarcas comerciais com emissão de documentos comprobatórios.',
              },
              {
                title: 'Recuperação de Matéria Prima',
                desc: 'Tecnologia para recuperar diversos materiais (ex: plásticos técnicos), voltando a ser fornecido. Novo de novo. Economia Circular.',
              },
              {
                title: 'Compra de Lotes',
                desc: 'Compra de lotes de descarte de empresas, produtos de informática ou items impróprios para venda, garantindo sanitização.',
              },
            ].map((svc, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="bg-primary/10 border-primary/20 mb-4 inline-flex rounded border px-3 py-1 text-sm font-extrabold uppercase tracking-wider text-primary-dark transition-colors group-hover:bg-primary group-hover:text-white">
                  {svc.title}
                </div>
                <p className="text-sm font-medium leading-relaxed text-slate-600">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Serviço 2: Segurança Jurídica e Rastreabilidade - Fundo alterado para branco para zebrar */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideRight}
              className="relative hidden md:block"
            >
              <div className="relative flex aspect-square flex-col items-center justify-center gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-12 shadow-lg">
                <Shield className="center absolute h-32 w-32 text-primary-dark opacity-10" />
                <div className="relative z-10 flex w-full items-center justify-between rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-transform hover:scale-105">
                  <span className="font-bold text-slate-800">ISO 9001</span>
                  <SearchCheck className="h-5 w-5 text-primary-dark" />
                </div>
                <div className="relative z-10 flex w-full items-center justify-between rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-transform hover:scale-105">
                  <span className="font-bold text-slate-800">ISO 14001</span>
                  <SearchCheck className="h-5 w-5 text-primary-dark" />
                </div>
                <div className="relative z-10 flex w-full items-center justify-between rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-transform hover:scale-105">
                  <span className="font-bold text-slate-800">ISO 45001</span>
                  <SearchCheck className="h-5 w-5 text-primary-dark" />
                </div>
                <div className="relative z-10 flex w-full scale-105 transform items-center justify-between rounded-xl bg-primary p-4 shadow-[0_4px_15px_rgba(156,192,38,0.4)]">
                  <span className="font-black text-white">
                    Certificação R2v3
                  </span>
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideLeft}
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3 text-primary-dark shadow-sm">
                <SearchCheck className="h-8 w-8" />
              </div>
              <h2 className="mb-6 text-balance text-3xl font-extrabold text-slate-800 lg:text-5xl">
                Segurança Jurídica Total e Rastreabilidade
              </h2>
              <p className="mb-6 text-balance text-lg leading-relaxed text-slate-600">
                Nós protegemos algo muito mais valioso que o resíduo em si:{' '}
                <strong>a integridade e a reputação da sua marca.</strong> Todo
                o processo corporativo é auditado ponto a ponto.
              </p>
              <div className="mb-6 rounded-r-xl border-l-4 border-primary bg-slate-50 p-6 italic text-slate-700 shadow-sm">
                &quot;Somos referência nacional portando a seleta certificação
                R2v3, o principal benchmark global que comprova a
                responsabilidade na destruição de dados e gestão integral de
                eletrônicos.&quot;
              </div>
              <p className="font-medium text-slate-600">
                Além das ISOs 9001 (Qualidade), 14001 (Meio Ambiente) e 45001
                (Saúde e Segurança).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviço 3: Gerenciamento Opeacional Completo - Fundo alterado para slate-50 para zebrar */}
      <section className="border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-primary-dark shadow-sm">
              <Factory className="h-8 w-8" />
            </div>
            <h2 className="mb-6 text-balance text-3xl font-extrabold text-slate-800 lg:text-5xl">
              Operação em Escala Industrial
            </h2>
            <p className="text-balance text-lg text-slate-600">
              Atuamos na coleta especializada e{' '}
              <strong>
                gerenciamento de resíduos eletrônicos, eletroeletrônicos e
                materiais não ferrosos.
              </strong>{' '}
              Na GTech, a conformidade deixa de ser apenas uma regra e se
              transforma em vantagem competitiva perante ao mercado, garantindo{' '}
              <strong>governança sólida e inquestionável.</strong>
            </p>
          </motion.div>

          <div className="relative z-10 grid gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="hover:border-primary/50 group rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 transition-colors group-hover:bg-primary group-hover:text-white">
                <Network className="h-8 w-8 text-primary-dark group-hover:text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-extrabold text-slate-800">
                Resíduos Tecnológicos (REEE)
              </h3>
              <p className="mb-8 text-lg text-slate-600">
                Logística reversa corporativa desde o datacenter até o
                periférico. Descaracterização física completa que aniquila dados
                sensíveis antes de moer e segregar as placas de circuito (PCI) e
                litologias variadas.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              className="hover:border-primary/50 group rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 transition-colors group-hover:bg-primary group-hover:text-white">
                <Factory className="h-8 w-8 text-primary-dark group-hover:text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-extrabold text-slate-800">
                Materiais Não Ferrosos
              </h3>
              <p className="mb-8 text-lg text-slate-600">
                Especialização na triagem, preparação mecânica em larga escala e
                destinação segura de ligas metálicas que abastecem siderúrgicas
                e o mercado de extração urbana secundária.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
