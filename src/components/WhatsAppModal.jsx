'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const waTx = {
  title: { pt: 'Fale com um Especialista', en: 'Talk to a Specialist' },
  description: {
    pt: 'Para um atendimento consultivo mais ágil, você pode nos informar alguns detalhes abaixo. O consultor receberá essas informações direto no WhatsApp. Se preferir, você pode pular essa etapa.',
    en: 'For faster consultative service, you can share some details below. The consultant will receive this information directly on WhatsApp. If you prefer, you can skip this step.',
  },
  name: { pt: 'Nome completo *', en: 'Full name *' },
  role: { pt: 'Cargo na empresa', en: 'Job title' },
  company: { pt: 'Nome da empresa *', en: 'Company name *' },
  phone: { pt: 'Telefone / celular *', en: 'Phone / mobile *' },
  email: { pt: 'E-mail corporativo', en: 'Corporate email' },
  waste: { pt: 'Tipo de resíduo *', en: 'Waste type *' },
  wasteOpts: [
    { value: '', pt: 'Selecione...', en: 'Select...' },
    {
      value: 'Equipamentos Eletrônicos (TI)',
      pt: 'Equipamentos Eletrônicos (TI)',
      en: 'Electronic Equipment (IT)',
    },
    {
      value: 'Sucata de Telefonia/Comunicação',
      pt: 'Sucata de Telefonia/Telecom',
      en: 'Telecom/Phone Scrap',
    },
    {
      value: 'Materiais Não Ferrosos',
      pt: 'Materiais Não Ferrosos',
      en: 'Non-Ferrous Materials',
    },
    {
      value: 'Baterias/Nobreaks',
      pt: 'Baterias / Nobreaks',
      en: 'Batteries / UPS',
    },
    {
      value: 'Misto/Outros',
      pt: 'Vários / Misto / Outros',
      en: 'Various / Mixed / Other',
    },
  ],
  volume: { pt: 'Volume estimado', en: 'Estimated volume' },
  volumePh: { pt: 'Ex: 500 kg, 20 Lotes...', en: 'E.g.: 500 kg, 20 Lots...' },
  location: {
    pt: 'Estado e cidade para logística *',
    en: 'State and city for logistics *',
  },
  locationPh: { pt: 'Ex: São Paulo - SP', en: 'E.g.: São Paulo - SP' },
  message: { pt: 'Mensagem adicional', en: 'Additional message' },
  skip: { pt: 'Pular essa etapa', en: 'Skip this step' },
  send: { pt: 'Enviar e abrir WhatsApp', en: 'Send and open WhatsApp' },
};

function tx(key, lang) {
  return waTx[key]?.[lang] ?? waTx[key]?.pt ?? '';
}

export default function WhatsAppModal() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '5511988389974';

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

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#whatsapp') {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
      } else {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const fecharModal = () => {
    window.location.hash = '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const enviarWhatsApp = (dados) => {
    const textoBase = `*Contato GTech B2B*\n\n*Nome:* ${dados.nome}\n*Cargo/Empresa:* ${dados.cargo ? dados.cargo + ' / ' : ''}${dados.empresa}\n*E-mail:* ${dados.email}\n*Telefone:* ${dados.telefone}\n*Tipo de Resíduo:* ${dados.tipo}\n*Volume:* ${dados.volume}\n*Localização:* ${dados.local}\n*Mensagem:* ${dados.mensagem}`;
    const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(textoBase)}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
    fecharModal();
  };

  const handlePular = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    fecharModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enviarWhatsApp(formData);
  };

  const inputClass =
    'w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary';
  const labelClass = 'mb-1 block text-sm font-semibold text-slate-700';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={fecharModal}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  {tx('title', lang)}
                </h3>
              </div>
              <button
                onClick={fecharModal}
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form body */}
            <div className="max-h-[75vh] overflow-y-auto px-6 py-6">
              <p className="mb-6 text-sm text-slate-600">
                {tx('description', lang)}
              </p>

              <form
                id="whatsappForm"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>{tx('name', lang)}</label>
                    <input
                      required
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{tx('role', lang)}</label>
                    <input
                      type="text"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>{tx('company', lang)}</label>
                    <input
                      required
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{tx('phone', lang)}</label>
                    <input
                      required
                      type="text"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{tx('email', lang)}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{tx('waste', lang)}</label>
                    <select
                      required
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {waTx.wasteOpts.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt[lang] ?? opt.pt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{tx('volume', lang)}</label>
                    <input
                      type="text"
                      name="volume"
                      placeholder={tx('volumePh', lang)}
                      value={formData.volume}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>{tx('location', lang)}</label>
                    <input
                      required
                      type="text"
                      name="local"
                      placeholder={tx('locationPh', lang)}
                      value={formData.local}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>{tx('message', lang)}</label>
                    <textarea
                      name="mensagem"
                      rows={3}
                      value={formData.mensagem}
                      onChange={handleChange}
                      className={inputClass}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>

            {/* Footer actions */}
            <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row">
              <button
                type="button"
                onClick={handlePular}
                className="text-sm font-semibold text-slate-500 hover:text-slate-700 hover:underline"
              >
                {tx('skip', lang)}
              </button>
              <button
                type="submit"
                form="whatsappForm"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 sm:w-auto"
              >
                {tx('send', lang)} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
