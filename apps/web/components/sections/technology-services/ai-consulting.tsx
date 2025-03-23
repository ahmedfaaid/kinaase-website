import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function AiConsulting() {
  const aiRef = useRef<HTMLDivElement>(null);
  const inViewAi = useInView(aiRef, { once: true, amount: 0.2 });

  return (
    <section
      id='ai-consulting'
      className='section-padding bg-gray-50'
      ref={aiRef}
    >
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewAi ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Service
            </span>
            <h2 className='section-title mb-4'>AI Consulting</h2>
            <p className='text-gray-600 mb-6'>
              Artificial Intelligence is transforming how businesses operate,
              make decisions, and create value. Our AI consulting services help
              organizations understand, adopt, and leverage AI technologies to
              solve complex business challenges and drive innovation.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  AI readiness assessment and strategy development
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Machine learning solution design and implementation
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Data strategy and management for AI applications
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  AI-powered process automation and optimization
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Ethical AI framework development and governance
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
            animate={inViewAi ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <Image
              src='https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='AI Consulting'
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
