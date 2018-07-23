const dao = require('../../../lib/dao');

module.exports = function (req, h) {
  return new Promise((resolve, reject) => {
    dao.getProjects().then(function (data) {
      resolve({
        success: true,
        projects: data.map((project) => {
          return {
            projectName: project.projectName
          };
        })
      });
    }, function (err) {
      resolve(err);
    });
  });
};
