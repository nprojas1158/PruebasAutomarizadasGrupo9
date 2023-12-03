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
    
        //1.Customize Design and branding, escenario 1: Diseniar Brand
      it('Diseniar brand', () => {
        cy.wait(1000);
        cy.get('button[id="brand"]').click();
        cy.screenshot('Screen_Brand_Tag');
        cy.wait(1000);
        cy.get('button[data-testid="change-theme"]').click();
        cy.screenshot('Screen_Change_Theme');
        cy.wait(1000);
        cy.get('button:contains("Design")').click();
        cy.wait(1000);
        cy.get('span:contains("Save")').click();
        cy.wait(1000);
        cy.get('span:contains("Close")').click();        
      });
    
       //2.Customize Design and branding, escenario 2: Site Wide
      it('Diseniar sitewide', () => {
        cy.wait(1000);
        cy.get('button[id="site-wide"]').click();
        cy.screenshot('Screen_Site_Wide_Tag');
        cy.wait(1000);
        cy.get('span:contains("Save")').click();
        cy.wait(1000);
        cy.get('span:contains("Close")').click();
      });

       //3.Customize Design and branding, escenario 3: Homepage
       it('Diseniar homepage', () => {
        cy.wait(1000);
        cy.get('button[id="homepage"]').first().click();
        cy.screenshot('Screen_Homepage_Tag');
        cy.wait(1000);
        cy.get('span:contains("Save")').click();
        cy.wait(1000);
        cy.get('span:contains("Close")').click();
      });       
});    