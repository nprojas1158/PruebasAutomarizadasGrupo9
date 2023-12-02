
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
      cy.get('#ember34').click();
      
      //Then location is Post
      cy.url().then(url => {
        if (url.includes('navigation')) {


          // La URL actual contiene "posts"
          console.log("La URL actual contiene navigation");
        } else {
          // La URL actual no contiene "posts"
          console.log("La URL actual no contiene navigation");
        }
      })
    

  });
  
  it ('Escenario 5: Cancelar la creación de un Path' , function () {

  
    // Cargar el archivo Json
    cy.fixture('mock_data.json').then(data=> {
      const title = data[0].title
      const URL = ''
      
    
    cy.wait(1000);
    //Ingresar crear New POST
    
    cy.get('a').then(($a)=>{
      cy.get(':nth-child(4) > :nth-child(2) > #navigation').first().click();
      cy.screenshot();
      cy.get('button:contains("Customize")').eq(1).click();
      cy.screenshot();
      cy.get('#secondary-nav').click();
      cy.screenshot();
      cy.get('div.block > :nth-child(1) > .pt-2 > :nth-child(2) > [data-testid="new-navigation-item"] > [data-testid="add-button"]').click();
      cy.screenshot();
      cy.get('#\:r12\:').first().type('Mi primer Post 1');
      cy.screenshot();
      cy.get('button:contains("Cancel")').click();
      cy.screenshot();

      


     // cy.get('button:contains("Secondary")').click();
     
    //Then I p have text description
    cy.get('input[placeholder="New item label"]').should('contain','primer'); 
        
    })
   
      
    })
  })

  })