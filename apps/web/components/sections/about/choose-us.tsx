import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function ChooseUs() {
  const chooseUsRef = useRef<HTMLDivElement>(null);
  const inViewChooseUs = useInView(chooseUsRef, { once: true, amount: 0.2 });

  return (
    <section className='section-padding' ref={chooseUsRef}>
      <div className='container-custom'>
        <motion.div
          className='text-center mx-auto max-w-3xl mb-16'
          initial='hidden'
          animate={inViewChooseUs ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
            Your Trusted Advantage
          </span>
          <h2 className='section-title mb-4'>Why Choose Kinaase</h2>
          <p className='section-subtitle'>
            We bring proven expertise, personalized solutions, and a relentless
            drive to help you succeed — every step of the way.
          </p>
        </motion.div>
        <motion.div
          className='bg-white rounded-lg p-8 shadow-soft border border-gray-100 max-w-4xl mx-auto'
          initial='hidden'
          animate={inViewChooseUs ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div className='space-y-4'>
            <div className='flex items-center'>
              <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                <Check size={16} />
              </span>
              <p className='text-gray-600'>Tech-forward service approach</p>
            </div>
            <div className='flex items-center'>
              <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                <Check size={16} />
              </span>
              <p className='text-gray-600'>
                Deep understanding of local & regional markets
              </p>
            </div>
            <div className='flex items-center'>
              <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                <Check size={16} />
              </span>
              <p className='text-gray-600'>
                Personalized, client-first delivery
              </p>
            </div>
            <div className='flex items-center'>
              <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                <Check size={16} />
              </span>
              <p className='text-gray-600'>Young, innovative team</p>
            </div>
            <div className='flex items-center'>
              <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                <Check size={16} />
              </span>
              <p className='text-gray-600'>
                Transparent pricing and reliable support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
