import { Artist, Event, Opportunity, Product, HallOfFameEntry, NewsArticle, Partnership } from '@/types';

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    domain: 'music',
    profileImage: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Grammy-nominated composer and producer',
    portfolio: ['https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800'],
    verified: true,
    location: 'New York, NY',
    joinDate: '2023-01-15'
  },
  {
    id: '2',
    name: 'Michael Chen',
    domain: 'film',
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Award-winning cinematographer',
    portfolio: ['https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'],
    verified: true,
    location: 'Los Angeles, CA',
    joinDate: '2023-02-20'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Creative Arts Summit 2024',
    description: 'Annual gathering of creative professionals',
    date: '2024-03-15',
    time: '10:00 AM',
    location: 'Convention Center, NYC',
    category: 'conference',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    rsvpCount: 250,
    maxAttendees: 500
  },
  {
    id: '2',
    title: 'Digital Arts Workshop',
    description: 'Learn the latest digital art techniques',
    date: '2024-03-20',
    time: '2:00 PM',
    location: 'Art Studio, SF',
    category: 'workshop',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    rsvpCount: 45,
    maxAttendees: 50
  }
];

export const mockOpportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Emerging Artist Grant',
    type: 'grant',
    description: 'Financial support for emerging artists',
    deadline: '2024-04-15',
    amount: '$10,000',
    domain: 'visual-arts',
    requirements: ['Portfolio submission', 'Artist statement', 'References'],
    applicationUrl: '/apply/emerging-artist-grant'
  },
  {
    id: '2',
    title: 'Film Festival Competition',
    type: 'competition',
    description: 'International film festival submission',
    deadline: '2024-05-01',
    amount: '$25,000',
    domain: 'film',
    requirements: ['Film submission', 'Director statement', 'Press kit'],
    applicationUrl: '/apply/film-festival'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Abstract Painting #1',
    artist: 'Elena Rodriguez',
    price: 1200,
    category: 'painting',
    image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Original abstract painting on canvas',
    domain: 'visual-arts',
    inStock: true
  },
  {
    id: '2',
    title: 'Handcrafted Ceramic Vase',
    artist: 'James Wilson',
    price: 450,
    category: 'ceramics',
    image: 'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Beautiful handcrafted ceramic vase',
    domain: 'crafts',
    inStock: true
  }
];

export const mockHallOfFame: HallOfFameEntry[] = [
  {
    id: '1',
    name: 'Maya Angelou',
    year: 2023,
    domain: 'literature',
    achievement: 'Lifetime Achievement in Poetry',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
    biography: 'Renowned poet and civil rights activist'
  },
  {
    id: '2',
    name: 'Quincy Jones',
    year: 2022,
    domain: 'music',
    achievement: 'Music Producer of the Century',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    biography: 'Legendary music producer and composer'
  }
];

export const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'New Arts Education Initiative Launched',
    excerpt: 'Government announces major funding for arts education',
    content: 'The government has announced a new $50 million initiative...',
    author: 'Jane Smith',
    publishDate: '2024-01-15',
    category: 'policy',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['education', 'funding', 'policy']
  }
];

export const mockPartnerships: Partnership[] = [
  {
    id: '1',
    name: 'Creative Foundation',
    type: 'Non-profit',
    description: 'Supporting emerging artists worldwide',
    logo: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
    website: 'https://creativefoundation.org',
    established: '2020'
  }
];