import { BasePage } from "./basePage.js";
import productPage from "./productPage.js";

class SavePage extends BasePage {
  constructor() {
    super();
  }

  get saveLink() {
    return $('#chrome-sticky-header [data-testid="savedItemsIcon"]');
  }

  get productInSave() {
    return $("#pta-205224107-0");
  }

  async addToSavePageAndReturnProductToSave(productToSave) {
    await this.click(productPage.saveButton);
    await this.saveLink.click();
    const productInSaveText = await this.getText(productToSave);
    return productInSaveText;
  }
}

export default new SavePage();
