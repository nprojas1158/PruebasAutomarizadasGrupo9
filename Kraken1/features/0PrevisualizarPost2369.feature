Feature: Prepublicar un post

@user1 @web
Scenario: Inicio sesión, lleno el formulario y previsualizo el post
  Given I navigate to page "http://localhost:2369/ghost/#/signin"
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
  And I click settings
  And I wait for 2 seconds
  Then I click preview
  And I wait for 2 seconds
