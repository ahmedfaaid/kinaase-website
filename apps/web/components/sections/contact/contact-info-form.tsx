import { motion, useInView } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useRef } from 'react';
import { fadeInUp } from '../../../lib/animations';
import ContactForm from '../../ui/ContactForm';

export default function ContactInfoForm() {
  const contactRef = useRef<HTMLDivElement>(null);
  const inViewContact = useInView(contactRef, { once: true, amount: 0.2 });

  return (
    <section className='section-padding' ref={contactRef}>
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <motion.div
            initial='hidden'
            animate={inViewContact ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <span className='inline-block py-1 px-3 rounded-full bg-primary-softer text-primary-teal text-sm font-medium mb-4'>
              Contact Us
            </span>
            <h2 className='section-title mb-4'>
              We&apos;d Love to Hear from You
            </h2>
            <p className='text-gray-600 mb-8'>
              Whether you have a question about our services, want to discuss a
              specific challenge, or are interested in partnering with us,
              we&apos;re here to help. Fill out the form, and one of our team
              members will get back to you shortly.
            </p>

            <div className='space-y-6 mb-8'>
              <div className='flex items-start'>
                <div className='bg-primary-softer p-3 rounded-full mr-4 text-primary-teal'>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-1'>Our Office</h3>
                  <p className='text-gray-600'>Dzorwulu, Accra, Ghana</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-primary-softer p-3 rounded-full mr-4 text-primary-teal'>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-1'>Phone</h3>
                  <p className='text-gray-600'>+233 24 260 1859</p>
                  <p className='text-gray-600'>+233 20 115 3500</p>
                  <p className='text-gray-600'>+233 20 115 2600</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-primary-softer p-3 rounded-full mr-4 text-primary-teal'>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-1'>Email</h3>
                  <a
                    href='mailto:info@kinaase.com'
                    className='text-gray-600 hover:text-primary-teal transition-colors'
                  >
                    info@kinaase.com
                  </a>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-primary-softer p-3 rounded-full mr-4 text-primary-teal'>
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-1'>Business Hours</h3>
                  <p className='text-gray-600'>
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                  <p className='text-gray-600'>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial='hidden'
            animate={inViewContact ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className='bg-white rounded-lg p-8 shadow-soft border border-gray-100'
          >
            <h3 className='text-xl font-semibold mb-6'>Send Us a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
