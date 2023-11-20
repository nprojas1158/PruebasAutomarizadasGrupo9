Feature: Editar borrador de un post
 
@user1 @web
Scenario: Inicio sesion, hago el borrador de un post y lo elimino
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I click add post
  And I wait for 2 seconds
  And I enter post title "Kraken"
  And I wait for 2 seconds
  And I click return main
  And I click return main
  And I wait for 7 seconds
  Then I click edit
  And I wait for 2 seconds
  And I enter post title ""
  And I wait for 2 seconds
  And I enter post title "Funciona"
  And I wait for 2 seconds