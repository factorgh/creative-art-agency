import { motion } from 'framer-motion';
import { Handshake, Building, Users, FileText, ExternalLink, Download, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Partnerships = () => {
  const partnerTypes = [
    {
      title: 'Corporate Partners',
      description: 'Companies supporting creative industries',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      count: 45
    },
    {
      title: 'Educational Institutions',
      description: 'Universities and schools',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      count: 28
    },
    {
      title: 'Non-Profit Organizations',
      description: 'Foundations and NGOs',
      icon: Handshake,
      color: 'from-purple-500 to-pink-500',
      count: 32
    }
  ];

  const featuredPartners = [
    {
      name: 'Creative Foundation',
      type: 'Non-Profit',
      description: 'Supporting emerging artists worldwide with grants and mentorship programs',
      logo: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      established: '2020',
      focus: ['Grants', 'Mentorship', 'Exhibitions'],
      website: 'https://creativefoundation.org'
    },
    {
      name: 'TechArts Innovation',
      type: 'Corporate',
      description: 'Technology company investing in digital arts and creative technology',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      established: '2018',
      focus: ['Technology', 'Digital Arts', 'Innovation'],
      website: 'https://techarts.com'
    },
    {
      name: 'Arts University Network',
      type: 'Educational',
      description: 'Consortium of leading arts universities promoting creative education',
      logo: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
      established: '2015',
      focus: ['Education', 'Research', 'Student Exchange'],
      website: 'https://artsuniversity.edu'
    }
  ];

  const mouTemplates = [
    {
      title: 'Corporate Partnership MOU',
      description: 'Template for corporate sponsorship and collaboration agreements',
      pages: 12,
      type: 'Corporate'
    },
    {
      title: 'Educational Institution MOU',
      description: 'Framework for academic partnerships and student programs',
      pages: 8,
      type: 'Educational'
    },
    {
      title: 'Non-Profit Collaboration MOU',
      description: 'Agreement template for NGO and foundation partnerships',
      pages: 10,
      type: 'Non-Profit'
    },
    {
      title: 'International Partnership MOU',
      description: 'Cross-border collaboration and cultural exchange agreements',
      pages: 15,
      type: 'International'
    }
  ];

  const caseStudies = [
    {
      title: 'Digital Arts Accelerator Program',
      partner: 'TechArts Innovation',
      impact: '500+ artists trained',
      description: 'Successful collaboration resulting in a comprehensive digital arts training program',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Youth Creative Scholarship Fund',
      partner: 'Creative Foundation',
      impact: '$2M in scholarships',
      description: 'Partnership that provided educational opportunities for underprivileged youth',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Corporate': return 'bg-blue-100 text-blue-800';
      case 'Educational': return 'bg-green-100 text-green-800';
      case 'Non-Profit': return 'bg-purple-100 text-purple-800';
      case 'International': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Partnerships
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Building collaborative relationships to strengthen and expand the creative ecosystem
          </motion.p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partnership Network</h2>
            <p className="text-xl text-gray-600">Diverse collaborations across multiple sectors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center mx-auto mb-4`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{type.count}</div>
                    <p className="text-sm text-gray-600">Active Partners</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Partners</h2>
            <p className="text-xl text-gray-600">Spotlight on our key collaborative relationships</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <Badge className={getTypeColor(partner.type)}>
                        {partner.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <CardDescription>{partner.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600">
                        <strong>Established:</strong> {partner.established}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Focus Areas:</p>
                        <div className="flex flex-wrap gap-1">
                          {partner.focus.map((area, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Application */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Partner</h2>
            <p className="text-xl text-gray-600">Join our network and help shape the future of creative industries</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Partnership Application</CardTitle>
              <CardDescription>
                Tell us about your organization and how we can collaborate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="orgName">Organization Name</Label>
                    <Input id="orgName" required />
                  </div>
                  <div>
                    <Label htmlFor="partnerType">Partnership Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="educational">Educational</SelectItem>
                        <SelectItem value="nonprofit">Non-Profit</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactName">Contact Person</Label>
                    <Input id="contactName" required />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input id="contactEmail" type="email" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" type="url" placeholder="https://" />
                </div>

                <div>
                  <Label htmlFor="description">Organization Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your organization and its mission..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="collaboration">Proposed Collaboration</Label>
                  <Textarea
                    id="collaboration"
                    placeholder="Describe how you'd like to collaborate with us..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MOU Templates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">MOU Templates</h2>
            <p className="text-xl text-gray-600">Download standardized agreement templates</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mouTemplates.map((template, index) => (
              <motion.div
                key={template.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={getTypeColor(template.type)}>
                        {template.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{template.pages} pages</span>
                    </div>
                    <CardTitle className="text-lg">{template.title}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real impact from our partnership collaborations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{study.partner}</Badge>
                      <span className="text-sm font-semibold text-emerald-600">{study.impact}</span>
                    </div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription>{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Read Full Case Study
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's work together to create meaningful impact in the creative industries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              Schedule a Meeting
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              Download Partnership Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;