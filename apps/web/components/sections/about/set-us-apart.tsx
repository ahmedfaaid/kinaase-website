import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function SetUsApart() {
  const setUsApartRef = useRef<HTMLDivElement>(null);
  const inViewSetUsApart = useInView(setUsApartRef, {
    once: true,
    amount: 0.2
  });

  return (
    <section className='section-padding bg-gray-50' ref={setUsApartRef}>
      <div className='container-custom'>
        <motion.div
          className='text-center mx-auto max-w-3xl mb-16'
          initial='hidden'
          animate={inViewSetUsApart ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
            Standing Apart
          </span>
          <h2 className='section-title mb-4'>What Sets Us Apart</h2>
          <p className='section-subtitle'>
            Innovative thinking, unmatched dedication, and a commitment to
            excellence — discover what makes us truly stand out.
          </p>
        </motion.div>
        <motion.div
          className='bg-white rounded-lg p-8 shadow-soft border border-gray-100 max-w-4xl mx-auto'
          initial='hidden'
          animate={inViewSetUsApart ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <p className='text-gray-600'>
            In addition to traditional corporate services, we{' '}
            <span className='italic'>develop modern software systems</span>{' '}
            tailored to client needs—ranging from web and mobile applications to
            business process automation tools. We also{' '}
            <span className='italic'>leverage AI technologies</span> to enhance
            decision-making, streamline operations, and unlock new business
            insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
