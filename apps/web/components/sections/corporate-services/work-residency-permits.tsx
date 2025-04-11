import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function WorkResidencyPermits() {
  const workResidencyPermitsRef = useRef<HTMLDivElement>(null);
  const inViewWorkResidencyPermits = useInView(workResidencyPermitsRef, {
    once: true,
    amount: 0.2
  });

  return (
    <section
      id='work-residency-permits'
      className='section-padding bg-gray-50'
      ref={workResidencyPermitsRef}
    >
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewWorkResidencyPermits ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Service
            </span>
            <h2 className='section-title mb-4'>Work & Residency Permits</h2>
            <p className='text-gray-600 mb-6'>
              Navigating immigration requirements can be complex. Our work and
              residency permit services help businesses and professionals obtain
              the necessary documentation to live and work legally in their
              desired location. From application preparation to government
              liaison, we provide a seamless process that ensures compliance and
              minimizes delays.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Work permit application and processing
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Residency visa acquisition and renewal
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Employer sponsorship and compliance support
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Immigration document preparation and filing
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Advisory for relocation and international mobility
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
            animate={inViewWorkResidencyPermits ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <Image
              src='https://images.unsplash.com/photo-1562577309-d67db487e6cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='Work & Residency Permits'
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
