// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('../../config/webpack.config');
var projectRoot = path.resolve(__dirname, '../../');

var webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map'
});

// no need for app entry during tests
delete webpackConfig.entry;

webpackConfig.module.rules = webpackConfig.module.rules || [];
webpackConfig.module.rules.unshift({
  test: /\.js$/,
  include: path.resolve(projectRoot, 'client')
});

webpackConfig.module.rules.some(function (loader, i) {
  if (loader.loader === 'babel') {
    loader.include = path.resolve(projectRoot, 'test/unit');
    return true;
  }
});

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    // browsers: ['ChromeHeadless'],
    browsers: ['PhantomJS', 'PhantomJS_custom'],
    frameworks: ['mocha', 'sinon-stub-promise', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    // you can define custom flags
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          }
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [{
        type: 'lcov',
        subdir: '.'
      }, {
        type: 'text-summary'
      }]
    },
    client: {
      captureConsole: true
    },
    singleRun: true
  });
};
