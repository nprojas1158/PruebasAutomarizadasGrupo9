const dataPrueba = require("./data/01_Data.json");

//Configurar MetaTitulo
describe('Prueba la pagina ghost', () => {

    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(3000)
        cy.get('form').within(() => {
            cy.get('.email.ember-text-field.gh-input.ember-view').type('j.scoth@uniandes.edu.co')
            cy.get('.password.ember-text-field.gh-input.ember-view').type('Maria9002$')
            cy.get('#ember12 > span').click()
        })
        cy.wait(1000)
    })

    it('Enlazar con facebook', () => {

        let indice = new Number();
        let variable = new String();

        indice = getRandomArbitrary(1, 99);
        variable = dataPrueba[indice].login;

        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
        cy.wait(1000);
        cy.get(':nth-child(6) > .gh-setting-first').contains('Expand').click({ force: true });


        cy.get('#metaTitle').click({ force: true });
        cy.get('#metaTitle').clear();
        cy.get('#metaTitle').type(variable)

        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

    })
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
