const { BaseComponents } = require('./baseComponents');

class TopMenu extends BaseComponents {
  constructor() {
    super();
  }

  get 'New in Button'() {
    return '#chrome-sticky-header  button[data-id="1020946c-8949-4e9c-9719-43435002bcd4"]';
}
    


  }
  
  module.exports = TopMenu;