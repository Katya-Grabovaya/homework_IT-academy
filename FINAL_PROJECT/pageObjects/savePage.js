import { BasePage } from "./basePage.js";
import homePage from "./homePage.js";
import productPage from "./productPage.js";

class SavePage extends BasePage {
  constructor() {
    super();
  }

  get saveLink() {
    return $('#chrome-sticky-header [data-testid="savedItemsIcon"]');
  }

  get productInSave() {
    return $('#pta-205224107-0')
  }


  async addToSave() {
    await homePage.click(productPage.saveButton);
    await this.saveLink.click();
    const productInSaveText = await homePage.getText(this.productInSave);
    return productInSaveText
  }

}

export default new SavePage();