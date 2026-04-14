'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppModal() {
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
        // Travar o scroll da página mãe
        document.body.style.overflow = 'hidden';
      } else {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    // Checar no primeiro render
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
    // Monta o texto conforme a formatação exata que quebra as linhas perfeitamente
    const textoBase = `*Contato GTech B2B*\n\n*Nome:* ${dados.nome}\n*Cargo/Empresa:* ${dados.cargo ? dados.cargo + ' / ' : ''}${dados.empresa}\n*E-mail:* ${dados.email}\n*Telefone:* ${dados.telefone}\n*Tipo de Resíduo:* ${dados.tipo}\n*Volume:* ${dados.volume}\n*Localização:* ${dados.local}\n*Mensagem:* ${dados.mensagem}`;

    const encodedText = encodeURIComponent(textoBase);
    const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodedText}&type=phone_number&app_absent=0`;

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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Fundo Escuro com desfoque */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={fecharModal}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header Módulo */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  Fale com um Especialista
                </h3>
              </div>
              <button
                onClick={fecharModal}
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conteúdo scrollável form */}
            <div className="max-h-[75vh] overflow-y-auto px-6 py-6">
              <p className="mb-6 text-sm text-slate-600">
                Para um atendimento consultivo mais ágil, você pode nos informar
                alguns detalhes abaixo. O consultor receberá essas informações
                direto no WhatsApp. Se preferir, você pode pular essa etapa.
              </p>

              <form
                id="whatsappForm"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Nome completo *
                    </label>
                    <input
                      required
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Cargo na empresa
                    </label>
                    <input
                      type="text"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Nome da empresa *
                    </label>
                    <input
                      required
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Telefone / celular *
                    </label>
                    <input
                      required
                      type="text"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      E-mail corporativo
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Tipo de resíduo *
                    </label>
                    <select
                      required
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Volume estimado
                    </label>
                    <input
                      type="text"
                      name="volume"
                      placeholder="Ex: 500 kg, 20 Lotes..."
                      value={formData.volume}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Estado e cidade para logística *
                    </label>
                    <input
                      required
                      type="text"
                      name="local"
                      placeholder="Ex: São Paulo - SP"
                      value={formData.local}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Mensagem adicional
                    </label>
                    <textarea
                      name="mensagem"
                      rows={3}
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Rodapé - Ações */}
            <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row">
              <button
                type="button"
                onClick={handlePular}
                className="text-sm font-semibold text-slate-500 hover:text-slate-700 hover:underline"
              >
                Pular essa etapa
              </button>
              <button
                type="submit"
                form="whatsappForm"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 sm:w-auto"
              >
                Enviar e abrir WhatsApp <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
