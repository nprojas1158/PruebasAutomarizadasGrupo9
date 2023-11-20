Feature: suscribirse a un blog
 
@user1 @web
Scenario: Entrar a la pagina, entrar a un blog, y click en suscribirse
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I click ViewSite
  And I wait for 2 seconds
  And I click Subscribe 
  And I wait for 5 seconds
  Then I click Sign in 
  And I wait for 3 seconds