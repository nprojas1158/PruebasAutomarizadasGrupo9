Testing README
---

*Cypress

Descripción:  Este repositorio contiene pruebas automatizadas utilizando Cypress, un framework de pruebas de extremo a extremo para aplicaciones web modernas.

Requisitos Previos: Antes de comenzar, asegúrate de tener instalado Node.js en tu máquina.

Clona este repositorio

Navega al directorio del proyecto

Instala las dependencias: npm install

Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando: npm run cypress:open

Esto abrirá la interfaz gráfica de Cypress, desde donde podrás ejecutar las pruebas de forma interactiva.

Si prefieres ejecutar las pruebas en modo de línea de comandos, utiliza:
npm run cypress:run



---
*Kraken 

Instalar Kraken desde el manejador de dependencias

Requisitos Previos: Prerequisitos: 
1. Usar la versión 16.14.2 de Node.Js
2. Tener instalado Android Studio
3. En las propiedades de Android Studio tener instalado:
	a. Android SDK Platform-Tools
	b. Android SDK Build-Tools
	c. Android SDK Tools (Obsolete)
4. Configurar la siguiente variable ambiental:
	JAVA_HOME: C:\Program Files\Android\Android Studio\jre

Instalación e instalación de Kraken: 
1. Ir a la carpeta de trabajo (En este caso, la carpeta de Ghost o del release)
2. Sí aun no lo tiene, debe instalar Kraken en global: npm install kraken-node -g
3. Inicializar Kraken: kraken-node gen
4. Instalar Kraken en local: npm install kraken-node
5. Instalar Appium en global: npm install -g appium
6. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor

Ejecutar Kraken e iniciar el escenario con los scripts de este repositorio, se ejecuta: kraken-node run ó con el comando ./node_modules/kraken-node/bin/kraken-node run

