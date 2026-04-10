'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', role: '', message: '' });
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
    <section id="contact" className="w-full overflow-hidden bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Email Corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="role"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Qual a sua necessidade de descarte/compliance?
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-lg bg-primary py-4 font-bold text-white shadow-[0_4px_14px_rgba(156,192,38,0.4)] transition-all hover:-translate-y-1 hover:bg-primary-dark disabled:opacity-70"
              >
                {status === 'loading'
                  ? 'Enviando...'
                  : status === 'success'
                    ? 'Solicitação Recebida!'
                    : 'Solicitar Contato Especializado'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
