import { expect } from 'chai';
import homePage from '../pageObjects/homePage.js';
import searchComponents from "../pageComponents/searchComponents.js";
import searchResultPage from '../pageObjects/searchResultPage.js';
import productPage from '../pageObjects/productPage.js';
import savePage from '../pageObjects/savePage.js';


describe('Tests for Asos Product Page', () => {    

beforeEach('should open the website of the ASOS and find a Product Item', async() => {
  await homePage.navigate('https://www.asos.com/'); 
  await searchComponents.searchByText('pullover');
})


it('should get additional information about product, which should necessarily contains Product Code', async() => {
    await searchResultPage.selectProduct();
    await productPage.closeDeliveryWindow();
    await homePage.click(productPage.productDetailsButton);
    await productPage.productDetailsList.waitForDisplayed({timeout: 35000})
    expect(await homePage.getText(productPage.productDetailsList)).to.include('Product Code');
})

it('should switch to another product from the recommended ones', async () => {
    const searchItemText = await searchResultPage.selectProduct();
    await homePage.click(productPage.recommendedProduct);
    expect (await homePage.getText(productPage.recommendedProductTitle)).to.not.equal(searchItemText)
})

it('should find product item and add it to save', async () => {
    const searchItemText = await searchResultPage.selectProduct();
    const productInSaveText = await savePage.addToSave();
    expect(productInSaveText).to.equal(searchItemText);
})

})