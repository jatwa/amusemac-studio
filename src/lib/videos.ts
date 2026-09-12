/**
 * AMUSEMAC STUDIO — OFFICIAL VERIFIED VIDEO REGISTRY
 * Sourced directly from https://www.amusemacstudio.in/
 * 
 * Every video in this file is verified to be embedded or linked directly on
 * the official Amusemac Studio website pages (/our-canvas, /s-projects-side-by-side,
 * /corporate-films, /flim-webseries, /short-films).
 */

export interface VerifiedVideo {
  title: string;
  url: string;
  embedUrl: string;
  type: 'youtube' | 'vimeo' | 'wix';
  source: string;
  category: 'advertisement' | 'corporate' | 'documentary' | 'film_webseries' | 'short_film';
  wixPage: string;
  description?: string;
}

export const amusemacVideos: Record<string, VerifiedVideo> = {
  'dainik-bhaskar-pankaj-tripathi': {
    title: 'Dainik Bhaskar — Sach Kareeb Se Dikhta Hai (ft. Pankaj Tripathi)',
    url: 'https://www.youtube.com/watch?v=NeBcPlOF57Q',
    embedUrl: 'https://www.youtube.com/embed/NeBcPlOF57Q',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Dainik Bhaskar commercial campaign featuring Pankaj Tripathi.'
  },

  'britannia-5050-4th-umpire': {
    title: 'Britannia 50-50 — 4th Umpire',
    url: 'https://www.youtube.com/watch?v=rbJWH61S5LM',
    embedUrl: 'https://www.youtube.com/embed/rbJWH61S5LM',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Britannia 50-50 4th Umpire commercial spot.'
  },

  'tata-salt-har-narangi-pack': {
    title: 'Tata Salt — Har Narangi Pack Tata Namak Nahi Hota',
    url: 'https://www.youtube.com/watch?v=oq9Zw744ZwA',
    embedUrl: 'https://www.youtube.com/embed/oq9Zw744ZwA',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Namak ka har narangi pack Tata Namak nahi hota! Sirf asli Tata Namak apnaiye.'
  },

  'tata-salt-mujrim': {
    title: 'Tata Salt — Har Narangi Pack Tata Namak Nahi Hota (Mujrim)',
    url: 'https://www.youtube.com/watch?v=ptYKUwY3kRg',
    embedUrl: 'https://www.youtube.com/embed/ptYKUwY3kRg',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Tata Salt authentic brand commercial film.'
  },

  'tata-multicap-fund': {
    title: 'Tata Mutual Fund — Tata Multicap Fund',
    url: 'https://www.youtube.com/watch?v=4pLDsMRH03U',
    embedUrl: 'https://www.youtube.com/embed/4pLDsMRH03U',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'A diversified equity fund investing across Large, Mid and Small cap stocks.'
  },

  'pataa-app-mad-over-address': {
    title: 'Pataa Navigation App — Mad Over Address',
    url: 'https://www.youtube.com/watch?v=HaVcHcQAWKs',
    embedUrl: 'https://www.youtube.com/embed/HaVcHcQAWKs',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Explaining your long and complex address made easy.'
  },

  'pataa-app-paanwala': {
    title: 'Pataa Navigation App — Address By Paanwala',
    url: 'https://www.youtube.com/watch?v=BDhp6_k8fCY',
    embedUrl: 'https://www.youtube.com/embed/BDhp6_k8fCY',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Address Made Simple with Pataa.'
  },

  'pataa-app-funeral-baraat': {
    title: 'Pataa Navigation App — Baraat In A Funeral',
    url: 'https://www.youtube.com/watch?v=yZgy5_Sfr2w',
    embedUrl: 'https://www.youtube.com/embed/yZgy5_Sfr2w',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Finding Address Made Simple with Pataa.'
  },

  'pataa-app-north-meets-south': {
    title: 'Pataa Navigation App — North Meets South',
    url: 'https://www.youtube.com/watch?v=Pf8WlL9N0rg',
    embedUrl: 'https://www.youtube.com/embed/Pf8WlL9N0rg',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Address Made Simple in emergencies and daily navigation.'
  },

  'apml-asli-nakli': {
    title: 'Agarwal Packers and Movers Ltd — Asli Nakli',
    url: 'https://www.youtube.com/watch?v=gzf_EtFERpw',
    embedUrl: 'https://www.youtube.com/embed/gzf_EtFERpw',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Production House: Useful Garbage Creations | Client: Agarwal Packers and Movers Ltd | Director: Deep Vyas | DOP: Anurag Solanki | Production Designer: Rinku'
  },

  'apml-asli-nakli-signature': {
    title: 'APML Asli Nakli — Signature Campaign',
    url: 'https://www.youtube.com/watch?v=IV4C0w3_9eM',
    embedUrl: 'https://www.youtube.com/embed/IV4C0w3_9eM',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Agarwal Packers and Movers Ltd Signature commercial.'
  },

  'storekar-apml': {
    title: 'STOREKAR By Agarwal Packers and Movers Ltd',
    url: 'https://www.youtube.com/watch?v=9Ms5zzWjg98',
    embedUrl: 'https://www.youtube.com/embed/9Ms5zzWjg98',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Self storage solutions commercial for StoreKar APML.'
  },

  'storekar-daadi': {
    title: 'StoreKar — Daadi by Agarwal Packers and Movers Ltd',
    url: 'https://www.youtube.com/watch?v=RfAkdrHkT_g',
    embedUrl: 'https://www.youtube.com/embed/RfAkdrHkT_g',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'StoreKar Daadi campaign film.'
  },

  'toyota-maintenance-costs': {
    title: "Toyota's Maintenance Costs",
    url: 'https://www.youtube.com/watch?v=5StwiNqn-FY',
    embedUrl: 'https://www.youtube.com/embed/5StwiNqn-FY',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'A young couple discovers the delights of owning a Toyota.'
  },

  'toyota-service-time': {
    title: "Toyota’s Service Time",
    url: 'https://www.youtube.com/watch?v=2PRw1ebq5_0',
    embedUrl: 'https://www.youtube.com/embed/2PRw1ebq5_0',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Toyota service time commercial film.'
  },

  'toyota-resale-value': {
    title: "Toyota’s Resale Value",
    url: 'https://www.youtube.com/watch?v=ad4bDVQTJag',
    embedUrl: 'https://www.youtube.com/embed/ad4bDVQTJag',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Toyota resale value commercial film.'
  },

  'kelvinator-heavy-duty-ac': {
    title: 'Kelvinator Heavy Duty ACs | Ready For Anything',
    url: 'https://www.youtube.com/watch?v=2X5JzzHEgPc',
    embedUrl: 'https://www.youtube.com/embed/2X5JzzHEgPc',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Kelvinator Heavy Duty ACs commercial film.'
  },

  'ambi-pur-air-effects': {
    title: 'Ambi Pur Air Effects',
    url: 'https://www.youtube.com/watch?v=_d8x07moTnw',
    embedUrl: 'https://www.youtube.com/embed/_d8x07moTnw',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Ambi Pur Air Effects commercial spot.'
  },

  'axis-mutual-fund-sip': {
    title: 'Axis Mutual Fund — #SIPNow',
    url: 'https://www.youtube.com/watch?v=RQSN14RctaA',
    embedUrl: 'https://www.youtube.com/embed/RQSN14RctaA',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Should you start your SIP when markets are down? Axis MF #SIPNow.'
  },

  'axis-mf-micro-investing': {
    title: 'Axis MF — Micro Investing Index Fund (#InvestEasy)',
    url: 'https://www.youtube.com/watch?v=EeqEYQmZnFY',
    embedUrl: 'https://www.youtube.com/embed/EeqEYQmZnFY',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Micro-Investing: 10 Index Funds for ₹1000! | Axis MF #InvestEasy.'
  },

  'axis-mf-multiple-goals': {
    title: 'Axis MF — Multiple Goals? Multiple SIPs (#InvestEasy)',
    url: 'https://www.youtube.com/watch?v=-UlJrcc0dcE',
    embedUrl: 'https://www.youtube.com/embed/-UlJrcc0dcE',
    type: 'youtube',
    source: 'official website',
    category: 'advertisement',
    wixPage: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    description: 'Plan smart with Axis MF SIPs for multiple life goals.'
  },

  'yadav-measurement-corporate-film': {
    title: 'Yadav Measurement Pvt. Ltd — Corporate Film',
    url: 'https://www.youtube.com/watch?v=q0UflaPH1OI',
    embedUrl: 'https://www.youtube.com/embed/q0UflaPH1OI',
    type: 'youtube',
    source: 'official website',
    category: 'corporate',
    wixPage: 'https://www.amusemacstudio.in/corporate-films',
    description: 'Step behind the curtains with Amusemac Studio as we capture the chaos, creativity, and cinematic magic that goes into making a corporate film for Yadav Measurement Pvt. Ltd.'
  },

  'mobilab-yadav-measurement': {
    title: 'MobiLab | Corporate Film | Yadav Measurement Pvt. Ltd',
    url: 'https://www.youtube.com/watch?v=3Ix1XhEzLsI',
    embedUrl: 'https://www.youtube.com/embed/3Ix1XhEzLsI',
    type: 'youtube',
    source: 'official website',
    category: 'corporate',
    wixPage: 'https://www.amusemacstudio.in/corporate-films',
    description: '"Every frame starts with a spark. Watch how Amusemac Studio turns concepts into captivating visuals in our latest corporate film for Mobilab by Yadav Measurement Pvt. Ltd. Directed by Sreyansha Jain, EP: Kapil Hanwat, Producer: Kuldeep Jatwa, CD: Kalpita Mandrekar."'
  },

  'uppercase-akasa-air': {
    title: 'uppercase × Akasa Air — Sustainable Cabin Gear',
    url: 'https://www.youtube.com/watch?v=_6jZz2-NBkA',
    embedUrl: 'https://www.youtube.com/embed/_6jZz2-NBkA',
    type: 'youtube',
    source: 'official website',
    category: 'corporate',
    wixPage: 'https://www.amusemacstudio.in/corporate-films',
    description: 'uppercase partnered with Akasa Air to create custom-designed, eco-friendly cabin luggage exclusively for their cabin crew. Crafted using RCS-certified recycled materials and developed in close collaboration with Akasa’s in-flight team.'
  },

  'god-vulture-and-human': {
    title: 'God Vulture and Human (2023) — Best Documentary National Film Awards',
    url: 'https://www.youtube.com/watch?v=IP-CrBpPBHs',
    embedUrl: 'https://www.youtube.com/embed/IP-CrBpPBHs',
    type: 'youtube',
    source: 'official website',
    category: 'documentary',
    wixPage: 'https://www.amusemacstudio.in/our-canvas',
    description: "God Vulture and Human got awarded as the 'Best documentary' of 2023 at National Film Awards in 2025. A documentary dedicated to Organ Transplant Coordinators."
  },

  'bandish-bandits-season-2': {
    title: 'Bandish Bandits Season 2 — Prime Video',
    url: 'https://www.youtube.com/watch?v=AA_KlWcF_nc',
    embedUrl: 'https://www.youtube.com/embed/AA_KlWcF_nc',
    type: 'youtube',
    source: 'official website',
    category: 'film_webseries',
    wixPage: 'https://www.amusemacstudio.in/flim-webseries',
    description: 'Prime Video India Presents Bandish Bandits Season 2 Official Trailer. Starring Ritwik Bhowmik, Shreya Chaudhry, Atul Kulkarni, Sheeba Chadha, Rajesh Tailang.'
  },

  'kaalidhar-laapata': {
    title: 'Kaalidhar Laapata — A ZEE5 Original Film',
    url: 'https://www.youtube.com/watch?v=_HFYp-Gcqbg',
    embedUrl: 'https://www.youtube.com/embed/_HFYp-Gcqbg',
    type: 'youtube',
    source: 'official website',
    category: 'film_webseries',
    wixPage: 'https://www.amusemacstudio.in/flim-webseries',
    description: 'Kaalidhar Laapata A ZEE5 ORIGINAL FILM. Starring Abhishek Bachchan, Daivik, Mohd. Zeeshan Ayyub. Directed by Madhumita.'
  },

  'lafangey': {
    title: 'Lafangey — Amazon MX Player',
    url: 'https://www.youtube.com/watch?v=Cnprs9xC6iI',
    embedUrl: 'https://www.youtube.com/embed/Cnprs9xC6iI',
    type: 'youtube',
    source: 'official website',
    category: 'film_webseries',
    wixPage: 'https://www.amusemacstudio.in/flim-webseries',
    description: 'Amazon MX Player presents Lafangey. Cast: Harsh Beniwal, Barkha Singh, Gagan Arora, Saloni Gaur, Anud Singh Dhaka. Directed by Prem Mistry & Abhishhek Yadav.'
  },

  'never-kiss-your-best-friend-s2': {
    title: 'Never Kiss Your Best Friend S2 — ZEE5 Original',
    url: 'https://www.youtube.com/watch?v=ou0JC_GNW_w',
    embedUrl: 'https://www.youtube.com/embed/ou0JC_GNW_w',
    type: 'youtube',
    source: 'official website',
    category: 'film_webseries',
    wixPage: 'https://www.amusemacstudio.in/flim-webseries',
    description: 'Never Kiss Your Best Friend S2 Official Trailer | A ZEE5 Original Webseries. Starring Anya Singh, Nakuul Mehta, Sarah Jane Dias, Karan Wahi, Sapna Pabbi, Jaaved Jaaferi. Directed by Harsh Dedhia.'
  },

  'khuda-haafiz-chapter-2': {
    title: 'Khuda Haafiz 2 — Agni Pariksha',
    url: 'https://www.youtube.com/watch?v=iPaSef3NtMA',
    embedUrl: 'https://www.youtube.com/embed/iPaSef3NtMA',
    type: 'youtube',
    source: 'official website',
    category: 'film_webseries',
    wixPage: 'https://www.amusemacstudio.in/flim-webseries',
    description: 'Khuda Haafiz Chapter 2 - Agni Pariksha. Starring Vidyut Jammwal, Shivaleeka Oberoi. Directed by Faruk Kabir.'
  },

  'salakaar': {
    title: 'Salakaar — Hotstar Specials',
    url: 'https://www.youtube.com/watch?v=lIutjFByw2k',
    embedUrl: 'https://www.youtube.com/embed/lIutjFByw2k',
    type: 'youtube',
    source: 'official website',
    category: 'film_webseries',
    wixPage: 'https://www.amusemacstudio.in/flim-webseries',
    description: 'Hotstar Specials : Salakaar | Official Trailer.'
  },

  'short-films-reel': {
    title: 'Amusemac Studio — Short Films',
    url: 'https://www.youtube.com/watch?v=UyffFt9sjFA',
    embedUrl: 'https://www.youtube.com/embed/UyffFt9sjFA',
    type: 'youtube',
    source: 'official website',
    category: 'short_film',
    wixPage: 'https://www.amusemacstudio.in/short-films',
    description: 'Short film showcase featured on Amusemac Studio.'
  }
};
