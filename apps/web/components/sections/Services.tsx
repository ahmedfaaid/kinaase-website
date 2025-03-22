import { motion, useInView } from 'framer-motion';
import {
  Brain,
  ChevronRight,
  Cpu,
  Server,
  Shield,
  User,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const inViewServices = useInView(servicesRef, { once: true, amount: 0.2 });

  return (
    <section className='section-padding bg-gray-50' ref={servicesRef}>
      <div className='container-custom'>
        <motion.div
          className='text-center mx-auto max-w-3xl mb-16'
          initial='hidden'
          animate={inViewServices ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
            Our Services
          </span>
          <h2 className='section-title mb-4'>
            Comprehensive Solutions for Your Business Needs
          </h2>
          <p className='section-subtitle'>
            We offer a wide range of services designed to enhance your corporate
            governance structure and leverage technology for business growth.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={staggerContainer}
          initial='hidden'
          animate={inViewServices ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Shield size={28} />}
              title='Corporate Governance'
              description='Establish effective governance structures that align with industry best practices and regulatory requirements.'
              link='/corporate-services'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<User size={28} />}
              title='Corporate Structure'
              description='Create robust corporate structures that support business growth, optimize operations, and mitigate risks.'
              link='/corporate-services'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Users size={28} />}
              title='Board Certification'
              description="Enhance your board's effectiveness with our comprehensive certification program designed for directors."
              link='/corporate-services'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Brain size={28} />}
              title='AI Consulting'
              description='Harness the power of artificial intelligence to improve efficiency, make better decisions, and drive innovation.'
              link='/technology-services'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Cpu size={28} />}
              title='Technology Strategy'
              description='Develop a tailored technology strategy that aligns with your business goals and provides a competitive advantage.'
              link='/technology-services'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Server size={28} />}
              title='IT Infrastructure'
              description='Build and manage robust IT infrastructure that ensures reliability, security, and scalability for your operations.'
              link='/technology-services'
            />
          </motion.div>
        </motion.div>

        <motion.div
          className='text-center mt-12'
          variants={fadeInUp}
          initial='hidden'
          animate={inViewServices ? 'visible' : 'hidden'}
        >
          <Link
            href='/corporate-services'
            className='btn-secondary inline-flex items-center'
          >
            View All Services
            <ChevronRight className='ml-2 h-4 w-4' />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
