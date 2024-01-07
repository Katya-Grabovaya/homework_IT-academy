import { BasePage } from "./basePage.js";
import homePage from "./homePage.js";

class SearchResultPage extends BasePage {
  constructor() {
    super()
  }

  get productTitle() {
    return $('h1.jcdpl');
  }


  get productItem() {
    return $('#pta-product-205224107-0');
  }

  async selectProduct() {
    await this.productItem.waitForClickable();
    const searchItemText = await homePage.getText(this.productItem);
    await this.productItem.click();
    return searchItemText;
  }

}

export default new SearchResultPage()