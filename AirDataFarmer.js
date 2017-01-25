var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    //.forBrowser('chrome')
    .forBrowser('chrome')
    .build();
//.then required for the DOM to build in time
driver.get('https://aqsdr1.epa.gov/aqsweb/aqstmp/airdata/download_files.html');
driver.findElements(By.partialLinkText('hourly')).then(function(links){
	for (i = 0; i < links.length; i++){
		driver.sleep(500);
		try{
			links[i].click();
		}finally{};
	}
});
// driver.findElements(By.partialLinkText('hourly_42')).then(function(links){
// 	for (i = 0; i < links.length; i++){
// 		links[i].click();
// 	}
// });
