import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function LeadershipCta() {
  return (
    <section className='section-padding'>
      <div className='container-custom text-center'>
        <div className='bg-gradient-primary text-white rounded-xl p-8 md:p-12 max-w-4xl mx-auto'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to Work with Our Expert Team?
          </h2>
          <p className='text-lg opacity-90 mb-8 max-w-2xl mx-auto'>
            Contact us today to learn how our leadership team can help your
            organization establish effective governance structures and leverage
            cutting-edge technology.
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
              href='/about'
              className='border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all inline-flex items-center justify-center'
            >
              Learn About Our Company
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
