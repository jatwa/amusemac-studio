const fs = require('fs');

async function inspectPage(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();

  console.log(`\n================== ${url} ==================`);

  // Look for image data in Wix script/json blobs
  const wixImages = [...html.matchAll(/"uri":"(4ceae7_[^"]+)"[^}]*/gi)];
  for (const match of wixImages) {
    const chunk = match[0];
    console.log(chunk);
  }

  // Look for any image tags or background images
  const bgMatches = [...html.matchAll(/background-image:[^;]*static\.wixstatic\.com\/media\/([a-zA-Z0-9_%~.-]+)/gi)];
  for (const bg of bgMatches) {
    console.log('BG:', bg[1]);
  }
}

async function run() {
  await inspectPage('https://www.amusemacstudio.in/');
  await inspectPage('https://www.amusemacstudio.in/script-to-screen');
  await inspectPage('https://www.amusemacstudio.in/the-journey');
  await inspectPage('https://www.amusemacstudio.in/our-canvas');
}
run();