

///<reference types="cypress"/>/// 
import paginaInicioSesion from "../integration/PageObject/paginaInicioSesion"

describe("Cypress POM Test Suite", function () {
  it("Iniciar sesión con credenciales válidas",function ()  {
    const login = new paginaInicioSesion();
    login.navegate();
    cy.screenshot();
    login.enterEmail('nata.rojas7@gmail.com');
    cy.screenshot();
    login.enterPassword('uniandes23');
    cy.screenshot();
    login.enviar();
    cy.screenshot();
  });
  it('Crear nuevo Post', () => {
    const login = new paginaInicioSesion();
    login.navegate();
    login.enterEmail('nata.rojas7@gmail.com');
    login.enterPassword('uniandes23');
    login.enviar();
    
    cy.get('a[href*="#/posts"]').click();
    cy.screenshot();
    cy.get('a:contains("New post")').click();
    cy.screenshot();
    cy.get('textarea[placeholder="Post title"]').type('Mi primer Post 1');
    cy.screenshot();
    cy.get('p').type('Hola, mundo');
    cy.screenshot();


  });
  it('Preview de un Post', () => {
    const login = new paginaInicioSesion();
    login.navegate();
    login.enterEmail('nata.rojas7@gmail.com');
    login.enterPassword('uniandes23');
    login.enviar();
    cy.screenshot();
    cy.get('a[href*="#/posts"]').click();
    cy.screenshot();
    cy.get('a:contains("New post")').click();
    cy.screenshot();
    cy.get('textarea[placeholder="Post title"]').type('Mi primer Preview 1');
    cy.screenshot();
    cy.get('p').type('Hola, mundo');
    cy.screenshot();
    cy.get('button:contains("Preview")').click();
    cy.screenshot();



  });

  it('Publish de un Post', () => {
    const login = new paginaInicioSesion();
    login.navegate();
    login.enterEmail('nata.rojas7@gmail.com');
    login.enterPassword('uniandes23');
    login.enviar();
    cy.screenshot();
    cy.get('a[href*="#/posts"]').click();
    cy.screenshot();
    cy.get('a:contains("New post")').click();
    cy.screenshot();
    cy.get('textarea[placeholder="Post title"]').type('Mi primer Publish 10');
    cy.screenshot();
    cy.get('p').type('Hola, mundo');
    cy.screenshot();
    cy.get('button:contains("Publish")').click();
    cy.screenshot();
    cy.get('button:contains("Continue, final review →")').click();
    cy.screenshot();
    cy.get('button:contains("Publish post, right now")').click();
    cy.screenshot();

  });
  it('Unpublish de un Post', () => {
    const login = new paginaInicioSesion();
    login.navegate();
    login.enterEmail('nata.rojas7@gmail.com');
    login.enterPassword('uniandes23');
    login.enviar();
   
    cy.get('a[href*="#/posts"]').click();
    cy.screenshot();
    cy.get('a:contains("New post")').click();
    cy.screenshot();
    cy.get('textarea[placeholder="Post title"]').type('Mi primer UnPublish 11');
    cy.screenshot();
    cy.get('p').type('Hola, mundo');
    cy.screenshot();
    cy.get('button:contains("Publish")').click();
    cy.screenshot();
    cy.get('button:contains("Continue, final review →")').click();
    cy.screenshot();
    cy.get('button:contains("Publish post, right now")').click();
    cy.screenshot();
    cy.get('button:contains("Back to editor")').click();
    cy.screenshot();
    cy.get('button:contains("Unpublish")').click();
    cy.screenshot();
    cy.get('button:contains("Unpublish and revert to private draft →")').click();
    cy.screenshot();

  });
  it('New  Tag', () => {
    const login = new paginaInicioSesion();
    login.navegate();
    login.enterEmail('nata.rojas7@gmail.com');
    login.enterPassword('uniandes23');
    login.enviar();
    
    cy.get('a:contains("New tag")').click();
    cy.screenshot();
    cy.get('#tag-name').type('pruebaTag');
    cy.screenshot();
    cy.get('#tag-slug').type('pruebaTag-2');
    cy.screenshot();
    cy.get('#tag-description').type('Mi primer Tag');
    cy.screenshot();
    cy.get('button:contains("Save")').click();
    cy.screenshot();



  });
  it('Crear nuevo Page', () => {
    const login = new paginaInicioSesion();
    login.navegate();
    login.enterEmail('nata.rojas7@gmail.com');
    login.enterPassword('uniandes23');
    login.enviar();
  
    cy.get('a[href*="#/pages/"]').click();
    cy.screenshot();
    cy.get('a:contains("New page")').click();
    cy.screenshot();
    cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 1');
    cy.screenshot();
    cy.get('p').type('Hola, mundo');
    cy.screenshot();

  });
  it('Crear nuevo Page', () => {
    const login = new paginaInicioSesion();
    login.navegate();
    login.enterEmail('nata.rojas7@gmail.com');
    login.enterPassword('uniandes23');
    login.enviar();
   
    cy.get('a[href*="#/pages/"]').click();
    cy.screenshot();
    cy.get('a:contains("New page")').click();
    cy.screenshot();
    cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 1');
    cy.screenshot();
    cy.get('p').type('Hola, mundo');
    cy.screenshot();

  });

  it('Preview Page', () => {
    const login = new paginaInicioSesion();
    login.navegate();
    login.enterEmail('nata.rojas7@gmail.com');
    login.enterPassword('uniandes23');
    login.enviar();
   
    cy.get('a[href*="#/pages/"]').click();
    cy.screenshot();
    cy.get('a:contains("New page")').click();
    cy.screenshot();
    cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 1');
    cy.screenshot();
    cy.get('p').type('Hola, mundo');
    cy.screenshot();
    cy.get('button:contains("Preview")').click();
    cy.screenshot();

  });

  it('Eliminar Page', () => {
    const login = new paginaInicioSesion();
    login.navegate();
    login.enterEmail('nata.rojas7@gmail.com');
    login.enterPassword('uniandes23');
    login.enviar();
   
    cy.get('a[href*="#/pages/"]').click();
    cy.screenshot();
    cy.get('a:contains("New page")').click();
    cy.screenshot();
    cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 15');
    cy.screenshot();
    cy.get('p').type('Hola, mundo');
    cy.screenshot();
    cy.get('button[title="Settings"]').click();
    cy.screenshot();
    cy.get('button:contains("Delete")').click();
    cy.screenshot();
    cy.get('.gh-btn-red').parent().click();
    cy.screenshot();
    cy.get('.modal-footer').within(() => { cy.get('.gh-btn-red').click() });
    cy.screenshot();
  });

  it('Modificar Page', () => {
    const login = new paginaInicioSesion();
    login.navegate();
    login.enterEmail('nata.rojas7@gmail.com');
    login.enterPassword('uniandes23');
    login.enviar();
   
    cy.get('a[href*="#/pages/"]').click();
    cy.screenshot();
    cy.get('a:contains("New page")').click();
    cy.screenshot();
    cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 22');
    cy.screenshot();
    cy.get('p').type('Hola, mundo');
    cy.screenshot();
    cy.get('a:contains("Page")').click();
    cy.screenshot();
    cy.get('a:contains("Mi primer Page 22")').click();
    cy.screenshot();
    cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 23');
    cy.screenshot();

  });
});


/*describe('Pruebas de Ghost', () => {
  it('Iniciar sesión', () => {
    cy.visit('http://localhost:2368/ghost/');
    cy.get('input[name="identification"]').type('nata.rojas7@gmail.com');
    cy.get('input[name="password"]').type('uniandes23');
    cy.get('#ember5').click();

  });
});*/










