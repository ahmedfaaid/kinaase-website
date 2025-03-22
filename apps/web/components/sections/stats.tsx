import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export default function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inViewStats = useInView(statsRef, { once: true, amount: 0.2 });

  return (
    <section className='py-16 bg-gradient-primary text-white' ref={statsRef}>
      <div className='container-custom'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'
          variants={staggerContainer}
          initial='hidden'
          animate={inViewStats ? 'visible' : 'hidden'}
        >
          <motion.div className='p-6' variants={fadeInUp}>
            <div className='text-4xl md:text-5xl font-bold mb-2'>200+</div>
            <div className='text-lg opacity-80'>Clients Served</div>
          </motion.div>

          <motion.div className='p-6' variants={fadeInUp}>
            <div className='text-4xl md:text-5xl font-bold mb-2'>350+</div>
            <div className='text-lg opacity-80'>Projects Completed</div>
          </motion.div>

          <motion.div className='p-6' variants={fadeInUp}>
            <div className='text-4xl md:text-5xl font-bold mb-2'>25+</div>
            <div className='text-lg opacity-80'>Expert Consultants</div>
          </motion.div>

          <motion.div className='p-6' variants={fadeInUp}>
            <div className='text-4xl md:text-5xl font-bold mb-2'>15+</div>
            <div className='text-lg opacity-80'>Years of Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
