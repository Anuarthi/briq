exports.config = {
    directconnect: true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
      'new_window.spec.js',
      'checkbox.js'
    ],
    capablities:{
      browserName: 'chrome'
    },
    onPrepare: function() {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'src/allure-results'
      }));
    }
  }
