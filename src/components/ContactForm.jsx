'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

export default function ContactForm() {
  const { lang } = useLanguage();
  const tx = translations.contact;
  const f = tx.form;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
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
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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

  const inputClass =
    'w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary';

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-slate-50 pb-16 pt-32 lg:pb-24 lg:pt-[136px]"
    >
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
        <Image
          src="/images/design verde.webp"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-left-top opacity-[0.15] mix-blend-multiply"
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
          {/* Left: info + map */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="mb-6 text-3xl font-extrabold text-slate-800 sm:text-4xl"
            >
              {t(tx.title, lang)}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mb-10 max-w-lg text-lg text-slate-600"
            >
              {t(tx.description, lang)}
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
                    {t(tx.email_label, lang)}
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
                    {t(tx.whatsapp_label, lang)}
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
                    {t(tx.address_label, lang)}
                  </p>
                  <p className="text-balance text-lg font-medium text-slate-800">
                    Rua Kanebo 175, Distrito Industrial, Jundiaí - São Paulo,
                    Brasil
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-10 h-64 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:h-80"
            >
              <iframe
                title="Mapa de Localização GTech"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Rua+Kanebo+175,+Distrito+Industrial,+Jundia%C3%AD+-+S%C3%A3o+Paulo,+Brasil&output=embed"
              ></iframe>
            </motion.div>
          </div>

          {/* Right: Form */}
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
                    {t(f.name, lang)}
                  </label>
                  <input
                    required
                    type="text"
                    className={inputClass}
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    {t(f.role, lang)}
                  </label>
                  <input
                    type="text"
                    className={inputClass}
                    value={formData.cargo}
                    onChange={(e) =>
                      setFormData({ ...formData, cargo: e.target.value })
                    }
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    {t(f.company, lang)}
                  </label>
                  <input
                    required
                    type="text"
                    className={inputClass}
                    value={formData.empresa}
                    onChange={(e) =>
                      setFormData({ ...formData, empresa: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    {t(f.email, lang)}
                  </label>
                  <input
                    type="email"
                    className={inputClass}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    {t(f.phone, lang)}
                  </label>
                  <input
                    required
                    type="tel"
                    className={inputClass}
                    value={formData.telefone}
                    onChange={(e) =>
                      setFormData({ ...formData, telefone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    {t(f.waste_type, lang)}
                  </label>
                  <select
                    required
                    className={inputClass}
                    value={formData.tipo}
                    onChange={(e) =>
                      setFormData({ ...formData, tipo: e.target.value })
                    }
                  >
                    <option value="">{t(f.waste_placeholder, lang)}</option>
                    {f.waste_options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {lang === 'pt' ? opt.pt : opt.en}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    {t(f.volume, lang)}
                  </label>
                  <input
                    type="text"
                    placeholder={t(f.volume_placeholder, lang)}
                    className={inputClass}
                    value={formData.volume}
                    onChange={(e) =>
                      setFormData({ ...formData, volume: e.target.value })
                    }
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    {t(f.location, lang)}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={t(f.location_placeholder, lang)}
                    className={inputClass}
                    value={formData.local}
                    onChange={(e) =>
                      setFormData({ ...formData, local: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  {t(f.message, lang)}
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
                disabled={status === 'loading' || status === 'success'}
                className="w-full rounded-lg bg-primary py-4 font-bold text-white shadow-[0_4px_14px_rgba(156,192,38,0.4)] transition-all hover:-translate-y-1 hover:bg-primary-dark disabled:opacity-70"
              >
                {status === 'loading'
                  ? t(f.sending, lang)
                  : status === 'success'
                    ? t(f.success, lang)
                    : status === 'error'
                      ? t(f.error, lang)
                      : t(f.submit, lang)}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
