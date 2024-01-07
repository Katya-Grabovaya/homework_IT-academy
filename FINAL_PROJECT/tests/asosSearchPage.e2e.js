import { expect } from 'chai';
import homePage from '../pageObjects/homePage.js';
import searchComponents from "../pageComponents/searchComponents.js";
import searchResultPage from '../pageObjects/searchResultPage.js';


describe('Tests for Asos Search Page', () => {    

beforeEach('should open the website of the ASOS', async() => {
  await homePage.navigate('https://www.asos.com/'); 
})

it(`title on search item should be the same as title on pdp`, async () => { 
  await searchComponents.searchByText('pullover');
  const searchItemText = await searchResultPage.selectProduct();
  expect(await searchResultPage.getText(searchResultPage.productTitle)).to.equal(searchItemText);
});

});