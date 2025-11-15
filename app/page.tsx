"use client";
import { useEffect } from 'react';
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
  useEffect(() => {
    const video1 = document.getElementById('video1') as HTMLVideoElement;
    const video2 = document.getElementById('video2') as HTMLVideoElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(error => console.error("Video autoplay failed:", error));
            if (video.id === 'video1' && video2) video2.pause();
            if (video.id === 'video2' && video1) video1.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (video1) observer.observe(video1);
    if (video2) observer.observe(video2);

    return () => {
      if (video1) observer.unobserve(video1);
      if (video2) observer.unobserve(video2);
    };
  }, []);

  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Problem />
      <AIAdvantage />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <Footer />
      <StickyCTA />
    </main>
  );
}