import { BaseComponents } from "./baseComponents.js";

class Header extends BaseComponents {
  constructor() {
    super();
  }

  get countrySelector() {
    return $("#chrome-header button.breiRmE.TYb4J9A");
  }

  get countryListButton() {
    return $("#country");
  }

  get saveCountryButton() {
    return $("#chrome-modal-container  button.AlRI892.w3QwoQC");
  }

  get UK() {
    return $('//*[@id="country"]/option[text()="United Kingdom"]');
  }

  async getCountryName(countryName) {
    return $(`//*[@id="country"]/option[text()="${countryName}"]`);
  }

  async changeCountryForDelivery(countryName) {
    await this.click(this.countrySelector);
    await this.click(this.countryListButton);
    const countryFromList = await this.getCountryName(countryName);
    await countryFromList.click();
  }
}

export default new Header();
