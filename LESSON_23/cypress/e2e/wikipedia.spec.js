const homePage = require('../../pageObjects/homePage');
const loginPage = require('../../pageObjects/loginPage');
const searchPage = require('../../pageObjects/searchPage')

describe('Tests for Wikipedia', function () {

    beforeEach(() => {
        homePage.navigate('https://be.wikipedia.org/wiki/');
      });
    it('title of forumPage should be equal to "Вікіпедыя:Форум — Вікіпедыя"', () => {
        homePage.menuButton.click();
        homePage.forumButton.click();
        cy.title().should('eq', 'Вікіпедыя:Форум — Вікіпедыя')
    })

    it('title on search topic should be the same as title on result page', () => {
        searchPage.searchByText('Бермудскі трохвугольнік');
        cy.validateText(searchPage.searchResult, 'Бермудскі трохвугольнік');      
    })

    it('should return an error message with invalid data while signing in', () => {
        homePage.loginButton.click();
        loginPage.signIn('matiya.Polesh', '123456778')
        cy.validateText(loginPage.errorNotification, 'Уведзены няправільны пароль або імя ўдзельніка. Паспрабуйце наноў.')
    })

    it('schould switch language of page to english', () => {
        homePage.languageButton.click();
        homePage.englishButton.click();
        cy.validateText(homePage.englishPageTitle, 'Welcome to Wikipedia'); 
    })

});

