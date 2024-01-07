import { BasePage } from "./basePage.js";


class NewInPage extends BasePage {
  constructor() {
    super()
  }


get titleText(){
    return $('#f44ea221-7a84-41d3-8d75-6ef255f95b3c  span')
}

}

export default new NewInPage();