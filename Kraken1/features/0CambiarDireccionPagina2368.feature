Feature:  cambiar direcion de pagina 
 
@user1 @web
Scenario: Ingresar, ingresar a config. y buscar el item de customizacion y cambiar la direccion pagina
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I click settings
  And I wait for 5 seconds
  And I click Navegate 
  And I wait for 2 seconds
  And I click Customize
  And I wait for 2 seconds
  Then I enter Home 
  And I wait for 2 seconds
  And I click OK
  Anr I wait for 2 seconds