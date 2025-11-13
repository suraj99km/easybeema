import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import AIAdvantage from './components/AIAdvantage';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Problem />
      <AIAdvantage />
      <HowItWorks />
      <Footer />
    </main>
  );
}