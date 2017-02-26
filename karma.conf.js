//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-spotify/dist/angular-spotify.min.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
      'node_modules/angular-module-touch/angular-touch.js',

      'lib/ng-tags-input.min.js',
      'lib/cardflow.min.js',

      'app/music-search/main.js',
      'app/music-search/controller/controller.js',
      'app/music-search/directive/directive.js',
      'app/music-search/factory/factory.js',
      'app/music-search/route/route.js',

      'app/music-search/test/test.js',
      'app/app.js',

    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
