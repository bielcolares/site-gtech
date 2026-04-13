import Hero from '@/components/Hero';
import RadarReciclagem from '@/components/RadarReciclagem';
import VideoSection from '@/components/VideoSection';
import Features from '@/components/Features';
import Partners from '@/components/Partners';

export default function Home() {
  return (
    <>
      {/* 1ª Dobra: Apresentação B2B */}
      <Hero />

      {/* 2ª Dobra: Radar de Reciclagem */}
      <RadarReciclagem />

      {/* 3ª Dobra: Vídeo Institucional */}
      <VideoSection />

      {/* 4ª Dobra: Diferenciais */}
      <Features />

      {/* 5ª Dobra: Parceiros / Clientes */}
      <Partners />
    </>
  );
}
