const {Builder, By, until, Key } = require ('selenium-webdriver');
const {expect} = require('chai');

describe('Chrome searching tests', () => {
    let driver;
    before(async () => {
      driver = new Builder().forBrowser('chrome').build();
      await driver.manage().window().setSize({width: 1960, height: 1280});
    });

    after(async () => {
      await driver.quit();
    })

    it('should check that the first result link contains the "driver" by serching for "driver"', async () => {
        await driver.get('https://www.google.com/');
        const searchField = await driver.findElement(By.css('#APjFqb'));
        await searchField.sendKeys('driver', Key.ENTER);
        const searchFirstResult = await driver.wait(until.elementLocated(By.css('#rso > div:nth-child(1)   em')), 5000);
        expect(await searchFirstResult.getText()).to.equal('driver');
      })
  
})  