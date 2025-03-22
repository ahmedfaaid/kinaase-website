import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

type HeroProps = {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
  smallHero?: boolean;
};

export default function Hero({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink = '/',
  secondaryButtonText,
  secondaryButtonLink = '/',
  imageUrl,
  smallHero = false
}: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY / 500, 0);
        const translateY = scrollY * 0.3;

        if (heroRef.current) {
          heroRef.current.style.opacity = opacity.toString();
          heroRef.current.style.transform = `translateY(${translateY}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const backgroundStyle = {
    backgroundImage: imageUrl
      ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${imageUrl})`
      : 'linear-gradient(120deg, #1c5e5c 0%, #134240 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div
      className={`relative ${smallHero ? 'py-28 md:py-32' : 'py-32 md:py-48'} overflow-hidden`}
      style={backgroundStyle}
      ref={heroRef}
    >
      <div className='container-custom'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-3xl mx-auto text-center text-white relative z-10'
        >
          <motion.h1
            variants={itemVariants}
            className={`${smallHero ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold mb-6`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <motion.p
            variants={itemVariants}
            className='text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto'
          >
            {subtitle}
          </motion.p>
          {(primaryButtonText || secondaryButtonText) && (
            <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row justify-center gap-4'
            >
              {primaryButtonText && (
                <Link
                  href={primaryButtonLink}
                  className='bg-white text-primary-teal px-6 py-3 rounded-md font-medium inline-flex items-center justify-center hover:bg-opacity-90 transition-all duration-300'
                >
                  {primaryButtonText}
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              )}
              {secondaryButtonText && (
                <Link
                  href={secondaryButtonLink}
                  className='border border-white text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all duration-300'
                >
                  {secondaryButtonText}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className='wave-divider'></div>
    </div>
  );
}
