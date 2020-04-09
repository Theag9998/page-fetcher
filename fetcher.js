const request = require('request');
const args = process.argv.slice(2)
const fs = require('fs')
const URL = args[0];
const locFilePath = args[1];

console.log(typeof(URL))



request(URL, (error, response, body) => {

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	 // Print the HTML for the Google homepage.
	fs.appendFile(locFilePath, body, function (err) {
		if (err) throw err;
		const stats = fs.statSync(locFilePath);
		const fileSizeInBytes = stats.size;
		console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${locFilePath}`);
	})
});




