import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import AIAdvantage from './components/AIAdvantage';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Problem />
      <AIAdvantage />
      <SocialProof />
      <Pricing />
      <HowItWorks />
      <Footer />
      <StickyCTA />
    </main>
  );
}