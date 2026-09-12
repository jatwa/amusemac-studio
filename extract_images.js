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

async function getImages() {
  const allMedia = [];

  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      
      // Match Wix image URLs and data attributes
      const matches = html.match(/https:\/\/static\.wixstatic\.com\/media\/[a-zA-Z0-9_%~.-]+/gi) || [];
      const uriMatches = html.match(/wix:image:\/\/v1\/[a-zA-Z0-9_%~.-]+#originWidth=\d+&originHeight=\d+/gi) || [];
      const filenames = html.match(/4ceae7_[a-zA-Z0-9]+\.[a-zA-Z0-9]+/gi) || [];

      // Extract raw image items and context
      // Search for JSON blocks or data containing media
      const contextMatches = [...html.matchAll(/"uri":"(4ceae7_[^"]+)"[^}]*"alt":"([^"]*)"/gi)];
      for (const cm of contextMatches) {
        allMedia.push({
          uri: cm[1],
          alt: cm[2],
          url: 'https://static.wixstatic.com/media/' + cm[1],
          page: url
        });
      }

      // Also search title and description in Wix elements
      const titleMatches = [...html.matchAll(/"uri":"(4ceae7_[^"]+)"[^}]*"title":"([^"]*)"/gi)];
      for (const tm of titleMatches) {
        allMedia.push({
          uri: tm[1],
          title: tm[2],
          url: 'https://static.wixstatic.com/media/' + tm[1],
          page: url
        });
      }

      for (const m of matches) {
        if (!m.endsWith('.js') && !m.endsWith('.css')) {
          allMedia.push({
            url: m,
            page: url
          });
        }
      }

    } catch (e) {
      console.error('Error fetching ' + url, e.message);
    }
  }

  // Remove duplicates and group by URL
  const uniqueMap = new Map();
  for (const item of allMedia) {
    // Normalize URL
    let cleanUrl = item.url;
    if (cleanUrl.includes('/v1/')) {
      cleanUrl = cleanUrl.split('/v1/')[0];
    }
    if (!uniqueMap.has(cleanUrl)) {
      uniqueMap.set(cleanUrl, {
        url: cleanUrl,
        pages: new Set(),
        alt: item.alt || item.title || ''
      });
    }
    uniqueMap.get(cleanUrl).pages.add(item.page);
    if (!uniqueMap.get(cleanUrl).alt && (item.alt || item.title)) {
      uniqueMap.get(cleanUrl).alt = item.alt || item.title;
    }
  }

  const result = Array.from(uniqueMap.values()).map(v => ({
    url: v.url,
    alt: v.alt,
    pages: Array.from(v.pages)
  }));

  console.log(JSON.stringify(result, null, 2));
}

getImages();