import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function BusinessRegistrationIncorporation() {
  const businessRegistrationRef = useRef<HTMLDivElement>(null);
  const inViewBusinessRegistration = useInView(businessRegistrationRef, {
    once: true,
    amount: 0.2
  });

  return (
    <section
      id='business-registration-incorporation'
      className='section-padding bg-gray-50'
      ref={businessRegistrationRef}
    >
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewBusinessRegistration ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Service
            </span>
            <h2 className='section-title mb-4'>
              Business Registration & Incorporation
            </h2>
            <p className='text-gray-600 mb-6'>
              Starting a business begins with a solid legal foundation. Our
              business registration and incorporation services guide you through
              every step of forming a compliant and well-structured entity. From
              choosing the right legal structure to navigating local regulatory
              requirements, we ensure your business is set up for long-term
              success and operational efficiency.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Entity selection and jurisdictional guidance
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Business name reservation and documentation
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Company incorporation and registration filings
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Shareholder and director structuring
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Ongoing support for compliance and renewal requirements
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
            animate={inViewBusinessRegistration ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <Image
              src='https://images.unsplash.com/photo-1648337564744-f919c7c2fc02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='Corporate governance'
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
