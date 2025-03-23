'use client';

import BoardCertification from '../../components/sections/corporate-services/board-certification';
import CorporateCta from '../../components/sections/corporate-services/corporate-cta';
import CorporateGovernance from '../../components/sections/corporate-services/corporate-governance';
import CorporateStructure from '../../components/sections/corporate-services/corporate-structure';
import Services from '../../components/sections/corporate-services/services';
import Hero from '../../components/sections/hero';
import PageTransition from '../../components/ui/PageTransition';

export default function CorporateServices() {
  return (
    <PageTransition>
      <main className='min-h-screen'>
        <Hero
          title="Corporate <span class='text-primary-softer'>Services</span>"
          subtitle='Establish effective governance structures, develop robust corporate frameworks, and enhance board effectiveness with our comprehensive corporate services.'
          smallHero={true}
          imageUrl='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        />

        {/* Services Overview */}
        <Services />

        {/* Corporate Governance */}
        <CorporateGovernance />

        {/* Corporate Structure */}
        <CorporateStructure />

        {/* Board Certification */}
        <BoardCertification />

        {/* CTA Section */}
        <CorporateCta />
      </main>
    </PageTransition>
  );
}
