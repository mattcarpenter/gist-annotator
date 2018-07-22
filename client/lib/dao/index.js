import axios from 'axios';

export default {
  getProjects: getProjects,
  createProject: createProject,
  getProject: getProject
};

function getProjects () {
  return new Promise((resolve, reject) => {
    axios.get('/api/projects').then((response) => {
      if (response.data.success) {
        resolve(response.data);
      } else {
        reject(response.data);
      }
    }, (response) => {
      reject(response.data);
    });
  });
}

function getProject (projectName) {
  return new Promise((resolve, reject) => {
    axios.get('/api/project/' + projectName).then((response) => {
      if (response.data.success) {
        resolve(response.data);
      } else {
        reject(response.data);
      }
    }, (response) => {
      reject(response.data);
    });
  });
}

function createProject (projectName, englishSrt, japaneseSrt) {
  return new Promise((resolve, reject) => {
    axios.post('/api/project/create', {
      projectName: projectName,
      englishSrt: englishSrt,
      japaneseSrt: japaneseSrt
    }).then((response) => {
      if (response.data.success) {
        resolve(response.data);
      } else {
        reject(response.data);
      }
    }, (response) => {
      reject(response.data);
    });
  });
}
