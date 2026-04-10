import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  const phoneNumber = '5511988389974'; // Número da GTech
  const message =
    'Olá! Gostaria de falar com um especialista sobre a gestão correta de resíduos eletrônicos para a minha empresa.';

  const encodedMessage = encodeURIComponent(message);
  const wpLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={wpLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex cursor-pointer items-center"
    >
      <div className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap rounded-xl border border-slate-100 bg-white px-4 py-2 text-sm font-bold text-slate-800 opacity-0 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-opacity duration-300 group-hover:opacity-100 md:block">
        Falar com Especialista B2B
        <div className="absolute right-[-6px] top-1/2 h-0 w-0 -translate-y-1/2 transform border-b-8 border-l-8 border-t-8 border-b-transparent border-l-white border-t-transparent"></div>
      </div>
      <div className="transform rounded-full bg-primary p-4 text-white shadow-[0_4px_14px_rgba(156,192,38,0.5)] transition-all hover:scale-110 hover:bg-primary-dark">
        <MessageCircle className="h-7 w-7" />
      </div>
    </a>
  );
}
