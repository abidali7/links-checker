exports.config = {

    baseUrl: 'https://www.cypress.io/',  
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['./e2e/specs/**/*.spec.js'],

    suites: {
        login: './e2e/specs/login/*.spec.js',
        sanity: './e2e/specs/sanity/*.spec.js',
        broken_links: './e2e/specs/broken_links/*.spec.js',
        smoke: './e2e/specs/smoke/*.spec.js',
        performance: './e2e/specs/performance/*.spec.js',
        regression: './e2e/specs/regression/*.spec.js'
    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },
    
    afterLaunch: async () => {
        
        /*
        const allure = require('./node_modules/allallure-commandline');
        const generation = allure(['generate', 'allure-results']);
        generation.on('exit', (exitCode) => {
            console.log('Generation is finished with code:', exitCode);
        });
        */
    },

    onPrepare: async () => {
        
        const AllureReporter = require('jasmine-allure-reporter/index.js');
        const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

        await jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true }}));
        await jasmine.getEnv().addReporter(new AllureReporter({ resultsDir: 'allure-results' }));
        
        await jasmine.getEnv().beforeAll(() => {
            browser.ignoreSynchronization = true;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
        });

        await jasmine.getEnv().afterAll(() => {
            browser.manage().deleteAllCookies();
        });

        await jasmine.getEnv().beforeEach(async () => {
            await browser.get(browser.baseUrl);
        });

        await jasmine.getEnv().afterEach(async() => {
            
            await browser.takeScreenshot().then((png) => {
                allure.createAttachment('Screenshot', () => {
                return Buffer.from(png, 'base64')}, 'image/png')();
            });
        });
    }
}