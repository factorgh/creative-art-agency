import { motion } from 'framer-motion';
import { Play, Clock, Users, Award, BookOpen, Video, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Training = () => {
  const courses = [
    {
      id: '1',
      title: 'Digital Art Fundamentals',
      instructor: 'Sarah Chen',
      duration: '6 weeks',
      level: 'Beginner',
      students: 1250,
      rating: 4.8,
      price: 199,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      progress: 0
    },
    {
      id: '2',
      title: 'Music Production Masterclass',
      instructor: 'David Rodriguez',
      duration: '8 weeks',
      level: 'Intermediate',
      students: 890,
      rating: 4.9,
      price: 299,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      progress: 65
    },
    {
      id: '3',
      title: 'Film Directing Workshop',
      instructor: 'Maria Santos',
      duration: '4 weeks',
      level: 'Advanced',
      students: 456,
      rating: 4.7,
      price: 399,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      progress: 30
    }
  ];

  const webinars = [
    {
      title: 'Building Your Creative Portfolio',
      date: 'March 20, 2024',
      time: '2:00 PM EST',
      speaker: 'Alex Johnson',
      attendees: 150
    },
    {
      title: 'Monetizing Your Art Online',
      date: 'March 25, 2024',
      time: '3:00 PM EST',
      speaker: 'Lisa Wang',
      attendees: 200
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
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Training & Development
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Enhance your creative skills with our comprehensive learning programs
          </motion.p>
        </div>
      </section>

      {/* Featured Course */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="bg-white/20 text-white mb-4">Featured Course</Badge>
                <h2 className="text-3xl font-bold mb-4">Creative Leadership Program</h2>
                <p className="text-xl mb-6">
                  A comprehensive 12-week program designed to develop leadership skills in creative industries.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3" />
                    12 weeks • 3 hours per week
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3" />
                    Limited to 25 participants
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-3" />
                    Certificate upon completion
                  </div>
                </div>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Enroll Now - $599
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Creative Leadership"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Courses</h2>
            <p className="text-xl text-gray-600">Learn at your own pace with our expert-led courses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white">
                        <Play className="w-6 h-6 mr-2" />
                        Preview
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>by {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students.toLocaleString()}
                        </div>
                      </div>
                      
                      {course.progress > 0 && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-orange-600">
                          ${course.price}
                        </span>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        {course.progress > 0 ? 'Continue Learning' : 'Enroll Now'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-gray-600">Join our free live sessions with industry experts</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{webinar.title}</CardTitle>
                        <CardDescription>with {webinar.speaker}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        Free
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.date} at {webinar.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} registered
                      </div>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <Video className="w-4 h-4 mr-2" />
                        Register for Free
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Corner */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Youth Corner</h2>
            <p className="text-xl text-gray-600">Special programs designed for young creatives</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Young Artists Bootcamp',
                age: 'Ages 13-17',
                duration: '2 weeks',
                description: 'Intensive summer program for aspiring young artists'
              },
              {
                title: 'Creative Writing Workshop',
                age: 'Ages 15-19',
                duration: '4 weeks',
                description: 'Develop storytelling skills with published authors'
              },
              {
                title: 'Digital Media Camp',
                age: 'Ages 12-16',
                duration: '1 week',
                description: 'Learn video editing, animation, and digital design'
              }
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.age} • {program.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Resources</h2>
            <p className="text-xl text-gray-600">Free resources to support your creative journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Creative Guides', icon: BookOpen, count: '50+ Guides' },
              { title: 'Video Tutorials', icon: Video, count: '200+ Videos' },
              { title: 'Templates', icon: Download, count: '100+ Templates' },
              { title: 'Case Studies', icon: Award, count: '30+ Studies' }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <resource.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.count}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      Browse
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

export default Training;