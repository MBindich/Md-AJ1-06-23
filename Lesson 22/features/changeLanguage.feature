Feature: Change language at webdriver.io

    Scenario Outline: As a user i can select <language> on the website

        Given I am on the Main page
        When I click on a <language> from the dropdown list
        Then I should see <language> in current url

    Examples:
        | language |
        | de       |
        | es       |
        | hi       |
        | fr       |
        | uk       |
        | fa       |
        | ta       |