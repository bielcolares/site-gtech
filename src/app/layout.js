import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
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
import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <GoogleAnalytics gaId="G-HBFW0D3QJW" />
      <GoogleTagManager gtmId="GTM-T7HQQSL9" />
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-white text-slate-800 antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <WhatsAppFloating />
          <CertificationsFloating />
        </LanguageProvider>
        <Analytics />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '317156430061443');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=317156430061443&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
