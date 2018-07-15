module.exports = {
  calculatePixelSeconds: calculatePixelSeconds
};

function calculatePixelSeconds (captions, heights) {
  let pixelSeconds = 0;

  for (let i = 0; i < captions.length; i++) {
    const height = heights[i];
    const nextTime = (captions[i + 1] || { time: 0 }).time;
    const timeDelta = nextTime ? nextTime - captions[i].time : 1;
    pixelSeconds = Math.max(height / timeDelta, pixelSeconds);
  }

  return pixelSeconds;
};
