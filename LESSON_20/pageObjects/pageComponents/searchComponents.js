import { BaseComponents } from "./baseComponents.js";

class SearchComponent extends BaseComponents {
  constructor() {
    super();
  }

  get searchField() {
    return $('#chrome-search');
  }

  get buttonForSearch() {
    return $('button.vjmVpyd');
  }
 
  get productItems() {
    return $$('#pta-product-205224107-0');
  }

  async searchByText(searchText) {
    await this.searchField.waitForDisplayed();
    await this.searchField.click();
    await this.searchField.setValue(searchText);
    await this.buttonForSearch.click();
  }

  async selectProductByNumber(productNumber) {
    await this.productItems[productNumber - 1].waitForClickable();
    const searchItemText = await this.productItems[productNumber - 1].getText();
    await this.productItems[productNumber - 1].click();
    return searchItemText;
  }
}

export default new SearchComponent();