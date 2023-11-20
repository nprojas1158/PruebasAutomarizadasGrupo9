Feature:  Busqueda del primer item 
 
@user1 @web
Scenario: Ingresar, ingresar a config. y tratar el primer item
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
  And I click Busqueda
  And I wait for 4 seconds
  Then I click TittleAndDescp
  And I wait for 4 seconds
  And I click Edit 
  And I wait for 2 seconds
  And I click Cancel 
  And I wait for 2 seconds
