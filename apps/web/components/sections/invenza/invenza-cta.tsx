import CtaBtn from './cta-btn';

export default function InvenzaCta() {
  return (
    <section className='py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold font-display mb-6'>
            Ready to streamline your warehouse operations?
          </h2>
          <p className='text-primary-100 text-lg mb-8'>
            Join thousands of small warehouse businesses already using Invenza
            to improve efficiency and customer satisfaction.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <CtaBtn
              href='#get-started'
              size='lg'
              className='bg-white text-primary-800 hover:bg-primary-100 group'
            >
              Get Started
            </CtaBtn>
            <CtaBtn
              href='#contact-sales'
              variant='outline'
              size='lg'
              className='bg-primary-800 border-primary-800 text-white hover:bg-primary-100 hover:border-primary-100 hover:text-white'
            >
              Contact Sales
            </CtaBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
