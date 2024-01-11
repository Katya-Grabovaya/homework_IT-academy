import { expect } from "chai";
import homePage from "../pageObjects/homePage.js";
import searchComponents from "../pageComponents/searchComponents.js";
import filterComponents from "../pageComponents/filterComponents.js";
import filterPage from "../pageObjects/filterPage.js";

describe("Tests for Asos Filter Page", () => {
  beforeEach("should open the website of the ASOS", async () => {
    await homePage.navigate("https://www.asos.com/");
  });

  it('should filltered the search result by Gender: "Unisex" and the result contains "unisex"', async () => {
    await searchComponents.searchByText("jacket");
    await filterComponents.filterByCriteria(
      filterComponents.genderFilterButton,
      filterComponents.unisexFilterButton
    );
    expect(await filterPage.getText(filterPage.productFilteredByGender)).to.include("unisex");
  });

  it('should filltered the search result by Colour: "Green" and the result contains "green" or "olive"', async () => {
    await searchComponents.searchByText("Loafers");
    await filterComponents.filterByCriteria(
      filterComponents.colourFilterButton,
      filterComponents.greenFilterButton);
    expect(await filterPage.getText(filterPage.productFilteredByColour)).to.include("green" || "olive");
  });

  it('should filltered the search result by Body Fit: "Extra Wide Fit" and the result contains "Extra Wide Fit"', async () => {
    await searchComponents.searchByText("Boots");
    await filterComponents.filterByCriteria(
      filterComponents.bodyFitFilterButton,
      filterComponents.extraWideFitButton);
    expect(await filterPage.getText(filterPage.ptoductFilteredByBodyFit)).to.include("Extra Wide Fit");
  });
});
