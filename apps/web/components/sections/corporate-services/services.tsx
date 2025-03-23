import { motion, useInView } from 'framer-motion';
import { Shield, User, Users } from 'lucide-react';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../../../lib/animations';
import ServiceCard from '../../ui/ServiceCard';

export default function Services() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const inViewOverview = useInView(overviewRef, { once: true, amount: 0.2 });

  return (
    <section className='section-padding' ref={overviewRef}>
      <div className='container-custom'>
        <motion.div
          className='text-center mx-auto max-w-3xl mb-16'
          initial='hidden'
          animate={inViewOverview ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
            Our Corporate Services
          </span>
          <h2 className='section-title mb-4'>
            Comprehensive Corporate Governance Solutions
          </h2>
          <p className='section-subtitle'>
            We offer a range of services designed to help organizations
            establish effective governance structures, develop robust corporate
            frameworks, and enhance board effectiveness.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
          variants={staggerContainer}
          initial='hidden'
          animate={inViewOverview ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Shield size={28} />}
              title='Corporate Governance'
              description='Establish effective governance frameworks that align with industry best practices and regulatory requirements.'
              link='#corporate-governance'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<User size={28} />}
              title='Corporate Structure'
              description='Create robust corporate structures that support business growth, optimize operations, and mitigate risks.'
              link='#corporate-structure'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Users size={28} />}
              title='Board Certification'
              description="Enhance your board's effectiveness with our comprehensive certification program designed for directors."
              link='#board-certification'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
