const Base = require('./base');


class MainPage extends Base {
  constructor(page) {
    super(page);
  }


  get productDetailsButton() {
    return this.page.locator('//*[@id="productDescription"]//button[text()="Product Details"]');
  }

  get productDetailsList() {
    return this.page.locator('#productDescriptionDetails div.accordion-item-module_content__2cDKX');
  }

  get recommendedProduct() {
    return this.page.locator ('#mightLikeContainer > section > ul > li:nth-child(1) > div > a');
  }

  get recommendedProductTitle() {
    return this.page.locator ('#pdp-react-critical-app h1.jcdpl');
  }


}

module.exports = MainPage;