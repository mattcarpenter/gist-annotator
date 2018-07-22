'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server({
  port: 3000,
  debug: { request: ['error'] }
});

async function initWebpackTools (middleware, config) {
  await server.register({
    plugin: middleware,
    options: {
      config: config,
      devOptions: {
        logLevel: 'warn',
        publicPath: config.output.publicPath,
        stats: {
          colors: true
        }
      }
    }
  });
}

// Register webpack HMR, fallback to development environment
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  const WebpackConfig = require('./config/webpack.config.js'); // Webpack config
  const HapiWebpackMiddleware = require('./server/plugins/HapiWebpackMiddleware');
  initWebpackTools(HapiWebpackMiddleware, WebpackConfig);
}

server.register({
  plugin: Inert
}).then(() => {
  server.route({
    method: 'GET',
    path: '/assets/{filepath*}',
    config: {
      auth: false,
      cache: {
        expiresIn: 24 * 60 * 60 * 1000,
        privacy: 'public'
      }
    },
    handler: {
      directory: {
        path: path.join(__dirname, '/public/assets/'),
        listing: false,
        index: false
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/build/{filepath*}',
    config: {
      auth: false,
      cache: {
        expiresIn: 24 * 60 * 60 * 1000,
        privacy: 'public'
      }
    },
    handler: {
      directory: {
        path: path.join(__dirname, '/public/build/'),
        listing: false,
        index: false
      }
    }
  });

  // Example api call
  server.route({
    method: 'GET',
    path: '/api/project/{projectName}',
    handler: require('./server/handlers/api/project/get')
  });

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      file: './public/index.html'
    }
  });

  server.route({
    method: 'GET',
    path: '/api/projects',
    handler: require('./server/handlers/api/projects')
  });

  server.route({
    method: 'POST',
    path: '/api/project/create',
    handler: require('./server/handlers/api/project/create'),
    options: {
      validate: {
        payload: require('./server/validators/api/project/create')
      }
    }
  });

  server.start();
});

server.events.on('start', (route) => {
  console.log('Server started');
});

module.exports = server;
