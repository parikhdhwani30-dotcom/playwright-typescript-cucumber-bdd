@cart @regression
Feature: Product Cart and Checkout
  As an authenticated customer of SauceDemo
  I want to add products to the shopping cart
  So that I can purchase items

  Background:
    Given I open the SauceDemo portal
    And I sign in with username "standard_user" and password "secret_sauce"

  @cart
  Scenario: Add product to shopping cart and verify counter
    When I add the backpack product to shopping cart
    Then the cart badge counter should display "1"
