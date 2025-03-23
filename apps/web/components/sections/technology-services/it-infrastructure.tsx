import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function ItInfrastructure() {
  const infrastructureRef = useRef<HTMLDivElement>(null);
  const inViewInfrastructure = useInView(infrastructureRef, {
    once: true,
    amount: 0.2
  });

  return (
    <section
      id='it-infrastructure'
      className='section-padding bg-gray-50'
      ref={infrastructureRef}
    >
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewInfrastructure ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Service
            </span>
            <h2 className='section-title mb-4'>IT Infrastructure Management</h2>
            <p className='text-gray-600 mb-6'>
              Robust IT infrastructure is the foundation for reliable business
              operations, data security, and digital capabilities. Our IT
              infrastructure services help organizations design, implement, and
              manage technology environments that meet their current needs and
              support future growth.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Infrastructure assessment and optimization
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Cloud strategy and migration planning
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Network design and security architecture
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Data center modernization and consolidation
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Infrastructure monitoring and management
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
            animate={inViewInfrastructure ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <Image
              src='https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='IT Infrastructure'
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
