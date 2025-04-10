import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function CompanyHistory() {
  const historyRef = useRef<HTMLDivElement>(null);
  const inViewHistory = useInView(historyRef, { once: true, amount: 0.2 });

  return (
    <section className='section-padding' ref={historyRef}>
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewHistory ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <Image
              src='https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='Kinaase founding team'
              className='rounded-lg shadow-lg w-full h-auto'
              width={1000}
              height={667}
            />
          </motion.div>

          <motion.div
            initial='hidden'
            animate={inViewHistory ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Our History
            </span>
            <h2 className='section-title mb-4'>The Kinaase Journey</h2>
            <p className='text-gray-600 mb-6'>
              <span className='font-semibold'>Kinaase</span> is a vibrant and
              future-focused corporate services and technology company based in
              Accra, Ghana. As a young but fast-growing firm, we are redefining
              how businesses start, grow, and thrive in today’s digital economy.
              Our unique blend of{' '}
              <span className='italic'>
                corporate support services, software development, and AI-powered
                solutions
              </span>{' '}
              positions us as a one-stop partner for entrepreneurs, startups,
              SMEs, and global brands entering or expanding within Ghana and the
              West African region.
            </p>
            <p className='text-gray-600 mb-6'>
              We offer end-to-end services—from company registration and
              compliance to intelligent software solutions that drive efficiency
              and growth. Our agile team of professionals combines in-depth
              regulatory knowledge with cutting-edge technology to deliver
              results that matter.
            </p>

            <Link
              href='/leadership'
              className='btn-primary inline-flex items-center'
            >
              Meet Our Leadership
              <ChevronRight className='ml-2 h-4 w-4' />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
