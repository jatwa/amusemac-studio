export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  discipline: string;
  description: string;
  focusItems: string[];
  quote: string;
  notebookSnippet: string;
  image: string;
}

export const productionDesignSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'CONCEPT',
    subtitle: 'THE DRAMATIC NEED FOR SPACE',
    discipline: 'Script Deconstruction & Spatial Psychology',
    description: 'We do not start with walls. We start with characters. Why is the ceiling low? Why does light leak through the cracked ventilator? We deconstruct the script to understand how physical architecture will externalize psychological tension.',
    focusItems: ['Character Habitat Breakdown', 'Spatial Metaphors & Motifs', 'Emotional Color Key', 'Atmospheric Intent Document'],
    quote: 'Architecture in cinema is the silent co-star that never forgets its lines.',
    notebookSnippet: 'SCENE 14: The room must feel like an interrogation box even when empty. Drop the ceiling truss to 8.5 feet. Let the afternoon sun cast prison-like bar shadows across the desk.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    step: '02',
    title: 'RESEARCH',
    subtitle: 'THE TRUTH OF MATERIALS & PERIOD',
    discipline: 'Historical Archives & Field Excavation',
    description: 'Authenticity lives in the unglamorous margins. We dig through municipal town-planning archives in Fort Mumbai, interview master woodcarvers in Shekhawati, and test real lime plaster recipes from 1890.',
    focusItems: ['Archival Blueprint Recovery', 'Authentic Material Samples', 'Prop & Artifact Provenance', 'Regional Weathering Patterns'],
    quote: 'A fake prop pulls the audience out of the world in a fraction of a second.',
    notebookSnippet: 'ARCHIVE NOTE: 19th c. Mewar havelis used surkhi (crushed burnt brick) in mortar, giving the walls a faint terracotta warmth under candle flames. Replicate with pigment-washed plaster.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    step: '03',
    title: 'VISUAL DEVELOPMENT',
    subtitle: 'PAINTING THE FRAME BEFORE THE CAMERA',
    discipline: 'Concept Art, Color Scripts & 3D Pre-vis',
    description: 'We translate the research into high-fidelity concept illustrations, keyframe paintings, and 3D camera line-of-sight studies that align the Director, Cinematographer, and Art Department.',
    focusItems: ['Keyframe Lighting Concepts', '3D Camera Lens Pre-visualization', 'Color Script Sequences', 'Scale Maquettes (1:20 & 1:50)'],
    quote: 'When the concept art is rigorous, the shoot becomes an act of joyful execution.',
    notebookSnippet: 'COLOR STUDY: Night exterior uses sodium vapor amber (#D89B37) cutting across deep cobalt rain shadows (#121A24). Avoid pure blacks.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop'
  },
  {
    step: '04',
    title: 'DESIGN & MATERIALITY',
    subtitle: 'DRAFTING EVERY TILE & TIMBER',
    discipline: 'Architectural Working Drawings & Scenic Recipes',
    description: 'Every door handle, floor tile pattern, distressed patina, and wall panel is drafted into precise construction blueprints. Our scenic artists develop custom chemical aging formulas for paint, rust, and dampness.',
    focusItems: ['CAD / Blueprint Drafting Sets', 'Scenic Aging & Patina Swatches', 'Custom Hardware Fabrication Specs', 'Dressing & Prop Schedules'],
    quote: 'New things look fake on camera. We give materials fifty years of lived history in fifty hours.',
    notebookSnippet: 'SCENIC SPEC: Sandpaper edges of teak door frames at shoulder and knuckle height. Apply linseed oil + burnt umber wash to simulate 40 years of hand sweat and grease.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    step: '05',
    title: 'BUILD & DRESSING',
    subtitle: 'THE SOUNDSTAGE RISES',
    discipline: 'Carpentry, Structural Engineering & Dressing',
    description: 'Over 60 master carpenters, welders, mould makers, and set dressers assemble the world inside Mumbai soundstages. Wild walls are mounted on heavy-duty tracks to grant cameras 360-degree freedom.',
    focusItems: ['Soundstage Steel & Timber Frame', 'Floating “Wild Wall” Engineering', 'Tactile Prop Layering & Dressing', 'Practical Fixture Wiring'],
    quote: 'When an actor walks onto the set and forgets they are in a studio, the battle is won.',
    notebookSnippet: 'STAGE 2 RIG: Hang 4 wild walls on overhead dual I-beams for the 180-degree tracking master shot. All practical table lamps wired through dimmers to DMX board.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    step: '06',
    title: 'THE SHOOT',
    subtitle: 'THE CAMERA ENTERS THE WORLD',
    discipline: 'On-Set Standby Art & Continuous Synergy',
    description: 'During principal photography, our art department standby team lives on the set floor—maintaining water effects, adjusting prop micro-positions, resetting dust levels, and collaborating live with the DP.',
    focusItems: ['Standby Art Direction Crew', 'Live Atmosphere & Haze Maintenance', 'Action Prop Continuity', 'Camera Sightline Tweaks'],
    quote: 'The world is now alive. Sound speed, camera roll, action.',
    notebookSnippet: 'CALL SHEET DAY 8: Scene 32 requires wet-down of cobblestone street prior to every take. Keep standby distressing kit ready for breakdown on hero actor jacket.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
  }
];
