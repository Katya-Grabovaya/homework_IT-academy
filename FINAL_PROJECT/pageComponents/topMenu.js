import { BaseComponents } from "./baseComponents.js";

class TopMenu extends BaseComponents {
  constructor() {
    super();
  }

  get saleButton() {
    return $('#chrome-sticky-header button[data-id="57242f2c-d207-471c-95b1-31d6839df360"]');
}

}

  export default new TopMenu();