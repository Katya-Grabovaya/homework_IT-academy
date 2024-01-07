import { expect } from 'chai';
import homePage from '../pageObjects/homePage.js';
import searchComponents from "../pageComponents/searchComponents.js";
import filterComponents from '../pageComponents/filterComponents.js';
import filterPage from '../pageObjects/filterPage.js';


describe('Tests for Asos Filter Page', () => { 

beforeEach('should open the website of the ASOS', async() => {
    await homePage.navigate('https://www.asos.com/'); 
})


it('should filltered the search result by Gender: "Unisex" and the result contains "unisex"', async() =>{
    await searchComponents.searchByText('jacket');
    await filterComponents.filterByGender(filterComponents.unisexFilterButton)
    expect(await filterPage.getText(filterPage.productFiltered)).to.contain('unisex') 
})

})