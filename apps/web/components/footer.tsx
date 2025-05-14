import {
  ArrowRight,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container-custom py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Company Info */}
          <div className='space-y-4'>
            <Link href='/' className='inline-block'>
              <span className='text-2xl font-heading font-bold text-white'>
                Kinaase
              </span>
            </Link>
            <p className='text-gray-400 max-w-xs'>
              Leading provider of corporate governance and technology services,
              helping businesses achieve sustainable growth and success.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Linkedin size={20} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Twitter size={20} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/corporate-services'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  Corporate Services
                </Link>
              </li>
              <li>
                <Link
                  href='/technology-services'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  Technology Services
                </Link>
              </li>
              <li>
                <Link
                  href='/leadership'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  Our Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Our Services</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/corporate-services#business-registration-incorporation'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  Business Registration & Incorporation
                </Link>
              </li>
              <li>
                <Link
                  href='/corporate-services#tax-accounting-support'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  Tax & Accounting Support
                </Link>
              </li>
              <li>
                <Link
                  href='/corporate-services#work-residency-permits'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  Work & Residency Permits
                </Link>
              </li>
              <li>
                <Link
                  href='/technology-services#ai-consulting'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link
                  href='/technology-services#technology-strategy'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  Technology Strategy
                </Link>
              </li>
              <li>
                <Link
                  href='/technology-services#it-infrastructure'
                  className='text-gray-400 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight
                    size={16}
                    className='mr-2 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  IT Infrastructure Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Contact Us</h4>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <MapPin
                  className='mr-3 shrink-0 text-primary-light'
                  size={20}
                />
                <span className='text-gray-400'>Dzorwulu, Accra, Ghana</span>
              </li>
              <li className='flex items-center'>
                <Phone className='mr-3 shrink-0 text-primary-light' size={20} />
                <span className='text-gray-400'>+233 24 260 1859</span>
              </li>
              <li className='flex items-center'>
                <Phone className='mr-3 shrink-0 text-primary-light' size={20} />
                <span className='text-gray-400'>+233 20 115 3500</span>
              </li>
              <li className='flex items-center'>
                <Phone className='mr-3 shrink-0 text-primary-light' size={20} />
                <span className='text-gray-400'>+233 20 115 2600</span>
              </li>
              <li className='flex items-center'>
                <Mail className='mr-3 shrink-0 text-primary-light' size={20} />
                <a
                  href='mailto:info@kinaase.com'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  info@kinaase.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-500 text-sm'>
            &copy; {currentYear} Kinaase. All rights reserved.
          </p>
          <div className='mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500'>
            <a href='#' className='hover:text-white transition-colors'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-white transition-colors'>
              Terms of Service
            </a>
            <a href='#' className='hover:text-white transition-colors'>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
