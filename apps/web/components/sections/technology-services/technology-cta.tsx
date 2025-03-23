import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TechnologyCta() {
  return (
    <section className='section-padding bg-gradient-primary text-white'>
      <div className='container-custom text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto'>
          Ready to Transform Your Technology Capabilities?
        </h2>
        <p className='text-lg opacity-90 mb-8 max-w-2xl mx-auto'>
          Contact us today to learn how our technology services can help your
          organization leverage digital solutions for business growth and
          innovation.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/contact'
            className='bg-white text-primary-teal px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all inline-flex items-center justify-center'
          >
            Contact Us
            <ChevronRight className='ml-2 h-4 w-4' />
          </Link>
          <Link
            href='/corporate-services'
            className='border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all inline-flex items-center justify-center'
          >
            Explore Corporate Services
          </Link>
        </div>
      </div>
    </section>
  );
}
