import { amusemacMedia } from '@/lib/media';

export interface BehindTheLensMoment {
  id: string;
  rollNumber: string;
  title: string;
  location: string;
  projectRef: string;
  notes: string;
  aspect: 'cinema' | 'portrait' | 'standard' | 'square';
  image: string;
  slateData: {
    roll: string;
    scene: string;
    take: string;
    fps: string;
    lens: string;
    iso: string;
  };
}

export const behindTheLensMoments: BehindTheLensMoment[] = [
  {
    id: 'bts-01',
    rollNumber: 'ROLL 04 / EXPOSURE 12',
    title: 'Camera & Rig Calibration',
    location: 'Mumbai Soundstage',
    projectRef: 'DAINIK BHASKAR',
    notes: 'Camera team aligning anamorphic optics and checking monitor feeds during high-key commercial lighting setup.',
    aspect: 'cinema',
    image: amusemacMedia.services.filmAndContentProduction,
    slateData: {
      roll: 'A04',
      scene: '44B',
      take: '03',
      fps: '24 FPS',
      lens: 'Cooke Anamorphic 32mm',
      iso: '800'
    }
  },
  {
    id: 'bts-02',
    rollNumber: 'ROLL 08 / EXPOSURE 03',
    title: 'Lighting Rig & Lightman In Action',
    location: 'Production Studio Floor, Mumbai',
    projectRef: 'BRITANNIA 50-50',
    notes: 'Precision overhead lamp placement and barn door adjustment to carve out sharp contrast for national television spot.',
    aspect: 'portrait',
    image: amusemacMedia.services.brandCampaign,
    slateData: {
      roll: 'B02',
      scene: '12',
      take: '06',
      fps: '48 FPS',
      lens: 'Zeiss Super Speed 28mm T1.3',
      iso: '500T'
    }
  },
  {
    id: 'bts-03',
    rollNumber: 'ROLL 11 / EXPOSURE 19',
    title: 'Behind the Lens Production Floor',
    location: 'On Location, Mumbai',
    projectRef: 'AMUSEMAC CREW',
    notes: 'Production crew on set coordinating simultaneous 3-camera coverage and audio sync for flagship campaign.',
    aspect: 'standard',
    image: amusemacMedia.team.behindTheLensBanner,
    slateData: {
      roll: 'C01',
      scene: 'DOC-09',
      take: 'SYNC',
      fps: '24 FPS',
      lens: 'Canon K35 50mm T1.5',
      iso: '400'
    }
  },
  {
    id: 'bts-04',
    rollNumber: 'ROLL 14 / EXPOSURE 22',
    title: 'Textile, Material & Costume Craft',
    location: 'Amusemac Design Workshop, Mumbai',
    projectRef: 'SCRIPT TO SCREEN',
    notes: 'Inspecting texture weave, period drape, and dye response under warm tungsten lighting for set dressing.',
    aspect: 'square',
    image: amusemacMedia.services.clothAndProductionDesign,
    slateData: {
      roll: 'PREVIS',
      scene: 'SET-A',
      take: 'MODEL',
      fps: 'STILL',
      lens: 'Leica 35mm Summicron',
      iso: '100'
    }
  },
  {
    id: 'bts-05',
    rollNumber: 'ROLL 19 / EXPOSURE 07',
    title: 'Design & Creative Direction Study',
    location: 'Art Department Studio, Malad West',
    projectRef: 'STUDIO CRAFT',
    notes: 'Collaborative review of concept layouts, typography weights, and color boards prior to final pitch approval.',
    aspect: 'cinema',
    image: amusemacMedia.about.studioCraft,
    slateData: {
      roll: 'A07',
      scene: 'MV-01',
      take: '04',
      fps: '24 FPS',
      lens: 'Atlas Orion 40mm',
      iso: '1600'
    }
  }
];
