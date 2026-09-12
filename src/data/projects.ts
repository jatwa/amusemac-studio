import { amusemacMedia } from '@/lib/media';

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
    synopsis: 'A high-impact advertisement series starring acclaimed actor Pankaj Tripathi, capturing authentic Indian nuances with subtle humor and profound observational truth.',
    heroImage: amusemacMedia.projects.dainikBhaskar,
    gallery: [
      {
        url: amusemacMedia.projects.dainikBhaskar,
        caption: 'Pankaj Tripathi Ad Series — Framing the quiet realism of everyday Indian life',
        aspect: 'cinema',
        type: 'still'
      },
      {
        url: amusemacMedia.services.brandCampaign,
        caption: 'On-set lighting setup — Amusemac light crew at work',
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
    heroImage: amusemacMedia.projects.britannia5050,
    gallery: [
      {
        url: amusemacMedia.projects.britannia5050,
        caption: 'Britannia 50-50 4th Umpire campaign still',
        aspect: 'cinema',
        type: 'still'
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
    heroImage: amusemacMedia.projects.documentaries,
    gallery: [
      {
        url: amusemacMedia.projects.documentaries,
        caption: 'Documentary production frame — capturing quiet human resilience',
        aspect: 'cinema',
        type: 'still'
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
    heroImage: amusemacMedia.projects.tataSalt,
    gallery: [
      {
        url: amusemacMedia.projects.tataSalt,
        caption: 'Tata Salt — Har Narangi Pack Tata Namak Nahi Hota campaign',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#E67E22', '#2980B9', '#121210', '#F3EDE2', '#D89B37'],
    credits: [
      { role: 'Brand', name: 'Tata Salt' },
      { role: 'Production Team', name: 'Amusemac Studio' }
    ],
    disciplines: ['Advertisement', 'Set Design & Art Direction', 'Video Production'],
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
    heroImage: amusemacMedia.projects.yadavMeasurement,
    gallery: [
      {
        url: amusemacMedia.projects.yadavMeasurement,
        caption: 'Yadav Measurement corporate film on-location production',
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
    heroImage: amusemacMedia.projects.pataaApp,
    gallery: [
      {
        url: amusemacMedia.projects.pataaApp,
        caption: 'Pataa App — Address Made Simple campaign frame',
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
    featured: true,
    horizontalFeature: true
  },
  {
    id: '07',
    slug: 'streetorigins-energy',
    title: 'STREETORIGINS AD',
    subtitle: 'Morgue & Unapologetic Energy',
    category: 'Advertisement',
    client: 'StreetOrigins',
    year: '2023',
    aspectRatio: '16:9 Commercial',
    location: 'Mumbai',
    logline: 'High-octane urban energy and unapologetic visual attitude.',
    synopsis: 'An electric, raw commercial film created for StreetOrigins celebrating youth streetwear, music, and street authenticity.',
    heroImage: amusemacMedia.projects.streetOrigins,
    gallery: [
      {
        url: amusemacMedia.projects.streetOrigins,
        caption: 'StreetOrigins visual campaign frame',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#FF0055', '#121210', '#F8F5EE', '#7F8C8D', '#D89B37'],
    credits: [
      { role: 'Client', name: 'StreetOrigins' },
      { role: 'Production', name: 'Amusemac Studio' }
    ],
    disciplines: ['Advertisement', 'Creative Direction', 'Visuals'],
    featured: false,
    horizontalFeature: true
  },
  {
    id: '08',
    slug: 'axis-mutual-fund-sip',
    title: 'AXIS MUTUAL FUND',
    subtitle: 'Plan Smart with Axis MF // #InvestEasy #SIPNow',
    category: 'Advertisement',
    client: 'Axis Mutual Fund',
    year: '2023',
    aspectRatio: '16:9 Commercial',
    location: 'Mumbai',
    logline: 'Multiple Goals? Multiple SIPs — Making financial wisdom approachable through clean storytelling.',
    synopsis: 'A digital and commercial campaign clarifying micro-investing and index funds for modern Indian investors.',
    heroImage: amusemacMedia.projects.axisMutualFund,
    gallery: [
      {
        url: amusemacMedia.projects.axisMutualFund,
        caption: 'Axis MF — Multiple Goals? Multiple SIPs campaign',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#97144D', '#121210', '#F3EDE2', '#ED1C24', '#D89B37'],
    credits: [
      { role: 'Client', name: 'Axis Mutual Fund' },
      { role: 'Production', name: 'Amusemac Studio' }
    ],
    disciplines: ['Advertisement', 'Video Production'],
    featured: false,
    horizontalFeature: true
  }
];