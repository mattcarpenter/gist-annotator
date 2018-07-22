const dao = require('../../../../lib/dao');

module.exports = function (req, h) {
  return new Promise((resolve, reject) => {
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
