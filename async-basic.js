console.log('Starting app');

// Funktion in setTimeout ist callback-Funktion,
// weil erst nach bestimmter Zeit ausgeführt
setTimeout(() => {
	console.log('Inside of Callback');
}, 2000);
// prints after "Finishing up"
setTimeout(() => {
	console.log('Second delay');
}, 0);


console.log('Finishing up');