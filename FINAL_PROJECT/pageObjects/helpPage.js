import { BasePage } from "./basePage.js";

class HelpPage extends BasePage {
  constructor() {
    super();
  }

  get helpPageTitle() {
    return $("#searchHeader");
  }

  get searchHelpField() {
    return $("#react-root  input[type=search]");
  }

  get searchButton() {
    return $("#react-root  button.Hero_submitButton");
  }

  get searchResults() {
    return $("#react-root  div.Main_main.Main_hasSidebar.Main_margin  ul");
  }

  get contactUsButton() {
    return $("#react-root  div.GetInTouch_buttonContainer");
  }

  get virtualAssistantTitle() {
    return $("#top-bar div.main-title span");
  }

  get chatNowButton() {
    return $('#nuance-chat-fixed div[style="cursor: pointer;"] button');
  }

  get infoMessage() {
    return $("#react-root  div.InfoMessage_text");
  }

  async searchHelpByText(searchText) {
    await this.searchHelpField.waitForClickable();
    await this.searchHelpField.click();
    await this.searchHelpField.setValue(searchText);
    await this.searchButton.click();
  }

  async openVirtualAssistant() {
    await this.click(this.contactUsButton);
    await this.chatNowButton.waitForDisplayed({ timeout: 15000 })
    await this.click(this.chatNowButton);
  }
}

export default new HelpPage();
