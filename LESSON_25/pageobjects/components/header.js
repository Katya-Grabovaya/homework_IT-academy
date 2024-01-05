const { BaseComponents } = require('./baseComponents');

class Header extends BaseComponents {
  constructor() {
    super();
  }

    get 'Open Country Selection Button'() {
        return '#chrome-header button.breiRmE.TYb4J9A';
      }
    
      get 'Open List of Countries Button'() {
        return '#country';
      }

      get 'UK'() {
        return '//*[@id="country"]/option[text()="United Kingdom"]';
      }
    
      get 'Save the Selected Country Button'() {
        return '#chrome-modal-container  button.AlRI892.w3QwoQC';
      }

  }
  
  module.exports = Header;