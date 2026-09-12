import { amusemacMedia } from '@/lib/media';

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
    image: amusemacMedia.services.scriptAndPitchDevelopment
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
    image: amusemacMedia.services.brandCampaign
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
    image: amusemacMedia.services.clothAndProductionDesign
  },
  {
    id: 'film-production',
    number: '04',
    name: 'FILM & CONTENT PRODUCTION',
    shortTag: 'CINEMATIC CRAFT & DETAIL',
    description: 'Full-spectrum production for films, commercials, and digital features with industry-standard equipment and meticulous on-set discipline.',
    deliverables: [
      'Line & creative production management',
      'Equipment & camera package logistics',
      'Location scouting across India',
      'Experienced department heads & crew'
    ],
    image: amusemacMedia.services.filmAndContentProduction
  },
  {
    id: 'sync-sound',
    number: '05',
    name: 'SYNC SOUND & AUDIO MIXING',
    shortTag: 'FTII TRAINED SOUND CRAFT',
    description: 'Sound isn’t background — it’s the soul of the scene. Expert sync sound recording on set and rich acoustic layering that resonates with the audience.',
    deliverables: [
      'On-set sync sound recording',
      'Dialogue editing & acoustic restoration',
      'Foley & atmospheric sound design',
      'Surround & broadcast audio mixing'
    ],
    image: amusemacMedia.services.filmAndContentProduction
  },
  {
    id: 'corporate-films',
    number: '06',
    name: 'CORPORATE FILMS',
    shortTag: 'BOARDROOM TO BIG SCREEN',
    description: 'Turning boardroom visions into screen-worthy narratives. We capture the chaos, innovation, and human drive behind industry leaders.',
    deliverables: [
      'Brand origin & corporate heritage films',
      'Industrial process & technology showcases',
      'Executive & workforce narratives',
      'Product launch & investor presentation films'
    ],
    image: amusemacMedia.projects.yadavMeasurement
  },
  {
    id: 'documentaries',
    number: '07',
    name: 'DOCUMENTARIES',
    shortTag: 'RAW TRUTH & HUMANITY',
    description: 'Deeply observational non-fiction exploring cultural traditions, unsung heroes, social realities, and stories that deserve to be remembered.',
    deliverables: [
      'Investigative field research',
      'Observational documentary shooting across India',
      'Archival research & humanistic interviews',
      'Impact & festival strategy'
    ],
    image: amusemacMedia.projects.documentaries
  },
  {
    id: 'design-branding',
    number: '08',
    name: 'DESIGN & CREATIVE BRANDING',
    shortTag: 'IDENTITIES BUILT TO ENDURE',
    description: 'We design identities and creative systems that aren’t just eye-catching, but strategically built to resonate, differentiate, and endure.',
    deliverables: [
      'Brand identity design & visual language creation',
      'Logo, typography & graphic systems',
      'Marketing collaterals aligning with brand voice',
      'Packaging design that tells its own story'
    ],
    image: amusemacMedia.services.designAndCreative
  },
  {
    id: 'experiential-activations',
    number: '09',
    name: 'EXPERIENTIAL & ACTIVATIONS',
    shortTag: 'IMMERSIVE REAL-WORLD SPACES',
    description: 'Live experiences, product launches, and on-ground activations that immerse audiences, amplify brand stories, and leave memories that matter.',
    deliverables: [
      'Product launches with cinematic flair',
      'Direct consumer brand activations',
      'Immersive installations & interactive spaces',
      'End-to-end event planning & execution'
    ],
    image: amusemacMedia.services.experientialAndActivations
  },
  {
    id: 'digital-social',
    number: '10',
    name: 'DIGITAL & SOCIAL STORYTELLING',
    shortTag: 'PLATFORM-FIRST CONTENT',
    description: 'Platform-first content that cuts through the clutter, captures attention, and builds authentic communities around your brand.',
    deliverables: [
      'Platform-optimized content for Instagram, YouTube & LinkedIn',
      'Short-form reels & motion graphics',
      'Social campaigns that engage and convert',
      'Analytics-driven reach amplification'
    ],
    image: amusemacMedia.services.digitalAndSocialStorytelling
  }
];