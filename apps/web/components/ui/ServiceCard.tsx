import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='bg-white rounded-lg p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col'
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className='rounded-full bg-primary-softer p-4 w-16 h-16 flex items-center justify-center mb-6 text-primary-teal'>
        {icon}
      </div>
      <h3 className='text-xl font-semibold mb-3'>{title}</h3>
      <p className='text-gray-600 mb-6 flex-grow'>{description}</p>

      {link && (
        <Link
          href={link}
          className='inline-flex items-center text-primary-teal font-medium hover:text-primary-light transition-colors group'
        >
          Learn More
          <motion.div
            className='ml-2'
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight size={18} />
          </motion.div>
        </Link>
      )}
    </motion.div>
  );
};

export default ServiceCard;
