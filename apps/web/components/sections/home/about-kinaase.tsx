import { motion, useInView } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function AboutKinaase() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const inViewAbout = useInView(aboutRef, { once: true, amount: 0.2 });

  return (
    <section className='section-padding' ref={aboutRef}>
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewAbout ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='order-2 lg:order-1'
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              About Kinaase
            </span>
            <h2 className='section-title mb-4'>
              Leading the Way in Corporate Excellence
            </h2>
            <p className='text-gray-600 mb-6'>
              Founded with a vision to transform businesses through effective
              governance and innovative technology, Kinaase has established
              itself as a trusted partner for organizations seeking sustainable
              growth and operational excellence.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Trusted by leading organizations across industries
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Team of certified experts with decades of experience
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Tailored solutions that address your unique challenges
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Commitment to excellence and continuous improvement
                </p>
              </div>
            </div>

            <Link
              href='/about'
              className='btn-primary inline-flex items-center'
            >
              Learn More About Us
              <ChevronRight className='ml-2 h-4 w-4' />
            </Link>
          </motion.div>

          <motion.div
            initial='hidden'
            animate={inViewAbout ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='order-1 lg:order-2'
          >
            <div className='relative'>
              <Image
                src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
                alt='Corporate meeting'
                className='rounded-lg shadow-lg w-full h-auto'
                width={1000}
                height={667}
              />
              <div className='absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-soft hidden md:block'>
                <p className='text-xl font-bold text-primary-teal'>15+</p>
                <p className='text-sm text-gray-600'>Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
