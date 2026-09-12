export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Feature Film' | 'Short Film' | 'Documentary' | 'Commercial' | 'Music Video' | 'Production Design';
  year: string;
  aspectRatio: string;
  duration?: string;
  client?: string;
  location: string;
  status?: string;
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
    slug: 'bandhishein',
    title: 'BANDHISHEIN',
    subtitle: 'The Music That Echoes Behind Stone Walls',
    category: 'Feature Film',
    year: '2024',
    aspectRatio: '2.39:1 Anamorphic',
    duration: '118 MIN',
    location: 'Rajasthan / Mehboob Studios Mumbai',
    status: 'Festival Circuit',
    logline: 'In the twilight of 19th-century royal Rajasthan, a rebellious classical vocalist confronts the rigid orthodoxy of her court.',
    synopsis: 'Bandhishein is a sweeping period drama capturing the tension between tradition and self-emancipation. Amusemac Studio executed end-to-end production design, set construction across 4 soundstages in Mumbai, and principal photography in the sand dunes of Khuri.',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1400&auto=format&fit=crop',
        caption: 'The Royal Court Soundstage — 1:1 scale courtyard build at Film City Mumbai',
        type: 'set',
        aspect: 'cinema'
      },
      {
        url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
        caption: 'Atmospheric natural oil-lamp lighting studies for night sequence',
        type: 'lighting',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1400&auto=format&fit=crop',
        caption: 'Production design elevation blueprint: Jharokha window lattice carpentry',
        type: 'sketch',
        aspect: 'standard'
      },
      {
        url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1400&auto=format&fit=crop',
        caption: 'Principal photography — Anamorphic lens 40mm T2.0 at magic hour',
        type: 'still',
        aspect: 'cinema'
      }
    ],
    palette: ['#0D0D0C', '#8C4A32', '#D89B37', '#E2D3B8', '#384149'],
    credits: [
      { role: 'Production House', name: 'Amusemac Studio' },
      { role: 'Director', name: 'Kabir Varma' },
      { role: 'Production Designer', name: 'Amusemac Art Dept / S. Kulkarni' },
      { role: 'Cinematographer', name: 'R. Sen Gupta (ISC)' },
      { role: 'Colorist', name: 'N. Fernandes' }
    ],
    disciplines: ['Production Design', 'Art Direction', 'Film Production', 'Color Grading'],
    featured: true,
    horizontalFeature: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-man-in-front-of-a-fire-41557-large.mp4',
    quote: {
      text: 'Amusemac didn’t just build a set; they constructed an acoustic and tactile world where every stone breathed history.',
      author: 'Kabir Varma, Director'
    }
  },
  {
    id: '02',
    slug: 'mirage',
    title: 'MIRAGE',
    subtitle: 'A Neo-Noir Psychological Odyssey',
    category: 'Short Film',
    year: '2024',
    aspectRatio: '1.33:1 Academy',
    duration: '24 MIN',
    location: 'South Mumbai Docks & Byculla',
    status: 'Official Selection — Clermont-Ferrand',
    logline: 'An insomniac radio archivist in midnight Mumbai discovers encrypted voice transmissions buried in obsolete magnetic tapes.',
    synopsis: 'Shot entirely on vintage 35mm film in South Mumbai during the monsoon. Mirage investigates analog obsolescence, memory degradation, and nocturnal urban isolation.',
    heroImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1400&auto=format&fit=crop',
        caption: 'The Tape Archive — Soundstage custom console with authentic 1974 Studer decks',
        type: 'set',
        aspect: 'academy'
      },
      {
        url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop',
        caption: 'Rain rig setup outside Ballard Estate heritage portico',
        type: 'still',
        aspect: 'cinema'
      },
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
        caption: '35mm optical grain test and monochromatic density curve',
        type: 'lighting',
        aspect: 'portrait'
      }
    ],
    palette: ['#080808', '#202B38', '#5E7083', '#C9D4DF', '#A45D3B'],
    credits: [
      { role: 'Director & Writer', name: 'Devashish P.' },
      { role: 'Creative Direction', name: 'Amusemac Studio' },
      { role: 'Sound Design', name: 'A. Merchant' },
      { role: 'Lead Cast', name: 'Adil Hussain, Tillotama Shome' }
    ],
    disciplines: ['Creative Direction', 'Film Production', 'Sound Design', 'Post Production'],
    featured: true,
    horizontalFeature: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-through-the-city-at-night-41559-large.mp4',
    quote: {
      text: 'A claustrophobic masterpiece of atmospheric dread and tactile sound design.',
      author: 'Film Companion'
    }
  },
  {
    id: '03',
    slug: 'nettle-nagaland',
    title: 'NETTLE / NAGALAND',
    subtitle: 'Wild Fiber, Sacred Stitches',
    category: 'Documentary',
    year: '2024',
    aspectRatio: '16:9 Document',
    duration: '46 MIN',
    location: 'Khonoma & Dzülke, Nagaland',
    status: 'Doc Edge Official Selection',
    logline: 'High in the mist-shrouded hills of Nagaland, three Angami elders harvest stinging nettles to weave textiles that have resisted five centuries of change.',
    synopsis: 'A lyrical, observational documentary shot with minimal crew over 45 days. We embedded in Dzülke village, capturing the tactile journey of harvesting raw stinging nettle, natural dyeing with oak bark, and the sacred rhythmic loom.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1400&auto=format&fit=crop',
        caption: 'The Misty Ridge — Dawn harvesting at 2,400 meters altitude',
        type: 'still',
        aspect: 'cinema'
      },
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
        caption: 'Hands of Angami master weaver Sano Nakhro',
        type: 'still',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1400&auto=format&fit=crop',
        caption: 'Location sound recording in dense rainforest canopies',
        type: 'lighting',
        aspect: 'standard'
      }
    ],
    palette: ['#1C241D', '#3F4E3A', '#8B7355', '#D9CDBC', '#C49746'],
    credits: [
      { role: 'Directors', name: 'Zoya Akhtar (Assoc.) & Karan J.' },
      { role: 'Production & Field Ops', name: 'Amusemac Studio' },
      { role: 'Field Recordist', name: 'T. Jamir' },
      { role: 'Colorist', name: 'Amusemac Labs' }
    ],
    disciplines: ['Documentaries', 'Visual Development', 'Post Production'],
    featured: true,
    horizontalFeature: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-fog-over-the-mountains-41551-large.mp4',
    quote: {
      text: 'Cinema that listens before it shoots. A triumph of observational sensitivity.',
      author: 'Kolkata International DocFest'
    }
  },
  {
    id: '04',
    slug: 'the-monsoon-project',
    title: 'THE MONSOON PROJECT',
    subtitle: 'When The Sky Falls On Bombay',
    category: 'Commercial',
    year: '2024',
    aspectRatio: '2.39:1 Anamorphic',
    client: 'Royal Enfield / Outdoor Heritage',
    location: 'Western Ghats & Mumbai Suburbs',
    logline: 'A cinematic tribute to the raw, untamed fury and poetry of the Indian monsoon through the eyes of midnight riders.',
    synopsis: 'A high-energy, sensory commercial film commissioned to capture the spirit of riding through unrelenting torrential rains. Amusemac deployed waterproof camera rigs, underwater high-speed lenses, and bespoke lighting flares.',
    heroImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1400&auto=format&fit=crop',
        caption: 'High-speed 500fps water droplet collision with motorcycle engine fin',
        type: 'still',
        aspect: 'cinema'
      },
      {
        url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
        caption: 'Custom rigged chase car through Malshej Ghat passes',
        type: 'set',
        aspect: 'standard'
      }
    ],
    palette: ['#0A0F14', '#2C3E50', '#85929E', '#EAECEE', '#E67E22'],
    credits: [
      { role: 'Agency / Studio', name: 'Amusemac Studio' },
      { role: 'Director', name: 'Vikramjit Roy' },
      { role: 'Creative Director', name: 'Amusemac' },
      { role: 'VFX & Clean-up', name: 'Amusemac Post' }
    ],
    disciplines: ['Advertising Films', 'Creative Direction', 'Post Production'],
    featured: true,
    horizontalFeature: true
  },
  {
    id: '05',
    slug: 'gully-dreams-raftaar',
    title: 'GULLY DREAMS',
    subtitle: 'Kinetic Street Realism & Neon Verse',
    category: 'Music Video',
    year: '2023',
    aspectRatio: '16:9 Raw',
    client: 'Mass Appeal India / Def Jam',
    location: 'Dharavi & Mazgaon Docks, Mumbai',
    logline: 'A 4-minute hyper-stylized continuous one-take illusion across rooftops, scrap yards, and neon-lit chai stalls.',
    synopsis: 'Combining handheld Ronin 4D tracking, custom neon lighting installations, and seamless invisible cuts, Gully Dreams redefines the visual grammar of Indian hip-hop cinema.',
    heroImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1400&auto=format&fit=crop',
        caption: 'Production art: Custom neon signage and scrap-metal stage architecture',
        type: 'sketch',
        aspect: 'standard'
      },
      {
        url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1400&auto=format&fit=crop',
        caption: 'One-take wire-cam pass across the Mazgaon dry docks',
        type: 'still',
        aspect: 'cinema'
      }
    ],
    palette: ['#07080D', '#D63031', '#0984E3', '#FDCB6E', '#DFE6E9'],
    credits: [
      { role: 'Direction & Art', name: 'Amusemac Studio' },
      { role: 'DP', name: 'Manish Rawat' },
      { role: 'Steadicam Operator', name: 'Sunil K.' }
    ],
    disciplines: ['Music Videos', 'Production Design', 'Art Direction'],
    featured: true,
    horizontalFeature: false
  },
  {
    id: '06',
    slug: 'the-architects-memory',
    title: 'THE ARCHITECT’S MEMORY',
    subtitle: 'Brutalist Set Construction & Spatial Illusion',
    category: 'Production Design',
    year: '2023',
    aspectRatio: '2.39:1 Anamorphic',
    location: 'Studio Stage 3, Film City Mumbai',
    logline: 'An ambitious full-scale interior and exterior build recreating a 1974 modernist Mumbai penthouse with operable sliding concrete louvers.',
    synopsis: 'Amusemac Studio drafted over 120 architectural sheets and led a 60-person carpenter and scenic artist crew to construct this monolithic 4,500 sq.ft. environment within 18 days.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop',
        caption: 'Completed penthouse living space with distressed exposed concrete patina',
        type: 'set',
        aspect: 'cinema'
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
        caption: '1:20 scale timber architectural maquette built for camera sightlines',
        type: 'sketch',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?q=80&w=1400&auto=format&fit=crop',
        caption: 'Day 11 soundstage steel trussing and modular wall assembly',
        type: 'set',
        aspect: 'standard'
      }
    ],
    palette: ['#1E1F22', '#5A5B5E', '#9E9A93', '#D6CFC7', '#93583C'],
    credits: [
      { role: 'Production Design Studio', name: 'Amusemac Studio' },
      { role: 'Supervising Art Director', name: 'Amusemac Design Lab' },
      { role: 'Lead Scenic Artist', name: 'R. Waghmare' },
      { role: 'Set Decorator', name: 'Priya Sharma' }
    ],
    disciplines: ['Production Design', 'Art Direction', 'Visual Development'],
    featured: true,
    horizontalFeature: true,
    quote: {
      text: 'The architecture felt alive. You forgot you were standing inside a warehouse in Goregaon.',
      author: 'Architecture & Cinema Journal'
    }
  },
  {
    id: '07',
    slug: 'kaavla',
    title: 'KAAVLA (THE CROW)',
    subtitle: 'Coastal Konkan Folklore & Magical Realism',
    category: 'Short Film',
    year: '2023',
    aspectRatio: '2.39:1 Anamorphic',
    duration: '18 MIN',
    location: 'Vengurla, Konkan Coast',
    logline: 'An aging lighthouse keeper begins receiving ominous brass keys carried across the Arabian Sea by a flock of crows.',
    synopsis: 'A folklore mystery anchored by traditional coastal architecture, red laterite stone houses, and salt-weathered maritime props designed by Amusemac.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1400&auto=format&fit=crop',
        caption: 'Lighthouse lantern room location build overlooking rocky surf',
        type: 'still',
        aspect: 'cinema'
      }
    ],
    palette: ['#0B131E', '#3D4F5D', '#9AA7B1', '#E3A857', '#6E2C1A'],
    credits: [
      { role: 'Studio', name: 'Amusemac Studio' },
      { role: 'Director', name: 'Samir Joshi' }
    ],
    disciplines: ['Film Production', 'Production Design', 'Art Direction'],
    featured: false,
    horizontalFeature: true
  }
];
