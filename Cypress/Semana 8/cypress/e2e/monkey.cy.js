import paginaInicioSesion from "../integration/PageObject/paginaInicioSesion"

describe("Cypress Test for Ghost 5.68 and 5.71", function () {
    const login = new paginaInicioSesion();

    beforeEach('Login Ghost',()=>{
        login.navegate();
        login.enterEmail('j.scoth@uniandes.edu.co');
        login.enterPassword('Maria9002$');
        login.enviar();
        cy.get('#ember34').click();
    
        //Settings
        cy.get(':nth-child(4) > :nth-child(2) > #navigation').first().click();
        cy.screenshot();
        cy.get('button:contains("Customize")').eq(0).click();
        cy.screenshot('Screen_Settings');
        cy.wait(1000);           
      });

    it('Realizar clics aleatorios en enlaces de navegación', () => {
        // Realizar 10 clics aleatorios en enlaces de navegación
        for (let i = 0; i < 10; i++) {
          cy.get('[data-test=site-nav-left]').find('a').eq(getRandomInt(5)).click();
        }
      });
    
      it('Ingresar texto aleatorio en campos de búsqueda', () => {
        // Ingresar texto aleatorio en campos de búsqueda o filtros
        const randomText = generateRandomText();
        cy.get('[data-test=search-input]').type(randomText);
      });
    
      it('Alternar entre vistas y acciones aleatorias', () => {
        // Realizar acciones aleatorias como cambiar entre vistas o realizar clics en botones aleatorios
        const actions = ['toggle-posts-view', 'profile-button', 'tags-link', 'help-link'];
    
        for (let i = 0; i < 10; i++) {
          const randomAction = actions[getRandomInt(actions.length)];
          cy.get(`[data-test=${randomAction}]`).click();
        }
      });
    
      it('Navegación aleatoria en diferentes áreas de la aplicación', () => {
        // Realizar clics aleatorios en diferentes secciones de la aplicación
        const areas = ['site-nav-left', 'profile-settings', 'toggle-posts-view'];
    
        for (let i = 0; i < 10; i++) {
          const randomArea = areas[getRandomInt(areas.length)];
          cy.get(`[data-test=${randomArea}]`).click();
        }
      });
    
      // Función para obtener un número entero aleatorio entre 0 y max (exclusivo)
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
      // Función para generar texto aleatorio
      function generateRandomText() {
        return Math.random().toString(36).substring(2, 15);
      }
  
    it('Navegar a la sección de Posts desde el menú de navegación', () => {
      // Navegar a la sección de Posts desde el menú de navegación
      cy.get('[data-test=site-nav-left]').contains('Posts').click();
      cy.url().should('include', '/ghost/#/posts');
    });
  
    it('Ir a la página de Tags desde el menú de navegación', () => {
      // Navegar a la sección de Tags desde el menú de navegación
      cy.get('[data-test=site-nav-left]').contains('Tags').click();
      cy.url().should('include', '/ghost/#/tags');
    });
  
    it('Acceder a la sección de Personal Settings', () => {
      // Navegar a la sección de configuración personal
      cy.get('[data-test=profile-button]').click();
      cy.get('[data-test=profile-settings]').click();
      cy.url().should('include', '/ghost/#/settings');
    });
  
    it('Verificar enlace a la página de ayuda desde el menú de usuario', () => {
      // Acceder al menú de usuario y verificar enlace a la página de ayuda
      cy.get('[data-test=profile-button]').click();
      cy.get('[data-test=help-link]').click();
      cy.url().should('include', 'help.ghost.org');
    });
  
    it('Cambiar entre vistas de lista y cuadrícula en la sección de Posts', () => {
      // Navegar a la sección de Posts y cambiar entre vistas de lista y cuadrícula
      cy.get('[data-test=site-nav-left]').contains('Posts').click();
      cy.get('[data-test=toggle-posts-view]').click(); 
    });
  
    it('Volver a la página de inicio desde cualquier sección de la aplicación', () => {
      // Navegar a cualquier sección y verificar el enlace de regreso a la página de inicio
      cy.get('[data-test=site-nav-left]').contains('Posts').click();
      cy.get('[data-test=home-link]').click();
      cy.url().should('include', '/ghost');
    });
  

    it('Comprobar redirección al cerrar sesión', () => {
      // Realizar cierre de sesión y verificar que se redirige correctamente a la página de inicio de sesión
      cy.get('[data-test=profile-button]').click();
      cy.get('[data-test=signout-button]').click();
      cy.url().should('include', '/ghost/signin');
    });
  
    it('Navegar a la sección de Integrations', () => {
      // Navegar a la sección de Integrations desde el menú de navegación
      cy.get('[data-test=site-nav-left]').contains('Integrations').click();
      cy.url().should('include', '/ghost/#/integrations');
    });
});