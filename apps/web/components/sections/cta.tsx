import Link from 'next/link';

export default function CTA() {
  return (
    <section className='section-padding bg-gray-50'>
      <div className='container-custom'>
        <div className='bg-white rounded-xl shadow-soft p-8 md:p-12 text-center max-w-4xl mx-auto'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Partner with Kinaase to establish effective governance structures
            and leverage cutting-edge technology for sustainable growth and
            success.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact' className='btn-primary'>
              Get Started Today
            </Link>
            <Link href='/about' className='btn-secondary'>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
