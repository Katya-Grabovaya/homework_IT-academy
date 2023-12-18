const {Builder, By, until} = require ('selenium-webdriver');
const {expect} = require('chai');



describe('ChromeDriver tests', () => {
    let driver;
    before(async () => {
      driver = new Builder().forBrowser('chrome').build();
      await driver.manage().window().setSize({width: 1960, height: 1280});
    });

    beforeEach(async () => {
      await driver.get('https://chromedriver.chromium.org/home');
    });
  
    after(async () => {
      await driver.quit();
    })

    it('should check that main title of "ChromeDriver" is equal to "ChromeDriver", highlight "Chrome Extensions" and check that it is equal to "Chrome Extensions"', async () => {
        const mainTitle = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]'));
        expect(await mainTitle.getText()).to.equal('ChromeDriver');
        const chromeExtensionsButton = await driver.findElement(By.css('#WDxLfe > ul > li:nth-child(3)  a'));
        await chromeExtensionsButton.click();
        const titleOFExtensions = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]'));
        await driver.executeScript("arguments[0].style.background='yellow'", titleOFExtensions);       
        expect(await titleOFExtensions.getText()).to.equal('Chrome Extensions');
    })


    it('should check that the first result link contains the "driver" by searching for "driver"', async () => {
        const searchButton = await driver.findElement(By.css('.U26fgb.mUbCce.fKz7Od.iWs3gf.Wdnjke.M9Bg4d'));
        await searchButton.click();
        const searchField = await driver.wait(until.elementLocated(By.css('div.Xb9hP > input')), 5000);
        await searchField.sendKeys('driver');
        const buttonToStartSearch = await driver.findElement(By.css('.A37UZe.qgcB3c.iHd5yb'))
        await buttonToStartSearch.click();
        const searchFirstResult = await driver.wait(until.elementLocated(By.css('#yDmH0d  div.lZsZxe > div:nth-child(1) div.yDWqEe > b')), 5000);
        expect(await searchFirstResult.getText()).to.equal('driver');
      })
  
})  


