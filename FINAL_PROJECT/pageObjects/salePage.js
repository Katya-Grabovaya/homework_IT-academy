import topMenu from "../pageComponents/topMenu.js";
import { BasePage } from "./basePage.js";

class SalePage extends BasePage {
  constructor() {
    super();
  }

  get mainTitleText() {
    return $("h2.D_5cNi8.jFyrDfG  span");
  }

  get under10Button() {
    return $(
      '//*[@id="57242f2c-d207-471c-95b1-31d6839df360"]//span[text()="Sale under £10"]'
    );
  }

  get priceOnSale() {
    return $('#pdp-react-critical-app  [data-testid="current-price"]');
  }

  get productItemOnSale() {
    return $("#pta-product-201579605-0");
  }

  get topshopButton() {
    return $(
      '//*[@id="57242f2c-d207-471c-95b1-31d6839df360"]//span[text()="TOPSHOP"]/..'
    );
  }

  get topshopTitle() {
    return $("#category-banner-wrapper  h1.categoryTitle_r3Kaq");
  }

  async getPriceInText() {
    await this.click(this.productItemOnSale);
    const priceInText = this.getText(this.priceOnSale);
    return priceInText;
  }

  async switchToPageByNameFromSalePage(pageButton) {
    await this.click(topMenu.saleButton);
    await pageButton.waitForDisplayed({ timeout: 15000 });
    await this.click(pageButton);
  }
}

export default new SalePage();
