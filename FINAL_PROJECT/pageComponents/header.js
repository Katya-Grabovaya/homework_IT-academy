import { BaseComponents } from "./baseComponents.js";

class Header extends BaseComponents {
  constructor() {
    super();
  }

  get countrySelector() {
    return $('#chrome-header button.breiRmE.TYb4J9A');
  }

  get countryListButton() {
    return $('#country');
  }

  get saveCountryButton() {
    return $('#chrome-modal-container  button.AlRI892.w3QwoQC');
  }

  get UK() {
    return $('//*[@id="country"]/option[text()="United Kingdom"]');
  }

  async changeCountryForDelivery() {
    await this.click(this.countrySelector);
    await this.click(this.countryListButton);
}

async chooseCountry(element) {
  await element.waitForDisplayed();
  await element.click();
}

  }

  export default new Header();