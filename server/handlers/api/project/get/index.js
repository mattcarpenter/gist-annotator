const dao = require('../../../../lib/dao');

module.exports = function (req, h) {
  return new Promise((resolve, reject) => {
    console.log(req);
    dao.getProject(req.params.projectName).then(function (data) {
      resolve({
        success: true,
        project: data
      });
    }, function (err) {
      resolve(err);
    });
  });
};
