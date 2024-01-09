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

    get colourFilterButton() {
      return $('#plp li[data-auto-id="base_colour"] button')
    }

    get greenFilterButton() {
      return $('//*[@id="plp"]//li[@data-auto-id="base_colour"]//div[text()="Green"]')
    }

    get bodyFitFilterButton() {
      return $('#plp li[data-auto-id="attribute_10155"] button')
    }

    get extraWideFitButton() {
      return $('//*[@id="plp"]//div[text()="Extra Wide Fit"]')
    }
 
    async filterByCriteria(criteriaButton,certainCriteriaButton){
        await criteriaButton.waitForClickable();
        await criteriaButton.click();
        await certainCriteriaButton.waitForClickable(5000);
        await certainCriteriaButton.click();
    }


}


export default new FilterComponents();