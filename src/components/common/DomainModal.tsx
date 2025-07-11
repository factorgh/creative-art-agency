import { motion } from 'framer-motion';
import { X, ArrowRight, Users, Calendar, Award, TrendingUp } from 'lucide-react';
import { CreativeDomain } from '@/types';
import { Button } from '@/components/ui/button';
import { useModal } from '@/contexts/ModalContext';
import { Link } from 'react-router-dom';

interface DomainModalProps {
  domain: CreativeDomain;
}

const DomainModal = ({ domain }: DomainModalProps) => {
  const { closeModal } = useModal();

  const stats = [
    { label: 'Active Artists', value: Math.floor(Math.random() * 500) + 100, icon: Users },
    { label: 'Monthly Events', value: Math.floor(Math.random() * 20) + 5, icon: Calendar },
    { label: 'Awards Won', value: Math.floor(Math.random() * 50) + 10, icon: Award },
    { label: 'Growth Rate', value: `${Math.floor(Math.random() * 30) + 10}%`, icon: TrendingUp },
  ];

  const features = [
    'Artist Registration & Verification',
    'Portfolio Showcase Platform',
    'Funding Opportunities',
    'Training & Development',
    'Networking Events',
    'Marketplace Integration'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden"
    >
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={domain.image}
          alt={domain.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-80`} />
        
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="absolute bottom-6 left-6 text-white">
          <motion.h2 
            className="text-4xl font-bold mb-2"
            layoutId={`title-${domain.id}`}
          >
            {domain.name}
          </motion.h2>
          <motion.p 
            className="text-lg opacity-90"
            layoutId={`description-${domain.id}`}
          >
            {domain.description}
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${domain.color}`} />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link to={domain.route} className="flex-1">
            <Button 
              className="w-full bg-gradient-to-r from-ghana-red to-ghana-gold hover:from-ghana-red/90 hover:to-ghana-gold/90 text-white"
              onClick={closeModal}
            >
              Explore {domain.name}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          
          <Link to="/register" className="flex-1">
            <Button 
              variant="outline" 
              className="w-full border-ghana-gold text-ghana-red hover:bg-ghana-gold/10"
              onClick={closeModal}
            >
              Join as Artist
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DomainModal;