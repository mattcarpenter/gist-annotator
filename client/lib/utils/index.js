module.exports = {
  calculatePixelSeconds: calculatePixelSeconds
};

function calculatePixelSeconds (captions, heights) {
  let pixelSeconds = 0;

  for (let i = 0; i < captions.length; i++) {
    let height = heights[i];
    let nextTime = (captions[i + 1] || { time: 0 }).time;
    let timeDelta = nextTime ? nextTime - captions[i].time : 1;
    pixelSeconds = Math.max(height / timeDelta, pixelSeconds);
  }

  return pixelSeconds;
};
