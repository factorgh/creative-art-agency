import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Bell, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Domains', href: '/domains' },
    { name: 'Hall of Fame', href: '/hall-of-fame' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Events', href: '/events' },
    { name: 'Training', href: '/training' },
    { name: 'News', href: '/news' },
    { name: 'About', href: '/about' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-ghana-gold/20' 
          : 'bg-transparent'
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
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
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-ghana-red to-ghana-green bg-clip-text text-transparent">
                Ghana Creative Arts
              </span>
              <div className="text-xs text-ghana-gold font-medium">Creativity without borders</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    location.pathname === item.href
                      ? 'text-ghana-red bg-ghana-gold/10'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-ghana-red hover:bg-ghana-gold/5'
                        : 'text-white hover:text-ghana-gold hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-ghana-red to-ghana-gold ${
                      location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isScrolled ? 'text-gray-400' : 'text-white/70'
              }`} />
              <Input
                placeholder="Search..."
                className={`pl-10 w-64 transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-white border-ghana-gold/20 focus:border-ghana-red' 
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20'
                }`}
              />
            </motion.div> */}
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className={`relative ${
                isScrolled ? 'text-gray-700 hover:text-ghana-red' : 'text-white hover:text-ghana-gold'
              }`}>
                <Bell className="w-4 h-4" />
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-ghana-red rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/">
                <Button variant="ghost" size="sm" className={`${
                  isScrolled ? 'text-gray-700 hover:text-ghana-red' : 'text-white hover:text-ghana-gold'
                }`}>
                  <Shield className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className={`${
                isScrolled ? 'text-gray-700 hover:text-ghana-red' : 'text-white hover:text-ghana-gold'
              }`}>
                <User className="w-4 h-4" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/register">
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-ghana-red to-ghana-gold hover:from-ghana-red/90 hover:to-ghana-gold/90 text-white shadow-lg"
                >
                  Join Now
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border border-ghana-gold/20"
            >
              <div className="py-6 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-ghana-red hover:bg-ghana-gold/10 rounded-lg mx-4 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-ghana-gold/20 mx-4">
                  <div className="px-2 py-2">
                    <Input placeholder="Search..." className="w-full" />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to="/register">
                      <Button className="w-full mt-4 bg-gradient-to-r from-ghana-red to-ghana-gold hover:from-ghana-red/90 hover:to-ghana-gold/90 text-white">
                        Join Now
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;