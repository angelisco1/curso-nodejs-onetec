const http = require('http')
const fs = require('fs')
const EventEmitter = require('events')

const uuid = require('uuid')

const v4 = uuid.v4
const id = v4()

console.log('Hola mundo! ID:', id)

function prueba() {
    let a = 1
    var b = 1
    if (true) {
        let a = 2
        var b = 2
        console.log(a, b)
    }
    console.log(a, b)
}

prueba()

const N = 3
// N = 4

const persona = {
    nombre: 'Angel',
    apellido: 'Villalba'
}

for (const k in persona) {
    console.log(k, persona[k])
}

console.log('Me llamo ' + persona.nombre + ' ' + persona.apellido)
console.log(`Me llamo ${persona.nombre} ${persona.apellido}`)

function a1 () {
    //...
}
const a2 = () => {
    //...
}

const numeros = [1, 2, 3, 4, 5]

const numerosPares = numeros.filter((num) => {
    // ...
    return num % 2 === 0
})
console.log(numerosPares)

const numerosDobles = numeros.map(num => num * 2)
console.log(numerosDobles)

const suma = numeros.reduce((acc, num) => acc += num, 0)
console.log(suma)

const equipos = ['R. Madrid', 'Valencia', 'Barcelona', 'Sevilla', 'At. Bilbao', 'Rayo']

function mostrarEmparejamientos(equipos) {
    if (equipos.length === 0) {
        console.log('----- Fin -----')
    } else {
        let [equipo1, equipo2, ...resto] = equipos
        console.log(`${equipo1} vs ${equipo2}`)
        mostrarEmparejamientos(resto)
    }
}
mostrarEmparejamientos(equipos)



