import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, Heart, Share2 } from 'lucide-react';
import { CreativeDomain } from '@/types';
import { Button } from '@/components/ui/button';
import { useModal } from '@/contexts/ModalContext';
import DomainModal from './DomainModal';

interface DomainCardProps {
  domain: CreativeDomain;
  index: number;
}

const DomainCard = ({ domain, index }: DomainCardProps) => {
  const { openModal } = useModal();

  const handleCardClick = () => {
    openModal(<DomainModal domain={domain} />);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Background Image with Overlay */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <motion.img
          src={domain.image}
          alt={domain.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />
        
        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // Handle like
            }}
          >
            <Heart className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // Handle share
            }}
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Domain Icon */}
        <div className="absolute top-4 left-4">
          <motion.div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20`}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white text-lg font-bold">
              {domain.name.charAt(0)}
            </span>
          </motion.div>
        </div>

        {/* View Count */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white/90 text-sm">
          <Eye className="w-4 h-4" />
          <span>{Math.floor(Math.random() * 1000) + 100}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <motion.h3 
              className="text-xl font-bold text-gray-900 group-hover:text-ghana-red transition-colors duration-300"
              layoutId={`title-${domain.id}`}
            >
              {domain.name}
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-sm mt-1 line-clamp-2"
              layoutId={`description-${domain.id}`}
            >
              {domain.description}
            </motion.p>
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-ghana-gold/10 text-ghana-gold rounded-full text-xs font-medium">
            News
          </span>
          <span className="px-3 py-1 bg-ghana-green/10 text-ghana-green rounded-full text-xs font-medium">
            Upload
          </span>
          <span className="px-3 py-1 bg-ghana-red/10 text-ghana-red rounded-full text-xs font-medium">
            Collaborate
          </span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
            >
              View Details
            </motion.button>
          </div>
          
          <Link to={domain.route} onClick={(e) => e.stopPropagation()}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-ghana-red to-ghana-gold hover:from-ghana-red/90 hover:to-ghana-gold/90 text-white shadow-lg group"
              >
                Explore
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Hover Effect Border */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent group-hover:border-ghana-gold/50 rounded-2xl transition-all duration-300"
        initial={false}
        animate={{
          borderColor: "transparent"
        }}
        whileHover={{
          borderColor: "rgba(255, 193, 7, 0.5)"
        }}
      />

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: "skewX(-20deg)"
        }}
      />
    </motion.div>
  );
};

export default DomainCard;