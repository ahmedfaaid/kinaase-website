import { BarChart4, Package, Truck } from 'lucide-react';
import Image from 'next/image';

export default function Showcase() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <span className='inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-4'>
              End-to-End Management
            </span>
            <h2 className='text-3xl md:text-4xl font-bold font-display mb-6'>
              From warehouse shelves to customer doors
            </h2>
            <p className='text-gray-600 mb-6'>
              Invenza provides complete visibility into your entire operation.
              Track inventory levels, manage orders, and monitor deliveries all
              from a single, intuitive dashboard.
            </p>

            <div className='space-y-4'>
              <div className='flex items-start'>
                <div className='feature-icon-container mt-1'>
                  <Package className='h-5 w-5 text-invenza-600' />
                </div>
                <div className='ml-4'>
                  <h3 className='text-lg font-semibold mb-1'>
                    Inventory Management
                  </h3>
                  <p className='text-gray-600'>
                    Track stock levels, set reorder points, and manage multiple
                    warehouse locations.
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='feature-icon-container mt-1'>
                  <Truck className='h-5 w-5 text-invenza-600' />
                </div>
                <div className='ml-4'>
                  <h3 className='text-lg font-semibold mb-1'>
                    Shipping & Delivery
                  </h3>
                  <p className='text-gray-600'>
                    Manage carriers, print labels, and track packages throughout
                    the delivery process.
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='feature-icon-container mt-1'>
                  <BarChart4 className='h-5 w-5 text-invenza-600' />
                </div>
                <div className='ml-4'>
                  <h3 className='text-lg font-semibold mb-1'>
                    Reporting & Analytics
                  </h3>
                  <p className='text-gray-600'>
                    Get insights into sales trends, inventory turnover, and
                    shipping performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='relative'>
            <Image
              src='/images/invenza/orders-dark.png'
              alt='Invenza dashboard'
              className='rounded-lg shadow-xl w-full h-auto'
              width={1912}
              height={909}
            />
            <div className='absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-48'>
              <div className='text-sm font-medium text-primary-700 mb-1'>
                Order Tracking
              </div>
              <div className='text-gray-600 text-xs'>
                View real-time status updates for all shipments
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
