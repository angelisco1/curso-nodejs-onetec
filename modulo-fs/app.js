const fs = require('fs');
const EventEmitter = require('events');

fs.readFile('archivo1.txt', (err, datos) => {
    if (err) {
        throw err;
    }

    console.log(datos.toString())

    fs.readFile('archivo2.txt', (err, datos) => {
        if (err) {
            throw err;
        }
    
        console.log(datos.toString())

        fs.readFile('archivo3.txt', (err, datos) => {
            if (err) {
                throw err;
            }
        
            console.log(datos.toString())
        })
    })
})

fs.writeFile('archivo4.txt', '4', err => {
    if (err) {
        throw err
    }
    console.log('Pasa por aqui')

    fs.appendFile('archivo4.txt', '10', err => {
        if (err) {
            throw err
        }
        
    })
})



console.log('FIN')