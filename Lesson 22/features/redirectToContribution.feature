Feature: Redirect to Contribution

    Scenario Outline: As a user i can navigate to page about Contribution

        Given I am on the Main page
        When I click on a Contribute button in header
        Then I expect Headline text on Contribute page to be Contribute