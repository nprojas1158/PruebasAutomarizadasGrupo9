
describe('Pruebas de Ghost', () => {
    it('Iniciar sesión', () => {
      cy.visit('http://localhost:2368/ghost/');
      cy.get('input[name="identification"]').type('j.scoth@uniandes.edu.co');
      cy.get('input[name="password"]').type('Maria9002$');
      cy.get('#ember5').click();
      
    });
  });

  describe('Pruebas de Ghost', () => {
    it('Crear nuevo Post', () => {
      cy.visit('http://localhost:2368/ghost/');
      cy.get('input[name="identification"]').type('j.scoth@uniandes.edu.co');
      cy.get('input[name="password"]').type('Maria9002$');
      cy.get('#ember5').click();
      cy.get('a[href*="#/posts"]').click();
      cy.get('a:contains("New post")').click();
      cy.get('textarea[placeholder="Post title"]').type('Mi primer Post 1');
      cy.get('p').type('Hola, mundo');
      

    });
  });

  describe('Pruebas de Ghost', () => {
    it('Preview de un Post', () => {
      cy.visit('http://localhost:2368/ghost/');
      cy.get('input[name="identification"]').type('j.scoth@uniandes.edu.co');
      cy.get('input[name="password"]').type('Maria9002$');
      cy.get('#ember5').click();
      cy.get('a[href*="#/posts"]').click();
      cy.get('a:contains("New post")').click();
      cy.get('textarea[placeholder="Post title"]').type('Mi primer Preview 1');
      cy.get('p').type('Hola, mundo');
      cy.get('button:contains("Preview")').click();
      
      
      
    });
  });
  
  describe('Pruebas de Ghost', () => {
    it('Publish de un Post', () => {
      cy.visit('http://localhost:2368/ghost/');
      cy.get('input[name="identification"]').type('j.scoth@uniandes.edu.co');
      cy.get('input[name="password"]').type('Maria9002$');
      cy.get('#ember5').click();
      cy.get('a[href*="#/posts"]').click();
      cy.get('a:contains("New post")').click();
      cy.get('textarea[placeholder="Post title"]').type('Mi primer Publish 10');
      cy.get('p').type('Hola, mundo');
      cy.get('button:contains("Publish")').click();
      cy.get('button:contains("Continue, final review →")').click();
      cy.get('button:contains("Publish post, right now")').click();
      
    });
  });

  describe('Pruebas de Ghost', () => {
    it('Unpublish de un Post', () => {
      cy.visit('http://localhost:2368/ghost/');
      cy.get('input[name="identification"]').type('j.scoth@uniandes.edu.co');
      cy.get('input[name="password"]').type('Maria9002$');
      cy.get('#ember5').click();
      cy.get('a[href*="#/posts"]').click();
      cy.get('a:contains("New post")').click();
      cy.get('textarea[placeholder="Post title"]').type('Mi primer UnPublish 11');
      cy.get('p').type('Hola, mundo');
      cy.get('button:contains("Publish")').click();
      cy.get('button:contains("Continue, final review →")').click();
      cy.get('button:contains("Publish post, right now")').click();
      cy.get('button:contains("Back to editor")').click();
      cy.get('button:contains("Unpublish")').click();
      cy.get('button:contains("Unpublish and revert to private draft →")').click();
      
    });
  });

  describe('Pruebas de Ghost', () => {
    it('New  Tag', () => {
      cy.visit('http://localhost:2368/ghost/#/tags');
      cy.get('input[name="identification"]').type('j.scoth@uniandes.edu.co');
      cy.get('input[name="password"]').type('Maria9002$');
      cy.get('#ember5').click();
      cy.get('a:contains("New tag")').click();
      cy.get('#tag-name').type('pruebaTag');
      cy.get('#tag-slug').type('pruebaTag-2')
      cy.get('#tag-description').type('Mi primer Tag');
      cy.get('button:contains("Save")').click();
  
      

    });
  });

  describe('Pruebas de Ghost', () => {
    it('Crear nuevo Page', () => {
      cy.visit('http://localhost:2368/ghost/');
      cy.get('input[name="identification"]').type('j.scoth@uniandes.edu.co');
      cy.get('input[name="password"]').type('Maria9002$');
      cy.get('#ember5').click();
      cy.get('a[href*="#/pages/"]').click();
      cy.get('a:contains("New page")').click();
      cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 1');
      cy.get('p').type('Hola, mundo');

    });
  });
  describe('Pruebas de Ghost', () => {
    it('Preview Page', () => {
      cy.visit('http://localhost:2368/ghost/');
      cy.get('input[name="identification"]').type('j.scoth@uniandes.edu.co');
      cy.get('input[name="password"]').type('Maria9002$');
      cy.get('#ember5').click();
      cy.get('a[href*="#/pages/"]').click();
      cy.get('a:contains("New page")').click();
      cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 1');
      cy.get('p').type('Hola, mundo');
      cy.get('button:contains("Preview")').click();
    
    });
  });
      
     
      
    

  

      describe('Pruebas de Ghost', () => {
        it('Eliminar Page', () => {
          cy.visit('http://localhost:2368/ghost/');
          cy.get('input[name="identification"]').type('j.scoth@uniandes.edu.co');
          cy.get('input[name="password"]').type('Maria9002$');
          cy.get('#ember5').click();
          cy.get('a[href*="#/pages/"]').click();
          cy.get('a:contains("New page")').click();
          cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 15');
          cy.get('p').type('Hola, mundo');
          cy.get('button[title="Settings"]').click();
          cy.get('button:contains("Delete")').click();
          cy.get('.gh-btn-red').parent().click();
          cy.get('.modal-footer').within(() => {cy.get('.gh-btn-red').click()});
          });
        });

        describe('Pruebas de Ghost', () => {
          it('Modificar Page', () => {
            cy.visit('http://localhost:2368/ghost/');
            cy.get('input[name="identification"]').type('j.scoth@uniandes.edu.co');
            cy.get('input[name="password"]').type('Maria9002$');
            cy.get('#ember5').click();
            cy.get('a[href*="#/pages/"]').click();
            cy.get('a:contains("New page")').click();
            cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 22');
            cy.get('p').type('Hola, mundo');
            cy.get('a:contains("Page")').click();
            cy.get('a:contains("Mi primer Page 22")').click();
            cy.get('textarea[placeholder="Page title"]').type('Mi primer Page 23');
            
            });
          });

   

  

  

 

