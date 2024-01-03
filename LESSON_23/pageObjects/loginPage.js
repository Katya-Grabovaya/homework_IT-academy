const Base = require('./base')

class LoginPage extends Base {
  constructor() {
    super();
  }

  get loginField() {
    return cy.get('#wpName1')
  }

  get passwordField() {
    return cy.get('#wpPassword1')
  }

  get signInButton() {
    return cy.get('#wpLoginAttempt')
  }

  get errorNotification() {
    return cy.get('#userloginForm div.cdx-message__content')
  }
  signIn(login, password) {
    this.loginField.type(login);
    this.passwordField.type(password);
    this.signInButton.click();
  }
  


}

module.exports = new LoginPage();