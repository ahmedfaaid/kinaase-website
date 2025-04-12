'use client';

import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useRef } from 'react';
import Hero from '../../../components/sections/hero';
import PageTransition from '../../../components/ui/PageTransition';
import { fadeInUp } from '../../../lib/animations';
import { leadershipTeam } from '../../../lib/leadership';

export default function ChiefExecutiveOfficer() {
  const ceoDetails = leadershipTeam.find(
    member => member.position === 'Chief Executive Officer'
  );

  if (!ceoDetails) {
    notFound();
  }

  const ceoRef = useRef<HTMLDivElement>(null);
  const inViewCeo = useInView(ceoRef, { once: true, amount: 0.2 });

  return (
    <PageTransition>
      <main className='min-h-screen'>
        <Hero
          title='Our <span class="text-primary-softer">Chief Executive Officer</span>'
          subtitle='Visionary leadership, strategic growth, and a passion for driving meaningful impact across every level of the organization.'
          smallHero={true}
          imageUrl='https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        />

        <section className='section-padding' ref={ceoRef}>
          <div className='container-custom'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <motion.div
                initial='hidden'
                animate={inViewCeo ? 'visible' : 'hidden'}
                variants={fadeInUp}
              >
                <Image
                  src={ceoDetails?.imageUrl}
                  alt={ceoDetails?.name}
                  className='rounded-lg shadow-lg w-full h-auto'
                  width={ceoDetails?.imageWidth}
                  height={ceoDetails?.imageHeight}
                />
              </motion.div>

              <motion.div
                initial='hidden'
                animate={inViewCeo ? 'visible' : 'hidden'}
                variants={fadeInUp}
              >
                <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
                  Our Leader
                </span>
                <h2 className='section-title mb-4'>Yasmine Wuruche Alhassan</h2>
                <p className='text-gray-600 mb-6'>
                  <span className='font-semibold'>Yasmine</span> is a highly
                  accomplished corporate lawyer and dynamic entrepreneur, who is
                  the founder and Chief Executive Officer of Kinaase, a
                  fast-rising corporate services and technology firm based in
                  Accra, Ghana. With a rich legal background and extensive
                  experience across multiple industries, Yasmine is at the
                  forefront of redefining how businesses launch, operate, and
                  grow in today’s evolving African market.
                </p>
                <p className='text-gray-600 mb-6'>
                  Her legal expertise spans corporate governance, regulatory
                  compliance, and contract negotiation. Over the years, she has
                  advised a diverse portfolio of clients—ranging from tech
                  startups and SMEs to multinational corporations—across sectors
                  including finance, real estate, energy, insurance, and
                  agriculture.
                </p>
                <p className='text-gray-600 mb-6'>
                  As CEO of Kinaase, Yasmine has led the company’s
                  transformation into a forward-thinking firm that not only
                  provides traditional corporate services but also develops
                  custom software solutions and leverages AI tools to streamline
                  operations, enhance compliance, and drive digital innovation.
                </p>
                <h3 className='section-subtitle mb-4'>
                  Professional Highlights
                </h3>
                <ul className='mb-6'>
                  {ceoDetails?.bio.professionalHighlights.map(highlight => (
                    <li
                      key={highlight}
                      className='text-gray-600 mb-2 flex items-start'
                    >
                      <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                        <Check size={16} />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <h3 className='section-subtitle mb-4'>
                  Education & Affiliations
                </h3>
                <p className='text-gray-600 mb-6'>
                  {ceoDetails?.bio.educationAffiliations}
                </p>
                <h3 className='section-subtitle mb-4'>Leadership Philosophy</h3>
                <p className='text-gray-600 mb-6'>
                  {ceoDetails?.bio.leadershipPhilosophy}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
