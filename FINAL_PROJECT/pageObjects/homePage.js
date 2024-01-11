import { BasePage } from "./basePage.js";

class HomePage extends BasePage {
  constructor() {
    super();
  }

  get womenFloorButton() {
    return $("#women-floor");
  }

  get seenOnMeWomanButton() {
    return $("#chrome-app-container  a.cta.js-buttonHover");
  }

  get seenOnMeWomanPageTitle() {
    return $("#react-root h1.app_barnsley5");
  }

  get saleWomanButton() {
    return $("#chrome-app-container  a.salesBanner__cta.js-buttonHover");
  }

  get breadcrumbsOnWomanSalePage() {
    return $("#chrome-breadcrumb  ol.aR_DfXn");
  }

  async goToPageByNameFromMainFloor(mainFloorButton, pageNameButton) {
    await this.click(mainFloorButton);
    await this.click(pageNameButton);
  }
}

export default new HomePage();
