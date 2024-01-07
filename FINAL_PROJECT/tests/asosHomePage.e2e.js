import { expect } from 'chai';
import homePage from '../pageObjects/homePage.js';
import header from '../pageComponents/header.js';


describe('Tests for Asos Home Page', () => {  

beforeEach('should open the website of the ASOS', async() => {
    await homePage.navigate('https://www.asos.com/'); 
})

it('should change the delivery location to UK', async() => {
    await header.changeCountryForDelivery();
    await header.chooseCountry(header.UK);
    expect (await header.UK.isSelected()).to.equal(true);
})


})