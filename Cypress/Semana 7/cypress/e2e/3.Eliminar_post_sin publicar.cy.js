///<reference types="cypress"/>/// 
import paginaInicioSesion from "../integration/PageObject/paginaInicioSesion"

describe("Cypress POM Test Suite", function () {
    const login = new paginaInicioSesion();
    const title = '';
    const description = '';

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

    it('Escenario 3: Eliminar  Post sin publicar ', function () {
        // Cargar el archivo Json
        cy.fixture('mock_data.json').then(data => {
            const title = data[2].title
            const description =data[2].description
            const slug =data[2].slug
           
            cy.wait(1000);
            //Ingresar crear New POST

           
            //Guardar
            cy.wait(1000);
            //Ingresar a editar un  POST

            cy.get('a').then(($a) => {
                cy.get('a:contains("New post")').click();
                cy.get('textarea[placeholder="Post title"]').type(title);
                cy.get('p').type(description);
                
                //Then I p have text description


                cy.get('button[title="Settings"]').click();
                cy.get('button:contains("Delete")').click();
                cy.get('.gh-btn-red').parent().click();
                cy.get('.modal-footer').within(() => { cy.get('.gh-btn-red').click() });
                cy.get('button[title="Settings"]').click();
                cy.get('span:contains("Posts")').click();
              
                // La URL actual contiene "posts"
                console.log("La URL actual contiene editor");



            })


        })
    })

})