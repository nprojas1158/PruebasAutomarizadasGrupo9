export class PaginaInicioSesion {

    constructor(){

        
    } 
    navegate() {
        cy.visit('http://localhost:2368/ghost/');
    }
    enterEmail(nombreUsuario) {
        cy.get('input[name="identification"]').clear();
        cy.get('input[name="identification"]').type(nombreUsuario);
        return this;
    }

    enterPassword(pswd) {
        cy.get('input[name="password"]').type(pswd);
        return this;
    }

    enviar() {
        cy.get('#ember5').click();

    }
    
}
export default PaginaInicioSesion; 
