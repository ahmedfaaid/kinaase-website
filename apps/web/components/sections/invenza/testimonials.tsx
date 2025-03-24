import Image from 'next/image';

const testimonials = [
  {
    quote:
      "Invenza transformed our warehouse operations. We've reduced shipping mistakes by 78% and improved customer satisfaction ratings.",
    author: 'Sarah Johnson',
    position: 'Operations Manager',
    company: 'GreenLeaf Distribution'
  },
  {
    quote:
      'The order tracking feature has been a game-changer for our small business. Our customers love being able to see exactly where their orders are.',
    author: 'Michael Chen',
    position: 'Founder',
    company: 'QuickShip Logistics'
  },
  {
    quote:
      'We tried several expensive enterprise solutions before finding Invenza. It offers everything we need at a fraction of the cost.',
    author: 'David Rodriguez',
    position: 'Warehouse Director',
    company: 'Sunset Supplies Co.'
  }
];

export function Testimonials() {
  return (
    <section id='testimonials' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold font-display mb-4'>
            Trusted by warehouse managers
          </h2>
          <p className='text-lg text-gray-600'>
            Don&apos;t just take our word for it. See what our customers have to
            say about Invenza.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='testimonial-card'>
              <div className='mb-4'>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className='text-yellow-400'>
                    ★
                  </span>
                ))}
              </div>
              <blockquote className='text-gray-600 mb-4'>
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className='flex items-center'>
                <div className='w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-3'>
                  <span className='text-primary-600 font-semibold'>
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className='font-semibold'>{testimonial.author}</p>
                  <p className='text-gray-500 text-sm'>
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <Image
                src='/images/invenza/tracking-details-dark.png'
                alt='Invenza in action'
                className='rounded-lg shadow-lg w-full h-auto'
                width={1912}
                height={909}
              />
            </div>
            <div>
              <blockquote className='text-xl md:text-2xl font-medium text-gray-700 mb-6'>
                &quot;Since implementing Invenza, we&apos;ve seen a 35% decrease
                in shipping errors and our order processing time has improved by
                42%. It&apos;s the perfect solution for our small
                warehouse.&quot;
              </blockquote>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-4'>
                  <span className='text-primary-600 font-semibold text-lg'>
                    J
                  </span>
                </div>
                <div>
                  <p className='font-semibold text-lg'>James Wilson</p>
                  <p className='text-gray-500'>
                    CEO, Wilson Warehouse Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
