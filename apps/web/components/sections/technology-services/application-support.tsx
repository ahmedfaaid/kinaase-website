import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function ApplicationSupport() {
  const supportRef = useRef<HTMLDivElement>(null);
  const inViewSupport = useInView(supportRef, { once: true, amount: 0.2 });

  return (
    <section
      id='application-support'
      className='section-padding'
      ref={supportRef}
    >
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewSupport ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='order-2 lg:order-1'
          >
            <Image
              src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='Application Support'
              className='rounded-lg shadow-lg w-full h-auto'
              width={1000}
              height={667}
            />
          </motion.div>

          <motion.div
            initial='hidden'
            animate={inViewSupport ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='order-1 lg:order-2'
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Service
            </span>
            <h2 className='section-title mb-4'>Application Support</h2>
            <p className='text-gray-600 mb-6'>
              Business-critical applications require reliable support to ensure
              optimal performance, minimize downtime, and deliver consistent
              user experiences. Our application support services provide
              comprehensive management of your software assets throughout their
              lifecycle.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Application portfolio assessment and rationalization
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Incident management and resolution
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Application performance monitoring and optimization
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Software upgrade and patch management
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>User support and training</p>
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
        </div>
      </div>
    </section>
  );
}
