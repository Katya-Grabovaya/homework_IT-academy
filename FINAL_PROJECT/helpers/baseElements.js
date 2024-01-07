class BaseElements {
    async click(element) {
      await element.waitForClickable({timeout: 25000});
      await element.click()
    }

    async setValue(element, text) {
      await element.waitForDisplayed();
      await element.setValue(text);
    }

    async getText(element) {
      await element.waitForDisplayed({timeout: 35000});
      return element.getText();
    }

  }

  export { BaseElements };