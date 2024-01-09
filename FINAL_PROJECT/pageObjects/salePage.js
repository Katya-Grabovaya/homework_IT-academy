import topMenu from "../pageComponents/topMenu.js";
import { BasePage } from "./basePage.js";


class SalePage extends BasePage {
  constructor() {
    super()
  }


get mainTitleText(){
    return $('h2.D_5cNi8.jFyrDfG  span')
}

get menuOnSalePage() {
  return $$(' ul[aria-labelledby="93621d77-e6d0-4f3c-be35-0e06a981de22"] li')
}


get under10Button() {
  return $('//*[@id="57242f2c-d207-471c-95b1-31d6839df360"]//span[text()="Sale under £10"]')
}

get priceOnSale() {
  return $('#pdp-react-critical-app  [data-testid="current-price"]')
}

get productItemOnSale() {
  return $('#pta-product-201579605-0')
}

get topshopButton() {
  return $('//*[@id="57242f2c-d207-471c-95b1-31d6839df360"]//span[text()="TOPSHOP"]/..')
}

get topshopTitle() {
  return $('#category-banner-wrapper  h1.categoryTitle_r3Kaq')
}

async chooseLineFromMenu(lineNumber) {
  await this.menuOnSalePage[lineNumber - 1].waitForDisplayed();
  const lineText = await this.menuOnSalePage[lineNumber - 1].getText();
  return lineText;
}

async checkSale() {
  await this.click(this.productItemOnSale);
  const priceInText = this.getText(this.priceOnSale);
  return priceInText
}

async switchToAnySalePage(pageButton) {
  await this.navigate('https://www.asos.com/women/'); 
  await this.click(topMenu.saleButton);
  await this.click(pageButton);
}

}



export default new SalePage();