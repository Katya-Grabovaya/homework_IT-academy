import { expect } from 'chai';
import homePage from '../pageObjects/homePage.js';
import footer from '../pageComponents/footer.js';
import helpPage from '../pageObjects/helpPage.js';


describe('Tests for Asos Customer Help Page', () => { 

beforeEach('should open the website of the ASOS and open Help Page', async() => {
    await homePage.navigate('https://www.asos.com/');
    await homePage.click(footer.helpButton); 
})
it('should switch to Customer Help Page and check title to equal "Customer care"', async() => {
    const pageTitle = await homePage.getText(helpPage.helpPageTitle);
    expect(pageTitle).to.equal('CUSTOMER CARE')
})

it('every search result should contain search query', async() => {
    await helpPage.searchHelpByText('return');
    const searchHelpText = await homePage.getText(helpPage.searchResults);
    expect(searchHelpText).to.contain('return')
})

it('should switch to "Contact us Page" to virtual assistant', async() => {
    await homePage.click(helpPage.contactUsButton)
    const getInTouchPageTitle = await helpPage.checkVirtualAssistantWork()
    expect(getInTouchPageTitle).to.equal('Virtual Assistant' || 'Our chat team are unavailable right now – please check back at 07:00 when they’re here to chat. For 24/7 support, please visit our Help Pages to find answers to your questions and receive instant help.')
})


})