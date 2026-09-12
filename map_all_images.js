const fs = require('fs');

const urls = [
  'https://www.amusemacstudio.in/',
  'https://www.amusemacstudio.in/our-canvas',
  'https://www.amusemacstudio.in/s-projects-side-by-side',
  'https://www.amusemacstudio.in/corporate-films',
  'https://www.amusemacstudio.in/music-videos',
  'https://www.amusemacstudio.in/s-projects-side-by-side-1',
  'https://www.amusemacstudio.in/flim-webseries',
  'https://www.amusemacstudio.in/short-films',
  'https://www.amusemacstudio.in/script-to-screen',
  'https://www.amusemacstudio.in/the-journey',
  'https://www.amusemacstudio.in/blog',
  'https://www.amusemacstudio.in/contact-us'
];

async function run() {
  const images = [];

  for (const url of urls) {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();

    // Match all srcSet or src with static.wixstatic.com/media/
    const matches = [...html.matchAll(/https:\/\/static\.wixstatic\.com\/media\/([a-zA-Z0-9_%~.-]+)(?:\/v1\/[^\s"'<>\)]+)?/gi)];
    for (const m of matches) {
      const id = m[1];
      const full = m[0];
      
      // Look for original filename in the URL path (e.g. /file_0000... or /kuldeep_edited.jpg)
      const origMatch = full.match(/\/([^/]+\.(?:jpg|jpeg|png|webp))/i);
      const origName = origMatch ? decodeURIComponent(origMatch[1]) : '';
      
      images.push({
        id,
        origName,
        fullUrl: `https://static.wixstatic.com/media/${id}`,
        page: url
      });
    }
  }

  const map = new Map();
  for (const item of images) {
    if (!map.has(item.id)) {
      map.set(item.id, {
        id: item.id,
        origNames: new Set(),
        pages: new Set(),
        url: item.fullUrl
      });
    }
    if (item.origName) map.get(item.id).origNames.add(item.origName);
    map.get(item.id).pages.add(item.page);
  }

  const output = Array.from(map.values()).map(v => ({
    id: v.id,
    url: v.url,
    names: Array.from(v.origNames),
    pages: Array.from(v.pages)
  }));

  console.log(JSON.stringify(output, null, 2));
}

run();