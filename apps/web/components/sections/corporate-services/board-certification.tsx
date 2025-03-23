import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function BoardCertification() {
  const certificationRef = useRef<HTMLDivElement>(null);
  const inViewCertification = useInView(certificationRef, {
    once: true,
    amount: 0.2
  });

  return (
    <section
      id='board-certification'
      className='section-padding bg-gray-50'
      ref={certificationRef}
    >
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewCertification ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Service
            </span>
            <h2 className='section-title mb-4'>
              Board of Directors Certification
            </h2>
            <p className='text-gray-600 mb-6'>
              An effective board of directors is critical for organizational
              governance and strategic direction. Our board certification
              program equips directors with the knowledge, skills, and best
              practices necessary to fulfill their fiduciary responsibilities
              and contribute to organizational success.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Comprehensive director certification programs
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>Board effectiveness assessments</p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Director orientation and onboarding
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Continuing education for board members
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Board succession planning and director recruitment
                </p>
              </div>
            </div>

            <Link
              href='/contact'
              className='btn-primary inline-flex items-center'
            >
              Get Started
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </motion.div>

          <motion.div
            initial='hidden'
            animate={inViewCertification ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <Image
              src='https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='Board certification'
              className='rounded-lg shadow-lg w-full h-auto'
              width={1000}
              height={667}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
