Feature: Despublicar un post
 
@user1 @web
Scenario: Inicio sesion, lleno el formulario y publico el post
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
  And I click publish
  And I wait for 2 seconds
  And I click continue
  And I wait for 2 seconds
  And I click publish right now
  And I wait for 5 seconds
  And I click return editor
  And I wait for 2 seconds
  Then I click unpublish
  And I click revert
  And I wait for 2 seconds