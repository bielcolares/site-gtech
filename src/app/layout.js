import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GTech Soluções Ambientais | Mineração Urbana e ESG',
  description:
    'Recuperamos valor, protegemos marcas e preservamos o futuro. Gestão de resíduos eletroeletrônicos, economia circular e compliance B2B.',
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-white text-slate-800 antialiased`}
      >
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
