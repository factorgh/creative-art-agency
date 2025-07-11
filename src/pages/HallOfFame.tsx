import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, FileText } from 'lucide-react';
import { mockHallOfFame } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HallOfFame = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [currentHonoree, setCurrentHonoree] = useState(0);

  const years = [2024, 2023, 2022, 2021, 2020];
  const magazines = [
    {
      year: 2024,
      title: "Creative Excellence 2024",
      cover: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      pages: 64
    },
    {
      year: 2023,
      title: "Innovation in Arts 2023",
      cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
      pages: 72
    }
  ];

  const nextHonoree = () => {
    setCurrentHonoree((prev) => (prev + 1) % mockHallOfFame.length);
  };

  const prevHonoree = () => {
    setCurrentHonoree((prev) => (prev - 1 + mockHallOfFame.length) % mockHallOfFame.length);
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center mb-6"
          >
            <Award className="w-16 h-16 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">Hall of Fame</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Celebrating extraordinary contributions to the creative industries
          </motion.p>
        </div>
      </section>

      {/* Year Selection */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => setSelectedYear(year)}
                className={selectedYear === year ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Honorees Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Honorees of {selectedYear}</h2>
            <p className="text-xl text-gray-600">Outstanding individuals who have shaped the creative landscape</p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <button
                onClick={prevHonoree}
                className="absolute left-0 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.div
                key={currentHonoree}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={mockHallOfFame[currentHonoree].image}
                        alt={mockHallOfFame[currentHonoree].name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{mockHallOfFame[currentHonoree].domain}</Badge>
                        <Badge variant="outline">{mockHallOfFame[currentHonoree].year}</Badge>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {mockHallOfFame[currentHonoree].name}
                      </h3>
                      <p className="text-xl text-amber-600 mb-4">
                        {mockHallOfFame[currentHonoree].achievement}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {mockHallOfFame[currentHonoree].biography}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <button
                onClick={nextHonoree}
                className="absolute right-0 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {mockHallOfFame.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHonoree(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentHonoree ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hall of Fame Magazine</h2>
            <p className="text-xl text-gray-600">
              Explore our annual publications celebrating creative excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {magazines.map((magazine, index) => (
              <motion.div
                key={magazine.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={magazine.cover}
                      alt={magazine.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-600">{magazine.year}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-amber-600" />
                      {magazine.title}
                    </CardTitle>
                    <CardDescription>
                      {magazine.pages} pages of inspiring stories and achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        Read Online
                      </Button>
                      <Button size="sm" variant="outline">
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nomination Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nominate a Legend</h2>
            <p className="text-xl text-gray-600 mb-8">
              Know someone who deserves recognition for their outstanding contribution to the creative industries?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Submit Nomination
              </Button>
              <Button size="lg" variant="outline">
                Nomination Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HallOfFame;