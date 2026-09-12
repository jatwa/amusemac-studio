/**
 * AMUSEMAC STUDIO — OFFICIAL WEBSITE SOURCE AUDIT MAP
 * SOURCE OF TRUTH: https://www.amusemacstudio.in/
 * 
 * This file records the explicit, verified relationship between every page,
 * section, project card, image asset, and video embed as found on the
 * official website structure.
 */

export interface OfficialSiteEntry {
  pageUrl: string;
  pageTitle: string;
  category: string;
  items: {
    title: string;
    image?: string;
    videoUrl?: string;
    embedUrl?: string;
    thumbnailUrl?: string;
    description?: string;
    credits?: string;
    verifiedOnPage: boolean;
  }[];
}

export const officialSiteMap: OfficialSiteEntry[] = [
  {
    pageUrl: 'https://www.amusemacstudio.in/',
    pageTitle: 'Home / Studio',
    category: 'Brand & Studio',
    items: [
      {
        title: 'Amusemac Studio — Mad About Cinema',
        image: 'https://static.wixstatic.com/media/4ceae7_af6beeddd2d5400ca64a0ea8b24b3b8b~mv2.png',
        description: "Turning Ideas Into Cinematic Reality. We forge emotions you can't unsee.",
        verifiedOnPage: true
      },
      {
        title: 'Who Are We',
        image: 'https://static.wixstatic.com/media/4ceae7_1f92cb89d4004d9aa825e13626562847f002.jpg',
        description: 'At Amusemac Studio, we believe storytelling is more than just visuals and dialogue—it is an experience that lingers.',
        verifiedOnPage: true
      },
      {
        title: 'Studio Craft & Workshop',
        image: 'https://static.wixstatic.com/media/4ceae7_074f8169cc52488faf2581e3e32919d1~mv2.jpg',
        description: 'Art direction, set design and visual craft workshop.',
        verifiedOnPage: true
      }
    ]
  },
  {
    pageUrl: 'https://www.amusemacstudio.in/s-projects-side-by-side',
    pageTitle: 'Advertisement',
    category: 'Advertisement',
    items: [
      {
        title: 'Dainik Bhaskar — Sach Kareeb Se Dikhta Hai (ft. Pankaj Tripathi)',
        image: 'https://static.wixstatic.com/media/4ceae7_811460d8549c487e86a188a6d7f87ef0f000.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=NeBcPlOF57Q',
        embedUrl: 'https://www.youtube.com/embed/NeBcPlOF57Q',
        thumbnailUrl: 'https://i.ytimg.com/vi/NeBcPlOF57Q/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Britannia 50-50 — 4th Umpire',
        image: 'https://static.wixstatic.com/media/4ceae7_8aa751d6652343479fe7a524574e763b~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=rbJWH61S5LM',
        embedUrl: 'https://www.youtube.com/embed/rbJWH61S5LM',
        thumbnailUrl: 'https://i.ytimg.com/vi/rbJWH61S5LM/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Tata Salt — Har Narangi Pack Tata Namak Nahi Hota (Kirana)',
        image: 'https://static.wixstatic.com/media/4ceae7_84209b2650fc47aa82eea1a72dfa7a4a~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=oq9Zw744ZwA',
        embedUrl: 'https://www.youtube.com/embed/oq9Zw744ZwA',
        thumbnailUrl: 'https://i.ytimg.com/vi/oq9Zw744ZwA/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Tata Salt — Har Narangi Pack Tata Namak Nahi Hota (Mujrim)',
        image: 'https://static.wixstatic.com/media/4ceae7_84209b2650fc47aa82eea1a72dfa7a4a~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=ptYKUwY3kRg',
        embedUrl: 'https://www.youtube.com/embed/ptYKUwY3kRg',
        thumbnailUrl: 'https://i.ytimg.com/vi/ptYKUwY3kRg/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Tata Mutual Fund — Tata Multicap Fund',
        image: 'https://static.wixstatic.com/media/4ceae7_84209b2650fc47aa82eea1a72dfa7a4a~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=4pLDsMRH03U',
        embedUrl: 'https://www.youtube.com/embed/4pLDsMRH03U',
        thumbnailUrl: 'https://i.ytimg.com/vi/4pLDsMRH03U/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Pataa Navigation App — Mad Over Address',
        image: 'https://static.wixstatic.com/media/4ceae7_90f9e5857b0c47dc89c8661aeab03401~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=HaVcHcQAWKs',
        embedUrl: 'https://www.youtube.com/embed/HaVcHcQAWKs',
        thumbnailUrl: 'https://i.ytimg.com/vi/HaVcHcQAWKs/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Pataa Navigation App — Address By Paanwala',
        image: 'https://static.wixstatic.com/media/4ceae7_90f9e5857b0c47dc89c8661aeab03401~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=BDhp6_k8fCY',
        embedUrl: 'https://www.youtube.com/embed/BDhp6_k8fCY',
        thumbnailUrl: 'https://i.ytimg.com/vi/BDhp6_k8fCY/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Pataa Navigation App — Baraat In A Funeral',
        image: 'https://static.wixstatic.com/media/4ceae7_90f9e5857b0c47dc89c8661aeab03401~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=yZgy5_Sfr2w',
        embedUrl: 'https://www.youtube.com/embed/yZgy5_Sfr2w',
        thumbnailUrl: 'https://i.ytimg.com/vi/yZgy5_Sfr2w/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Pataa Navigation App — North Meets South',
        image: 'https://static.wixstatic.com/media/4ceae7_90f9e5857b0c47dc89c8661aeab03401~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=Pf8WlL9N0rg',
        embedUrl: 'https://www.youtube.com/embed/Pf8WlL9N0rg',
        thumbnailUrl: 'https://i.ytimg.com/vi/Pf8WlL9N0rg/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Agarwal Packers and Movers Ltd — Asli Nakli',
        image: 'https://static.wixstatic.com/media/4ceae7_502a6076acfa4370adfb720bbf77094f~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=gzf_EtFERpw',
        embedUrl: 'https://www.youtube.com/embed/gzf_EtFERpw',
        thumbnailUrl: 'https://i.ytimg.com/vi/gzf_EtFERpw/mqdefault.jpg',
        credits: 'Production House: Useful Garbage Creations | Client: Agarwal Packers and Movers Ltd | Director: Deep Vyas | DOP: Anurag Solanki | Production Designer: Rinku',
        verifiedOnPage: true
      },
      {
        title: 'APML Asli Nakli — Signature Campaign',
        image: 'https://static.wixstatic.com/media/4ceae7_502a6076acfa4370adfb720bbf77094f~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=IV4C0w3_9eM',
        embedUrl: 'https://www.youtube.com/embed/IV4C0w3_9eM',
        thumbnailUrl: 'https://i.ytimg.com/vi/IV4C0w3_9eM/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'STOREKAR By Agarwal Packers and Movers Ltd',
        image: 'https://static.wixstatic.com/media/4ceae7_502a6076acfa4370adfb720bbf77094f~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=9Ms5zzWjg98',
        embedUrl: 'https://www.youtube.com/embed/9Ms5zzWjg98',
        thumbnailUrl: 'https://i.ytimg.com/vi/9Ms5zzWjg98/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'StoreKar — Daadi by Agarwal Packers and Movers Ltd',
        image: 'https://static.wixstatic.com/media/4ceae7_502a6076acfa4370adfb720bbf77094f~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=RfAkdrHkT_g',
        embedUrl: 'https://www.youtube.com/embed/RfAkdrHkT_g',
        thumbnailUrl: 'https://i.ytimg.com/vi/RfAkdrHkT_g/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Toyota — Maintenance Costs',
        image: 'https://static.wixstatic.com/media/11062b_5c0135c7754a45ab921fa8492d9d2030~mv2.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=5StwiNqn-FY',
        embedUrl: 'https://www.youtube.com/embed/5StwiNqn-FY',
        thumbnailUrl: 'https://i.ytimg.com/vi/5StwiNqn-FY/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Toyota — Service Time',
        image: 'https://static.wixstatic.com/media/11062b_5c0135c7754a45ab921fa8492d9d2030~mv2.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=2PRw1ebq5_0',
        embedUrl: 'https://www.youtube.com/embed/2PRw1ebq5_0',
        thumbnailUrl: 'https://i.ytimg.com/vi/2PRw1ebq5_0/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Toyota — Resale Value',
        image: 'https://static.wixstatic.com/media/11062b_5c0135c7754a45ab921fa8492d9d2030~mv2.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=ad4bDVQTJag',
        embedUrl: 'https://www.youtube.com/embed/ad4bDVQTJag',
        thumbnailUrl: 'https://i.ytimg.com/vi/ad4bDVQTJag/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Kelvinator Heavy Duty ACs | Ready For Anything',
        videoUrl: 'https://www.youtube.com/watch?v=2X5JzzHEgPc',
        embedUrl: 'https://www.youtube.com/embed/2X5JzzHEgPc',
        thumbnailUrl: 'https://i.ytimg.com/vi/2X5JzzHEgPc/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Ambi Pur Air Effects',
        videoUrl: 'https://www.youtube.com/watch?v=_d8x07moTnw',
        embedUrl: 'https://www.youtube.com/embed/_d8x07moTnw',
        thumbnailUrl: 'https://i.ytimg.com/vi/_d8x07moTnw/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Axis Mutual Fund — #SIPNow',
        image: 'https://static.wixstatic.com/media/4ceae7_e94d627209bc4d508f4cd8bef501287d~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=RQSN14RctaA',
        embedUrl: 'https://www.youtube.com/embed/RQSN14RctaA',
        thumbnailUrl: 'https://i.ytimg.com/vi/RQSN14RctaA/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Axis MF — Micro Investing Index Fund (#InvestEasy)',
        image: 'https://static.wixstatic.com/media/4ceae7_e94d627209bc4d508f4cd8bef501287d~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=EeqEYQmZnFY',
        embedUrl: 'https://www.youtube.com/embed/EeqEYQmZnFY',
        thumbnailUrl: 'https://i.ytimg.com/vi/EeqEYQmZnFY/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Axis MF — Multiple Goals? Multiple SIPs (#InvestEasy)',
        image: 'https://static.wixstatic.com/media/4ceae7_e94d627209bc4d508f4cd8bef501287d~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=-UlJrcc0dcE',
        embedUrl: 'https://www.youtube.com/embed/-UlJrcc0dcE',
        thumbnailUrl: 'https://i.ytimg.com/vi/-UlJrcc0dcE/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'StreetOrigins',
        image: 'https://static.wixstatic.com/media/4ceae7_aa93d201ed3d433f86d96645f2f57dd9f002.jpg',
        description: 'Streetwear creative visual campaign.',
        verifiedOnPage: true
      }
    ]
  },
  {
    pageUrl: 'https://www.amusemacstudio.in/corporate-films',
    pageTitle: 'Corporate Films',
    category: 'Corporate Films',
    items: [
      {
        title: 'Corporate Film | Amusemac Studio | Yadav Measurement Pvt. Ltd',
        image: 'https://static.wixstatic.com/media/4ceae7_bcc820afc1884f898a1787a341abaf6e~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=q0UflaPH1OI',
        embedUrl: 'https://www.youtube.com/embed/q0UflaPH1OI',
        thumbnailUrl: 'https://i.ytimg.com/vi/q0UflaPH1OI/mqdefault.jpg',
        description: 'Step behind the curtains with Amusemac Studio as we capture the chaos, creativity, and cinematic magic that goes into making a corporate film for Yadav Measurement Pvt. Ltd.',
        verifiedOnPage: true
      },
      {
        title: 'Mobilab | Corporate Film | Amusemac Studio | Yadav Measurement Pvt. Ltd',
        image: 'https://static.wixstatic.com/media/4ceae7_bcc820afc1884f898a1787a341abaf6e~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=3Ix1XhEzLsI',
        embedUrl: 'https://www.youtube.com/embed/3Ix1XhEzLsI',
        thumbnailUrl: 'https://i.ytimg.com/vi/3Ix1XhEzLsI/mqdefault.jpg',
        description: 'Every frame starts with a spark. Watch how Amusemac Studio turns concepts into captivating visuals in our latest corporate film for Mobilab by Yadav Measurement Pvt. Ltd. Directed by Sreyansha Jain, EP: Kapil Hanwat, Producer: Kuldeep Jatwa, CD: Kalpita Mandrekar.',
        verifiedOnPage: true
      },
      {
        title: 'uppercase x Akasa Air | Smart, Sustainable Cabin Gear for the Crew',
        image: 'https://static.wixstatic.com/media/4ceae7_bcc820afc1884f898a1787a341abaf6e~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=_6jZz2-NBkA',
        embedUrl: 'https://www.youtube.com/embed/_6jZz2-NBkA',
        thumbnailUrl: 'https://i.ytimg.com/vi/_6jZz2-NBkA/mqdefault.jpg',
        description: 'uppercase partnered with Akasa Air to create custom-designed, eco-friendly cabin luggage exclusively for their cabin crew.',
        verifiedOnPage: true
      }
    ]
  },
  {
    pageUrl: 'https://www.amusemacstudio.in/music-videos',
    pageTitle: 'Music Videos',
    category: 'Music Videos',
    items: [
      {
        title: 'Madhubala | Official Song | Jeena Dil Se | Adhish Rana',
        image: 'https://static.wixstatic.com/media/4ceae7_1f92cb89d4004d9aa825e13626562847f002.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=W8evqUld35o',
        embedUrl: 'https://www.youtube.com/embed/W8evqUld35o',
        thumbnailUrl: 'https://i.ytimg.com/vi/W8evqUld35o/mqdefault.jpg',
        verifiedOnPage: true
      },
      {
        title: 'Akkad Bakkad | Official Video | Nakash Aziz | Adhish Rana',
        image: 'https://static.wixstatic.com/media/4ceae7_1f92cb89d4004d9aa825e13626562847f002.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=9uPWo2plggs',
        embedUrl: 'https://www.youtube.com/embed/9uPWo2plggs',
        thumbnailUrl: 'https://i.ytimg.com/vi/9uPWo2plggs/mqdefault.jpg',
        verifiedOnPage: true
      }
    ]
  },
  {
    pageUrl: 'https://www.amusemacstudio.in/s-projects-side-by-side-1',
    pageTitle: 'Documentaries',
    category: 'Documentaries',
    items: [
      {
        title: 'God Vulture and Human (2023)',
        image: 'https://static.wixstatic.com/media/4ceae7_13e7c60cdf954c20b5bb08dd0dd34f3f~mv2.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=IP-CrBpPBHs',
        embedUrl: 'https://www.youtube.com/embed/IP-CrBpPBHs',
        thumbnailUrl: 'https://i.ytimg.com/vi/IP-CrBpPBHs/mqdefault.jpg',
        description: 'God Vulture and Human got awarded as the \'Best documentary\' of 2023 at National Film Awards in 2025. Dedicated to Organ Transplant Coordinators.',
        verifiedOnPage: true
      }
    ]
  },
  {
    pageUrl: 'https://www.amusemacstudio.in/flim-webseries',
    pageTitle: 'Film & Webseries',
    category: 'Film & Webseries',
    items: [
      {
        title: 'Bandish Bandits Season 2 — Prime Video India',
        image: 'https://static.wixstatic.com/media/4ceae7_b29c2af3b064418ca129fcb8a49fb7dd~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=AA_KlWcF_nc',
        embedUrl: 'https://www.youtube.com/embed/AA_KlWcF_nc',
        thumbnailUrl: 'https://i.ytimg.com/vi/AA_KlWcF_nc/mqdefault.jpg',
        description: 'Prime Video India Presents Bandish Bandits Season 2 Official Trailer. Starring Ritwik Bhowmik, Shreya Chaudhry, Atul Kulkarni, Sheeba Chadha, Rajesh Tailang.',
        verifiedOnPage: true
      },
      {
        title: 'Kaalidhar Laapata — A ZEE5 Original Film',
        image: 'https://static.wixstatic.com/media/4ceae7_b29c2af3b064418ca129fcb8a49fb7dd~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=_HFYp-Gcqbg',
        embedUrl: 'https://www.youtube.com/embed/_HFYp-Gcqbg',
        thumbnailUrl: 'https://i.ytimg.com/vi/_HFYp-Gcqbg/mqdefault.jpg',
        description: 'Kaalidhar Laapata A ZEE5 ORIGINAL FILM. Starring Abhishek Bachchan, Daivik, Mohd. Zeeshan Ayyub. Directed by Madhumita.',
        verifiedOnPage: true
      },
      {
        title: 'Lafangey — Amazon MX Player',
        image: 'https://static.wixstatic.com/media/4ceae7_b29c2af3b064418ca129fcb8a49fb7dd~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=Cnprs9xC6iI',
        embedUrl: 'https://www.youtube.com/embed/Cnprs9xC6iI',
        thumbnailUrl: 'https://i.ytimg.com/vi/Cnprs9xC6iI/mqdefault.jpg',
        description: 'Amazon MX Player presents Lafangey. Cast: Harsh Beniwal, Barkha Singh, Gagan Arora, Saloni Gaur, Anud Singh Dhaka.',
        verifiedOnPage: true
      },
      {
        title: 'Never Kiss Your Best Friend S2 — ZEE5 Original',
        image: 'https://static.wixstatic.com/media/4ceae7_b29c2af3b064418ca129fcb8a49fb7dd~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=ou0JC_GNW_w',
        embedUrl: 'https://www.youtube.com/embed/ou0JC_GNW_w',
        thumbnailUrl: 'https://i.ytimg.com/vi/ou0JC_GNW_w/mqdefault.jpg',
        description: 'Never Kiss Your Best Friend S2 Official Trailer | A ZEE5 Original Webseries. Starring Anya Singh, Nakuul Mehta, Sarah Jane Dias, Karan Wahi, Sapna Pabbi, Jaaved Jaaferi. Directed by Harsh Dedhia.',
        verifiedOnPage: true
      },
      {
        title: 'Khuda Haafiz 2 — Agni Pariksha',
        image: 'https://static.wixstatic.com/media/4ceae7_b29c2af3b064418ca129fcb8a49fb7dd~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=iPaSef3NtMA',
        embedUrl: 'https://www.youtube.com/embed/iPaSef3NtMA',
        thumbnailUrl: 'https://i.ytimg.com/vi/iPaSef3NtMA/mqdefault.jpg',
        description: 'KHUDA HAAFIZ 2 - Agni Pariksha | TRAILER | Vidyut Jammwal, Shivaleeka Oberoi, Faruk Kabir.',
        verifiedOnPage: true
      },
      {
        title: 'Salakaar — Hotstar Specials',
        image: 'https://static.wixstatic.com/media/4ceae7_b29c2af3b064418ca129fcb8a49fb7dd~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=lIutjFByw2k',
        embedUrl: 'https://www.youtube.com/embed/lIutjFByw2k',
        thumbnailUrl: 'https://i.ytimg.com/vi/lIutjFByw2k/mqdefault.jpg',
        description: 'Hotstar Specials : Salakaar | Official Trailer.',
        verifiedOnPage: true
      }
    ]
  },
  {
    pageUrl: 'https://www.amusemacstudio.in/short-films',
    pageTitle: 'Short Films',
    category: 'Short Films',
    items: [
      {
        title: 'Bandh (Shut) Short Film | DIFF 2020 Trailer | Nilesh Jatwa',
        image: 'https://static.wixstatic.com/media/4ceae7_1a365df5ef034e4289805da9612d202f~mv2.png',
        videoUrl: 'https://www.youtube.com/watch?v=UyffFt9sjFA',
        embedUrl: 'https://www.youtube.com/embed/UyffFt9sjFA',
        thumbnailUrl: 'https://i.ytimg.com/vi/UyffFt9sjFA/mqdefault.jpg',
        description: 'Short film trailer by Nilesh Jatwa featured at Dharamshala International Film Festival (DIFF 2020).',
        verifiedOnPage: true
      }
    ]
  },
  {
    pageUrl: 'https://www.amusemacstudio.in/the-journey',
    pageTitle: 'Behind the Lens / The Journey',
    category: 'Team & Founders',
    items: [
      {
        title: 'KULDEEP JATWA',
        image: 'https://static.wixstatic.com/media/4ceae7_368fe2d4101147d597c1329bbcf7773f~mv2.jpg',
        description: 'Producer, Production Designer & Creative Director',
        verifiedOnPage: true
      },
      {
        title: 'RADHIKA PASWAN',
        image: 'https://static.wixstatic.com/media/4ceae7_09b991c1744a4ba9a313fcfd2619c039~mv2.jpg',
        description: 'Producer & Editor (FTII Alumna)',
        verifiedOnPage: true
      },
      {
        title: 'NILESH JATWA',
        image: 'https://static.wixstatic.com/media/4ceae7_3d7d9940cec04609829d31e7e7d7c307~mv2.jpg',
        description: 'Sync Sound Recordist & Sound Mixer (FTII Alumnus)',
        verifiedOnPage: true
      },
      {
        title: 'DURJEY SONI',
        image: 'https://static.wixstatic.com/media/4ceae7_9a3e2263e6a6443b9746bcf5202eb5a3~mv2.jpg',
        description: 'Cinematographer (FTII Alumnus)',
        verifiedOnPage: true
      },
      {
        title: 'ASHISH CHOUHAN BAGH',
        image: 'https://static.wixstatic.com/media/4ceae7_58abbb4548874beb94418d441a8d3caf~mv2.jpg',
        description: 'Creative & Marketing Head',
        verifiedOnPage: true
      },
      {
        title: 'ABHISHEK KUMAR',
        image: 'https://static.wixstatic.com/media/4ceae7_2f57362a173345c3b0740a1583ef162c~mv2.jpg',
        description: 'Creative Head & Writer',
        verifiedOnPage: true
      },
      {
        title: 'KAPIL HANWAT',
        image: 'https://static.wixstatic.com/media/4ceae7_c281602d6a5946a0a44767d8f26c4b64~mv2.jpg',
        description: 'Executive Producer',
        verifiedOnPage: true
      }
    ]
  },
  {
    pageUrl: 'https://www.amusemacstudio.in/script-to-screen',
    pageTitle: 'Script to Screen',
    category: 'Services',
    items: [
      {
        title: 'Script & Pitch Development',
        image: 'https://static.wixstatic.com/media/4ceae7_0a7b97fb19f24e87a68d81f7127facb8~mv2.png',
        description: 'Every great production starts on paper. We help transform your raw idea into a compelling script, rich character worlds, and pitch decks that get greenlit.',
        verifiedOnPage: true
      },
      {
        title: 'Film & Content Production',
        image: 'https://static.wixstatic.com/media/4ceae7_87dc22737a0a45318513cbfb647f9e79~mv2.jpg',
        description: 'From concept to the final cut, we take care of every detail.',
        verifiedOnPage: true
      },
      {
        title: 'Brand Campaign',
        image: 'https://static.wixstatic.com/media/4ceae7_56bfeb5c14c5421e89246027b1e5bee5~mv2.png',
        description: 'Ad films, promotional videos, corporate films, and branded content.',
        verifiedOnPage: true
      },
      {
        title: 'Design & Creative',
        image: 'https://static.wixstatic.com/media/4ceae7_074f8169cc52488faf2581e3e32919d1~mv2.jpg',
        description: 'Set design, art direction, graphic design & visual branding.',
        verifiedOnPage: true
      },
      {
        title: 'Experiential & Activations',
        image: 'https://static.wixstatic.com/media/4ceae7_3832e3ea324c484c9ed4a927d494912e~mv2.png',
        description: 'Crafting immersive brand experiences, product launches, and interactive setups.',
        verifiedOnPage: true
      },
      {
        title: 'Digital & Social Storytelling',
        image: 'https://static.wixstatic.com/media/4ceae7_2027e26c239841e3b774741a4cbb436e~mv2.jpg',
        description: 'Platform-first content that engages audiences across digital channels.',
        verifiedOnPage: true
      },
      {
        title: 'Cloth & Production Design',
        image: 'https://static.wixstatic.com/media/4ceae7_a702fa75264b4143bffd6ef58e7ed329~mv2.png',
        description: 'Set dressing, costume coordination, and textural production design.',
        verifiedOnPage: true
      }
    ]
  },
  {
    pageUrl: 'https://www.amusemacstudio.in/blog',
    pageTitle: 'Cinematic Times',
    category: 'Blog / Journal',
    items: [
      {
        title: 'Unlocking the Benefits of Partnering with Amusemac Studio: Strategic Media Partnerships India',
        image: 'https://static.wixstatic.com/media/4ceae7_b977a18bdd4d4387a5bf1a0fa84e9c00~mv2.png',
        description: "In today's fast-paced digital world, content is no longer just King—it's the entire Kingdom.",
        verifiedOnPage: true
      },
      {
        title: "Why India's Film Production Specialists Stand Out",
        image: 'https://static.wixstatic.com/media/4ceae7_3933d39737314dedad275aa7295e2943~mv2.png',
        description: "India's film industry has evolved dramatically over the last few decades, becoming one of the most dynamic and versatile creative hubs in the world.",
        verifiedOnPage: true
      },
      {
        title: 'Discover the Unique Offerings of Amusemac Studio - Innovative Film Studio India',
        image: 'https://static.wixstatic.com/media/4ceae7_55f90382c4934b7a843798479b624968~mv2.png',
        description: 'In a media landscape crowded with content, only stories that touch the heart and stimulate the mind truly stand out.',
        verifiedOnPage: true
      }
    ]
  },
  {
    pageUrl: 'https://www.amusemacstudio.in/contact-us',
    pageTitle: 'Let\'s Connect',
    category: 'Contact',
    items: [
      {
        title: 'Studio Headquarters',
        description: 'C 304 Shiv Sadan Apartment, Chincholi Bunder, Malad West, Mumbai - 400064',
        credits: 'Phone: +91 87703 82125 / 022 4666 7477 | Email: Contact@amusemacstudio.in / Contact@amusemac.com',
        image: 'https://static.wixstatic.com/media/4ceae7_f9dfb193febe4f349110340871348e50~mv2.jpg',
        verifiedOnPage: true
      }
    ]
  }
];
