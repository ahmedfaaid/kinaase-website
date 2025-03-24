'use client';

import { BarChart, Package, Truck } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import CtaBtn from './cta-btn';

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const { left, top, width, height } =
          imageRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24'>
      {/* Background glow effect */}
      <div className='hero-glow top-0 right-0 opacity-40'></div>
      <div className='hero-glow bottom-0 left-0 opacity-30'></div>

      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='flex flex-col space-y-6 max-w-lg'>
            <div className='animate-fade-in-up'>
              <span className='inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-4'>
                <span className='mr-1.5 h-2 w-2 rounded-full bg-primary-500'></span>
                Affordable Inventory Management
              </span>
            </div>

            <h1 className='font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight animate-fade-in-up animate-delay-100'>
              <span className='text-gradient'>Streamline</span> Your Warehouse
              Operations
            </h1>
            <p className='text-lg text-gray-600 md:text-xl animate-fade-in-up animate-delay-200'>
              invenza helps small warehouse businesses track orders from
              warehouse to customer, all in one affordable platform.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in-up animate-delay-300'>
              <CtaBtn href='#get-started' size='lg' className='group'>
                Get Started
              </CtaBtn>
              <CtaBtn
                href='#demo'
                variant='outline'
                size='lg'
                className='border-primary-200 text-primary-700 hover:bg-primary-50'
              >
                Watch Demo
              </CtaBtn>
            </div>

            <div className='pt-6 animate-fade-in-up animate-delay-400'>
              <p className='text-sm text-gray-500 mb-3'>
                Trusted by warehouse managers worldwide
              </p>
              <div className='flex flex-wrap gap-8'>
                <div className='text-gray-400 font-medium'>CompanyOne</div>
                <div className='text-gray-400 font-medium'>WarehousePro</div>
                <div className='text-gray-400 font-medium'>ShipFast</div>
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className='relative mx-auto w-full max-w-lg transition-all duration-200 ease-out animate-fade-in-left'
          >
            <div className='bg-white rounded-xl shadow-xl overflow-hidden'>
              <Image
                src='/images/invenza/dashboard-dark.png'
                alt='invenza Dashboard'
                className='w-full h-auto'
                width={1897}
                height={909}
              />
            </div>

            {/* Floating elements */}
            <div className='absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-float'>
              <Package className='h-6 w-6 text-primary-600' />
              <span className='text-xs font-medium block mt-1'>
                45 Products
              </span>
            </div>

            <div className='absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-float animate-delay-300'>
              <Truck className='h-6 w-6 text-primary-600' />
              <span className='text-xs font-medium block mt-1'>
                12 Deliveries
              </span>
            </div>

            <div className='absolute top-1/2 -translate-y-1/2 -left-12 bg-white rounded-lg shadow-lg p-3 animate-float animate-delay-200'>
              <BarChart className='h-6 w-6 text-primary-600' />
              <span className='text-xs font-medium block mt-1'>Sales +23%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
