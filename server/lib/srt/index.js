const msPattern = /(.+?)[,:](\d+?)$/;
const moment = require('moment');

module.exports = {
  parse: parse
};

/**
 * Parses an SRT document
 *
 * @param {String} srt
 */
function parse (srt) {
  const captions = [];
  console.log('inside parse');
  const lines = srt.split('\n').filter((line) => {
    return line !== '';
  });

  let i = 0;
  while (i < lines.length) {
    if (isStart(lines, i)) {
      const number = parseInt(lines[i], 10);
      const timeRange = lines[i + 1];
      const capLines = lines.slice(i + 2, seekEndOfCaption(lines, i));

      // parse timeRange
      const timeRangeParts = timeRange.split('-->').map((part) => {
        return part.trim();
      });
      const startMatch = msPattern.exec(timeRangeParts[0]);
      const endMatch = msPattern.exec(timeRangeParts[1]);
      const startBase = startMatch[1];
      const endBase = endMatch[1];
      const startDuration = moment.duration(startBase);
      const endDuration = moment.duration(endBase);
      startDuration.add(parseInt(startMatch[2], 10), 'milliseconds');
      endDuration.add(parseInt(endMatch[2], 10), 'milliseconds');

      captions.push({
        lineNumber: number,
        startRaw: timeRangeParts[0],
        endRaw: timeRangeParts[1],
        start: startDuration.as('milliseconds'),
        end: endDuration.as('milliseconds'),
        text: capLines.join('\n')
      });
    }
    i++;
  }

  return captions;
};

function isNumber (val) {
  return !isNaN(parseInt(val, 10));
}

function isTimeRange (val) {
  return typeof val === 'string' && val.indexOf(' --> ') > -1;
}

function isStart (lines, index) {
  return isNumber(lines[index]) && isTimeRange(lines[index + 1]);
}

function seekEndOfCaption (lines, startIndex) {
  let end = lines.length;
  for (let i = startIndex + 1; i < end; i++) {
    if (isStart(lines, i)) {
      end = i;
    }
  }
  return end;
}
