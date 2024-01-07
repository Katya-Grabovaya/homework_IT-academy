import { BasePage } from "./basePage.js";

class FilterPage extends BasePage {
  constructor() {
    super()
  }

  get productFiltered(){
    return $('#product-205154554 a.productLink_KM4PI');
  }


}

export default new FilterPage();