const dao = require('../../../../lib/dao');
const srt = require('../../../../lib/srt');
const kuroshiro = require('kuroshiro');
const wanakana = require('wanakana');

kuroshiro.init();

module.exports = function (req, h) {
  return new Promise((resolve, reject) => {
    const japaneseCaptions = srt.parse(req.payload.japaneseSrt);
    japaneseCaptions.forEach((caption) => {
      const input = caption.text;
      caption.text = kuroshiro.convert(input, {
        mode: 'furigana'
      });
      caption.tokens = wanakana.tokenize(input);
    });

    const englishCaptions = srt.parse(req.payload.englishSrt);

    dao.createProject(
      req.payload.projectName,
      req.payload.englishSrt,
      req.payload.japaneseSrt,
      englishCaptions,
      japaneseCaptions
    ).then(function () {
      resolve({
        success: true,
        project: req.payload
      });
    }, function (err) {
      resolve({
        success: false,
        error: err
      });
    });
  });
};
