const dao = require('../../../lib/dao');

module.exports = function (req, h) {
  return new Promise((resolve, reject) => {
    dao.getProjects().then(function (data) {
      resolve({
        projects: data
      });
    }, function (err) {
      resolve(err);
    });
  });
};
