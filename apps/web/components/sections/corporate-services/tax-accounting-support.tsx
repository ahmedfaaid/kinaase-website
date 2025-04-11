import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function TaxAccountingSupport() {
  const taxAccountingSupportRef = useRef<HTMLDivElement>(null);
  const inViewTaxAccountingSupport = useInView(taxAccountingSupportRef, {
    once: true,
    amount: 0.2
  });

  return (
    <section
      id='tax-accounting-support'
      className='section-padding'
      ref={taxAccountingSupportRef}
    >
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewTaxAccountingSupport ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='order-2 lg:order-1'
          >
            <Image
              src='https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='Tax Accounting Support'
              className='rounded-lg shadow-lg w-full h-auto'
              width={1000}
              height={667}
            />
          </motion.div>

          <motion.div
            initial='hidden'
            animate={inViewTaxAccountingSupport ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='order-1 lg:order-2'
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Service
            </span>
            <h2 className='section-title mb-4'>Tax & Accounting Support</h2>
            <p className='text-gray-600 mb-6'>
              Sound financial management is key to sustaining and growing your
              business. Our tax and accounting support services help
              organizations streamline financial reporting, meet tax
              obligations, and optimize their fiscal strategies. Whether you’re
              a startup or a growing enterprise, we provide accurate, timely,
              and compliant financial insights that drive informed
              decision-making.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Bookkeeping and financial statement preparation
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Corporate and individual tax filings
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Tax planning and compliance advisory
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Payroll processing and statutory contributions
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Financial audits and reporting support
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
