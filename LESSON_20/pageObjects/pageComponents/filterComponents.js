import { BaseComponents } from "./baseComponents.js";

class FilterComponents extends BaseComponents {
    constructor() {
        super();
      }

    get genderFilterButton() {
        return $('//*[@id="plp"]//*[text()="Gender"]/parent::button[@class="button_eZ0Gy"]');
      }

    
}

export default new FilterComponents();