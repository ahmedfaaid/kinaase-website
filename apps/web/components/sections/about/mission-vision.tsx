import { motion, useInView } from 'framer-motion';
import { Clock, Target } from 'lucide-react';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function MissionVision() {
  const missionRef = useRef<HTMLDivElement>(null);
  const inViewMission = useInView(missionRef, { once: true, amount: 0.2 });

  return (
    <section className='section-padding bg-gray-50' ref={missionRef}>
      <div className='container-custom'>
        <motion.div
          className='text-center mx-auto max-w-3xl mb-16'
          initial='hidden'
          animate={inViewMission ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
            Our Purpose
          </span>
          <h2 className='section-title mb-4'>Mission & Vision</h2>
          <p className='section-subtitle'>
            At Kinaase, our mission and vision guide everything we do, from
            service delivery to client relationships.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <motion.div
            className='bg-white rounded-lg p-8 shadow-soft border border-gray-100'
            initial='hidden'
            animate={inViewMission ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <div className='rounded-full bg-primary-softer p-4 w-16 h-16 flex items-center justify-center mb-6 text-primary-teal'>
              <Target size={28} />
            </div>
            <h3 className='text-2xl font-semibold mb-4'>Our Mission</h3>
            <p className='text-gray-600 mb-4'>
              To empower organizations with effective governance structures and
              innovative technology solutions that drive sustainable growth,
              operational excellence, and long-term success.
            </p>
            <p className='text-gray-600'>
              We are committed to delivering exceptional value through our
              expertise, fostering trust-based relationships, and continuously
              evolving our services to meet the changing needs of our clients.
            </p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-8 shadow-soft border border-gray-100'
            initial='hidden'
            animate={inViewMission ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <div className='rounded-full bg-primary-softer p-4 w-16 h-16 flex items-center justify-center mb-6 text-primary-teal'>
              <Clock size={28} />
            </div>
            <h3 className='text-2xl font-semibold mb-4'>Our Vision</h3>
            <p className='text-gray-600 mb-4'>
              To be the premier provider of integrated corporate governance and
              technology solutions, recognized for our innovation, expertise,
              and commitment to client success.
            </p>
            <p className='text-gray-600'>
              We aspire to set the standard for excellence in our industry,
              helping organizations across all sectors establish robust
              governance frameworks and leverage technology to achieve their
              full potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
