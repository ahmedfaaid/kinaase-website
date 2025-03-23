import { motion, useInView } from 'framer-motion';
import { Brain, Cpu, LifeBuoy, Server } from 'lucide-react';
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
            Our Technology Services
          </span>
          <h2 className='section-title mb-4'>
            Innovative Technology Solutions
          </h2>
          <p className='section-subtitle'>
            We offer a comprehensive suite of technology services designed to
            help organizations leverage digital capabilities for sustainable
            growth and competitive advantage.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-4 gap-8'
          variants={staggerContainer}
          initial='hidden'
          animate={inViewOverview ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Brain size={28} />}
              title='AI Consulting'
              description='Harness the power of artificial intelligence to improve efficiency, make better decisions, and drive innovation.'
              link='#ai-consulting'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Cpu size={28} />}
              title='Technology Strategy'
              description='Develop a tailored technology strategy that aligns with your business goals and provides a competitive advantage.'
              link='#technology-strategy'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<Server size={28} />}
              title='IT Infrastructure'
              description='Build and manage robust IT infrastructure that ensures reliability, security, and scalability for your operations.'
              link='#it-infrastructure'
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ServiceCard
              icon={<LifeBuoy size={28} />}
              title='Application Support'
              description='Ensure the reliable performance of your critical applications with our comprehensive support services.'
              link='#application-support'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
