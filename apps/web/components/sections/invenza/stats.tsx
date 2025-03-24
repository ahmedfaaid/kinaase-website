export default function Stats() {
  return (
    <section className='py-12 bg-primary-900'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
          <div className='bg-primary-800/50 rounded-lg p-6'>
            <p className='text-primary-200 text-sm font-medium'>
              Small Business Customers
            </p>
            <p className='text-white text-4xl font-bold font-display'>2,500+</p>
          </div>
          <div className='bg-primary-800/50 rounded-lg p-6'>
            <p className='text-primary-200 text-sm font-medium'>
              Orders Processed
            </p>
            <p className='text-white text-4xl font-bold font-display'>1.2M+</p>
          </div>
          <div className='bg-primary-800/50 rounded-lg p-6'>
            <p className='text-primary-200 text-sm font-medium'>
              Avg. Cost Savings
            </p>
            <p className='text-white text-4xl font-bold font-display'>32%</p>
          </div>
          <div className='bg-primary-800/50 rounded-lg p-6'>
            <p className='text-primary-200 text-sm font-medium'>
              Customer Satisfaction
            </p>
            <p className='text-white text-4xl font-bold font-display'>97%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
