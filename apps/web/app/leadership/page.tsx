'use client';

import Hero from '../../components/sections/hero';
import AdvisoryBoard from '../../components/sections/leadership/advisory-board';
import LeadershipCta from '../../components/sections/leadership/leadership-cta';
import LeadershipTeam from '../../components/sections/leadership/leadership-team';
import PageTransition from '../../components/ui/PageTransition';

export default function Leadership() {
  return (
    <PageTransition>
      <main className='min-h-screen'>
        <Hero
          title="Our <span class='text-primary-softer'>Leadership</span> Team"
          subtitle='Meet the experienced professionals who guide our vision and strategy, bringing decades of expertise in corporate governance and technology.'
          smallHero={true}
          imageUrl='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        />

        {/* Leadership Team */}
        <LeadershipTeam />

        {/* Advisory Board */}
        <AdvisoryBoard />

        {/* CTA Section */}
        <LeadershipCta />
      </main>
    </PageTransition>
  );
}
