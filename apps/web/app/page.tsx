'use client';

import AboutKinaase from '../components/sections/about-kinaase';
import Hero from '../components/sections/hero';
import CTA from '../components/sections/home-cta';
import Services from '../components/sections/services';
import Stats from '../components/sections/stats';
import PageTransition from '../components/ui/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className='min-h-screen'>
        <Hero
          title="Transforming Businesses <br/> with <span class='text-primary-softer'>Governance</span> & <span class='text-primary-softer'>Technology</span>"
          subtitle="Kinaase provides comprehensive corporate governance and cutting-edge technology solutions to help businesses thrive in today's competitive landscape."
          primaryButtonText='Explore Services'
          primaryButtonLink='/corporate-services'
          secondaryButtonText='Contact Us'
          secondaryButtonLink='/contact'
        />

        {/* Services Overview Section */}
        <Services />

        {/* About Kinaase Section */}
        <AboutKinaase />

        {/* Stats Section */}
        <Stats />

        {/* CTA Section */}
        <CTA />
      </main>
    </PageTransition>
  );
}
