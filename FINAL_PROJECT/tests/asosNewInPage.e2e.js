import { expect } from 'chai';
import homePage from '../pageObjects/homePage.js';
import topMenu from '../pageComponents/topMenu.js';
import newInPage from '../pageObjects/newInPage.js';


describe('Tests for Asos New In Product Page', () => { 

beforeEach('should open the website of the ASOS', async() => {
    await homePage.navigate('https://www.asos.com/women/'); 
})

it('should go to the "New in" collection after clicking on the "New in" on Top Nav menu and check its title equal "New products"  ', async () => {
    await homePage.click(topMenu.newInButton);
    expect(await homePage.getText(newInPage.titleText)).to.equal('NEW PRODUCTS');
})

})