const HomePage = require('./homePage');
const SearchResultPage = require('./searchResultPage');
const FilterPage = require('./filterPage');
const NewInPage = require('./newInPage');

class PageFactory {
  static 'Home Page' = new HomePage();
  static 'Search Result Page' = new SearchResultPage();
  static 'Filter Page' = new FilterPage();
  static 'New In Page' = new NewInPage();

}

module.exports = PageFactory;