const Page = require('./page');
const Header = require('./components/header');
const SearchComponents = require('./components/searchComponents');
const FilterComponents = require('./components/filterComponents');
const TopMenu = require('./components/topMenu');

class HomePage extends Page {
 
  constructor() {
    super();
    this['Header'] = new Header();
    this['Search Components'] = new SearchComponents();
    this['Filter Components'] = new FilterComponents();
    this['Top Menu'] = new TopMenu();
}
    
}


module.exports = HomePage;