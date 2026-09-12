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
    title: '3 AM Soundstage Plaster Wash',
    location: 'Stage 4, Mehboob Studios, Bandra',
    projectRef: 'BANDHISHEIN',
    notes: 'The scenic team working through the final night to give the 28-foot palace arches an authentic 150-year weathered lime patina before the 7 AM actor call.',
    aspect: 'cinema',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1400&auto=format&fit=crop',
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
    title: 'Monsoon Rain Rig Calibration',
    location: 'Ballard Estate, South Mumbai',
    projectRef: 'MIRAGE',
    notes: 'Balancing the high-pressure overhead rain bar with vintage tungsten streetlamps to capture authentic water droplet flares on 35mm stock.',
    aspect: 'portrait',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
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
    title: 'High Altitude Audio Log',
    location: 'Dzülke Ridge, Nagaland (2,400m)',
    projectRef: 'NETTLE / NAGALAND',
    notes: 'Sound recordist waiting for the midday valley wind to settle while recording the rhythmic wooden beat of Angami backstrap looms.',
    aspect: 'standard',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop',
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
    title: 'Timber Maquette & Sightline Check',
    location: 'Amusemac Design Workshop, Mumbai',
    projectRef: 'THE ARCHITECT’S MEMORY',
    notes: 'Checking camera angles on the 1:20 scale wooden architectural model to determine exact wild wall break points for the 50mm anamorphic lens.',
    aspect: 'square',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
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
    title: 'Midnight Light Flare Test',
    location: 'Mazgaon Docks, Mumbai Harbor',
    projectRef: 'GULLY DREAMS',
    notes: 'Testing neon tube bounce off wet ship-hull steel plates with the Steadicam operator at 2:30 AM.',
    aspect: 'cinema',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop',
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
