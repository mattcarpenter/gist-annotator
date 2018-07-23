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
      let number = parseInt(lines[i], 10);
      let timeRange = lines[i + 1];
      let capLines = lines.slice(i + 2, seekEndOfCaption(lines, i));
      captions.push({
        lineNumber: number,
        timeRange: null,// timeRange,
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
