# Set Up
Tested in Edition	Windows 11 Pro Insider Preview
Version	23H2
Installed on	‎19/‎11/‎2023
OS build	25992.1000
Experience	Windows Feature Experience Pack 1000.25992.1000.0
Processor	AMD Ryzen 5 3600 6-Core Processor                 3.60 GHz
Installed RAM	16,0 GB

## For Windows follow the steps
* Install WLS v1.2.5.0
* Install Ubuntu for WSL in v22.04.3 LTS
### In Ubuntu
* Install Node JS v18.12.1
* Install NPM v8.19.2
* Install MySQL
* Install Ghost-CLI v1.25.3
* Install Ghost v5.72.2
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
