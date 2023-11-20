Feature:  DescripFacebok 
 
@user1 @web
Scenario: Ingresar, ingreser a configuraciones y buscar el item de Facebook y cambiar o agregar informacion
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
  And I click FacebookCard
  And I wait for 2 seconds
  And I click Edit
  And I wait for 2 seconds
  Then I enter TittleFacebok
  And I wait for 2 seconds
  And I enter DescripFacebok
  And I wait for 3 seconds
  And I click Save2
  And I wait for 2 seconds