import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Building, DollarSign, GraduationCap, Upload, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { creativeDomains } from '@/data/domains';

const Register = () => {
  const [selectedType, setSelectedType] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    domain: '',
    bio: '',
    portfolio: null,
    agreeTerms: false
  });

  const registrationTypes = [
    {
      id: 'artist',
      title: 'Artist',
      description: 'Individual creative professionals',
      icon: User,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'organization',
      title: 'Organization',
      description: 'Creative companies and collectives',
      icon: Building,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'investor',
      title: 'Investor',
      description: 'Funding partners and sponsors',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'institution',
      title: 'Institution',
      description: 'Educational and cultural institutions',
      icon: GraduationCap,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setFormData({ ...formData, type });
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Join Our Community
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Register to showcase your talent, access opportunities, and connect with the creative community
          </motion.p>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step <= currentStep ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step < currentStep ? <Check className="w-5 h-5" /> : step}
                </div>
                <span className={`ml-2 ${step <= currentStep ? 'text-purple-600' : 'text-gray-600'}`}>
                  {step === 1 ? 'Type' : step === 2 ? 'Details' : 'Verification'}
                </span>
                {step < 3 && <div className={`w-16 h-1 mx-4 ${step < currentStep ? 'bg-purple-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Registration Type</h2>
                <p className="text-xl text-gray-600">Select the option that best describes you</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {registrationTypes.map((type, index) => (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="cursor-pointer"
                    onClick={() => handleTypeSelect(type.id)}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center mx-auto mb-4`}>
                          <type.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                        <CardDescription className="text-lg">{type.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Personal Information</CardTitle>
                  <CardDescription>Tell us about yourself and your creative work</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="domain">Creative Domain</Label>
                      <Select value={formData.domain} onValueChange={(value) => setFormData({ ...formData, domain: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary domain" />
                        </SelectTrigger>
                        <SelectContent>
                          {creativeDomains.map((domain) => (
                            <SelectItem key={domain.id} value={domain.id}>
                              {domain.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="bio">Bio / Description</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about your creative work and experience..."
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        rows={4}
                      />
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button type="button" onClick={handleNext}>
                        Next
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Portfolio & Verification</CardTitle>
                  <CardDescription>Upload your portfolio and complete your registration</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="portfolio">Portfolio Upload</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Drag and drop your portfolio files here</p>
                        <p className="text-sm text-gray-500">or click to browse (PDF, Images, Videos)</p>
                        <Button type="button" variant="outline" className="mt-4">
                          Choose Files
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the Terms of Service and Privacy Policy
                      </Label>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button type="submit" disabled={!formData.agreeTerms}>
                        Complete Registration
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Register;