'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    cargo: '',
    empresa: '',
    email: '',
    telefone: '',
    tipo: '',
    volume: '',
    local: '',
    mensagem: '',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    const assunto = encodeURIComponent(
      `Contato Comercial Site: ${formData.empresa} - ${formData.nome}`
    );
    const corpo = encodeURIComponent(`Nome: ${formData.nome}
Cargo: ${formData.cargo}
Empresa: ${formData.empresa}
Email corporativo: ${formData.email}
Telefone: ${formData.telefone}

Tipo de Resíduo: ${formData.tipo}
Volume Estimado: ${formData.volume}
Localização da Coleta: ${formData.local}

Mensagem Adicional / Necessidade:
${formData.mensagem}`);

    window.location.href = `mailto:comercial@gtech.com.br?subject=${assunto}&body=${corpo}`;

    setTimeout(() => {
      setStatus('success');
      setFormData({
        nome: '',
        cargo: '',
        empresa: '',
        email: '',
        telefone: '',
        tipo: '',
        volume: '',
        local: '',
        mensagem: '',
      });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-slate-50 pb-16 pt-32 lg:pb-24 lg:pt-[136px]"
    >
      {/* Design Verde — Lado Esquerdo, Degradê Esquerda para Direita e Cima para Baixo */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-full max-w-[70%] select-none lg:max-w-[50%]"
        style={{
          maskImage:
            'radial-gradient(ellipse at top left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at top left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
        }}
      >
        <img
          src="/images/design verde.png"
          alt=""
          className="h-full w-full object-cover object-left-top opacity-[0.15] mix-blend-multiply"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid items-start gap-16 lg:grid-cols-2"
        >
          <div>
            <motion.h2
              variants={itemVariants}
              className="mb-6 text-3xl font-extrabold text-slate-800 sm:text-4xl"
            >
              Fale com um Especialista
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mb-10 max-w-lg text-lg text-slate-600"
            >
              Deixe nossa equipe demonstrar como a gestão correta de resíduos
              eletrônicos pode mitigar riscos e se tornar uma vantagem
              competitiva para sua empresa.
            </motion.p>
            <div className="space-y-6 text-slate-700">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
                  <Mail className="h-5 w-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Email Corporativo
                  </p>
                  <a
                    href="mailto:comercial@gtech.com.br"
                    className="text-lg font-medium transition hover:text-primary-dark"
                  >
                    comercial@gtech.com.br
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
                  <Phone className="h-5 w-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    WhatsApp Comercial
                  </p>
                  <a
                    href="https://wa.me/5511988389974"
                    className="text-lg font-medium transition hover:text-primary-dark"
                  >
                    +55 11 98838-9974
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
                  <MapPin className="h-5 w-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Matriz Operacional
                  </p>
                  <p className="text-balance text-lg font-medium text-slate-800">
                    Rua Kanebo 175, Distrito Industrial, Jundiaí - São Paulo,
                    Brasil
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg lg:p-10"
          >
            <div className="to-primary-light absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary-dark via-primary"></div>
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Nome Completo *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Cargo na Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.cargo}
                    onChange={(e) =>
                      setFormData({ ...formData, cargo: e.target.value })
                    }
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Nome da Empresa *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.empresa}
                    onChange={(e) =>
                      setFormData({ ...formData, empresa: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.telefone}
                    onChange={(e) =>
                      setFormData({ ...formData, telefone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Tipo de Resíduo *
                  </label>
                  <select
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.tipo}
                    onChange={(e) =>
                      setFormData({ ...formData, tipo: e.target.value })
                    }
                  >
                    <option value="">Selecione...</option>
                    <option value="Equipamentos Eletrônicos (TI)">
                      Equipamentos Eletrônicos (TI)
                    </option>
                    <option value="Sucata de Telefonia/Comunicação">
                      Sucata de Telefonia/Telecom
                    </option>
                    <option value="Materiais Não Ferrosos">
                      Materiais Não Ferrosos
                    </option>
                    <option value="Baterias/Nobreaks">
                      Baterias / Nobreaks
                    </option>
                    <option value="Misto/Outros">
                      Vários / Misto / Outros
                    </option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Volume Estimado
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 500 kg, 20 Lotes..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.volume}
                    onChange={(e) =>
                      setFormData({ ...formData, volume: e.target.value })
                    }
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Estado e Cidade para Logística *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Ex: São Paulo - SP"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.local}
                    onChange={(e) =>
                      setFormData({ ...formData, local: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Mensagem Adicional / Demanda
                </label>
                <textarea
                  rows={3}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-lg bg-primary py-4 font-bold text-white shadow-[0_4px_14px_rgba(156,192,38,0.4)] transition-all hover:-translate-y-1 hover:bg-primary-dark disabled:opacity-70"
              >
                {status === 'loading'
                  ? 'Preparando e-mail...'
                  : status === 'success'
                    ? 'Preparando Formulário!'
                    : 'Solicitar Contato Especializado'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
