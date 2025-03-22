import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import ProfileCard from '../ui/ProfileCard';

export default function LeadershipTeam() {
  const teamRef = useRef<HTMLDivElement>(null);
  const inViewTeam = useInView(teamRef, { once: true, amount: 0.2 });

  const leadershipTeam = [
    {
      name: 'Yasmine Wuruche Alhassan',
      position: 'Chief Executive Officer',
      bio: 'Yasmine Wuruche Alhassan is the visionary leader behind Kinaase, bringing over 20 years of experience in corporate governance and strategic leadership. Prior to founding Kinaase, Yasmine held executive positions at several multinational corporations, where she led initiatives to strengthen governance structures and improve board effectiveness. She holds an MBA from Harvard Business School and serves on multiple corporate and non-profit boards. Her expertise in corporate governance has made her a sought-after speaker and advisor for organizations seeking to enhance their governance frameworks.',
      imageUrl:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      linkedinUrl: '#',
      twitterUrl: '#'
    },
    {
      name: 'Ahmed Faaid Alhassan',
      position: 'Chief Technology Officer',
      bio: "Ahmed Faaid Alhassan leads Kinaase's technology initiatives, bringing a wealth of experience in digital transformation, AI implementation, and technology strategy. With a background in computer science and an advanced degree in artificial intelligence from MIT, Ahmed has spearheaded numerous successful technology projects for Fortune 500 companies. Before joining Kinaase, he was the Head of Digital Innovation at a leading technology consulting firm, where he developed cutting-edge solutions for complex business challenges. Ahmed is passionate about leveraging technology to drive business value and is recognized as a thought leader in the field of AI and machine learning.",
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      linkedinUrl: '#',
      twitterUrl: '#'
    },
    {
      name: 'Khalid Keith Iddisah',
      position: 'Chief Operating Officer',
      bio: "Khalid Keith Iddisah oversees Kinaase's operations, ensuring the efficient delivery of services and the implementation of strategic initiatives. With extensive experience in operations management and business process optimization, Khalid has a proven track record of improving organizational performance and client satisfaction. Before joining Kinaase, he served as the Operations Director for a global consulting firm, where he led teams across multiple regions and implemented innovative approaches to service delivery. Khalid holds an MBA from INSEAD and is certified in Lean Six Sigma. His operational expertise and client-focused approach have been instrumental in Kinaase's growth and success.",
      imageUrl:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      linkedinUrl: '#',
      twitterUrl: '#'
    }
  ];

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
                bio={leader.bio}
                imageUrl={leader.imageUrl}
                linkedinUrl={leader.linkedinUrl}
                twitterUrl={leader.twitterUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
