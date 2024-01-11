import { BasePage } from "./basePage.js";

class FilterPage extends BasePage {
  constructor() {
    super();
  }

  get productFilteredByGender() {
    return $("#pta-product-204755281-0");
  }

  get productFilteredByColour() {
    return $("#pta-product-204175736-0");
  }

  get ptoductFilteredByBodyFit() {
    return $("#pta-product-205455187-0");
  }
}

export default new FilterPage();
