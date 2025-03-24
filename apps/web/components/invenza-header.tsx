import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import CtaBtn from './sections/invenza/cta-btn';

export default function InvenzaHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`transition-all duration-300 py-5 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between'>
          <a href='#' className='flex items-center'>
            <span className='font-display font-bold text-2xl text-primary-700'>
              Invenza
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            <a href='#features' className='navbar-link'>
              Features
            </a>
            <a href='#pricing' className='navbar-link'>
              Pricing
            </a>
            <a href='#testimonials' className='navbar-link'>
              Customers
            </a>
            <a href='#faq' className='navbar-link'>
              FAQ
            </a>
          </nav>

          <div className='hidden md:flex items-center space-x-4'>
            <a
              href='#login'
              className='text-sm font-medium text-gray-700 hover:text-invenza-600 transition-colors'
            >
              Login
            </a>
            <CtaBtn href='#get-started' size='sm'>
              Get Started
            </CtaBtn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden flex items-center'
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className='h-6 w-6 text-gray-700' />
            ) : (
              <Menu className='h-6 w-6 text-gray-700' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'}`}
      >
        <div className='container mx-auto px-4 flex flex-col space-y-4'>
          <a
            href='#features'
            className='px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md'
            onClick={toggleMobileMenu}
          >
            Features
          </a>
          <a
            href='#pricing'
            className='px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md'
            onClick={toggleMobileMenu}
          >
            Pricing
          </a>
          <a
            href='#testimonials'
            className='px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md'
            onClick={toggleMobileMenu}
          >
            Customers
          </a>
          <a
            href='#faq'
            className='px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md'
            onClick={toggleMobileMenu}
          >
            FAQ
          </a>

          <div className='border-t border-gray-200 pt-4 flex flex-col space-y-2'>
            <a
              href='#login'
              className='px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md'
              onClick={toggleMobileMenu}
            >
              Login
            </a>
            <CtaBtn
              href='#get-started'
              className='m-3'
              onClick={toggleMobileMenu}
            >
              Get Started
            </CtaBtn>
          </div>
        </div>
      </div>
    </header>
  );
}
