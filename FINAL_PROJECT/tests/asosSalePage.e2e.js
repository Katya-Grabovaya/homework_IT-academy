import { expect } from "chai";
import homePage from "../pageObjects/homePage.js";
import topMenu from "../pageComponents/topMenu.js";
import salePage from "../pageObjects/salePage.js";
import productPage from "../pageObjects/productPage.js";

describe("Tests for Asos Sale Page", () => {
  beforeEach("should open the website of the ASOS", async () => {
    await homePage.navigate("https://www.asos.com/women/");
  });

  it('should go to the "Sale" collection after clicking on the "Sale" on Top menu and check its title equal "SHOP BY PRODUCT"  ', async () => {
    await homePage.click(topMenu.saleButton);
    expect(await homePage.getText(salePage.mainTitleText)).to.equal("SHOP BY PRODUCT");
  });

  it('should check that item in "under 10£" section contains "Now",which means that item is on sale', async () => {
    await salePage.switchToPageByNameFromSalePage(salePage.under10Button);
    const priceInText = await salePage.getPriceInText();
    expect(priceInText).to.include("Now");
  });

  it("should check if there is review on product", async () => {
    await salePage.switchToPageByNameFromSalePage(salePage.under10Button);
    await salePage.click(salePage.productItemOnSale);
    const reviewTitle = await homePage.getText(productPage.reviewTitle);
    expect(reviewTitle).to.equal("REVIEWS");
  });

  it('should go to the TopShop Sale Page with title "Topshop"', async () => {
    await salePage.switchToPageByNameFromSalePage(salePage.topshopButton);
    const pageTitle = await salePage.getText(salePage.topshopTitle);
    expect(pageTitle).to.equal("Topshop");
  });
});
