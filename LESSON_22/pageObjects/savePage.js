const Base = require('./base');

class SavePage extends Base {
  constructor(page) {
    super(page);
  }

  get saveLink() {
    return this.page.locator('#chrome-sticky-header [data-testid="savedItemsIcon"]');
  }

  get saveButton() {
    return this.page.locator('#pdp-react-critical-app  button.AGXyD.GIdCP')
  }

  get productInSave() {
    return this.page.locator('#pta-205429930-0 div.overflowFade_VtoIq')
  }


  async addToSave() {
    await this.saveButton.click();
    await this.saveLink.click();
    const productInSaveText = await this.productInSave.innerText();
    return productInSaveText
  }

}

module.exports = SavePage;