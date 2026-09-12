export interface CollaboratorGroup {
  category: string;
  items: string[];
}

export const collaboratorGroups: CollaboratorGroup[] = [
  {
    category: 'STUDIOS & STREAMERS',
    items: [
      'Netflix India',
      'Amazon Prime Video',
      'Vice Studios',
      'Yash Raj Films',
      'Excel Entertainment',
      'Tiger Baby Films',
      'Drishyam Films'
    ]
  },
  {
    category: 'BRANDS & CULTURAL HOUSES',
    items: [
      'Royal Enfield',
      'Def Jam Recordings India',
      'Mass Appeal India',
      'Spotify India',
      'Red Bull Media House',
      'FabIndia Heritage',
      'Airbnb India',
      'GQ India'
    ]
  },
  {
    category: 'FESTIVAL RECOGNITION & AWARDS',
    items: [
      'Clermont-Ferrand ISFF (Official Selection)',
      'Doc Edge International Film Festival',
      'MAMI Mumbai Film Festival',
      'IFFI Goa Panorama',
      'Kolkata International Film Festival',
      'Indian Society of Cinematographers (ISC Honor)'
    ]
  }
];
