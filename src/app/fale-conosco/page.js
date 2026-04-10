import ContactForm from '@/components/ContactForm';
import React from 'react';

export const metadata = {
  title: 'Fale Conosco | GTech Soluções Ambientais',
};

export default function FaleConosco() {
  return (
    <div className="flex flex-grow items-center justify-center bg-slate-50">
      <ContactForm />
    </div>
  );
}
