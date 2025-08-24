import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ForWhom from '@/components/ForWhom';
import Testimonials from '@/components/Testimonials';
import Consultation from '@/components/Consultation';
import Socials from '@/components/Socials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ForWhom />
      <Testimonials />
      <Consultation />
      <Socials />
      <Footer />
    </main>
  );
}