'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      children: [
        { name: 'Corporate Services', path: '/corporate-services' },
        { name: 'Technology Services', path: '/technology-services' }
      ]
    },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-soft py-3' : 'bg-transparent py-5'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className='container-custom flex justify-between items-center'>
        <Link href='/' className='flex items-center'>
          <span className='text-2xl font-heading font-bold text-primary-teal'>
            Kinaase
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-8'>
          {navLinks.map((link, index) =>
            !link.children ? (
              <Link
                key={index}
                href={link.path}
                className={`font-medium hover:text-primary-teal transition-colors relative ${
                  isActive(link.path) ? 'text-primary-teal' : 'text-gray-700'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId='navbar-indicator'
                    className='absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-teal'
                  />
                )}
              </Link>
            ) : (
              <div key={index} className='relative group'>
                <button
                  className='flex items-center font-medium text-gray-700 hover:text-primary-teal transition-colors'
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {link.name}
                  <ChevronDown className='ml-1 h-4 w-4' />
                </button>
                <div className='absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                  <div className='py-2 px-2 space-y-1'>
                    {link.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={child.path}
                        className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(child.path)
                            ? 'bg-primary-softer text-primary-teal'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
          <Link href='/contact' className='btn-primary'>
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='lg:hidden text-gray-700 focus:outline-none'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-white border-t border-gray-100 shadow-md'
          >
            <div className='container-custom py-4 space-y-3'>
              {navLinks.map((link, index) =>
                !link.children ? (
                  <Link
                    key={index}
                    href={link.path}
                    className={`block py-2 font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-primary-teal'
                        : 'text-gray-700'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div key={index} className='space-y-2'>
                    <button
                      className='flex items-center justify-between w-full py-2 font-medium text-gray-700'
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className='pl-4 space-y-2 border-l-2 border-gray-100'
                        >
                          {link.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href={child.path}
                              className={`block py-2 text-sm font-medium transition-colors ${
                                isActive(child.path)
                                  ? 'text-primary-teal'
                                  : 'text-gray-600'
                              }`}
                              onClick={closeMenu}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
              <Link
                href='/contact'
                className='btn-primary block text-center mt-4'
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
