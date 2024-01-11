import { BasePage } from "./basePage.js";

class SearchResultPage extends BasePage {
  constructor() {
    super();
  }

  get productTitle() {
    return $("h1.jcdpl");
  }

  get productItem() {
    return $("#pta-product-205224107-0");
  }

  get warnMessage() {
    return $("#search-term-banner");
  }

  get errorMessage() {
    return $(
      '#chrome-app-container [data-desktop-bgcolor="#edf1f7"] h2.grid-text__title '
    );
  }

  async selectProductAndReturnItName() {
    await this.productItem.waitForClickable();
    const searchItemText = await this.getText(this.productItem);
    await this.productItem.click();
    return searchItemText;
  }
}

export default new SearchResultPage();
