import { motion, useInView } from 'framer-motion';
import { Check, Clock, Cpu, Shield, Target, Users } from 'lucide-react';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export default function CoreValues() {
  const valuesRef = useRef<HTMLDivElement>(null);
  const inViewValues = useInView(valuesRef, { once: true, amount: 0.2 });

  return (
    <section className='section-padding' ref={valuesRef}>
      <div className='container-custom'>
        <motion.div
          className='text-center mx-auto max-w-3xl mb-16'
          initial='hidden'
          animate={inViewValues ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
            What Drives Us
          </span>
          <h2 className='section-title mb-4'>Our Core Values</h2>
          <p className='section-subtitle'>
            These fundamental principles guide our actions, decisions, and
            relationships, shaping our company culture and service delivery.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={staggerContainer}
          initial='hidden'
          animate={inViewValues ? 'visible' : 'hidden'}
        >
          <motion.div
            className='bg-white rounded-lg p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow'
            variants={fadeInUp}
          >
            <div className='rounded-full bg-primary-softer p-4 w-16 h-16 flex items-center justify-center mb-6 text-primary-teal'>
              <Shield size={28} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Integrity</h3>
            <p className='text-gray-600'>
              We uphold the highest ethical standards in all our interactions,
              ensuring transparency, honesty, and accountability in everything
              we do.
            </p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow'
            variants={fadeInUp}
          >
            <div className='rounded-full bg-primary-softer p-4 w-16 h-16 flex items-center justify-center mb-6 text-primary-teal'>
              <Users size={28} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Client-Centric</h3>
            <p className='text-gray-600'>
              We place our clients at the center of everything we do, focusing
              on understanding their unique needs and delivering tailored
              solutions that create lasting value.
            </p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow'
            variants={fadeInUp}
          >
            <div className='rounded-full bg-primary-softer p-4 w-16 h-16 flex items-center justify-center mb-6 text-primary-teal'>
              <Check size={28} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Excellence</h3>
            <p className='text-gray-600'>
              We are committed to delivering the highest quality in all our
              services, continuously improving our processes, and exceeding
              client expectations.
            </p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow'
            variants={fadeInUp}
          >
            <div className='rounded-full bg-primary-softer p-4 w-16 h-16 flex items-center justify-center mb-6 text-primary-teal'>
              <Cpu size={28} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Innovation</h3>
            <p className='text-gray-600'>
              We embrace creativity and forward-thinking, constantly seeking new
              approaches and technologies to address complex business
              challenges.
            </p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow'
            variants={fadeInUp}
          >
            <div className='rounded-full bg-primary-softer p-4 w-16 h-16 flex items-center justify-center mb-6 text-primary-teal'>
              <Target size={28} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Collaboration</h3>
            <p className='text-gray-600'>
              We believe in the power of teamwork, fostering a collaborative
              environment within our organization and with our clients to
              achieve shared goals.
            </p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-shadow'
            variants={fadeInUp}
          >
            <div className='rounded-full bg-primary-softer p-4 w-16 h-16 flex items-center justify-center mb-6 text-primary-teal'>
              <Clock size={28} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Adaptability</h3>
            <p className='text-gray-600'>
              We remain agile and responsive to the changing business landscape,
              continuously evolving our approaches to address emerging
              challenges and opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
