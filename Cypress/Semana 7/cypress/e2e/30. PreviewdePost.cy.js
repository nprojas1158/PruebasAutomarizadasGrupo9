

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
  
  it ('Escenario 30: Crear Post con Title y description ' , function () {

  
    // Cargar el archivo Json
    cy.fixture('mock_data.json').then(data=> {
      const title = data[0].title
      const description = data[0].description
      const image=data[0].image
    
    cy.wait(1000);
    //Ingresar crear New POST
    
    cy.get('a').then(($a)=>{
      cy.get('a:contains("New post")').click();
      cy.get('textarea[placeholder="Post title"]').type(title);
      cy.get('p').type(description);
      cy.get('button:contains("Preview")').click();
    //Then I p have text description
    cy.url().then(url => {
        if (url.includes('preview')) {


          // La URL actual contiene "posts"
          console.log("La URL actual contiene preview");
        } else {
          // La URL actual no contiene "posts"
          console.log("La URL actual no contiene preview");
        }
      })
        
    })
   
      
    })
  })

  })