const Base = require('../pageObjects/base');


class SearchPage extends Base {
  constructor(page) {
    super(page);
  }

  get buttonForSearch() {
    return this.page.locator('button.vjmVpyd');
  }

  get searchResults() {
    return this.page.locator('#pta-product-205429930-0')
  }

  get searchField() {
    return this.page.locator('#chrome-search');
  }


  async searchByText(searchText) {
    await this.searchField.click();
    await this.searchField.fill(searchText);
    await this.buttonForSearch.click();
  }

  async selectProduct() {
    const searchItemText = await this.searchResults.innerText();
    await this.searchResults.click();
    return searchItemText;
  }

}

module.exports = SearchPage;