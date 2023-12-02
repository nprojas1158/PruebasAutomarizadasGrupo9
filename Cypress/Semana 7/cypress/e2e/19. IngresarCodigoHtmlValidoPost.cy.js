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

    it('Escenario 19: HTML  Valido', function () {
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
                cy.get(':nth-child(3) > button > span').click();
                cy.get('#post-setting-codeinjection-head > .CodeMirror > .CodeMirror-scroll').type("<h1>Prueba</h1")
                
                //Then I excerpt is valido

                cy.get('#post-setting-codeinjection-head > .CodeMirror > .CodeMirror-scroll > .CodeMirror-sizer > [style="position: relative; top: 0px;"] > .CodeMirror-lines > [style="position: relative; outline: none;"] > .CodeMirror-code > [style="position: relative;"] > .CodeMirror-line > [role="presentation"]').should(($p) => {
                    expect($p).to.contain('<h1>Prueba</h1');
                }).log()


            })


        })
    })

})