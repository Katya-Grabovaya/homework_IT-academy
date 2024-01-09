import { expect,} from 'chai';
import homePage from '../pageObjects/homePage.js';
import topMenu from '../pageComponents/topMenu.js';
import salePage from '../pageObjects/salePage.js';
import productPage from '../pageObjects/productPage.js'




describe('Tests for Asos Sale Page', () => { 

before('should open the website of the ASOS', async() => {
    await homePage.navigate('https://www.asos.com/women/'); 
})

it('should go to the "Sale" collection after clicking on the "Sale" on Top menu and check its title equal "SHOP BY PRODUCT"  ', async () => {
    await homePage.click(topMenu.saleButton);
    expect(await homePage.getText(salePage.mainTitleText)).to.equal('SHOP BY PRODUCT');
})

it('the any menu line (except 32) should include "SALE"', async() => {
    const lineText = await salePage.chooseLineFromMenu(9);
    expect(lineText).to.include('SALE');
})

it('the 32 menu line should be "A-Z of brands" ', async() => {
    const lineText = await salePage.chooseLineFromMenu(32);
    expect(lineText).to.include('A-Z of brands');
})

it('should check that item in "under 10£" section contains "Now",which means that item is on sale', async() => {
    await homePage.click(salePage.under10Button);
    const priceInText = await salePage.checkSale();
    expect(priceInText).to.include('Now');
})

it('should check if there is review on product', async() => {
    await productPage.reviewTitle.waitForExist(10000);
    const reviewTitle = await homePage.getText(productPage.reviewTitle)
    expect(reviewTitle).to.equal('REVIEWS')
})

it('should go to the TopShop Sale Page with title "Topshop"', async() => {
    await salePage.switchToAnySalePage(salePage.topshopButton);
    await salePage.topshopTitle.waitForExist(10000);
    const pageTitle = await salePage.topshopTitle.getText();
    expect(pageTitle).to.equal('Topshop')
})



})