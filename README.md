# briq

Pre Requisities
1.Instal Node.js and add the environment path.
2.Install protractor using 
npm install -g protractor
3.Make sure JDK installed in machine by using
java -version
or else install java
4.To use allure test reporter, run the below command
npm i jasmine-allure-reporter
5.Add the respective code in conf.json
6.Installing WebDriver for Chrome 
webdriver-manager update
7.start the server by using the below command and make sure the terminal is not closed.
webdriver-manager start
8.Then start running the script using the following command ,
protractor src\conf.js
9.After test run to open the allure test report ,
allure serve "path to allure results folder"

Important Links
https://www.npmjs.com/package/jasmine-allure-reporter
