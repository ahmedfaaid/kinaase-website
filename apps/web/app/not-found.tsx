'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import PageTransition from '../components/ui/PageTransition';

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      pathname
    );
  }, [pathname]);

  return (
    <PageTransition>
      <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
        <div className='max-w-md w-full text-center'>
          <h1 className='text-6xl font-bold text-primary-teal mb-4'>404</h1>
          <p className='text-2xl font-semibold text-gray-800 mb-6'>
            Page Not Found
          </p>
          <p className='text-gray-600 mb-8'>
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href='/'
            className='btn-primary inline-flex items-center justify-center'
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Return to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
