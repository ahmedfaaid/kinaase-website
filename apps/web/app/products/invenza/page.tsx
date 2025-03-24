'use client';

import { useEffect } from 'react';
import FAQ from '../../../components/sections/invenza/faq';
import Features from '../../../components/sections/invenza/features';
import Hero from '../../../components/sections/invenza/hero';
import InvenzaCta from '../../../components/sections/invenza/invenza-cta';
import Pricing from '../../../components/sections/invenza/pricing';
import Showcase from '../../../components/sections/invenza/showcase';
import Stats from '../../../components/sections/invenza/stats';
import { Testimonials } from '../../../components/sections/invenza/testimonials';
import PageTransition from '../../../components/ui/PageTransition';

export default function Invenza() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();

        const targetId = anchor.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <PageTransition>
      <div className='min-h-screen bg-white mt-[105px]'>
        <main>
          <Hero />

          {/* Stats Section */}
          <Stats />

          {/* Features Section */}
          <Features />

          {/* Showcase Section */}
          <Showcase />

          {/* Pricing Section */}
          <Pricing />

          {/* Testimonials Section */}
          <Testimonials />

          {/* FAQ Section */}
          <FAQ />

          {/* CTA Section */}
          <InvenzaCta />
        </main>
      </div>
    </PageTransition>
  );
}
