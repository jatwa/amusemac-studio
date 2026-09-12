const fs = require('fs');

async function searchMedia(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();

  console.log(`\n================== ${url} ==================`);
  
  // Find all matches with surrounding context (100 chars before and after)
  const regex = /static\.wixstatic\.com\/media\/([^\s"'<>\),]+)/gi;
  let match;
  const found = new Set();
  while ((match = regex.exec(html)) !== null) {
    const imgName = match[1].split('/')[0];
    if (!found.has(imgName)) {
      found.add(imgName);
      const start = Math.max(0, match.index - 120);
      const end = Math.min(html.length, match.index + match[0].length + 120);
      const context = html.substring(start, end).replace(/\s+/g, ' ');
      console.log(`IMAGE: ${imgName}\nCONTEXT: ${context}\n`);
    }
  }
}

async function run() {
  await searchMedia('https://www.amusemacstudio.in/');
  await searchMedia('https://www.amusemacstudio.in/script-to-screen');
  await searchMedia('https://www.amusemacstudio.in/the-journey');
  await searchMedia('https://www.amusemacstudio.in/our-canvas');
}
run();