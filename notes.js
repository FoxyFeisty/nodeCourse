console.log('Starting notes.js');

const fs = require('fs');
// to be reused
var fetchNotes = () => {
	// Try-and-Catch, falls Datei noch nicht existiert 
	try {
		var notesString = fs.readFileSync('notes-data.json')
		return notes = JSON.parse(notesString);
	} catch (e) {
 		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// ES6: anonyme Funktionen
var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	// ES6: no curley braces, wenn nur return Statement
	// filter-method: nur Argumente, auf die Bedingung zutrifft, bleiben drin; Ergebnis = Array
	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};
var getAll = () => {
	console.log('Getting all notes');
};
var removeNote = (title) => {
	var notes = fetchNotes();
	var filteredArray = notes.filter((note) => note.title !== title);
	saveNotes(filteredArray);

	return notes.length !== filteredArray.length;	
};
var readNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title === title); 
	return filteredNotes[0];
}
var logNote = (note) => {
	console.log('--');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}
// eigenes Modul zur Verfügung stellen über 'exports'
module.exports = {
	addNote, 	// entspricht key-value-pair "addNote: addNote" in ES6
	getAll,
	removeNote,
	readNote,
	logNote
}
