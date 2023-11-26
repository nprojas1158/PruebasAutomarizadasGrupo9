import { assert } from "console";
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

    it('Escenario 12: Fragmento Valido', function () {
        // Cargar el archivo Json
        cy.fixture('mock_data.json').then(data => {
            const title = data[6].title
            const description = data[6].description
            const slug = data[6].slug
            const hora = '00:00';
            const excerpt = 'prueba de fragmento bien creado'

            cy.wait(1000);
            //Ingresar crear New POST

            cy.get('a').then(($a) => {
                cy.get('a:contains("New post")').click();
                cy.get('textarea[placeholder="Post title"]').type(title);

                //Guardar
                // Dar clic en el menu 
                cy.get('button[title="Settings"]').click();
                cy.get('textarea[name="post-setting-custom-excerpt"]').type(excerpt);
                cy.get('.ember-power-select-status-icon').first().click();

                //Then I excerpt is valido

                cy.get('#custom-excerpt').should('have.value',excerpt) 
               


            })


        })
    })

})