const { test, expect } = require('@playwright/test');
const Base = require("../pageObjects/base");
const SearchPage = require("../pageObjects/searchPage");
const SavePage = require('../pageObjects/savePage');
const MainPage = require('../pageObjects/mainPage');
const DeliveryPage = require('../pageObjects/deliveryPage');


test.describe('Tests for Asos', function () {
  let base;
  let searchPage;
  let savePage;
  let mainPage;
  let deliveryPage;

  test.beforeEach(async ({page}) => {
    base = new Base(page);
    searchPage = new SearchPage(page);
    savePage = new SavePage(page);
    mainPage = new MainPage(page);
    deliveryPage = new DeliveryPage(page);
    await base.navigate('https://www.asos.com/');
    await searchPage.searchByText('dresses');
    await searchPage.selectProduct();
  })

  test('should find product item and add it to save', async ({page}) => {
    await savePage.addToSave();
    expect(await savePage.productInSaveText).toEqual(searchPage.searchItemText);
  })

  test('should get additional information about product, which should necessarily contains Product Code', async({page})=>{
    await mainPage.productDetailsButton.click();
    const productDetailsText = await mainPage.productDetailsList.innerText();
    expect(productDetailsText).toContain('Product Code');
  })

  test('should switch to another product from the recommended ones', async ({page}) => {
    await mainPage.recommendedProduct.click();
    expect (await mainPage.recommendedProductTitle.innerText()).not.toEqual('Whistles Annie sparkle knit dress in forest green')
  })


  test('should switch to delivery page and check its title to equal "ASOS Delivery | Free & Next-Day Delivery Info | ASOS"', async({page}) => {
    const pageTitle = await deliveryPage.opendeliveryPage();
    expect (pageTitle).toEqual('ASOS Delivery | Free & Next-Day Delivery Info | ASOS')
  })



})