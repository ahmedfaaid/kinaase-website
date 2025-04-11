import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';

export default function RegulatoryCompliance() {
  const complianceRef = useRef<HTMLDivElement>(null);
  const inViewCompliance = useInView(complianceRef, {
    once: true,
    amount: 0.2
  });

  return (
    <section
      id='regulatory-compliance'
      className='section-padding'
      ref={complianceRef}
    >
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate={inViewCompliance ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='order-2 lg:order-1'
          >
            <Image
              src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='Corporate compliance'
              className='rounded-lg shadow-lg w-full h-auto'
              width={1000}
              height={667}
            />
          </motion.div>

          <motion.div
            initial='hidden'
            animate={inViewCompliance ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='order-1 lg:order-2'
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Service
            </span>
            <h2 className='section-title mb-4'>
              Regulatory Compliance & Licensing
            </h2>
            <p className='text-gray-600 mb-6'>
              Staying compliant with evolving regulations is crucial for
              mitigating risks and maintaining operational integrity. Our
              regulatory compliance services help businesses navigate complex
              legal frameworks, ensuring adherence to industry standards and
              government mandates. We provide proactive compliance strategies
              that safeguard your organization against penalties and
              reputational risks.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Compliance framework development and implementation
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Regulatory risk assessment and mitigation
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Industry-specific compliance solutions
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Internal audits and compliance monitoring
                </p>
              </div>
              <div className='flex items-start'>
                <span className='rounded-full bg-primary-softer p-1 mr-3 text-primary-teal'>
                  <Check size={16} />
                </span>
                <p className='text-gray-600'>
                  Training and advisory support for regulatory adherence
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
