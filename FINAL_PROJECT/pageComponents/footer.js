import { BaseComponents } from "./baseComponents.js";

class Footer extends BaseComponents {
  constructor() {
    super();
  }
get helpButton(){
    return $('//*[@id="chrome-footer"]//a[text()="Help"]')
}


}

  export default new Footer();


