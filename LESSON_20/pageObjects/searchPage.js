import { BasePage } from "./basePage.js";

class SearchPage extends BasePage {
  constructor() {
    super()
  }

  get productTitle() {
    return $('h1.jcdpl');
  }

}

export default new SearchPage();