Feature: Borrador borrador de page
 
@user1 @web
Scenario: Inicio sesion, abro pages, le pongo titulo al borrador de la page y la elimino
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
  Then I click delete
  And I wait for 2 seconds
  And I click confirm delete
  And I wait for 3 seconds