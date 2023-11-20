Feature: Previsualizar page
 
@user1 @web
Scenario: Inicio sesion, hago click en page, le pongo titulo y la previsualizo
  Given I navigate to page "http://localhost:2369/ghost/#/signin"
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
  And I wait for 2 seconds
  Then I click preview
  And I wait for 2 seconds