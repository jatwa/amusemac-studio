export interface Discipline {
  id: string;
  number: string;
  name: string;
  shortTag: string;
  description: string;
  deliverables: string[];
  image: string;
}

export const disciplines: Discipline[] = [
  {
    id: 'script-to-screen',
    number: '01',
    name: 'SCRIPT TO SCREEN',
    shortTag: 'CONCEPT TO FINAL CUT',
    description: 'Every great production starts on paper. We help transform your raw idea into a compelling script, rich character worlds, and pitch decks that get greenlit.',
    deliverables: [
      'Refining concepts into structured stories',
      'Developing characters & worlds that feel alive',
      'Creating pitch decks for investors & platforms',
      'Balancing creative vision with market viability'
    ],
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'advertisements',
    number: '02',
    name: 'ADVERTISEMENT & TVC',
    shortTag: 'STORIES THAT SELL WITHOUT SHOUTING',
    description: 'High-quality commercials and brand stories crafted with cinematic precision, grit, and emotional nuance that stop the scroll.',
    deliverables: [
      'Ad films & brand commercials that leave lasting impressions',
      'Concept development & visual treatments',
      'Star & celebrity talent direction',
      'High-speed cinematography & broadcast mastering'
    ],
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'production-design',
    number: '03',
    name: 'SET DESIGN & ART DIRECTION',
    shortTag: 'PHYSICAL WORLD-BUILDING',
    description: 'We construct physical narrative universes. Every frame we build balances art direction, detail, and emotion—because style only matters if it serves the story.',
    deliverables: [
      'Set construction & soundstage builds',
      'Period authenticity & textural scenic art',
      'Hero prop sourcing & custom fabrication',
      'Atmospheric set dressing & practical lighting'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'sync-sound',
    number: '04',
    name: 'SYNC SOUND & AUDIO MIXING',
    shortTag: 'FTII TRAINED SOUND CRAFT',
    description: 'Sound isn’t background — it’s the soul of the scene. Expert sync sound recording on set and rich acoustic layering that resonates with the audience.',
    deliverables: [
      'On-set sync sound recording',
      'Dialogue editing & acoustic restoration',
      'Foley & atmospheric sound design',
      'Surround & broadcast audio mixing'
    ],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'corporate-films',
    number: '05',
    name: 'CORPORATE FILMS',
    shortTag: 'BOARDROOM TO BIG SCREEN',
    description: 'Turning boardroom visions into screen-worthy narratives. We capture the chaos, innovation, and human drive behind industry leaders.',
    deliverables: [
      'Brand origin & corporate heritage films',
      'Industrial process & technology showcases',
      'Executive & workforce narratives',
      'Product launch & investor presentation films'
    ],
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'documentaries',
    number: '06',
    name: 'DOCUMENTARIES',
    shortTag: 'RAW TRUTH & HUMANITY',
    description: 'Deeply observational non-fiction exploring cultural traditions, unsung heroes, social realities, and stories that deserve to be remembered.',
    deliverables: [
      'Investigative field research',
      'Observational documentary shooting across India',
      'Archival research & humanistic interviews',
      'Impact & festival strategy'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'film-webseries',
    number: '07',
    name: 'FILMS & WEBSERIES',
    shortTag: 'LONG-FORM NARRATIVES',
    description: 'End-to-end creative and line production for narrative feature films, digital shorts, and episodic streaming series.',
    deliverables: [
      'Complete pre-to-post production support',
      'Location scouting across India',
      'Technical crew & equipment logistics',
      'DCI cinema & OTT platform compliance'
    ],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'music-videos',
    number: '08',
    name: 'MUSIC VIDEOS',
    shortTag: 'RHYTHM & VISUAL ARTISTRY',
    description: 'Music videos that blend rhythm, narrative, and visual artistry for independent artists and record labels.',
    deliverables: [
      'Visual treatment & conceptual choreography',
      'Cinematic lighting installations',
      'Rhythmic editorial pacing & stylized grading',
      'Multi-platform release formats'
    ],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'design-branding',
    number: '09',
    name: 'DESIGN & CREATIVE BRANDING',
    shortTag: 'IDENTITIES BUILT TO ENDURE',
    description: 'We design identities and creative systems that aren’t just eye-catching, but strategically built to resonate, differentiate, and endure.',
    deliverables: [
      'Brand identity design & visual language creation',
      'Logo, typography & graphic systems',
      'Marketing collaterals aligning with brand voice',
      'Packaging design that tells its own story'
    ],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'experiential-activations',
    number: '10',
    name: 'EXPERIENTIAL & ACTIVATIONS',
    shortTag: 'IMMERSIVE REAL-WORLD SPACES',
    description: 'Live experiences, product launches, and on-ground activations that immerse audiences, amplify brand stories, and leave memories that matter.',
    deliverables: [
      'Product launches with cinematic flair',
      'Direct consumer brand activations',
      'Immersive installations & interactive spaces',
      'End-to-end event planning & execution'
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'digital-social',
    number: '11',
    name: 'DIGITAL & SOCIAL STORYTELLING',
    shortTag: 'PLATFORM-FIRST CONTENT',
    description: 'Platform-first content that cuts through the clutter, captures attention, and builds authentic communities around your brand.',
    deliverables: [
      'Platform-optimized content for Instagram, YouTube & LinkedIn',
      'Short-form reels & motion graphics',
      'Social campaigns that engage and convert',
      'Analytics-driven reach amplification'
    ],
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop'
  }
];