import { BasePage } from "./basePage.js";

class HomePage extends BasePage {
  constructor() {
    super()
  }

get womenFloorButton() {
  return $('#women-floor')
}

}

export default new HomePage();