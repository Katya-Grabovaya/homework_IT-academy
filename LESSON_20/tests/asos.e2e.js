import { expect } from 'chai';
import homePage from '../pageObjects/homePage.js';
import searchComponent from "../pageObjects/pageComponents/searchComponents.js";
import searchPage from '../pageObjects/searchPage.js';
import filterPage from '../pageObjects/filterPage.js';
import filterComponents from "../pageObjects/pageComponents/filterComponents.js";
import newInPage from '../pageObjects/newInPage.js';


describe('Tests for Asos', () => {    

before('should open the website of the ASOS', async() => {
  await homePage.navigate('https://www.asos.com/'); 
})

it('should change the delivery location to UK', async() => {
  await homePage.changeCountry();
  await homePage.chooseCountryFromList()
  const chooseUk = await $('//*[@id="country"]/option[text()="United Kingdom"]');
  await chooseUk.click();
  expect (await chooseUk.isSelected()).to.equal(true);
  await homePage.saveSelectedCountry();
})

  it(`title on search item should be the same as title on pdp`, async () => { 
    await searchComponent.searchByText('pullover');
    const searchItemText = await searchComponent.selectProductByNumber(1);
    expect(await searchPage.getText(searchPage.productTitle)).to.equal(searchItemText);
  });


  it('should filltered the search result by Gender: "Unisex" and the result contains "unisex"', async() =>{
    await searchComponent.searchByText('jacket');
    await filterPage.click(filterComponents.genderFilterButton);
    await filterPage.click(filterPage.unisexFilterButton);
    expect(await filterPage.getText(filterPage.productFiltered)).to.contain('unisex') 
  })

  it('should go to the "New in" collection after clicking on the "New in" on Top Nav menu and check its title equal "New products"  ', async () => {
    await newInPage.click(newInPage.newInButton);
    expect(await newInPage.getText(newInPage.titleText)).to.equal('NEW PRODUCTS');
})

});