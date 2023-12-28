import { BasePage } from "./basePage.js";

class HomePage extends BasePage {
  constructor() {
    super()
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

  async changeCountry() {
       await this.click(this.countrySelector)
  }

  async chooseCountryFromList() {
    await this.click(this.countryListButton)
  }

  async saveSelectedCountry() {
    await this.click(this.saveCountryButton)
  }

}

export default new HomePage();