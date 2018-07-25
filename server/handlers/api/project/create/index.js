const dao = require('../../../../lib/dao');
const srt = require('../../../../lib/srt');
const kuroshiro = require('kuroshiro');
const wanakana = require('wanakana');

kuroshiro.init();

module.exports = function (req, h) {
  return new Promise((resolve, reject) => {
    const japaneseCaptions = srt.parse(req.payload.japaneseSrt).map((caption) => {
      caption.tokens = wanakana.tokenize(caption.text).map((token) => {
        return kuroshiro.convert(token, {
          mode: 'furigana'
        });
      });
      delete caption.text;
      return caption;
    });

    const englishCaptions = srt.parse(req.payload.englishSrt).map((caption) => {
      caption.tokens = caption.text.split(' ');
      delete caption.text;
      return caption;
    });

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
