import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Upload, DollarSign, Users, Award, Calendar, TrendingUp, Sparkles, Star } from 'lucide-react';
import HeroSection from '@/components/common/HeroSection';
import DomainCard from '@/components/common/DomainCard';
import { creativeDomains } from '@/data/domains';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const quickActions = [
    {
      title: "Submit Your Work",
      description: "Showcase your creativity to Ghana and beyond",
      icon: Upload,
      link: "/register",
      color: "from-ghana-red to-ghana-gold",
      delay: 0
    },
    {
      title: "Find Grants",
      description: "Discover funding opportunities nationwide",
      icon: DollarSign,
      link: "/opportunities",
      color: "from-ghana-green to-ghana-gold",
      delay: 0.1
    },
    {
      title: "Join Events",
      description: "Network with fellow Ghanaian creatives",
      icon: Calendar,
      link: "/events",
      color: "from-ghana-gold to-ghana-red",
      delay: 0.2
    }
  ];

  const stats = [
    { label: "Registered Artists", value: "15,000+", icon: Users, color: "text-ghana-red" },
    { label: "Creative Domains", value: "15", icon: Award, color: "text-ghana-gold" },
    { label: "Opportunities", value: "500+", icon: TrendingUp, color: "text-ghana-green" },
    { label: "Events Hosted", value: "200+", icon: Calendar, color: "text-ghana-red" }
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-ghana-gold/10 px-4 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-ghana-gold" />
              <span className="text-ghana-gold font-medium">Get Started Today</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Creative Journey
              <span className="bg-gradient-to-r from-ghana-red to-ghana-gold bg-clip-text text-transparent"> Starts Here</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards showcasing your creative talent to Ghana and the world
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {quickActions.map((action) => (
              <motion.div
                key={action.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <Link to={action.link}>
                  <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="relative z-10 pb-4">
                      <motion.div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <action.icon className="w-10 h-10 text-white" />
                        
                        {/* Floating particles */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <CardTitle className="group-hover:text-ghana-red transition-colors duration-300 text-xl">
                        {action.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <CardDescription className="text-lg mb-6">
                        {action.description}
                      </CardDescription>
                      
                      <motion.div
                        className="inline-flex items-center text-ghana-red font-semibold group-hover:text-ghana-gold transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </CardContent>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ transform: "skewX(-20deg)" }}
                    />
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-white to-gray-50 shadow-2xl border-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-ghana-red/5 via-ghana-gold/5 to-ghana-green/5" />
              
              <CardContent className="relative z-10 p-12">
                <div className="text-center mb-10">
                  <motion.div
                    className="inline-flex items-center space-x-2 bg-ghana-red/10 px-4 py-2 rounded-full mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Search className="w-4 h-4 text-ghana-red" />
                    <span className="text-ghana-red font-medium">Discover</span>
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Find What You're Looking For
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Search for artists, events, and organizations across Ghana
                  </p>
                </div>
                
                <div className="max-w-3xl mx-auto">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                    <Input
                      placeholder="Search artists, events, organizations..."
                      className="pl-16 py-6 text-lg border-2 border-gray-200 focus:border-ghana-gold rounded-2xl shadow-lg"
                    />
                    <Button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-ghana-red to-ghana-gold hover:from-ghana-red/90 hover:to-ghana-gold/90 px-8 py-3 rounded-xl">
                      Search
                    </Button>
                  </motion.div>
                  
                  <div className="flex flex-wrap gap-3 mt-8 justify-center">
                    <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      Popular:
                    </span>
                    {['Musicians', 'Art Exhibitions', 'Film Festivals', 'Dance Groups'].map((tag, index) => (
                      <motion.button
                        key={tag}
                        className="px-4 py-2 bg-ghana-gold/10 text-ghana-gold rounded-full text-sm hover:bg-ghana-gold/20 transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {tag}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Creative Domains */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-ghana-green/10 px-4 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-ghana-green" />
              <span className="text-ghana-green font-medium">15 Creative Domains</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Creative
              <span className="bg-gradient-to-r from-ghana-green to-ghana-gold bg-clip-text text-transparent"> Domains</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities across Ghana's diverse creative industries
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {creativeDomains.slice(0, 6).map((domain, index) => (
              <DomainCard key={domain.id} domain={domain} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/domains">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-ghana-gold text-ghana-red hover:bg-ghana-gold/10 px-8 py-4 text-lg font-semibold"
                >
                  View All 15 Domains
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-ghana-red via-ghana-gold to-ghana-green relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Be part of Ghana's vibrant ecosystem of creative professionals
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <motion.div
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ghana-red/10 via-ghana-gold/10 to-ghana-green/10" />
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="bg-gradient-to-r from-ghana-red to-ghana-gold bg-clip-text text-transparent"> Creative Journey?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of artists, creators, and creative professionals who are already part of Ghana's premier creative community.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Link to="/register">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-ghana-red to-ghana-gold hover:from-ghana-red/90 hover:to-ghana-gold/90 px-10 py-4 text-lg font-semibold shadow-2xl relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative flex items-center">
                        Join Now
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link to="/about">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold backdrop-blur-sm"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;