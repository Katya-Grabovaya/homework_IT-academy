const { BaseComponents } = require('./baseComponents');

class SearchComponents extends BaseComponents {
  constructor() {
    super();
  }

  get 'Search Field'() {
    return '#chrome-search';
  }

  get 'Search Button'() {
    return 'button.vjmVpyd';
  }


}

module.exports = SearchComponents;