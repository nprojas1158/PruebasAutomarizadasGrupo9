# Set Up
Tested in Edition	Windows 11 Pro Insider Preview
Version	23H2
Installed on	‎20/‎11/‎2023
OS build	25997.1010
Experience	Windows Feature Experience Pack 1000.25997.1010.0
Processor	AMD Ryzen 5 3600 6-Core Processor                 3.60 GHz
Installed RAM	16,0 GB

## For Windows follow the steps
* Install WSL version: 2.0.9.0
* Set up Kernel version: 5.15.133.1-1
* Set up WSLg version: 1.0.59
* Set up MSRDC version: 1.2.4677
* Set up Direct3D version: 1.611.1-81528511
* Set up DXCore version: 10.0.25131.1002-220531-1700.rs-onecore-base2-hyp
* Set up Windows version: 10.0.25997.1010
* Install Ubuntu for WSL in v20.04.6 LTS
### In Ubuntu
* Install Node JS v18.17.1
* Install NPM v9.6.7
* Install MySQL
* Install Ghost-CLI v1.25.3
* Install Ghost v5.68.0
* Go through the installation process of Ghost and MySQL
* Start Ghost
### Back in Windows
* Install Node JS v21.1.0
* Install Google Chrome v119.0.6045.160
* Go to the URL configured for Ghost in the installation process
* Create the admin user
* Download the repo
* Change the config.js and replace all the info with your admin user info and URL

# Run
For running the tests you have two options, either way the npm install should install all the dependencies in the used version
i.e. puppeteer: ^21.5.0 if you want to see all the versions of the dependencies installed can take a look to the package-lock.json 
* Install dependencies and run all test executing the run_test.bat
* Or for run individual tests install with 
```
npm install
```
* Run each test entering to the folder and using the command
```
node 'number_of_test'.js
```
Due to the names of the test if you want to see in detail which is the scenary tested by every file you can see 'detalle de pruebas Puppeteer semana 7.pdf' and the wiki for the explanation of the generated data and the strategies
