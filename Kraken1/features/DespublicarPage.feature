Feature: Despublicar una page
 
@user1 @web
Scenario: Inicio sesion, hago click en page, la creo y la publico
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I click pages
  And I wait for 2 seconds
  And I click new pages
  And I wait for 5 seconds
  And I enter page title "Mi Kraken"
  And I wait for 2 seconds
  And I click settings
  And I wait for 2 seconds
  Then I click publish
  And I wait for 2 seconds
  And I click continue
  And I wait for 2 seconds
  And I click publish right now
  And I wait for 5 seconds
  And I click return editor
  And I wait for 2 seconds
  Then I click unpublish
  And I click revert
  And I wait for 2 seconds