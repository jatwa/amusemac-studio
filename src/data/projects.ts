import { amusemacMedia } from '@/lib/media';
import { amusemacVideos } from '@/lib/videos';

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
  logline?: string;
  synopsis?: string;
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
  embedUrl?: string;
  hasVerifiedVideo: boolean;
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
    aspectRatio: '16:9 Commercial',
    logline: '“Sach, Kareeb Se Dikhta Hai” — Grounded commercial campaign featuring Pankaj Tripathi.',
    synopsis: 'Dainik Bhaskar commercial campaign featuring Pankaj Tripathi highlighting observational realism and human connection.',
    heroImage: amusemacMedia.projects.dainikBhaskar,
    videoUrl: amusemacVideos['dainik-bhaskar-pankaj-tripathi']?.url,
    embedUrl: amusemacVideos['dainik-bhaskar-pankaj-tripathi']?.embedUrl,
    hasVerifiedVideo: true,
    gallery: [
      {
        url: amusemacMedia.projects.dainikBhaskar,
        caption: 'Dainik Bhaskar campaign frame featuring Pankaj Tripathi',
        aspect: 'cinema',
        type: 'still'
      },
      {
        url: amusemacMedia.services.brandCampaign,
        caption: 'Lighting setup and crew on production set',
        aspect: 'portrait',
        type: 'lighting'
      }
    ],
    palette: ['#121210', '#D89B37', '#8F4832', '#F3EDE2', '#3D4F5D'],
    credits: [
      { role: 'Production House', name: 'Amusemac Studio' },
      { role: 'Cast', name: 'Pankaj Tripathi' },
      { role: 'Client', name: 'Dainik Bhaskar' },
      { role: 'Source', name: 'amusemacstudio.in' }
    ],
    disciplines: ['Advertisement', 'Video Production', 'Art Direction'],
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
    aspectRatio: '16:9 Commercial',
    logline: 'Britannia 50-50 4th Umpire commercial spot (Kite & Train Seat).',
    synopsis: 'Commercial campaign for Britannia 50-50 bringing everyday Indian humor and cricket passion to life.',
    heroImage: amusemacMedia.projects.britannia5050,
    videoUrl: amusemacVideos['britannia-5050-4th-umpire']?.url,
    embedUrl: amusemacVideos['britannia-5050-4th-umpire']?.embedUrl,
    hasVerifiedVideo: true,
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
      { role: 'Campaign', name: '50-50 4th Umpire' },
      { role: 'Source', name: 'amusemacstudio.in' }
    ],
    disciplines: ['Advertisement', 'Production Design', 'Direction'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '03',
    slug: 'god-vulture-and-human',
    title: 'GOD VULTURE AND HUMAN',
    subtitle: 'Dedicated to Organ Transplant Coordinators (2023)',
    category: 'Documentaries',
    aspectRatio: '16:9 Documentary',
    logline: 'God Vulture and Human — Awarded Best Documentary of 2023 at National Film Awards.',
    synopsis: 'A documentary exploring organ donation and the emotional realities navigated by transplant coordinators in India.',
    heroImage: amusemacMedia.projects.documentaries,
    videoUrl: amusemacVideos['god-vulture-and-human']?.url,
    embedUrl: amusemacVideos['god-vulture-and-human']?.embedUrl,
    hasVerifiedVideo: true,
    gallery: [
      {
        url: amusemacMedia.projects.documentaries,
        caption: 'God Vulture and Human — Documentary frame',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#1C241D', '#3F4E3A', '#8F4832', '#D9CDBC', '#D89B37'],
    credits: [
      { role: 'Production', name: 'Amusemac Studio' },
      { role: 'Recognition', name: 'National Film Awards — Best Documentary (2023)' },
      { role: 'Theme', name: 'Organ Donation & Healthcare Coordinators' },
      { role: 'Source', name: 'amusemacstudio.in' }
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
    client: 'Tata Salt',
    aspectRatio: '16:9 Commercial',
    logline: 'Namak ka har narangi pack Tata Namak nahi hota! Sirf asli Tata Namak apnaiye.',
    synopsis: 'Tata Salt television and digital commercial campaign reinforcing consumer awareness for genuine packaging.',
    heroImage: amusemacMedia.projects.tataSalt,
    videoUrl: amusemacVideos['tata-salt-har-narangi-pack']?.url,
    embedUrl: amusemacVideos['tata-salt-har-narangi-pack']?.embedUrl,
    hasVerifiedVideo: true,
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
      { role: 'Production', name: 'Amusemac Studio' },
      { role: 'Source', name: 'amusemacstudio.in' }
    ],
    disciplines: ['Advertisement', 'Set Design & Art Direction', 'Video Production'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '05',
    slug: 'yadav-measurement-corporate',
    title: 'YADAV MEASUREMENT & MOBILAB',
    subtitle: 'Corporate Film // Yadav Measurement Pvt. Ltd',
    category: 'Corporate Films',
    client: 'Yadav Measurement Pvt. Ltd',
    aspectRatio: '16:9 Corporate',
    logline: 'Watch how Amusemac Studio turns concepts into captivating visuals for MobiLab by Yadav Measurement.',
    synopsis: 'Step behind the curtains with Amusemac Studio as we capture the creativity and craft that goes into making a corporate film for Yadav Measurement Pvt. Ltd.',
    heroImage: amusemacMedia.projects.yadavMeasurement,
    videoUrl: amusemacVideos['yadav-measurement-corporate-film']?.url,
    embedUrl: amusemacVideos['yadav-measurement-corporate-film']?.embedUrl,
    hasVerifiedVideo: true,
    gallery: [
      {
        url: amusemacMedia.projects.yadavMeasurement,
        caption: 'Yadav Measurement & MobiLab corporate production frame',
        aspect: 'cinema',
        type: 'set'
      }
    ],
    palette: ['#121210', '#5A5B5E', '#D89B37', '#F3EDE2', '#3D4F5D'],
    credits: [
      { role: 'Client', name: 'Yadav Measurement Pvt. Ltd' },
      { role: 'Directed By', name: 'Sreyansha Jain' },
      { role: 'Executive Producer', name: 'Kapil Hanwat' },
      { role: 'Producer', name: 'Kuldeep Jatwa' },
      { role: 'Creative Director', name: 'Kalpita Mandrekar' },
      { role: 'Source', name: 'amusemacstudio.in' }
    ],
    disciplines: ['Corporate Films', 'Direction', 'Production'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '06',
    slug: 'uppercase-akasa-air',
    title: 'UPPERCASE × AKASA AIR',
    subtitle: 'Sustainable Cabin Gear for Crew',
    category: 'Corporate Films',
    client: 'uppercase / Akasa Air',
    aspectRatio: '16:9 Commercial & Corporate',
    logline: 'uppercase partnered with Akasa Air to create custom-designed, eco-friendly cabin luggage.',
    synopsis: 'Crafted using RCS-certified recycled materials and developed in close collaboration with Akasa’s in-flight crew.',
    heroImage: amusemacMedia.services.clothAndProductionDesign,
    videoUrl: amusemacVideos['uppercase-akasa-air']?.url,
    embedUrl: amusemacVideos['uppercase-akasa-air']?.embedUrl,
    hasVerifiedVideo: true,
    gallery: [
      {
        url: amusemacMedia.services.clothAndProductionDesign,
        caption: 'Sustainable textile and material curation for uppercase × Akasa Air',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#FF6B35', '#004E89', '#1A1A1A', '#F7F7F7', '#D89B37'],
    credits: [
      { role: 'Brand Partners', name: 'uppercase & Akasa Air' },
      { role: 'Production', name: 'Amusemac Studio' },
      { role: 'Source', name: 'amusemacstudio.in' }
    ],
    disciplines: ['Corporate Films', 'Production Design', 'Branding'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '07',
    slug: 'pataa-mad-over-address',
    title: 'PATAA APP',
    subtitle: 'Mad Over Address // Address Made Simple',
    category: 'Advertisement',
    client: 'Pataa Navigation',
    aspectRatio: '16:9 Commercial',
    logline: 'Explaining your long and complex address made easy with Pataa.',
    synopsis: 'Ad series for Pataa navigation featuring “Address By Paanwala”, “Baraat In A Funeral”, and “North Meets South”.',
    heroImage: amusemacMedia.projects.pataaApp,
    videoUrl: amusemacVideos['pataa-app-mad-over-address']?.url,
    embedUrl: amusemacVideos['pataa-app-mad-over-address']?.embedUrl,
    hasVerifiedVideo: true,
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
      { role: 'Campaign', name: 'Mad Over Address' },
      { role: 'Source', name: 'amusemacstudio.in' }
    ],
    disciplines: ['Advertisement', 'Creative Direction', 'Video Production'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '08',
    slug: 'apml-asli-nakli',
    title: 'AGARWAL PACKERS AND MOVERS (APML)',
    subtitle: 'Asli Nakli // StoreKar Campaign',
    category: 'Advertisement',
    client: 'Agarwal Packers and Movers Ltd',
    aspectRatio: '16:9 Commercial',
    logline: 'APML Asli Nakli & StoreKar self-storage commercial series.',
    synopsis: 'Commercials created for Agarwal Packers and Movers Ltd emphasizing authentic moving services and StoreKar storage.',
    heroImage: amusemacMedia.projects.apmlAsliNakli,
    videoUrl: amusemacVideos['apml-asli-nakli']?.url,
    embedUrl: amusemacVideos['apml-asli-nakli']?.embedUrl,
    hasVerifiedVideo: true,
    gallery: [
      {
        url: amusemacMedia.projects.apmlAsliNakli,
        caption: 'APML Asli Nakli commercial still',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#C0392B', '#2C3E50', '#F3EDE2', '#D89B37', '#121210'],
    credits: [
      { role: 'Client', name: 'Agarwal Packers and Movers Ltd' },
      { role: 'Director', name: 'Deep Vyas' },
      { role: 'DOP', name: 'Anurag Solanki' },
      { role: 'Production Designer', name: 'Rinku' },
      { role: 'Production House', name: 'Useful Garbage Creations / Amusemac Studio' },
      { role: 'Source', name: 'amusemacstudio.in' }
    ],
    disciplines: ['Advertisement', 'Production Design', 'Cinematography'],
    featured: false,
    horizontalFeature: true
  },
  {
    id: '09',
    slug: 'axis-mutual-fund-sip',
    title: 'AXIS MUTUAL FUND',
    subtitle: '#SIPNow // #InvestEasy Campaign',
    category: 'Advertisement',
    client: 'Axis Mutual Fund',
    aspectRatio: '16:9 Commercial',
    logline: 'Should you start your SIP when markets are down? Axis MF #SIPNow.',
    synopsis: 'Axis Mutual Fund commercial campaign explaining index funds and disciplined SIP planning for multiple goals.',
    heroImage: amusemacMedia.projects.axisMutualFund,
    videoUrl: amusemacVideos['axis-mutual-fund-sip']?.url,
    embedUrl: amusemacVideos['axis-mutual-fund-sip']?.embedUrl,
    hasVerifiedVideo: true,
    gallery: [
      {
        url: amusemacMedia.projects.axisMutualFund,
        caption: 'Axis MF — Multiple Goals? Multiple SIPs campaign still',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#97144D', '#121210', '#F3EDE2', '#ED1C24', '#D89B37'],
    credits: [
      { role: 'Client', name: 'Axis Mutual Fund' },
      { role: 'Production', name: 'Amusemac Studio' },
      { role: 'Source', name: 'amusemacstudio.in' }
    ],
    disciplines: ['Advertisement', 'Video Production'],
    featured: false,
    horizontalFeature: true
  },
  {
    id: '10',
    slug: 'never-kiss-your-best-friend-s2',
    title: 'NEVER KISS YOUR BEST FRIEND S2',
    subtitle: 'ZEE5 Original Series',
    category: 'Film & Webseries',
    client: 'ZEE5',
    aspectRatio: '16:9 Webseries',
    logline: 'Never Kiss Your Best Friend S2 Official Trailer | A ZEE5 Original Webseries.',
    synopsis: 'Tanie and Sumer reunite coincidentally after years of separation as they end up working together in London.',
    heroImage: amusemacMedia.projects.filmAndWebseries,
    videoUrl: amusemacVideos['never-kiss-your-best-friend-s2']?.url,
    embedUrl: amusemacVideos['never-kiss-your-best-friend-s2']?.embedUrl,
    hasVerifiedVideo: true,
    gallery: [
      {
        url: amusemacMedia.projects.filmAndWebseries,
        caption: 'Never Kiss Your Best Friend S2 — Project keyframe',
        aspect: 'cinema',
        type: 'still'
      }
    ],
    palette: ['#E74C3C', '#2C3E50', '#F8F5EE', '#D89B37', '#121210'],
    credits: [
      { role: 'Platform', name: 'ZEE5' },
      { role: 'Director', name: 'Harsh Dedhia' },
      { role: 'Star Cast', name: 'Anya Singh, Nakuul Mehta, Karan Wahi, Sarah Jane Dias' },
      { role: 'Production Synergy', name: 'Amusemac Studio Team' },
      { role: 'Source', name: 'amusemacstudio.in' }
    ],
    disciplines: ['Film & Webseries', 'Production Design', 'Art Direction'],
    featured: false,
    horizontalFeature: true
  },
  {
    id: '11',
    slug: 'streetorigins-energy',
    title: 'STREETORIGINS',
    subtitle: 'Streetwear & Creative Campaign',
    category: 'Advertisement',
    client: 'StreetOrigins',
    aspectRatio: '16:9 Visual',
    logline: 'Visual creative campaign for StreetOrigins.',
    synopsis: 'Creative film and visual series featured on Amusemac Studio.',
    heroImage: amusemacMedia.projects.streetOrigins,
    videoUrl: undefined,
    embedUrl: undefined,
    hasVerifiedVideo: false,
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
      { role: 'Production House', name: 'Amusemac Studio' },
      { role: 'Source', name: 'amusemacstudio.in' }
    ],
    disciplines: ['Advertisement', 'Creative Direction'],
    featured: false,
    horizontalFeature: true
  }
];
