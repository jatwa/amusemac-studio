import { amusemacMedia } from '@/lib/media';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  image: string;
  credential?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'kuldeep-jatwa',
    name: 'KULDEEP JATWA',
    role: 'Producer, Production Designer & Creative Director',
    tagline: 'The Creative Heartbeat of Amusemac',
    bio: 'Kuldeep transforms ideas into visually striking realities. With a sharp eye for detail and an instinct for storytelling, he builds worlds where every frame feels alive. From the grandest set design to the smallest prop, his touch ensures our stories don’t just look good — they live on screen.',
    image: amusemacMedia.team.kuldeepJatwa
  },
  {
    id: 'radhika-paswan',
    name: 'RADHIKA PASWAN',
    role: 'Producer & Editor',
    credential: 'FTII ALUMNA',
    tagline: 'Balancing Production Precision with the Art of Editing',
    bio: 'An FTII alumna with a storyteller’s heart, Radhika balances two worlds — the precision of production and the art of editing. She’s the steady hand that keeps the chaos of filmmaking in check and the creative eye that transforms raw footage into powerful narratives. Every cut she makes pulls you deeper into the story.',
    image: amusemacMedia.team.radhikaPaswan
  },
  {
    id: 'nilesh-jatwa',
    name: 'NILESH JATWA',
    role: 'Sync Sound Recordist & Sound Mixer',
    credential: 'FTII ALUMNUS',
    tagline: 'Sound is the Soul of the Scene',
    bio: 'A graduate of the prestigious FTII, Nilesh treats sound not just as an element, but as an emotion. His expertise in capturing sync sound and crafting rich audio layers ensures that every whisper, every echo, and every beat resonates with the audience.',
    image: amusemacMedia.team.nileshJatwa
  },
  {
    id: 'durjey-soni',
    name: 'DURJEY SONI',
    role: 'Cinematographer',
    credential: 'FTII ALUMNUS',
    tagline: 'Transforming Ideas Into Lasting Visual Experiences',
    bio: 'As Cinematographer at Amusemac Studio, Durjey Soni brings stories to life through the language of cinematography. His expertise lies in capturing the perfect interplay of light, framing, and motion to create visuals that feel both cinematic and authentic.',
    image: amusemacMedia.team.durjeySoni
  },
  {
    id: 'ashish-chouhan-bagh',
    name: 'ASHISH CHOUHAN BAGH',
    role: 'Creative & Marketing Head',
    tagline: 'Strategic Storytelling & Long-Term Brand Value',
    bio: 'Responsible for the creative communication and strategic marketing of Amusemac Studio, Ashish focuses on building long-term brand value through consistent storytelling, audience insight, and targeted outreach.',
    image: amusemacMedia.team.ashishChouhan
  },
  {
    id: 'abhishek-kumar',
    name: 'ABHISHEK KUMAR',
    role: 'Creative Head & Writer',
    tagline: 'Where Amusemac’s Stories are Born',
    bio: 'Abhishek turns sparks of inspiration into scripts that linger long after the credits roll. Whether it’s a heartwarming tale or a gripping drama, he writes with a blend of imagination, empathy, and precision — ensuring every word earns its place in the final frame.',
    image: amusemacMedia.team.abhishekKumar
  },
  {
    id: 'kapil-hanwat',
    name: 'KAPIL HANWAT',
    role: 'Executive Producer',
    tagline: 'The Bridge Between Vision & Execution',
    bio: 'With a knack for logistics, timelines, and team synergy, Kapil ensures that the most ambitious ideas find their way from paper to screen without losing their magic. His leadership keeps the machine running, and his passion keeps the team inspired.',
    image: amusemacMedia.team.kapilHanwat
  }
];