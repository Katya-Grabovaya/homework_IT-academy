import { BasePage } from "./basePage.js";

class ProductPage extends BasePage {
  constructor() {
    super();
  }

  get productDetailsButton() {
    return $('//*[@id="productDescription"]//button[text()="Product Details"]');
  }

  get productDetailsList() {
    return $('// *[@id="productDescriptionDetails"]//p[@class="Jk9Oz"]');
  }

  get recommendedProduct() {
    return $("#mightLikeContainer ul.G4N4r > li:nth-child(1)  a");
  }

  get recommendedProductTitle() {
    return $("#pdp-react-critical-app h1.jcdpl");
  }

  get saveButton() {
    return $("#pdp-react-critical-app  button.AGXyD.GIdCP");
  }

  get reviewTitle() {
    return $("#reviewTitle");
  }

  get elsewhereDeliveryButton() {
    return $("#chrome-welcome-mat  button.qQoHatg.jFyrDfG.UNPPQ3g ");
  }

  get closeDeliveryModalPageButton() {
    return $("#chrome-modal-container  button.REGknlu");
  }

  async closeDeliveryModalPage() {
    if (await this.elsewhereDeliveryButton.isClickable()) {
      await this.click(this.elsewhereDeliveryButton);
      await this.click(this.closeDeliveryModalPageButton);
    }
  }
}

export default new ProductPage();
