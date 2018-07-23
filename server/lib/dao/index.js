const AWS = require('aws-sdk');
const config = require('../../../config/server');

AWS.config.update({ region: config.aws.region });
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
  getProjects: getProjects,
  createProject: createProject,
  getProject: getProject
};

/**
 * Gets all projects
 *
 * @returns {Promise}
 */
function getProjects () {
  const params = {
    TableName: config.db.table
  };

  return new Promise((resolve, reject) => {
    docClient.scan(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Items);
      }
    });
  });
};

/**
 * Gets a single project
 *
 * @returns {Promise}
 */
function getProject (projectName) {
  const params = {
    TableName: config.db.table,
    Key: {
      projectName: projectName
    }
  };

  return new Promise((resolve, reject) => {
    docClient.get(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data.Item);
    });
  });
};

function createProject (projectName, englishSrt, japaneseSrt, englishCaptions) {
  const getParams = {
    TableName: config.db.table,
    Key: {
      projectName: projectName
    }
  };

  return new Promise((resolve, reject) => {
    docClient.get(getParams, (getErr, getData) => {
      if (getErr) {
        return reject(getErr);
      }

      if (getData.Item) {
        return reject({
          message: `Project with name '${projectName}' already exists.`
        });
      }

      const putParams = {
        TableName: config.db.table,
        Item: {
          projectName: projectName,
          englishSrt: englishSrt,
          japaneseSrt: japaneseSrt,
          englishCaptions: englishCaptions
        }
      };

      docClient.put(putParams, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });
}
