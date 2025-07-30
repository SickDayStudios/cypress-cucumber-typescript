Feature: Login

    Background:
        

  Scenario: As a registered User I want to log into the website
    Given I am on the "Public/Home" page
    When I click the "Log In" link
    Then I should see the "Log In" button
