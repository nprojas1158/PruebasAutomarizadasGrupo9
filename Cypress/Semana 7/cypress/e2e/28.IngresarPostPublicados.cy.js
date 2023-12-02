///<reference types="cypress"/>/// 
import paginaInicioSesion from "../integration/PageObject/paginaInicioSesion"

import mock_data from "../fixtures/MOCK_DATA.json"
import '../support/commands'

//import {Given,When, Then} from "cypress-cucumber-preprocessor"


describe("Cypress POM Test Suite", function () {
  const login = new paginaInicioSesion();
  const title='';
  const description='';

  beforeEach('Realizar ingreso a Ghost', () => {
      login.navegate();
      login.enterEmail('j.scoth@uniandes.edu.co');
      login.enterPassword('Maria9002$');
      login.enviar();
      // Ingresar a la sección Post
      cy.get('a[href*="#/posts"]').first().click();
      //Then location is Post
      cy.url().then(url => {
        if (url.includes('posts')) {


          // La URL actual contiene "posts"
          console.log("La URL actual contiene posts");
        } else {
          // La URL actual no contiene "posts"
          console.log("La URL actual no contiene posts");
        }
      })
    

  });
  
  it ('Escenario 28: Crear Post con Title y description ' , function () {

  
    // Cargar el archivo Json
    cy.fixture('mock_data.json').then(data=> {
      const title = data[0].title
      const description = data[0].description
      const image=data[0].image
    
    cy.wait(1000);
    //Ingresar crear New POST
    
    cy.get('a').then(($a)=>{
        cy.get('.gh-contentfilter-type > .ember-view > .ember-power-select-selected-item').click();
        cy.get('#ember271-2').click();
        
      
    //Then I p have text description
      cy.get('.gh-contentfilter-type > .ember-view > .ember-power-select-selected-item').should(($p)=>{
        expect($p).to.contain('Published posts');
    }).log()
        
    })
   
      
    })
  })

  })

  






  
  


/*describe('Pruebas de Ghost', () => {
  it('Iniciar sesión', () => {
    cy.visit('http://localhost:2368/ghost/');
    cy.get('input[name="identification"]').type('nata.rojas7@gmail.com');
    cy.get('input[name="password"]').type('uniandes23');
    cy.get('#ember5').click();

  });
});*/







cy.get('.gh-contentfilter-type > .ember-view > .ember-power-select-selected-item')
cy.get('#ember271-2')
cy.get('.gh-contentfilter-type > .ember-view > .ember-power-select-selected-item')