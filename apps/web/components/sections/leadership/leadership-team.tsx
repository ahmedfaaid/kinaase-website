import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../../../lib/animations';
import { leadershipTeam } from '../../../lib/leadership';
import ProfileCard from '../../ui/ProfileCard';

export default function LeadershipTeam() {
  const teamRef = useRef<HTMLDivElement>(null);
  const inViewTeam = useInView(teamRef, { once: true, amount: 0.2 });

  return (
    <section className='section-padding' ref={teamRef}>
      <div className='container-custom'>
        <motion.div
          className='text-center mx-auto max-w-3xl mb-16'
          initial='hidden'
          animate={inViewTeam ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
            Executive Team
          </span>
          <h2 className='section-title mb-4'>Meet Our Leaders</h2>
          <p className='section-subtitle'>
            Our leadership team brings together diverse expertise and a shared
            commitment to excellence, guiding Kinaase&apos;s mission to deliver
            exceptional corporate governance and technology solutions.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
          variants={staggerContainer}
          initial='hidden'
          animate={inViewTeam ? 'visible' : 'hidden'}
        >
          {leadershipTeam.map((leader, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ProfileCard
                name={leader.name}
                position={leader.position}
                bio={leader.bio.excerpt}
                imageUrl={leader.imageUrl}
                linkedinUrl={leader.linkedinUrl}
                twitterUrl={leader.twitterUrl}
                imageWidth={leader.imageWidth}
                imageHeight={leader.imageHeight}
                profileUrl={leader.profileUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
