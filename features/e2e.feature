@smoke @e2e
Feature: User Authentication and Product Cart Workflow
  As a customer of SauceDemo
  I want to log in, view catalog items, and add products to my cart
  So that I can complete purchases smoothly

  Background:
    Given I open the SauceDemo portal

  @positive @login
  Scenario: Valid customer login to inventory catalog
    When I sign in with username "standard_user" and password "secret_sauce"
    Then I should see the inventory catalog page

  @negative @login
  Scenario Outline: Failed customer login validations
    When I sign in with username "<username>" and password "<password>"
    Then I should see error notification "<error_message>"

    Examples:
      | username        | password     | error_message                          |
      | locked_out_user | secret_sauce | Sorry, this user has been locked out.  |
      | invalid_user    | secret_sauce | Username and password do not match     |
      | standard_user   | wrong_pass   | Username and password do not match     |

  @cart @critical
  Scenario: Add product to shopping cart and verify counter
    Given I sign in with username "standard_user" and password "secret_sauce"
    When I add the backpack product to shopping cart
    Then the cart badge counter should display "1"
