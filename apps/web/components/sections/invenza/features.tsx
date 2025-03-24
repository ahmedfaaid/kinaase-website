import {
  BarChart4,
  Clock,
  DollarSign,
  PackageCheck,
  Truck,
  Users
} from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <PackageCheck />,
    title: 'Inventory Tracking',
    description:
      'Keep real-time counts of your stock. Set low stock alerts and view inventory history to anticipate future needs.'
  },
  {
    icon: <Truck />,
    title: 'Order Management',
    description:
      'Track orders from warehouse to customer doorstep with detailed status updates at every step of the fulfillment process.'
  },
  {
    icon: <BarChart4 />,
    title: 'Analytics Dashboard',
    description:
      'Visualize your business performance with intuitive charts and reports to make data-driven decisions.'
  },
  {
    icon: <Users />,
    title: 'Team Collaboration',
    description:
      'Multiple team members can work simultaneously with role-based permissions for improved workflow.'
  },
  {
    icon: <Clock />,
    title: 'Real-time Updates',
    description:
      'Automatic notifications for order status changes, delivery confirmations, and inventory levels.'
  },
  {
    icon: <DollarSign />,
    title: 'Cost-Effective',
    description:
      'Affordable pricing designed specifically for small warehouse businesses with no hidden costs.'
  }
];

export default function Features() {
  return (
    <section
      id='features'
      className='py-20 bg-gradient-to-b from-white to-gray-50'
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold font-display mb-4'>
            Features designed for small warehouse businesses
          </h2>
          <p className='text-lg text-gray-600'>
            Everything you need to manage your inventory efficiently and track
            orders from start to finish.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'
            >
              <div className='feature-icon-container'>{feature.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-20 bg-invenza-50 rounded-2xl p-8 md:p-12'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl md:text-3xl font-bold font-display mb-4'>
                Complete order tracking visibility
              </h3>
              <p className='text-gray-600 mb-6'>
                Track every step of your orders from warehouse processing to
                customer delivery. Our timeline view gives you and your
                customers complete visibility of where items are at all times.
              </p>
              <ul className='space-y-3'>
                {[
                  'Order validation',
                  'Packaging process',
                  'Shipping preparation',
                  'In transit updates',
                  'Delivery confirmation'
                ].map((item, i) => (
                  <li key={i} className='flex items-center'>
                    <span className='h-5 w-5 rounded-full bg-primary-50 flex items-center justify-center mr-3'>
                      <span className='h-2 w-2 rounded-full bg-primary-500'></span>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src='/images/invenza/tracking-details-light.png'
                alt='Order tracking interface'
                className='w-full h-auto rounded-lg shadow-lg'
                width={1912}
                height={909}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
