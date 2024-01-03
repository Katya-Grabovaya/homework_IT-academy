const Base = require('../pageObjects/base');


class SearchPage extends Base {
  constructor() {
    super();
  }

  get buttonForSearch() {
    return cy.get('#searchform button.cdx-button.cdx-search-input__end-button');
  }

  get searchResult() {
    return cy.get('#firstHeading span.mw-page-title-main')
  }

  get searchField() {
    return cy.get('#searchInput');
  }


  searchByText(searchText) {
    this.searchField.click();
    this.searchField.type(searchText);
    this.buttonForSearch.click();
  }


}

module.exports = new SearchPage();