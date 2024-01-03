const Base = require('./base')

class ForumPage extends Base {
  constructor() {
    super();
  }

get forumPageTitle() {
  return cy.get('.landing-header__title');
}


}

module.exports = new ForumPage();