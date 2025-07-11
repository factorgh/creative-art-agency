import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Inclusive Community",
      description: "We believe creativity knows no boundaries and welcome artists from all backgrounds"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in supporting and showcasing creative talent"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We are driven by our love for the arts and commitment to creative expression"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "We celebrate and honor outstanding contributions to the creative industries"
    }
  ];

  const documents = [
    {
      title: "Creative Arts Act 2024",
      description: "Comprehensive legislation governing creative industries",
      type: "PDF",
      size: "2.3 MB"
    },
    {
      title: "Artist Rights Policy",
      description: "Guidelines for protecting artist intellectual property",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Funding Guidelines",
      description: "Complete guide to available grants and funding opportunities",
      type: "PDF",
      size: "3.1 MB"
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Our Agency
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Empowering creative professionals and fostering artistic excellence across 15 creative domains
              </p>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Download Our Brochure
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Creative Arts Agency"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To create a thriving ecosystem where creative professionals can showcase their talents, 
                access opportunities, and contribute to the cultural richness of our society. We are 
                committed to supporting artists at every stage of their journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading platform that connects, nurtures, and celebrates creative talent 
                globally. We envision a world where every artist has the opportunity to reach their 
                full potential and make a meaningful impact through their creative work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to the creative community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-8">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Executive Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900">Dr. Sarah Mitchell</h3>
              <p className="text-gray-600">Executive Director</p>
            </div>
            
            <blockquote className="text-lg text-gray-700 italic leading-relaxed">
              "The creative industries are the heartbeat of our cultural identity. Through our platform, 
              we're not just showcasing talent – we're building bridges, creating opportunities, and 
              fostering the next generation of creative leaders. Every artist who joins our community 
              becomes part of a larger story of artistic excellence and cultural innovation."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Documents & Policies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Acts & Policies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download our comprehensive documents and policies that govern our operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="w-5 h-5 text-purple-600" />
                      {doc.title}
                    </CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {doc.type} • {doc.size}
                      </span>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
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

export default About;