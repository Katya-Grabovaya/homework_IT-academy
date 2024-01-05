const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

Given(/^User navigate on the "(.*)" page$/, async (url) => {
    await browser.url(url);
});

When("User click button {locator}", async  function (selector) {
    await $(selector).waitForClickable({timeout: 30000});
    await $(selector).click();
})


When("User input field {locator} with text {string}", async function (selector, text) {
    await $(selector).waitForDisplayed();
    await $(selector).setValue(text);
})

When("User choose {locator}", async function (selector) {
    await $(selector).waitForDisplayed({timeout: 25000});
    await $(selector).click();
} )

Then("User see text {string} in element {locator}", async function (text, selector) {
    await $(selector).waitForDisplayed();
    await expect (await $(selector).getText()).toContain(text);
})

Then("User see that {locator} is selected", async function (selector) {
    expect (await $(selector).isSelected()).toEqual(true)
})

Then("User see text {string} in title {locator}", async function (text, selector) {
    await $(selector).waitForDisplayed();
    await expect (await $(selector).getText()).toEqual(text);
})

