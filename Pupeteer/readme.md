# Set Up
## For Windows follow the steps
* Install WLS v1.2.5.0
* Install Ubuntu for WSL in v22.04.3 LTS
### In Ubuntu
* Install Node JS v18.12.1
* Install MySQL
* Install Ghost-CLI 1.25.3
* Install Ghost v5.72.2
* Go through the installation process of Ghost and MySQL
* Start Ghost
### Back in Windows
* Install Node JS v21.1.0
* Install Google Chrome
* Go to the URL configured for Ghost in the installation process
* Create the admin user
* Download the repo
* Change the config.js and replace all the info with your admin user info and URL

# Run
For running the tests you have two options
* Install dependencies and run all test executing the run_test.bat
* Or for run individual tests install with 
```
npm install
```
* Run each test entering to the folder and using the command
```
node 'number_of_test'.js
```
