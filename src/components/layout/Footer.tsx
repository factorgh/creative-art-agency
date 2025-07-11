import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Star, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Domains', href: '/domains' },
    { name: 'Hall of Fame', href: '/hall-of-fame' },
    { name: 'Opportunities', href: '/opportunities' }
  ];

  const services = [
    { name: 'Artist Registration', href: '/register' },
    { name: 'IP Rights', href: '/ip-rights' },
    { name: 'Training Programs', href: '/training' },
    { name: 'Marketplace', href: '/marketplace' }
  ];

  const resources = [
    { name: 'News & Updates', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-ghana-red via-ghana-gold to-ghana-green rounded-xl flex items-center justify-center shadow-lg">
                  <Star className="text-white font-bold text-xl" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-ghana-gold rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-ghana-red to-ghana-gold bg-clip-text text-transparent">
                  Ghana Creative Arts
                </span>
                <div className="text-xs text-ghana-gold font-medium">Excellence in Creativity</div>
              </div>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Ghana's creative professionals across 15 domains to showcase their talents, 
              connect with opportunities, and contribute to our rich cultural heritage.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 transition-all duration-300 ${social.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-ghana-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-ghana-gold transition-all duration-300 text-sm flex items-center group"
                  >
                    <motion.span
                      className="w-0 group-hover:w-2 h-0.5 bg-ghana-gold mr-0 group-hover:mr-2 transition-all duration-300"
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-ghana-gold">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-ghana-gold transition-all duration-300 text-sm flex items-center group"
                  >
                    <motion.span
                      className="w-0 group-hover:w-2 h-0.5 bg-ghana-gold mr-0 group-hover:mr-2 transition-all duration-300"
                    />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-ghana-gold">Contact</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 mt-1 text-ghana-gold group-hover:text-ghana-red transition-colors" />
                <span className="text-gray-300 text-sm">
                  National Theatre<br />
                  Accra, Ghana
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-ghana-gold group-hover:text-ghana-red transition-colors" />
                <span className="text-gray-300 text-sm">+233 (0) 302 123 456</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-ghana-gold group-hover:text-ghana-red transition-colors" />
                <span className="text-gray-300 text-sm">info@ghanaarts.gov.gh</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <p className="text-gray-400 text-sm">
                © 2024 Ghana Creative Arts Agency. Made with
              </p>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-ghana-red fill-current" />
              </motion.div>
              <p className="text-gray-400 text-sm">for Ghana's creative community.</p>
            </div>
            
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-ghana-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-ghana-gold text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-ghana-gold text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;