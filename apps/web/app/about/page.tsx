'use client';

import AboutCta from '../../components/sections/about-cta';
import CompanyHistory from '../../components/sections/company-history';
import CoreValues from '../../components/sections/core-values';
import Hero from '../../components/sections/hero';
import MissionVision from '../../components/sections/mission-vision';
import PageTransition from '../../components/ui/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <main className='min-h-screen'>
        <Hero
          title="About <span class='text-primary-softer'>Kinaase</span>"
          subtitle='Learn about our company, our mission, and the values that drive our commitment to excellence.'
          smallHero={true}
          imageUrl='https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        />

        {/* Company History */}
        <CompanyHistory />

        {/* Mission and Vision */}
        <MissionVision />

        {/* Core Values */}
        <CoreValues />

        {/* CTA Section */}
        <AboutCta />
      </main>
    </PageTransition>
  );
}
