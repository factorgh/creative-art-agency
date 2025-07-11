import { motion } from 'framer-motion';
import { Shield, FileText, Users, AlertTriangle, Download, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const IPRights = () => {
  const ipServices = [
    {
      title: 'Copyright Registration',
      description: 'Protect your original creative works',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      features: ['Literary works', 'Musical compositions', 'Visual arts', 'Digital content']
    },
    {
      title: 'Trademark Protection',
      description: 'Secure your brand and business identity',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      features: ['Brand names', 'Logos', 'Slogans', 'Business identity']
    },
    {
      title: 'Patent Services',
      description: 'Protect innovative creative processes',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      features: ['Creative processes', 'Technical innovations', 'Design patents', 'Utility patents']
    }
  ];

  const collectingSocieties = [
    {
      name: 'Music Rights Collective',
      type: 'Music',
      description: 'Collecting royalties for musical works',
      website: 'https://musicrights.org'
    },
    {
      name: 'Visual Artists Society',
      type: 'Visual Arts',
      description: 'Protecting visual artists\' rights',
      website: 'https://visualartists.org'
    },
    {
      name: 'Writers Guild',
      type: 'Literature',
      description: 'Supporting writers and authors',
      website: 'https://writersguild.org'
    },
    {
      name: 'Film & TV Rights',
      type: 'Film & Video',
      description: 'Managing audiovisual rights',
      website: 'https://filmtvrights.org'
    }
  ];

  const guides = [
    {
      title: 'IP Basics for Creatives',
      description: 'Understanding intellectual property fundamentals',
      pages: 24,
      level: 'Beginner'
    },
    {
      title: 'Copyright Registration Guide',
      description: 'Step-by-step copyright registration process',
      pages: 18,
      level: 'Intermediate'
    },
    {
      title: 'International IP Protection',
      description: 'Protecting your work globally',
      pages: 32,
      level: 'Advanced'
    },
    {
      title: 'Digital Rights Management',
      description: 'Managing rights in the digital age',
      pages: 28,
      level: 'Intermediate'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            IP Rights Hub
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Protect your creative work with comprehensive intellectual property resources and support
          </motion.p>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-800">IP Emergency Hotline</AlertTitle>
            <AlertDescription className="text-red-700">
              If you suspect your intellectual property is being infringed, call our 24/7 emergency hotline: 
              <strong className="ml-2">+1 (555) 911-IP-HELP</strong>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* IP Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IP Protection Services</h2>
            <p className="text-xl text-gray-600">Comprehensive protection for your creative assets</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ipServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      Start Registration
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IP Awareness Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IP Awareness Guides</h2>
            <p className="text-xl text-gray-600">Educational resources to help you understand and protect your rights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={getLevelColor(guide.level)}>
                        {guide.level}
                      </Badge>
                      <span className="text-sm text-gray-500">{guide.pages} pages</span>
                    </div>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collecting Societies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Collecting Societies Directory</h2>
            <p className="text-xl text-gray-600">Connect with organizations that manage rights in your creative domain</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {collectingSocieties.map((society, index) => (
              <motion.div
                key={society.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{society.name}</CardTitle>
                        <CardDescription>{society.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{society.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </Button>
                      <Button variant="outline">
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Help Request */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Legal Help?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with IP lawyers and legal experts who specialize in creative industries
            </p>
            
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl text-white p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4">Free Legal Consultation</h3>
                  <p className="text-lg mb-6">
                    Get 30 minutes of free legal advice from our network of IP specialists.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Copyright and trademark issues</li>
                    <li>• Contract review and negotiation</li>
                    <li>• Infringement cases</li>
                    <li>• Licensing agreements</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-6 mb-4">
                    <Phone className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-lg font-semibold">Book Your Consultation</p>
                  </div>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                    Schedule Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gamified IP Awareness */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IP Knowledge Challenge</h2>
            <p className="text-xl text-gray-600">Test your intellectual property knowledge and earn certificates</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Copyright Basics', questions: 20, time: '15 min', difficulty: 'Beginner' },
              { title: 'Trademark Law', questions: 25, time: '20 min', difficulty: 'Intermediate' },
              { title: 'IP Strategy', questions: 30, time: '25 min', difficulty: 'Advanced' }
            ].map((quiz, index) => (
              <motion.div
                key={quiz.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">{index + 1}</span>
                    </div>
                    <CardTitle>{quiz.title}</CardTitle>
                    <CardDescription>
                      {quiz.questions} questions • {quiz.time} • {quiz.difficulty}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Start Quiz
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IPRights;