Feature: Test the title of Google

  Scenario: The title should be "Google"
    When I open the url "http://www.google.com"
    Then  I expect that the title is "Google"