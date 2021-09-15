const fs = require('fs')
const http = require('http')
const path = require('path')
const url = require('url')

const CONTACTOS_PATH = path.join(__dirname, 'data', 'contactos.json')

// const contactos = [
//     { id: 1, nombre: 'Falco', email: 'falco@gmail.com', telefono: 677123123 },
//     { id: 2, nombre: 'Octavia', email: 'o.blake@gmail.com', telefono: 677111222 },
// ]

function getContactos(cb) {
    fs.readFile(CONTACTOS_PATH, (err, datos) => {
        cb(JSON.parse(datos))
    })
}

function saveContactos(datos, cb) {
    fs.writeFile(CONTACTOS_PATH, JSON.stringify(datos, null, 2), err => {
        if (err) {
            throw err
        }
        cb()
    })
}

http.createServer((req, res) => {
    const { method, url: urlPedida } = req
    //const urlParseada = url.parse(urlPedida)
    const urlParseada = new url.URL(urlPedida, 'http://localhost:3000')

    if (method === 'GET' && urlParseada.pathname === '/contactos') {
        getContactos((contactos) => {
            res.write('<h1>Contactos</h1>')
            res.write('<a href="/nuevo-contacto">Crear contacto</a>')
            res.write('<ul>')
            contactos.forEach(c => {
                res.write(`<li id="contacto-${c.id}">${c.nombre} - ${c.email} - ${c.telefono}</li>`)
            })
            res.write('</ul>')
            return res.end()
        })
    } else if (method === 'GET' && urlParseada.pathname === '/nuevo-contacto') {
        const urlRecurso = path.join(__dirname, 'public', 'nuevo-contacto.html')
        fs.readFile(urlRecurso, (err, formulario) => {
            res.write(formulario)
            return res.end()
        })
    } else if (method === 'POST' && urlParseada.pathname === '/nuevo-contacto') {
        // Obtener el body
        const datos = []
        req.on('data', chunk => {
            datos.push(chunk)
        })
        req.on('end', () => {
            const body = Buffer.concat(datos).toString()
            console.log({body})
            // Formar el objeto contacto
            const keyval = body.split('&')
            
            getContactos((contactos) => {
                const nuevoContacto = keyval.reduce((acc, val) => {
                    const [key, value] = val.split('=')
                    acc[key] = value
                    return acc
                }, {id: contactos.length+1})
                nuevoContacto.email = nuevoContacto.email.replace('%40', '@')

                console.log(nuevoContacto)
                // Añadir el contacto a contactos
                contactos.push(nuevoContacto)

                saveContactos(contactos, () => {
                    res.setHeader('Location', '/contactos')
                    res.statusCode = 302
                    return res.end()
                })

            })

        })
    }

})
    .listen(3000, () => {
        console.log('Listening on http://localhost:3000')
    })