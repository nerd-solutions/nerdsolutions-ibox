Package.describe({
  name: 'nerd.solutions:ibox',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Ibox controls',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nerd-solutions/nerdsolutions-ibox.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'ui',
    'twbs:bootstrap',
    'templating',
    'underscore',
    'coffeescript',
    'jquery',
    'less',
    'fortawesome:fontawesome',
    'mquandalle:jade'
    ],'client');

  api.addFiles([
    'lib/ibox.jade',
    'lib/ibox.coffee',
    'lib/ibox.less'
    ],'client');

  // symbol exports
  api.export('IBOX');
  // api.addFiles('lib/ibox-collapse.jade','client');
  // api.addFiles('lib/ibox-collapse.coffee','client');
  // api.addFiles('lib/ibox.less','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nerd.solutions:ibox');
  api.addFiles('ibox-tests.js');
});
