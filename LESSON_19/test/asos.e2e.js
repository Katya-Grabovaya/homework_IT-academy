import {expect} from 'chai';

describe('Tests for Asos', () => {    

before('should open the website of the ASOS', async() => {
  await browser.url('https://www.asos.com/'); 
})


it('should change the delivery location to UK', async() => {
  const countrySelector = await $('#chrome-header button.breiRmE.TYb4J9A');
  await countrySelector.click();
  const countryListButton = await $('#country');
  await countryListButton.click();
  const chooseUk = await $('//*[@id="country"]/option[text()="United Kingdom"]');
  await chooseUk.click();
  expect (await chooseUk.isSelected()).to.equal(true);
  const saveCountryButton = await $('#chrome-modal-container  button.AlRI892.w3QwoQC').click();
})

  it(`title on search item should be the same as title on pdp`, async () => { 
    const searchElement = await $('#chrome-search');
    await searchElement.click();
    await searchElement.setValue('pullover');
    const buttonForSearch = await $('button.vjmVpyd');
    await buttonForSearch.click();
    const productItems = await $$('#pta-product-205224107-0');
    await productItems[0].waitForClickable();
    const searchItemText = await productItems[0].getText();
    await productItems[0].click();
    expect(await $('h1.jcdpl').getText()).to.equal(searchItemText);
  });

  it('should filltered the search result by Gender: "Unisex" and the result contains "unisex"', async() =>{
    const searchElement = await $('#chrome-search');
    await searchElement.click();
    await searchElement.setValue('jacket');
    const buttonForSearch = await $('button.vjmVpyd');
    await buttonForSearch.click();
    const genderFilterButton = await $('//*[@id="plp"]//*[text()="Gender"]/parent::button[@class="button_eZ0Gy"]');
    await genderFilterButton.waitForClickable();
    await genderFilterButton.click();
    const unisexFilterButton = await $('//*[@id="plp"]//div[text()="Unisex"]');
    await unisexFilterButton.waitForClickable();
    await unisexFilterButton.click();
    const productFiltered = await $('#product-205154554 a.productLink_KM4PI');
    expect(await productFiltered.getText()).to.contain('unisex') 
  })

  it('should go to the "New in" collection after clicking on the "New in" on Top Nav menu and check its title equal "New products"  ', async () => {
    const newInButton = await $('#chrome-sticky-header  button[data-id="1020946c-8949-4e9c-9719-43435002bcd4"]');
    await newInButton.click();
    const titleText = await $('#f44ea221-7a84-41d3-8d75-6ef255f95b3c  span');
    expect(await titleText.getText()).to.equal('NEW PRODUCTS');
})

  it.skip('should add product into bag', async () => {
   const variantSelector = await $('//*[@id="variantSelector"]/option[text()="XS - UK 8 - £22.50"]').click();
   const addToBagButton = await $('#pdp-react-critical-app  button.jAEfQ.LLfrW.Tyz1C');
   await addToBagButton.waitForClickable();
   await addToBagButton.click();
   const bagFilled = await $('#miniBagDropdown button.KH34gk4.TYb4J9A.mSjTvvT');
   await bagFilled.waitForClickable();
   await bagFilled.click();
   expect(await $$('#product-description-sr-cf3029a6-551c-4e13-9eb5-c4e343ba7ef6-0')).to.equal($$('#pta-product-205224107-0').getText());   
  })


 it.skip('should check sign in with invalid data', async() => {
  const accountButton = await $('#myAccountDropdown button.KH34gk4.TYb4J9A.mSjTvvT');
  await accountButton.waitForExist();
  await accountButton.click();
  const signInFieldButton = await $('#myaccount-dropdown span.OWBPpOL.Mlh3INa.FfmKyt0.ZqXYTuz');
  await signInFieldButton.waitForClickable();
  await signInFieldButton.click();
  const emailBox = await $('#EmailAddress');
  await emailBox.setValue('lenakukoyaka@gmail.com');
  const passwordBox = await $('#Password');
  await passwordBox.setValue('123456');
  const signInButton = await $('#signin').click();
  expect(await $('#app span.GoDYlltMMw_1r6TUZRef').getText()).to.not.equal('MY ACCOUNT');
})

});











