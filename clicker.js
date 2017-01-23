var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    //.forBrowser('chrome')
    .forBrowser('firefox')
    .build();

/*
driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
*/


//also see http://stackoverflow.com/questions/20148857/check-if-element-exists-selenium-javascript-node-js

//load main page
driver.get('https://ampd.epa.gov/ampd/');
//create a query
driver.findElement(By.id('createId')).click();
//programs and data sets
//To do: change auto-gen id's to Xpath 
driver.findElement(By.id('x-auto-139')).click();
driver.findElement(By.id('x-auto-183')).click();
driver.findElement(By.id('x-auto-76')).click(); 
//time frame
driver.findElement(By.id('x-auto-347')).click();
// driver.findElement(By.id('x-auto-269-input')).sendKeys('0');
// driver.findElement(By.id('x-auto-270-input')).sendKeys('0');
// driver.findElement(By.id('x-auto-276-input')).sendKeys('12/01/2016');
driver.findElement(By.id('x-auto-281')).click();
driver.findElement(By.className('x-date-selected')).click();
driver.findElement(By.id('x-auto-338')).click(); 
//criteria
driver.findElement(By.id('x-auto-576')).click();
driver.findElement(By.id('x-auto-587')).click();
//criteria/aggregation
driver.findElement(By.id('x-auto-649')).click();
//variables
driver.findElement(By.id('x-auto-715')).click();
driver.findElement(By.id('x-auto-873')).click();


//generalize: 
//	getAMPDData(program, time info, destination)
//	getEltId(program)