@smoke @login
Feature: User Login Authentication
  As a customer of SauceDemo
  I want to log in with valid credentials
  And verify that invalid credentials display appropriate error messages
  So that user account security is enforced

  Background:
    Given I open the SauceDemo portal

  @positive
  Scenario: Valid customer login
    When I sign in with username "standard_user" and password "secret_sauce"
    Then I should see the inventory catalog page

  @negative
  Scenario Outline: Failed customer login validations
    When I sign in with username "<username>" and password "<password>"
    Then I should see error notification "<error_message>"

    Examples:
      | username        | password     | error_message                          |
      | locked_out_user | secret_sauce | Sorry, this user has been locked out.  |
      | invalid_user    | secret_sauce | Username and password do not match     |
      | standard_user   | wrong_pass   | Username and password do not match     |
      |                 | secret_sauce | Username is required                   |
      | standard_user   |              | Password is required                   |
