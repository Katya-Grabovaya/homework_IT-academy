const Page = require('./page');

class SearchResultPage extends Page {
 
constructor() {
    super();
}

get 'Search Result Product Item'() {
  return '#pta-product-205224107-0';
}

get 'Product Title'() {
    return 'h1.jcdpl';
  }

}

module.exports = SearchResultPage;