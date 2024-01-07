import { BasePage } from "./basePage.js";


class ProductPage extends BasePage {
  constructor() {
    super();
  }


  get productDetailsButton() {
    return $('//*[@id="productDescription"]//button[text()="Product Details"]');
  }

  get productDetailsList() {
    return $('#productDescriptionDetails div.accordion-item-module_content__2cDKX');
  }

  get recommendedProduct() {
    return $('#mightLikeContainer ul.G4N4r > li:nth-child(1)  a');
  }

  get recommendedProductTitle() {
    return $('#pdp-react-critical-app h1.jcdpl');
  }

  get saveButton() {
    return $('#pdp-react-critical-app  button.AGXyD.GIdCP')
  }


}

export default new ProductPage();