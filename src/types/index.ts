export interface CreativeDomain {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  route: string;
  image?: string;
}

export interface Artist {
  id: string;
  name: string;
  domain: string;
  profileImage: string;
  bio: string;
  portfolio: string[];
  verified: boolean;
  location: string;
  joinDate: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  rsvpCount: number;
  maxAttendees: number;
}

export interface Opportunity {
  id: string;
  title: string;
  type: 'grant' | 'competition' | 'residency' | 'workshop';
  description: string;
  deadline: string;
  amount?: string;
  domain: string;
  requirements: string[];
  applicationUrl: string;
}

export interface Product {
  id: string;
  title: string;
  artist: string;
  price: number;
  category: string;
  image: string;
  description: string;
  domain: string;
  inStock: boolean;
}

export interface HallOfFameEntry {
  id: string;
  name: string;
  year: number;
  domain: string;
  achievement: string;
  image: string;
  biography: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  image: string;
  tags: string[];
}

export interface Partnership {
  id: string;
  name: string;
  type: string;
  description: string;
  logo: string;
  website: string;
  established: string;
}