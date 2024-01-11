import { BaseComponents } from "./baseComponents.js";

class SearchComponent extends BaseComponents {
  constructor() {
    super();
  }

  get searchField() {
    return $("#chrome-search");
  }

  get buttonForSearch() {
    return $("button.vjmVpyd");
  }

  async searchByText(searchText) {
    await this.searchField.waitForDisplayed();
    await this.searchField.click();
    await this.searchField.setValue(searchText);
    await this.buttonForSearch.click();
  }
}

export default new SearchComponent();
