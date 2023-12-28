import { BasePage } from "./basePage.js";


class NewInPage extends BasePage {
  constructor() {
    super()
  }

get newInButton() {
    return $('#chrome-sticky-header  button[data-id="1020946c-8949-4e9c-9719-43435002bcd4"]');
}

get titleText(){
    return $('#f44ea221-7a84-41d3-8d75-6ef255f95b3c  span')
}


}

export default new NewInPage();