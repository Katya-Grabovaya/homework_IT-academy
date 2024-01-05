Feature: The Asos Website

  Scenario: As a user, I can find ptoduct item on website
    Given User navigate on the "https://www.asos.com/" page
    When User input field "Home Page > Search Components > Search Field" with text "pullover"
    And User click button "Home Page > Search Components > Search Button"
    And User choose "Search Result Page > Search Result Product Item"
    Then User see text "pullover" in element "Search Result Page > Product Title"



  Scenario: As a user, I can change country for delivery
    Given User navigate on the "https://www.asos.com/" page
    When User click button "Home Page > Header > Open Country Selection Button"
    And User click button "Home Page > Header > Open List of Countries Button"
    And User choose "Home Page > Header > UK"
    Then User see that "Home Page > Header > UK" is selected


  Scenario: As a user, I can find ptoduct item on website and filter the search results by gender
    Given User navigate on the "https://www.asos.com/" page
    When User input field "Home Page > Search Components > Search Field" with text "jacket"
    And User click button "Home Page > Search Components > Search Button"
    And User click button "Home Page > Filter Components > Gender Filter Button"
    And User click button "Home Page > Filter Components > Unisex Filter Button"
    Then User see text "unisex" in element "Filter Page > Filtered Product Title"


  Scenario: As a user, I can switch Home Page to New Products Page
    Given User navigate on the "https://www.asos.com/" page
    When User click button "Home Page > Top Menu > New in Button"
    Then User see text "NEW PRODUCTS" in title "New In Page > Title Text"

