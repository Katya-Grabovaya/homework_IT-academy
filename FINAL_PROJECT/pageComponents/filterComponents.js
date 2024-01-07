import { BaseComponents } from "./baseComponents.js";

class FilterComponents extends BaseComponents {
    constructor() {
        super();
      }

    get genderFilterButton() {
        return $('//*[@id="plp"]//*[text()="Gender"]/parent::button[@class="button_eZ0Gy"]');
      }

    get unisexFilterButton() {
        return $('//*[@id="plp"]//div[text()="Unisex"]');
      }

      async filterByGender(genderButton){
        await this.genderFilterButton.waitForClickable();
        await this.genderFilterButton.click();
        await genderButton.waitForClickable();
        await genderButton.click();
      }


}

export default new FilterComponents();