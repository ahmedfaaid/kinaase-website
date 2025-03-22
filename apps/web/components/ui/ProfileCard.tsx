
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

type ProfileCardProps = {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
  twitterUrl?: string;
};

const ProfileCard = ({ name, position, bio, imageUrl, linkedinUrl, twitterUrl }: ProfileCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-card group relative"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-white text-opacity-90">{position}</p>
          
          <div className="flex space-x-3 mt-3">
            {linkedinUrl && (
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
              >
                <Linkedin size={16} />
              </a>
            )}
            {twitterUrl && (
              <a 
                href={twitterUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
              >
                <Twitter size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <motion.div
          className={`text-gray-600 overflow-hidden ${isExpanded ? '' : 'line-clamp-3'}`}
          initial={{ height: 'auto' }}
          animate={{ height: isExpanded ? 'auto' : '4.5rem' }}
          transition={{ duration: 0.3 }}
        >
          {bio}
        </motion.div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-primary-teal font-medium hover:text-primary-light transition-colors"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
