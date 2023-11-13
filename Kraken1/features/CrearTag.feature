Feature: Crear tag
 
@user1 @web
Scenario: Inicio sesion, hago click en tag, le pongo titulo y la previsualizo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I click tags
  And I wait for 2 seconds
  And I click new tags
  And I wait for 5 seconds
  And I enter tag name "Prueba"
  And I wait for 2 seconds
  And I enter tag descripcion "Esta es una prueba GUI"
  And I wait for 2 seconds
  Then I click save
  And I wait for 2 seconds
  