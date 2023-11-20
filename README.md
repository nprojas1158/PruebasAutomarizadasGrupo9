# Grupo 9

1. Natalia Rojas - np.rojas1158@uniandes.edu.co 	
2. Juan Diego Lugo - jd.lugo@uniandes.edu.co 
3. Mateo Jaramillo - m.jaramillos2@uniandes.edu.co 
4. María Scoth - j.scoth@uniandes.edu.co

# Testing README

----

# SEMANA 5
#  Cypress

### Descripción:  
Este repositorio contiene pruebas automatizadas utilizando Cypress, un framework de pruebas de extremo a extremo para aplicaciones web modernas.

### Requisitos Previos: 

Antes de comenzar, asegúrate de tener instalado Node.js en tu máquina.

Clona este repositorio

Navega al directorio del proyecto

Instala las dependencias: npm install

### Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando: npm run cypress:open

Esto abrirá la interfaz gráfica de Cypress, desde donde podrás ejecutar las pruebas de forma interactiva.

Si prefieres ejecutar las pruebas en modo de línea de comandos, utiliza:
npm run cypress:run

Para las pruebas de Cypress el email utilizado es : j.scoth@uniandes.edu.co y el password es : Maria9002$ por lo tanto realizar la creación previa en la aplicación Ghost

# Kraken 

Instalar Kraken desde el manejador de dependencias

### Requisitos Previos: Prerequisitos: 
1. Usar la versión 16.14.2 de Node.Js
2. Tener instalado Android Studio
3. En las propiedades de Android Studio tener instalado:
	a. Android SDK Platform-Tools
	b. Android SDK Build-Tools
	c. Android SDK Tools (Obsolete)
4. Configurar la siguiente variable ambiental:
	JAVA_HOME: C:\Program Files\Android\Android Studio\jre

### Instalación e instalación de Kraken: 
1. Ir a la carpeta de trabajo (En este caso, la carpeta de Ghost o del release)
2. Sí aun no lo tiene, debe instalar Kraken en global: npm install kraken-node -g
3. Inicializar Kraken: kraken-node gen
4. Instalar Kraken en local: npm install kraken-node
5. Instalar Appium en global: npm install -g appium
6. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor

Ejecutar Kraken e iniciar el escenario con los scripts de este repositorio, se ejecuta: kraken-node run o el comando ./node_modules/kraken-node/bin/kraken-node run

En la carpeta en la que instaló Kraken pegue el archivo properties.json y la carpeta features que están publicados en este repositorio. El archivo json debe quedar en la carpeta raíz, donde se encuentran las carpetas features y node_modules. Puede cambiar el nombre de la carpeta original de features y pegar la carpeta de features de este repositorio, pues allí se encuentran todos los scripts de los features implementados. Estos son todos los archivos requeridos para correr los escenarios implementados. Tenga en cuenta que no corren secuencialmente sino, que debe ser uno por uno.   

# Puppeteer 

### Descripción

Este repositorio contiene pruebas automatizadas utilizando Puppeteer, una biblioteca de control para Node.js que proporciona una interfaz de alto nivel para controlar los navegadores Chrome o Chromium a través del protocolo DevTools.

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js en tu máquina.

1. Clona este repositorio
2. Navega al directorio del proyecto

### Ejecución de Pruebas

Leer las indicaciones en el readme de la carpeta pupeteer

------

# SEMANA 6

Las pruebas se desplegaron en una instancia de AWS para facilitar el proceso de configuración. 
Para acceder a éste tenemos dos opiciones:

1. En la rama main descargue el archivo PruebasAutomatizadas(1).rdp, haga clic en Connect e ingrese la contraseña que se envió en la entrega por Coursera.
2. Ingrese por Escritorio Remoto con lo datos que se enviaron en la entrega por Coursera. Los datos corresponden a Computer, Usuario y Contraseña.
   Le aparecerá una ventana de warning por el certificado; haga clic en Yes.


### GHOST y configuración

Se prueba con las versiones de Ghost 5.68 y 5.73.2 
Para la configuración del entorno de pruebas se usan las siguientes versiones:
1. nvm: 16.20.2
2. npm: 10.1
3. node.js: 18.18.2

Para correr Ghost 5.73.2 abra una consola de comandos (cmd) y ejecute el comando: cd C:\Users\Administrator\ghost1
Una vez se encuentre ubicado en la carpeta, ingrese el comando: ghost start
Iniciará el proceso de despliegue y al finalizar le debe aparecer el siguiente mensaje:
	Your admin interface is located at: http://localhost:2368/ghost/
Adicionalmente debe abrir una ventan de node.js
Esto indica que se desplegó correctamente la aplicación.
Abra un navegador, puede ser Chrome y en una pestaña ejecute esta url: http://localhost:2368/ghost/
Debe observar que la aplicación de Ghost funciona correctamente

Para correr Ghost 5.68 abra una consola de comandos (cmd) y ejecute el comando: cd C:\Users\Administrator\ghost2
Una vez se encuentre ubicado en la carpeta, ingrese el comando: ghost start
Iniciará el proceso de despliegue y al finalizar le debe aparecer el siguiente mensaje:
	Your admin interface is located at: http://localhost:2369/ghost/
Adicionalmente debe abrir una ventan de node.js
Esto indica que se desplegó correctamente la aplicación.
Abra un navegador, puede ser Chrome y en una pestaña ejecute esta url: http://localhost:2369/ghost/
Debe observar que la aplicación de Ghost funciona correctamente

En caso de que requiera los datos del usuario administrador para ingresar a Ghost se enviaron por el link de entrega de Coursera.

### BackstopJS test
Asegurese de tener instalado backstopjs en su computador, en caso de no tenerlo utilice el comando
```
npm install -g backstopjs
```
Para hacer uso de la herramienta de backstop debe correr los test de Cypress y obtener las carpetas con las capturas de pantalla, posteriormente copiar el archivo .bat y ejecutarlo dentro de cada una de las carpetas de los test. Finalmente tome todas las imagenes y reemplace las que están en la carpeta Cypress/backstop/backstop_data/2368/'nombre del test', una vez hecho esto con una terminal de comandos (CMD) acceda a la carpeta Cypress/backstop y utilice el comando: 
```
backstop test
```
El informe HTML se debe desplegar automaticamente en su navegador, puede ver el informe generado en la ultima ejecución en:
Cypress/backstop/backstop_data/html_report/index.html

### Ventajas y desventajas
https://github.com/nprojas1158/PruebasAutomarizadasGrupo9/wiki

# Kraken

Para ejecutar los escenarios de kraken abra una consola de comandos e ingrese el comando: nvm use 16.20.2
*Para las demás herramientas utilice el comando: nvm use 18.18.1

En el explorador de archivos diríjase a la siguiente ubicación: C:\Users\Administrator

Haga clic derecho sobre la carpeta de kraken2 y seleccione la opción abrir GIT Bash Here.

Una vez se abre la ventana digite el siguiente comando para correr los escenarios: kraken-node run ó el comando ./node_modules/kraken-node/bin/kraken-node run

Nota: 1. Para que funcione kraken debe correrse desde GIT, desde otra consola no nos funcionó
      2. Los escenarios se encuentran en la carpeta features y deben correrse uno a uno.
	


# Cypress

Versión Cypress 13.5.1
Versión nodeJs 18.18.1
versión npm 9.8.1 

En la carpeta de cypress que se encuentra en el repositorio, PruebasAutomarizadasGrupo9\Cypress\cypress\integration\PageObject hay una archivo paginaInicioSesion.js modifique el puerto de la url en cy.visit() 
ya sea para ejecutarlo por 2368 (Version ghost 5.73.2) o 2369(Version ghost 5.68)

1.Abrir una terminal y ejecutar el siguiente comando cypress open 
2. en la ventana de la aplicación de cypress seleccione el proyecto donde tiene los casos de prueba 
3. Seleccione la opcion de E2E testing 
4. Seleccione el navegador con el que deseea realizar las pruebas
5. Dar clic en el botón Start E2E Testing 
6. Seleccione el archivo monkey_testing.cy.js
7. Espere a que finalice la ejecucion y verifique que se haya creado los screenshots de las pruebas


# Puppeteer
### Descripción

Este repositorio contiene pruebas automatizadas utilizando Puppeteer, una biblioteca de control para Node.js que proporciona una interfaz de alto nivel para controlar los navegadores Chrome o Chromium a través del protocolo DevTools.

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js en tu máquina.

1. Clona este repositorio
2. Navega al directorio del proyecto

### Ejecución de Pruebas

Leer las indicaciones en el readme de la carpeta pupeteer

# Video Semana 6

https://youtu.be/oSWLCKBnrak



