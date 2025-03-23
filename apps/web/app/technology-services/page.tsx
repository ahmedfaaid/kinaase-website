'use client';

import Hero from '../../components/sections/hero';
import AiConsulting from '../../components/sections/technology-services/ai-consulting';
import ApplicationSupport from '../../components/sections/technology-services/application-support';
import ItInfrastructure from '../../components/sections/technology-services/it-infrastructure';
import Services from '../../components/sections/technology-services/services';
import TechnologyCta from '../../components/sections/technology-services/technology-cta';
import TechnologyStrategy from '../../components/sections/technology-services/technology-strategy';
import PageTransition from '../../components/ui/PageTransition';

export default function TechnologyServices() {
  return (
    <PageTransition>
      <main className='min-h-screen'>
        <Hero
          title="Technology <span class='text-primary-softer'>Services</span>"
          subtitle='Harness the power of cutting-edge technology solutions to drive innovation, improve efficiency, and achieve business objectives.'
          smallHero={true}
          imageUrl='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        />
        {/* Services Overview */}
        <Services />
        {/* AI Consulting */}
        <AiConsulting />

        {/* Technology Strategy */}
        <TechnologyStrategy />

        {/* IT Infrastructure */}
        <ItInfrastructure />

        {/* Application Support */}
        <ApplicationSupport />

        {/* CTA Section */}
        <TechnologyCta />
      </main>
    </PageTransition>
  );
}
