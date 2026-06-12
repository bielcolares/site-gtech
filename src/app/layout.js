import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GTech Soluções Ambientais | Mineração Urbana e ESG',
  description:
    'Recuperamos valor, protegemos marcas e preservamos o futuro. Gestão de resíduos eletroeletrônicos, economia circular e compliance B2B.',
  icons: {
    icon: '/favicon.ico',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import CertificationsFloating from '@/components/CertificationsFloating';
import WhatsAppModal from '@/components/WhatsAppModal';
import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-white text-slate-800 antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <WhatsAppFloating />
          <CertificationsFloating />
          <WhatsAppModal />
        </LanguageProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-J88G8H0RZY" />
      <GoogleTagManager gtmId="GTM-WB97D6PC" />
    </html>
  );
}
