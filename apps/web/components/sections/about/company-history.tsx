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
              Kinaase was founded in 2009 by a team of experienced professionals
              who recognized the need for integrated corporate governance and
              technology solutions. What began as a small consultancy has grown
              into a respected firm serving clients across multiple industries.
            </p>
            <p className='text-gray-600 mb-6'>
              Over the years, we have continuously evolved our services to
              address the changing business landscape, incorporating emerging
              technologies and governance best practices to provide
              comprehensive solutions that drive sustainable growth and success.
            </p>
            <p className='text-gray-600 mb-6'>
              Today, Kinaase stands as a trusted partner for organizations
              seeking to enhance their corporate governance structures and
              leverage technology for business transformation, with a track
              record of delivering measurable results for our diverse client
              base.
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
