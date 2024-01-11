import allureReporter from "@wdio/allure-reporter";

export const config = {
  runner: "local",
  specs: ["./tests/**/*.js"],


  maxInstances: 4,

  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--disable-gpu",
          "--incognito",
          "window-size=1920,1080",
          "--no-sandbox",
          "enable-automation",
          "disable-notifications",
        ],
      },
    },
  ],

  logLevel: "error",

  bail: 0,

  baseUrl: "http://localhost",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    "spec",
    [
      "allure",
      { outputDir: "allure-results", disableWebdriverStepsReporting: true },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await browser.takeScreenshot();
      await allureReporter.addAttachment(
        `Failed test URL - `,
        await browser.getUrl(),
        "text/plain"
      );
    }
  },
};
