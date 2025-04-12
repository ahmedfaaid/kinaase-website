import { motion, useInView } from 'framer-motion';
import {
  Brain,
  Building2,
  ChevronRight,
  Cpu,
  FileSpreadsheet,
  Landmark,
  Server
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../../../lib/animations';
import ServiceCard from '../../ui/ServiceCard';

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
              icon={<Building2 size={28} />}
              title='Business Registration & Incorporation'
              description='Establish your business with confidence through expert registration and incorporation services tailored to your jurisdiction and industry.'
              link='/corporate-services#business-registration-incorporation'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<FileSpreadsheet size={28} />}
              title='Tax & Accounting Support'
              description='Maintain financial clarity and compliance with professional tax and accounting support tailored to your business needs.'
              link='/corporate-services#tax-accounting-support'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Landmark size={28} />}
              title='Work & Residency Permits'
              description='Secure work and residency permits efficiently with our end-to-end immigration and relocation support.'
              link='/corporate-services#work-residency-permits'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Brain size={28} />}
              title='AI Consulting'
              description='Harness the power of artificial intelligence to improve efficiency, make better decisions, and drive innovation.'
              link='/technology-services#ai-consulting'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Cpu size={28} />}
              title='Technology Strategy'
              description='Develop a tailored technology strategy that aligns with your business goals and provides a competitive advantage.'
              link='/technology-services#technology-strategy'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Server size={28} />}
              title='IT Infrastructure'
              description='Build and manage robust IT infrastructure that ensures reliability, security, and scalability for your operations.'
              link='/technology-services#it-infrastructure'
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
