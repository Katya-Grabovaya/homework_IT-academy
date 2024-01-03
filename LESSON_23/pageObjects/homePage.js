const Base = require('./base')

class HomePage extends Base {
  constructor() {
    super();
  }

get menuButton() {
  return cy.get('#vector-main-menu-dropdown-checkbox')
}

get forumButton() {
  return cy.get('#n-Village-pump')
}

get loginButton() {
  return cy.get('#pt-login-2')
}

get languageButton() {
  return cy.get('#p-lang-btn-checkbox')
}

get englishButton() {
  return cy.get('body  div.uls-lcd-region-section.uls-lcd-quicklist [title="English"]  a.autonym')
}

get englishPageTitle() {
  return cy.get('#Welcome_to_Wikipedia')
}


}

module.exports = new HomePage();