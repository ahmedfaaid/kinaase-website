import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function TechnologyStrategy() {
  const strategyRef = useRef<HTMLDivElement>(null);
  const inViewStrategy = useInView(strategyRef, { once: true, amount: 0.2 });

  return (
    <section
      id='technology-strategy'
      className='section-padding'
      ref={strategyRef}
    >
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewStrategy ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='order-2 lg:order-1'
          >
            <Image
              src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='Technology Strategy'
              className='rounded-lg shadow-lg w-full h-auto'
              width={1000}
              height={667}
            />
          </motion.div>

          <motion.div
            initial='hidden'
            animate={inViewStrategy ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='order-1 lg:order-2'
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Service
            </span>
            <h2 className='section-title mb-4'>Technology Strategy</h2>
            <p className='text-gray-600 mb-6'>
              A well-defined technology strategy is essential for aligning IT
              investments with business objectives, managing digital
              transformation, and creating sustainable competitive advantage.
              Our technology strategy services help organizations develop a
              comprehensive roadmap for leveraging technology to achieve their
              goals.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  IT-business alignment assessment and planning
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Digital transformation strategy and roadmap
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Technology investment planning and prioritization
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  IT governance and operating model design
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Technology trend analysis and innovation planning
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
        </div>
      </div>
    </section>
  );
}
