Feature: Navigate to Allure-reporter page

    Scenario Outline: As a user i can navigate to page about Allure Reporter

        Given I am on the Main page
        When I click on a Docs button in header
        And I click on a Reporter dropdown button
        And I click on a Allure Reporter button
        Then I expect Headline text on Allure Reporter page to be Allure Reporter