export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Advertisement' | 'Corporate Films' | 'Documentaries' | 'Film & Webseries' | 'Music Videos' | 'Short Films';
  client?: string;
  year?: string;
  aspectRatio?: string;
  duration?: string;
  location?: string;
  logline: string;
  synopsis: string;
  heroImage: string;
  gallery: {
    url: string;
    caption: string;
    aspect?: 'cinema' | 'portrait' | 'standard' | 'academy';
    type?: 'still' | 'sketch' | 'set' | 'lighting';
  }[];
  palette: string[];
  credits: ProjectCredit[];
  disciplines: string[];
  featured: boolean;
  horizontalFeature?: boolean;
  videoUrl?: string;
  quote?: {
    text: string;
    author: string;
  };
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'dainik-bhaskar-pankaj-tripathi',
    title: 'DAINIK BHASKAR',
    subtitle: 'सच, करीब से दिखता है (Featuring Pankaj Tripathi)',
    category: 'Advertisement',
    client: 'Dainik Bhaskar',
    year: '2023',
    aspectRatio: '16:9 Commercial',
    location: 'Mumbai / North India',
    logline: '“Sach, Kareeb Se Dikhta Hai” — A grounded, human commercial campaign bringing out the gritty truth of real journalism.',
    synopsis: 'A high-impact 3-part advertisement series starring acclaimed actor Pankaj Tripathi, capturing authentic Indian nuances with subtle humor and profound observational truth.',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1400&auto=format&fit=crop',
        caption: 'Pankaj Tripathi Ad Series — Framing the quiet realism of everyday Indian life',
        aspect: 'cinema',
        type: 'still'
      },
      {
        url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
        caption: 'Location lighting calibration for natural village tea-stall scene',
        aspect: 'portrait',
        type: 'lighting'
      }
    ],
    palette: ['#121210', '#D89B37', '#8F4832', '#F3EDE2', '#3D4F5D'],
    credits: [
      { role: 'Production House', name: 'Amusemac Studio' },
      { role: 'Cast', name: 'Pankaj Tripathi' },
      { role: 'Client', name: 'Dainik Bhaskar' },
      { role: 'Format', name: 'TVC / Digital (30s & 10s Series)' }
    ],
    disciplines: ['Advertisement', 'Video Production', 'Art Direction', 'Post Production'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '02',
    slug: 'britannia-5050-4th-umpire',
    title: 'BRITANNIA 50-50',
    subtitle: 'Ab India Mein Har Koi Banega Umpire',
    category: 'Advertisement',
    client: 'Britannia Industries',
    year: '2023',
    aspectRatio: '16:9 Commercial',
    location: 'Mumbai',
    logline: 'When everyday cricket passion turns any train seat or street kite into an official umpire decision.',
    synopsis: 'A lively, humorous commercial campaign for Britannia 5050 capturing spontaneous cricket culture across India with energetic pacing and sharp comic timing.',
    heroImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1400&auto=format&fit=crop',
        caption: 'Train Seat Umpire Setup — Practical Mumbai local train interior recreation',
        aspect: 'cinema',
        type: 'set'
      }
    ],
    palette: ['#0A0F14', '#D89B37', '#E74C3C', '#F8F5EE', '#2C3E50'],
    credits: [
      { role: 'Studio', name: 'Amusemac Studio' },
      { role: 'Client', name: 'Britannia Industries' },
      { role: 'Campaign', name: '50-50 4th Umpire (Kite & Train Seat)' }
    ],
    disciplines: ['Advertisement', 'Production Design', 'Direction'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '03',
    slug: 'god-vulture-and-human',
    title: 'GOD VULTURE AND HUMAN',
    subtitle: 'The Unsung Heroes of Organ Transplantation (2023)',
    category: 'Documentaries',
    year: '2023',
    aspectRatio: '16:9 Documentary',
    duration: 'Documentary Feature',
    location: 'India',
    logline: 'Dedicated to the tireless efforts of Organ Transplant Coordinators dealing with the intensities of life, death, and human grace.',
    synopsis: 'The film explores the profound subject of organ donation through the lens of 4 transplant coordinators. Moving through hospitals and grieving families, it humanizes those who bridge the fragile boundary between mortality and second chances.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1400&auto=format&fit=crop',
        caption: 'Observational hospital corridor framing — capturing quiet human resilience',
        aspect: 'cinema',
        type: 'still'
      },
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
        caption: 'Intimate interview lighting for the 4 transplant coordinators',
        aspect: 'portrait',
        type: 'lighting'
      }
    ],
    palette: ['#1C241D', '#3F4E3A', '#8F4832', '#D9CDBC', '#D89B37'],
    credits: [
      { role: 'Production', name: 'Amusemac Studio' },
      { role: 'Genre', name: 'Social & Medical Documentary' },
      { role: 'Theme', name: 'Organ Donation & Human Resilience' }
    ],
    disciplines: ['Documentaries', 'Sync Sound Recording', 'Editing'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '04',
    slug: 'testimony-of-ana',
    title: 'TESTIMONY OF ANA',
    subtitle: 'Myths, Patriarchy & The Scars Left Behind',
    category: 'Documentaries',
    year: '2022',
    aspectRatio: 'Academy / 16:9',
    location: 'Rural India',
    logline: 'An award-winning documentary taking us into the life of Ana, an elderly woman navigating the intersection of centuries-old superstition and cultural violence.',
    synopsis: 'In a remote Indian village, centuries-old myths about women’s bodies and power still cast long shadows. Testimony of Ana is a haunting exploration of superstition, patriarchy, and the scars—both visible and invisible—that they leave behind.',
    heroImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop',
        caption: 'Monochromatic portraiture and shadow studies in rural village courtyards',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#080808', '#202B38', '#8F4832', '#C9D4DF', '#D89B37'],
    credits: [
      { role: 'Documentary Studio', name: 'Amusemac Studio' },
      { role: 'Subject', name: 'Ana & Village Elders' },
      { role: 'Recognition', name: 'Award-Winning Documentary' }
    ],
    disciplines: ['Documentaries', 'Visual Storytelling', 'Cinematography'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '05',
    slug: 'yadav-measurement-corporate',
    title: 'YADAV MEASUREMENT',
    subtitle: 'Behind The Scenes & Corporate Brand Narrative',
    category: 'Corporate Films',
    client: 'Yadav Measurement Pvt. Ltd / MobiLab',
    year: '2023',
    aspectRatio: '16:9 Corporate',
    location: 'Yari Road, Mumbai',
    logline: 'Turning industrial precision and boardroom visions into screen-worthy cinematic narratives.',
    synopsis: 'From pre-production brainstorms to on-set execution, this corporate film and Mobilab brand story captures the passion and technical mastery of Yadav Measurement.',
    heroImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?q=80&w=1400&auto=format&fit=crop',
        caption: 'MobiLab tech unit on-location shoot at Mumbai facility',
        aspect: 'cinema',
        type: 'set'
      }
    ],
    palette: ['#121210', '#5A5B5E', '#D89B37', '#F3EDE2', '#3D4F5D'],
    credits: [
      { role: 'Client', name: 'Yadav Measurement Pvt. Ltd' },
      { role: 'Shot By', name: 'Amusemac Studio Team' },
      { role: 'Directed By', name: 'Sreyansha Jain' },
      { role: 'Executive Producer', name: 'Kapil Hanwat' },
      { role: 'Producer', name: 'Kuldeep Jatwa' },
      { role: 'Creative Director', name: 'Kalpita Mandrekar' }
    ],
    disciplines: ['Corporate Films', 'Direction', 'Production'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '06',
    slug: 'uppercase-x-akasa-air',
    title: 'UPPERCASE × AKASA AIR',
    subtitle: 'Smart, Sustainable Cabin Gear for the Crew',
    category: 'Corporate Films',
    client: 'uppercase / Akasa Air',
    year: '2023',
    aspectRatio: '16:9 Commercial & Corporate',
    location: 'Mumbai Airport & Flight Deck',
    logline: 'uppercase partners with Akasa Air to design custom eco-friendly cabin gear crafted with RCS-certified recycled materials.',
    synopsis: 'Co-created with direct input from Akasa’s cabin crew, this brand film highlights sustainable utility, innovation, and Indian design craftsmanship.',
    heroImage: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1400&auto=format&fit=crop',
        caption: 'Product ergonomics and sustainable material close-up framing',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#FF6B00', '#121210', '#F8F5EE', '#7F8C8D', '#D89B37'],
    credits: [
      { role: 'Brand Partners', name: 'uppercase & Akasa Air' },
      { role: 'Production', name: 'Amusemac Studio' },
      { role: 'Focus', name: 'Sustainable Design & Made in India' }
    ],
    disciplines: ['Corporate Films', 'Advertisement', 'Branded Content'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '07',
    slug: 'pataa-mad-over-address',
    title: 'PATAA APP CAMPAIGN',
    subtitle: 'Mad Over Address // Address Made Simple',
    category: 'Advertisement',
    client: 'Pataa Navigation',
    year: '2023',
    aspectRatio: '16:9 TVC',
    location: 'Indore & Mumbai',
    logline: '“Address By Paanwala”, “Baraat In A Funeral”, and “North Meets South” — solving India’s complex address navigation through irreverent storytelling.',
    synopsis: 'A hilarious, culturally sharp ad campaign highlighting the chaos of finding addresses in Indian cities and how digital geocoding solves it.',
    heroImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1400&auto=format&fit=crop',
        caption: 'Baraat in a Funeral scene — live comedic timing on location',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#0984E3', '#00B894', '#D63031', '#121210', '#F8F5EE'],
    credits: [
      { role: 'Client', name: 'Pataa Navigation' },
      { role: 'Production', name: 'Amusemac Studio' },
      { role: 'Format', name: 'Digital Ad Campaign Series' }
    ],
    disciplines: ['Advertisement', 'Creative Direction', 'Video Production'],
    featured: false,
    horizontalFeature: true
  },
  {
    id: '08',
    slug: 'tata-salt-har-narangi-pack',
    title: 'TATA SALT',
    subtitle: 'Har Narangi Pack Tata Namak Nahi Hota',
    category: 'Advertisement',
    client: 'Tata Consumer Products',
    year: '2023',
    aspectRatio: '16:9 Commercial',
    location: 'Mumbai',
    logline: 'Countering look-alike counterfeit brands with sharp Kirana and Mujrim narrative sketches.',
    synopsis: 'A widely recognized television and digital commercial reinforcing consumer trust and authentic packaging awareness for India’s most trusted salt brand.',
    heroImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1400&auto=format&fit=crop',
        caption: 'Traditional Kirana store set dressing and lighting setup',
        aspect: 'cinema',
        type: 'set'
      }
    ],
    palette: ['#E67E22', '#2980B9', '#121210', '#F3EDE2', '#D89B37'],
    credits: [
      { role: 'Brand', name: 'Tata Salt' },
      { role: 'Production Team', name: 'Amusemac Studio' }
    ],
    disciplines: ['Advertisement', 'Set Design & Art Direction', 'Video Production'],
    featured: false,
    horizontalFeature: true
  }
];