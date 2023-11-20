Feature: Acceso a la pagina de post suscripcion  
 
@user1 @web
Scenario: Ingresar, ingreser a configuraciones y cambiar el Access to page 
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
  And I click Access
  And I wait for 2 seconds
  And I click Edit 
  And I wait for 3 seconds
  Then I click AccessBar 
  And I wait for 3 seconds
  I click Save2 
  And I wait for 2 seconds