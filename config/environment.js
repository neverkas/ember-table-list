/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-table-list2',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['contentSecurityPolicy'] = {
          'default-src': "'none'",
          'script-src': "'self' http://localhost:4200/ http://localhost:35729",
          'font-src': "'self' http://localhost:4200/",
          'connect-src': "'self' http://localhost:4200/ ws://localhost:35729 http://localhost:1337/",
          'img-src': "'self' http://localhost:4200/",
          'style-src': "'self' http://localhost:4200/ 'unsafe-inline'",
          'media-src': "'self' http://localhost:4200/"
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
