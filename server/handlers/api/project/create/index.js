const dao = require('../../../../lib/dao');
const srt = require('../../../../lib/srt');

module.exports = function (req, h) {
  return new Promise((resolve, reject) => {

    const captions = srt.parse(req.payload.englishSrt);
    resolve(JSON.stringify(captions));

    return;
    dao.createProject(
      req.payload.projectName,
      req.payload.englishSrt,
      req.payload.japaneseSrt
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
