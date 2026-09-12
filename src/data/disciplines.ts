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
    id: 'film-production',
    number: '01',
    name: 'FILM PRODUCTION',
    shortTag: 'FEATURE & INDIE CINEMA',
    description: 'Full-spectrum line and creative production for feature films, episodic series, and independent cinema from pre-production through final delivery.',
    deliverables: ['Creative & Line Production', 'Location Scouting & Permissions', 'Crew Roster & Gear Logistics', 'Soundstage Management'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'production-design',
    number: '02',
    name: 'PRODUCTION DESIGN',
    shortTag: 'PHYSICAL WORLD-BUILDING',
    description: 'We construct physical narrative universes. Soundstage architectural builds, period authenticity, atmospheric aging, and cinematic spatial geometry.',
    deliverables: ['Set Construction & Architecture', 'Atmospheric Texturing & Scenic Art', 'Prop Sourcing & Custom Fabrication', 'Spatial Pre-visualization'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'art-direction',
    number: '03',
    name: 'ART DIRECTION',
    shortTag: 'VISUAL GRAMMAR & DETAILS',
    description: 'Crafting the exact color palette, set dressing, typography, and tactile props that define the visual character of every single frame.',
    deliverables: ['Color Scripts & Palettes', 'Set Dressing & Dressing Crews', 'Hero Props & Period Ephemera', 'On-Set Art Supervision'],
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'creative-direction',
    number: '04',
    name: 'CREATIVE DIRECTION',
    shortTag: 'STORY ARCHITECTURE',
    description: 'Guiding the overarching vision, tone, and visual storytelling for films, brands, and experiential platforms.',
    deliverables: ['Concept Pitch Decks', 'Mood Treatment Books', 'Visual Language Guidelines', 'Story Consulting'],
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'advertising-films',
    number: '05',
    name: 'ADVERTISING FILMS',
    shortTag: 'BRANDED CINEMA',
    description: 'Cinematic commercial films that reject generic advertising tropes in favor of narrative depth, craft, and emotional resonance.',
    deliverables: ['Brand Manifestos', 'TV & Digital Commercials', 'Product World Films', 'High-Speed & Macro Cinematography'],
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'documentaries',
    number: '06',
    name: 'DOCUMENTARIES',
    shortTag: 'OBSERVATIONAL NON-FICTION',
    description: 'Deeply researched, humanistic non-fiction storytelling exploring Indian culture, indigenous craft, subcultures, and untold histories.',
    deliverables: ['Investigative Research', 'Field Production in Remote Terrains', 'Archival Restoration', 'Impact & Festival Strategy'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'music-videos',
    number: '07',
    name: 'MUSIC VIDEOS',
    shortTag: 'SONIC VISUAL EXPERIMENTS',
    description: 'Experimental, kinetic visual pieces blending raw realism, surreal sets, choreography, and cutting-edge camerawork.',
    deliverables: ['Visual Treatment & Choreography', 'Specialized Camera Rigs', 'Lighting Installations', 'Rhythmic Edit Design'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'visual-development',
    number: '08',
    name: 'VISUAL DEVELOPMENT',
    shortTag: 'PRE-VIS & CONCEPT ART',
    description: 'Before a single nail is hammered, we illustrate the entire film through concept paintings, 3D architectural pre-vis, and lighting simulations.',
    deliverables: ['Concept Art & Matte Painting', '3D Unreal Engine Pre-vis', 'Lighting Moodboards', 'Costume & Character Concept Sheets'],
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'post-production',
    number: '09',
    name: 'POST PRODUCTION & COLOR',
    shortTag: 'THE FINAL POLISH',
    description: 'Bespoke finishing, color grading on DaVinci Resolve with calibrated film print emulation LUTs, and seamless visual effects.',
    deliverables: ['Editorial Supervision', '35mm Film Grain & Color Timing', 'Beauty & Invisible VFX', 'DCI 4K Mastering'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'sound-design',
    number: '10',
    name: 'SOUND DESIGN & SCORE',
    shortTag: 'SONIC ARCHITECTURE',
    description: 'We believe sound is 50% of the cinematic image. Authentic foley, spatial sound design, and custom organic scores.',
    deliverables: ['Foley & Field Audio Capture', 'Original Film Scoring', 'Dolby Atmos Surround Mixing', 'Acoustic Soundscapes'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'experiential-installations',
    number: '11',
    name: 'EXPERIENTIAL & SETS',
    shortTag: 'PHYSICAL SPACES',
    description: 'Translating cinematic world-building into live immersive environments, film premiere sets, and interactive cultural exhibitions.',
    deliverables: ['Interactive Stage Builds', 'Immersive Projection Mapping', 'Pop-Up Narrative Rooms', 'Exhibition Scenography'],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop'
  }
];
