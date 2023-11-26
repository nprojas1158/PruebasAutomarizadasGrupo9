import paginaInicioSesion from "../integration/PageObject/paginaInicioSesion"

const faker = require('@faker-js/faker');
const data = require('./tag_schema.json');

describe("Cypress Test for Ghost 5.68", function () {
  const login = new paginaInicioSesion();
     
  beforeEach('Login Ghost',()=>{
    login.navegate();
    login.enterEmail('j.scoth@uniandes.edu.co');
    login.enterPassword('Maria9002$');
    login.enviar();

    //Tags
    cy.get('a[href="#/tags/"]').click();
    //cy.get('#ember930').click();
    cy.get('a[href="#/tags/new/"]').click();
    cy.url().then(url=>{
      if(url.includes('tags')){
       console.log("La url contiene tags");
      }else{
      console.log("La url no contiene tags");
     }
  })
    
  });

    //1.Crear Tag Correcto, escenario aleatorio 1
  it('Crear Tag Correcto', () => {
      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(faker.word);
      cy.wait(1000);
      cy.get('input[aria-label="Accent color hex value"]').type('FF5733');
      cy.wait(1000);
      cy.get('input[id="tag-slug"]').type(faker.word);
      cy.wait(1000);
      cy.get('textarea[id="tag-description"]').type(faker.word);
      cy.wait(1000);
      cy.get('button[data-test-button="save"]').click();
    
  });

  //2. Crear Tag Vacio, escenario aleatorio 2
  it('Crear Tag Vacio', () => {
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click();
  });

  //3. Crear Tag con descripcion > longitud, pool de datos pseudo 1
  it('Crear Tag con descripcion>longitud', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta
      
      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(nameTag);
      cy.wait(1000);
      cy.get('input[aria-label="Accent color hex value"]').type('FF5733');
      cy.wait(1000);
      cy.get('input[id="tag-slug"]').type(slug);
      cy.wait(1000);
      cy.get('textarea[id="tag-description"]').type(descripcion);
      cy.wait(1000);
      cy.get('button[data-test-button="save"]').click();
    
  });

  //4. Crear Tag con color incorrecto, escenario aleatorio 3
  it('Crear Tag con color incorrecto', () => {
    
    cy.wait(1000);
    cy.get('input[id="tag-name"]').type(faker.word);
    cy.wait(1000);
    cy.get('input[aria-label="Accent color hex value"]').type(faker.hex);
    cy.wait(1000);
    cy.get('input[id="tag-slug"]').type(faker.word);
    cy.wait(1000);
    cy.get('textarea[id="tag-description"]').type(faker.word);
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click();
  });

   //5. Crear Tag con solo descripcion, pool de datos pseudo 2
   it('Crear Tag con solo descripcion', () => {
    const nameTag=data[5].nameTag
    const color=data[5].color
    const slug=data[5].slug
    const descripcion=data[5].descripcion
    const imageTag=data[5].imageTag
    const title=data[5].title
    const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('textarea[id="tag-description"]').type(descripcion);
      cy.wait(1000);
      cy.get('button[data-test-button="save"]').click();
    
  });

  //6. Crear Tag con solo slug, pool de datos pseudo 3
  it('Crear Tag con solo slug', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta

      cy.wait(1000);
      cy.get('input[id="tag-slug"]').type(slug);
      cy.wait(1000);
      cy.get('button[data-test-button="save"]').click();
  });

  //7. Editar Tag: borrar nombre de un tag existente, escenario aleatorio 4
  it('Editar Tag borrar nombre', () => {
    cy.wait(1000);
    cy.get('input[id="tag-name"]').type('');
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click();
    cy.wait(1000);
    cy.get('a[href="#/tags/"]').click
    cy.wait(1000);
    cy.get('li').first().click();
    cy.wait(1000);
    cy.get('input[id="tag-name"]').type('');
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click();
  });

  //8. Crear Tag con MetaData correcta, escenario aleatorio 5
  it('Crear Tag con Metadata correcta', () => {
    cy.wait(1000);
    cy.get('input[id="tag-name"]').type('bbb');
    cy.wait(1000);
    cy.get('button[class="gh-btn gh-btn-expand"]').click();
    cy.wait(1000);
    cy.get('input[id="meta-title"]').type('bbb');
    cy.wait(1000);
    cy.get('textarea[id="meta-description"]').type('bb');
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click();
  });

  //9. Crear Tag con MetaData titulo y descricion > longitud, pool de datos pseudo 4
  it('Crear Tag con Metadata titulo y descripcion>longitud', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta

      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(nameTag);
      cy.wait(1000);
      cy.get('input[aria-label="Accent color hex value"]').type('FF5733');
      cy.wait(1000);
      cy.get('input[id="tag-slug"]').type(slug);
      cy.wait(1000);
      cy.get('textarea[id="tag-description"]').type(descripcion);
      cy.wait(1000);
      cy.get('h4').contains('Meta').click();
      cy.wait(1000);
      cy.get('input[id="meta-title"]').type(descripcion);
      cy.wait(1000);
      cy.get('textarea[id="meta-description"]').type(descripcion);
      cy.wait(1000);
      cy.get('button[data-test-button="save"]').click();    
  });

  //10. Crear Tag con MetaData correcta, escenario aletario 6
  it('Crear Tag con Metadata correcta', () => {
    cy.wait(1000);
    cy.get('input[id="tag-name"]').type(faker.word);
    cy.wait(1000);
    cy.get('input[aria-label="Accent color hex value"]').type('FF5733');
    cy.wait(1000);
    cy.get('input[id="tag-slug"]').type(faker.word);
    cy.wait(1000);
    cy.get('textarea[id="tag-description"]').type(faker.word);
    cy.wait(1000);
    cy.get('h4').contains('Meta').click();
    cy.wait(1000);
    cy.get('input[id="meta-title"]').type(faker.word);
    cy.wait(1000);
    cy.get('textarea[id="meta-description"]').type(faker.word);
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click();
  });

  //11. Crear Tag con MetaData url correcta, pool de datos pseudo 5
  it('Crear Tag con Metadata url correcta', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(nameTag);
      cy.wait(1000);
      cy.get('input[id="meta-title"]').type(title);
      cy.wait(1000);
      cy.get('input[id="canonical-url"]').type(urlMeta)
      cy.wait(1000);
      cy.get('button[data-test-button="save"]').click();    
  });

  //12. Crear Tag con MetaData url incorrecta, escenario aleatorio 7
  it('Crear Tag con Metadata url incorrecta', () => {
    cy.wait(1000);
    cy.get('input[id="tag-name"]').type(faker.word);
    cy.wait(1000);
    cy.get('input[id="tag-slug"]').type(faker.word);
    cy.wait(1000);
    cy.get('textarea[id="tag-description"]').type(faker.word);
    cy.wait(1000);
    cy.get('h4').contains('Meta').click();
    cy.wait(1000);
    cy.get('input[id="meta-title"]').type(faker.word);
    cy.wait(1000);
    cy.get('textarea[id="meta-description"]').type(faker.word);
    cy.wait(1000);
    cy.get('input[id="canonical-url"]').type(faker.word)
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click();
  });

  //13. Crear Tag con X card correcta, escenario aleatorio 8
  it('Crear Tag con X card correcta', () => {
    cy.wait(1000);
    cy.get('input[id="tag-name"]').type(faker.word);
    cy.wait(1000);
    cy.get('input[id="tag-slug"]').type(faker.word);
    cy.wait(1000);
    cy.get('textarea[id="tag-description"]').type(faker.word);
    cy.wait(1000);
    cy.get('input[id="twitter-title"]').type(faker.word);
    cy.wait(1000);
    cy.get('textarea[id="twitter-description"]').type(faker.word);
    cy.wait(1000);   
    cy.get('button[data-test-button="save"]').click();
  });

  //14. Crear Tag con X card titulo y descricion > longitud, pool de datos pseudo 6
  it('Crear Tag con X card titulo y descricion > longitud', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta

      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(nameTag);
      cy.wait(1000);
      cy.get('h4').contains('X').click();
      cy.wait(1000);
      cy.get('input[id="twitter-title"]').type(descripcion);
      cy.wait(1000);
      cy.get('textarea[id="twitter-description"]').type(descripcion);
      cy.wait(1000);   
      cy.get('button[data-test-button="save"]').click();   
  });

  //15. Crear Tag solo con X card titulo, pool de datos pseudo 7
  it('Crear Tag solo con X card titulo', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('h4').contains('X').click();
      cy.wait(1000);
      cy.get('input[id="twitter-title"]').type(title);
      cy.wait(1000);
      cy.get('button[data-test-button="save"]').click();    
  });

//16. Crear Tag con X card solo descripcion, pool de datps pseudo 8
it('Crear Tag con X card solo descripcion,', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta
       
    cy.wait(1000);
    cy.get('h4').contains('X').click();
    cy.get('input[id="twitter-description"]').type(title);
    cy.get('button[data-test-button="save"]').click();    
  });

  //17. Crear Tag con Facebook card correcta, escenario aleatorio 9
  it('Crear Tag con Facebook card correcta', () => {
    cy.wait(1000);
    cy.get('input[id="tag-name"]').type(faker.word);
    cy.wait(1000);
    cy.get('input[id="tag-slug"]').type(faker.word);
    cy.wait(1000);
    cy.get('textarea[id="tag-description"]').type(faker.word);
    cy.wait(1000);
    cy.get('h4').contains('Facebook').click();
    cy.get('input[id="og-title"]').type(faker.word);
    cy.wait(1000);
    cy.get('textarea[id="og-description"]').type(faker.word);
    cy.wait(1000);   
    cy.get('button[data-test-button="save"]').click();
  });

  //18. Crear Tag con Facebook card titulo y descricion > longitud, pool de datos pseudo 9
  it('Crear Tag con Facebook card titulo y descricion > longitud', () => {
    const nameTag=data[5].nameTag
    const color=data[5].color
    const slug=data[5].slug
    const descripcion=data[5].descripcion
    const imageTag=data[5].imageTag
    const title=data[5].title
    const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(nameTag);
      cy.wait(1000);
      cy.get('h4').contains('Facebook').click();
      cy.get('input[id="og-title"]').type(descripcion);
      cy.wait(1000);
      cy.get('textarea[id="og-description"]').type(descripcion);
      cy.wait(1000);   
      cy.get('button[data-test-button="save"]').click();    
  });

  //19. Crear Tag con Facebook card solo titulo, pool de datos pseudo 10
it('Crear Tag con Facebook card solo titulo', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta
       
    cy.wait(1000);
    cy.get('h4').contains('Facebook').click();
    cy.get('input[id="og-title"]').type(title);
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click(); 
});

  //20. Crear Tag con Facebook card solo con descripcion, pool de datos pseudo 11
it('Crear Tag con Facebook card solo con descripcion', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta
       
    cy.wait(1000);
    cy.get('h4').contains('Facebook').click();
    cy.get('input[id="og-description"]').type(title);
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click(); 
});

  //21. Crear Tag con Code Injection header hexadecimal, pool de datos pseudo 12
  it('Crear Tag con Code Injection header hexadecimal', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(nameTag);
      cy.wait(1000);
      cy.get('h4').contains('Code').click();
      cy.get('pre[rol="presentation"]').type(color);
      cy.wait(1000);
      cy.get('button[data-test-button="save"]').click();   
  });

  //22. Crear Tag con Code Injection header texto, pool de datos pseudo 13
  it('Crear Tag con Code Injection header texto', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(nameTag);
      cy.wait(1000);
      cy.get('h4').contains('Code').click();
      cy.get('pre[rol="presentation"]').type(descripcion);
      cy.wait(1000);
      cy.get('button[data-test-button="save"]').click();   
  });

  //23. Crear Tag con Code Injection footer hexadecimal, pool de datos pseudo 14
  it('Crear Tag con Code Injection footer hexadecimal', () => {
    const nameTag=data[5].nameTag
    const color=data[5].color
    const slug=data[5].slug
    const descripcion=data[5].descripcion
    const imageTag=data[5].imageTag
    const title=data[5].title
    const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(nameTag);
      cy.wait(1000);
      cy.get('h4').contains('Code').click();
      cy.get('pre[rol="presentation"]').type(color);
      cy.wait(1000);
      cy.get('button[data-test-button="save"]').click();    
  });

  //24. Crear Tag con Code Injection footer texto, escenario aleatorio 10
  it('Crear Tag con Code Injection footer texto', () => {
    cy.wait(1000);
    cy.get('input[id="tag-name"]').type(faker.word);
    cy.wait(1000);
    cy.get('h4').contains('Code').click();
    cy.get('pre[rol="presentation"]').type(faker.word);
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click();
  });

    //25. Crear Tag con Code Injection footer imagen, pool de datos pseudo 14
    it('Crear Tag con Code Injection footer imagen', () => {
      const nameTag=data[5].nameTag
      const color=data[5].color
      const slug=data[5].slug
      const descripcion=data[5].descripcion
      const imageTag=data[5].imageTag
      const title=data[5].title
      const urlMeta=data[5].urlMeta
         
        cy.wait(1000);
        cy.get('input[id="tag-name"]').type(nameTag);
        cy.wait(1000);
        cy.get('h4').contains('Code').click();
        cy.get('pre[rol="presentation"]').type(imagen);
        cy.wait(1000);
        cy.get('button[data-test-button="save"]').click();    
    });

      //26. Crear Tag con nombre con imagen, pool de datos pseudo 14
  it('Crear Tag con nombre con imagen', () => {
    const nameTag=data[5].nameTag
    const color=data[5].color
    const slug=data[5].slug
    const descripcion=data[5].descripcion
    const imageTag=data[5].imageTag
    const title=data[5].title
    const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(imagen);
      cy.wait(1000);      
      cy.get('button[data-test-button="save"]').click();    
  });

   //27. Crear Tag con nombre con url, pool de datos pseudo 14
   it('Crear Tag con nombre con url', () => {
    const nameTag=data[5].nameTag
    const color=data[5].color
    const slug=data[5].slug
    const descripcion=data[5].descripcion
    const imageTag=data[5].imageTag
    const title=data[5].title
    const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(urlMeta);
      cy.wait(1000);      
      cy.get('button[data-test-button="save"]').click();    
  });

   //28. Crear Tag con color con url, pool de datos pseudo 14
   it('Crear Tag con color con url', () => {
    const nameTag=data[5].nameTag
    const color=data[5].color
    const slug=data[5].slug
    const descripcion=data[5].descripcion
    const imageTag=data[5].imageTag
    const title=data[5].title
    const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('input[id="tag-name"]').type(nameTag);
      cy.wait(1000); 
      cy.get('input[aria-label="Accent color hex value"]').type(urlMeta);
      cy.wait(1000);     
      cy.get('button[data-test-button="save"]').click();    
  });

  //29. Crear Tag con slug con url, pool de datos pseudo 14
  it('Crear Tag con slug con url', () => {
    const nameTag=data[5].nameTag
    const color=data[5].color
    const slug=data[5].slug
    const descripcion=data[5].descripcion
    const imageTag=data[5].imageTag
    const title=data[5].title
    const urlMeta=data[5].urlMeta
       
      cy.wait(1000);
      cy.get('input[id="tag-slug"]').type(urlMeta);
      cy.wait(1000);      
      cy.get('button[data-test-button="save"]').click();    
  });

  //30. Crear Tag con descripcion hexadecimal, pool de datos pseudo 1
  it('Crear Tag con descripcion hexadecimal', () => {
    const nameTag=data[5].nameTag
    const color=data[5].color
    const slug=data[5].slug
    const descripcion=data[5].descripcion
    const imageTag=data[5].imageTag
    const title=data[5].title
    const urlMeta=data[5].urlMeta
    
    cy.wait(1000);
    cy.get('input[id="tag-name"]').type(nameTag);
    cy.wait(1000);
    cy.get('textarea[id="tag-description"]').type(color);
    cy.wait(1000);
    cy.get('button[data-test-button="save"]').click();
  
});
});