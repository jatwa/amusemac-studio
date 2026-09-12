import { amusemacMedia } from '@/lib/media';

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
    title: 'SCRIPT & PITCH',
    subtitle: 'DEVELOPING THE NARRATIVE BLUEPRINT',
    discipline: 'Script Deconstruction & Narrative Framework',
    description: 'Every project begins with deep narrative alignment. We deconstruct the script to explore visual metaphors, character arcs, and atmospheric tone before cameras roll.',
    focusItems: ['Pitch Deck & Treatment', 'Narrative Spatial Breakdown', 'Emotional Color Key', 'Atmospheric Intent Document'],
    quote: 'Architecture and atmosphere in cinema are the silent co-stars that ground the entire story.',
    notebookSnippet: 'CONCEPT NOTE: Align visual tone with character dilemma. Frame low ceilings and sharp angles to heighten tension before the reveal.',
    image: amusemacMedia.services.scriptAndPitchDevelopment
  },
  {
    step: '02',
    title: 'DESIGN & CREATIVE',
    subtitle: 'THE TRUTH OF MATERIALS & FORM',
    discipline: 'Concept Art, Moodboards & Spatial Mood',
    description: 'We translate the narrative into high-fidelity mood boards, concept art, and palette keys, establishing the visual aesthetic and signature style.',
    focusItems: ['Concept Moodboards', 'Authentic Material Samples', 'Prop & Artifact Curation', 'Spatial Color Palettes'],
    quote: 'When the concept art is rigorous, the shoot becomes an act of joyful execution.',
    notebookSnippet: 'WORKSHOP NOTE: Distressed wood and warm amber hues provide organic warmth against cool industrial backgrounds.',
    image: amusemacMedia.services.designAndCreative
  },
  {
    step: '03',
    title: 'PRODUCTION TEXTILES',
    subtitle: 'FABRIC, PATINA & TEXTURE',
    discipline: 'Cloth, Costume & Textile Craft',
    description: 'From bespoke drapery to distressed wardrobe textures, our art department meticulously selects and treatments textiles to suit lighting and camera optics.',
    focusItems: ['Custom Textile Dyeing', 'Material Tactility & Drape', 'Costume Aging & Distress', 'Set Dressing Fabrics'],
    quote: 'Tactility creates realism that the lens registers instantly.',
    notebookSnippet: 'TEXTILE SPEC: Heavy woven cotton washed down with raw tea stains to simulate five years of coastal humidity.',
    image: amusemacMedia.services.clothAndProductionDesign
  },
  {
    step: '04',
    title: 'LIGHTING RIG & SETUP',
    subtitle: 'SCULPTING SHADOW & CONTRAST',
    discipline: 'Gaffer Coordination & Lighting Architecture',
    description: 'Working in tight tandem with cinematography, we sculpt light and shadow using custom-rigged fixtures, practical lamps, and volumetric atmosphere.',
    focusItems: ['Practical Lamp Wiring', 'Atmospheric Haze & Diffusion', 'Shadow Pattern Grids', 'High-Key & Low-Key Calibration'],
    quote: 'Light reveals character; shadow preserves mystery.',
    notebookSnippet: 'LIGHTING NOTE: Soft bounced key on actor profile with hard rim lamp backlighting ambient dust motes.',
    image: amusemacMedia.services.brandCampaign
  },
  {
    step: '05',
    title: 'CAMERA & SOUNDSTAGE',
    subtitle: 'THE WORLD COMES TO LIFE',
    discipline: 'Camera Execution & Soundstage Management',
    description: 'Precision camera choreography, dynamic lens packages, and live monitoring ensure every frame captures the planned aesthetic with absolute clarity.',
    focusItems: ['Multi-Camera Synchronicity', 'Live Monitor Feeds', 'Steadicam & Dolly Tracks', 'On-Set Standby Art'],
    quote: 'When an actor walks onto the set and forgets they are in a studio, the battle is won.',
    notebookSnippet: 'SOUNDSTAGE SPEC: Keep floating wild walls ready for rapid 180-degree turnarounds during the afternoon sequence.',
    image: amusemacMedia.services.filmAndContentProduction
  },
  {
    step: '06',
    title: 'EXPERIENTIAL & ACTIVATION',
    subtitle: 'BEYOND THE PROSCENIUM',
    discipline: 'On-Ground Storytelling & Brand Resonance',
    description: 'Bringing stories into real-world spaces through immersive activations, experiential popups, and tactile audience touchpoints.',
    focusItems: ['Immersive Set Popups', 'Audience Touchpoints', 'Interactive Live Installations', 'Brand Atmosphere'],
    quote: 'Cinematic storytelling is not confined to screens—it shapes lived experience.',
    notebookSnippet: 'ACTIVATION NOTE: Translate the film environment into a physical walk-through lounge with live ambient audio.',
    image: amusemacMedia.services.experientialAndActivations
  }
];
