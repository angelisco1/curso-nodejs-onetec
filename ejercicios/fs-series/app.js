// const fs = require('fs')
import fs from 'fs'

function a(s) {

    return s.vista
}

function forma1() {
    fs.readFile('datos.json', (err, datos) => {
        const series = JSON.parse(datos)
        console.log('Leidos...', series)
        const seriesVistas = series.filter(s => a(s))
        //const seriesVistas = series.filter(a)
        const seriesNoVistas = series.filter(s => !s.vista)
        console.log({seriesVistas})
        console.log({seriesNoVistas})

        fs.writeFile('series-vistas.json', JSON.stringify(seriesVistas), (err) => {
            console.log('Series Vistas guardadas...')
        })

        fs.writeFile('series-no-vistas.json', JSON.stringify(seriesNoVistas, null, 2), (err) => {
            console.log('Series No Vistas guardadas...')
        })

        const titulos = seriesVistas.map(s => s.titulo).join('\n')
        fs.writeFile('titulos.txt', titulos, err =>{
            console.log('Titulos guardados...')
        })
    })
}

function forma2() {
    fs.readFile('datos.json', (err, datos) => {
        const series = JSON.parse(datos)
        console.log('Leidos...', series)
        const seriesVistas = []
        const seriesNoVistas = []
        const titulos = []

        for (const s of series) {
            if (s.vista) {
                seriesVistas.push(s)
            } else {
                seriesNoVistas.push(s)
            }
            titulos.push(s.titulo)
        }

        console.log({seriesVistas})
        console.log({seriesNoVistas})

        fs.writeFile('series-vistas.json', JSON.stringify(seriesVistas), (err) => {
            console.log('Series Vistas guardadas...')
        })

        fs.writeFile('series-no-vistas.json', JSON.stringify(seriesNoVistas, null, 2), (err) => {
            console.log('Series No Vistas guardadas...')
        })

        fs.writeFile('titulos.txt', titulos.join('\n'), err =>{
            console.log('Titulos guardados...')
        })
    })
}


//forma1()
forma2()