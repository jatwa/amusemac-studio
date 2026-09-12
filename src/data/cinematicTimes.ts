import { amusemacMedia } from '@/lib/media';

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
  image: string;
}

export const cinematicArticles: Article[] = [
  {
    id: 'strategic-media-partnerships-india',
    title: 'Unlocking the Benefits of Partnering with Amusemac Studio: Strategic Media Partnerships India',
    category: 'Film Industry Insights',
    date: '2024',
    readTime: '4 MIN READ',
    excerpt: 'When it comes to crafting stories that resonate, visuals that captivate, and campaigns that convert, the right creative partner makes all the difference. How Amusemac Studio bridges audience pulse with brand nuance.',
    image: amusemacMedia.blog.strategicPartnerships
  },
  {
    id: 'why-indias-film-production-specialists-stand-out',
    title: 'Why India’s Film Production Specialists Stand Out',
    category: 'Cinematic Techniques',
    date: '2024',
    readTime: '5 MIN READ',
    excerpt: 'From bustling soundstages in Mumbai to remote field locations across India, production specialists blend heritage craftsmanship with cutting-edge technology to deliver cinematic marvels.',
    image: amusemacMedia.blog.indiasSpecialists
  },
  {
    id: 'unique-offerings-amusemac-studio',
    title: 'Discover the Unique Offerings of Amusemac Studio: Innovative Film Studio India',
    category: 'Studio Perspectives',
    date: '2024',
    readTime: '4 MIN READ',
    excerpt: 'A powerhouse of imagination blending old-school storytelling grit with modern production techniques to forge emotions that linger far beyond the screen.',
    image: amusemacMedia.blog.uniqueOfferings
  }
];