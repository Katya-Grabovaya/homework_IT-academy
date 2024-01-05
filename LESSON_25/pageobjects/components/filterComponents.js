const { BaseComponents } = require('./baseComponents');

class FilterComponents extends BaseComponents {
  constructor() {
    super();
  }

  get 'Gender Filter Button'() {
    return '//*[@id="plp"]//*[text()="Gender"]/parent::button[@class="button_eZ0Gy"]';
  }

  get 'Unisex Filter Button'() {
    return '//*[@id="plp"]//div[text()="Unisex"]';
  }

}

module.exports = FilterComponents;