// npm 'request' module 
const request = require('request');
const yargs = require('yargs');

// Konfiguration
const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var encodedAddress = encodeURIComponent(argv.address); 


// in http request: body = core data that was requested; response.body
request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
}, (error, response, body) => {
	if (error) {
		console.log('Unable to connect to Google servers.');
	// no "error", but [zero results] is part of "response"
	} else if (body.status === 'ZERO_RESULTS') {
		console.log('Unable to find that address.');
	} else if (body.status === 'OK') {
		console.log(`Address: ${body.results[0].formatted_address}`);
		console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
		console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
	}
});