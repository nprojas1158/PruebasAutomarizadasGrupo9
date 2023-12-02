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

    it('Escenario 24: HTML Valido imagen footer ', function () {
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
                cy.get('#post-setting-codeinjection-foot > .CodeMirror > .CodeMirror-scroll').type("<img src='https://th.bing.com/th/id/R.b33b4bca2d2fca9a31b4d8eab26c07bc?rik=r14NSu03A2iceg&riu=http%3a%2f%2fheuvi.com.br%2fwp-content%2fuploads%2f2013%2f05%2f6.Robert-Downey-Jr2.jpg&ehk=ZlKxHoTDxnd6BfENY42dGMFosC1nWFrUFrzWycGWcbA%3d&risl=&pid=ImgRaw&r=0' id='imagen'/>")
                
                //Then I excerpt is valido

                cy.get('img').should('exist','imagen');


            })


        })
    })

})





