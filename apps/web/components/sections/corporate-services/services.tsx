import { motion, useInView } from 'framer-motion';
import {
  Building2,
  ClipboardCheck,
  FileSpreadsheet,
  HandHelping,
  Landmark,
  NotebookPen
} from 'lucide-react';
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
              icon={<Building2 size={28} />}
              title='Business Registration & Incorporation'
              description='Establish your business with confidence through expert registration and incorporation services tailored to your jurisdiction and industry.'
              link='#business-registration-incorporation'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<FileSpreadsheet size={28} />}
              title='Tax & Accounting Support'
              description='Maintain financial clarity and compliance with professional tax and accounting support tailored to your business needs.'
              link='#tax-accounting-support'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Landmark size={28} />}
              title='Work & Residency Permits'
              description='Secure work and residency permits efficiently with our end-to-end immigration and relocation support.'
              link='#work-residency-permits'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<ClipboardCheck size={28} />}
              title='Regulatory Compliance & Licensing'
              description='Navigate complex regulatory landscapes with confidence through tailored compliance solutions that ensure adherence to industry standards and legal requirements.'
              link='#regulatory-compliance'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<NotebookPen size={28} />}
              title='Company Secretarial'
              description='Streamline corporate administration with expert company secretarial services that support regulatory filings, governance obligations, and statutory compliance.'
              link='#company-secretarial'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<HandHelping size={28} />}
              title='Business Advisory & Consultancy'
              description='Drive strategic growth and operational excellence with expert business advisory services tailored to your company’s unique challenges and opportunities.'
              link='#business-advisory'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
