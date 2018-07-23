const DEFAULT_PIXEL_SECONDS = 50;

module.exports = {
  calculatePixelSeconds: calculatePixelSeconds
};

function calculatePixelSeconds (captions, heights) {
  let pixelSeconds = 0;

  for (let i = 0; i < captions.length; i++) {
    const height = heights[i];
    const nextTime = (captions[i + 1] || { time: 0 }).start / 1000;
    const timeDelta = nextTime ? nextTime - (captions[i].start / 1000) : 1;

    // Things get really broken when there is no time delta between two adjacent captions.
    // pixelSeconds ends up becoming infinity in this case. TODO - fix.
    if (timeDelta) {
      pixelSeconds = Math.max(height / timeDelta, pixelSeconds);
    }
  }

  return pixelSeconds || DEFAULT_PIXEL_SECONDS;
};
