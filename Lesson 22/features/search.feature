Feature: Search on the website

    Scenario Outline: As a user i can search for "get" and get correct result

        Given I am on the Main page
        When I click on a Search button in header
        And I send <search> text to a search field
        And I click on the first result
        Then I should see <search> in current url

        Examples:
            | search        |
            | get           |
            | typescript    |