const papa = require('papaparse');
const fs = require('fs');

// carga csv a objeto
function read_csv( file ) {

    let csv = fs.readFileSync( file ).toString();

    let results = papa.parse(csv, {
        header: true,
        delimiter: ","
    });

    return results.data
}

function write_csv( data , file ){

    data = papa.unparse(data);

    fs.writeFile( file , data , err => {
        if (err) {
          console.error(err)
          return
        }
    })

}

// extrae coordenadas de una url
function getCoords ( url ){
    
    url = url.slice(url.lastIndexOf('-34.'));
    let coords = url.split('!4d') ;
    coords = { lat : coords[0] , long: coords[1] }

    return  coords;

}


// exporto funciones 
module.exports = {
    getCoords,
    read_csv,
    write_csv,
 };