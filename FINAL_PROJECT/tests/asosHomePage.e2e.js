import { expect } from "chai";
import homePage from "../pageObjects/homePage.js";
import header from "../pageComponents/header.js";

describe("Tests for Asos Home Page", () => {
  beforeEach("should open the website of the ASOS", async () => {
    await homePage.navigate("https://www.asos.com/");
  });

  it("should change the delivery location to UK", async () => {
    await header.changeCountryForDelivery("United Kingdom");
    expect(await header.UK.isSelected()).to.equal(true);
  });

  it('should go to the "AS SEEN ON ME" page and check it title is appropriate', async () => {
    await homePage.goToPageByNameFromMainFloor(homePage.womenFloorButton,homePage.seenOnMeWomanButton);
    const seenOnMePageTitle = await homePage.getText(homePage.seenOnMeWomanPageTitle);
    expect(seenOnMePageTitle).to.equal("AS SEEN ON ME");
  });

  it('should check that breadcrumbs on Sale Woman Page contain "Woman", "Sale"', async () => {
    await homePage.goToPageByNameFromMainFloor(homePage.womenFloorButton,homePage.saleWomanButton);
    const breadcrumbsOnWomanSalePageText = await homePage.getText(homePage.breadcrumbsOnWomanSalePage);
    expect(breadcrumbsOnWomanSalePageText).to.include("Woman" && "Sale");
  });
});
