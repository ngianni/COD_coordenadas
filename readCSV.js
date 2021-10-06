
const fs = require('fs');
const papa = require('papaparse');

console.log('hola')

var csv = fs.readFileSync('direcciones.csv').toString();

var results = papa.parse(csv, {
	header: true,
    delimiter: ","
});

console.log(results.data)

console.log('chau')

