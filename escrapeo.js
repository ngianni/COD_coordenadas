const puppeteer = require('puppeteer'); 
const papa = require('papaparse');
const fs = require('fs');

const fnc = require("./functions");

// escrapeo
let scrape = async () => { 

    // carga lugares a buscar coordenadas
    lugares = fnc.read_csv('direcciones.csv')

    // carga navegador
    const browser = await puppeteer.launch({headless: false}); 

    // abre pagina
    const page = await browser.newPage(); 
    
    // navega a google maps
    await page.goto('https://www.google.com.ar/maps/preview'); 

    for ( let i = 0 ; i < lugares.length ; i++ ){

        // combino 
        if ( lugares[i].nombre == '' ){
            lugar = lugares[i].direccion
        } else {
            lugar = lugares[i].nombre
        }
        // borro casilla de busqueda
        await page.$eval('#searchboxinput', el => el.value = '');
        // busca lugar
        await page.type('#searchboxinput', lugar ) 
        await page.click('#searchbox-searchbutton');
        
        await page.waitForTimeout(5000); 

        // latitud y longitud 
        coords = await fnc.getCoords ( page.url() )

        // agrego coordenadas al lugar
        lugares[i].lat = coords.lat
        lugares[i].long = coords.long

    }
 
    console.log(lugares)

    // cierro browser
    browser.close(); 

    fnc.write_csv(lugares, './coordenadas.csv')
};


scrape();

