Feature:  Cambiar PrivateMode
 
@user1 @web
Scenario: Ingresar, ingreser a configuraciones y cambiar si va ser privado
  Given I navigate to page "http://localhost:2369/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I click settings
  And I wait for 5 seconds
  And I click PrivateMode 
  And I wait for 4 seconds
  And I click Edit
  Then I click BotonPrivate
  And I wait for 3 seconds
  And I click Save2
  And I wait for 3 seconds
