const fs = require('fs')
const http = require('http')
const path = require('path')
const url = require('url')

const contactos = [
    { id: 1, nombre: 'Falco', email: 'falco@gmail.com', telefono: 677123123 },
    { id: 2, nombre: 'Octavia', email: 'o.blake@gmail.com', telefono: 677111222 },
]

http.createServer((req, res) => {
    const { method, url: urlPedida } = req
    const urlParseada = url.parse(urlPedida)

    if (method === 'GET' && urlParseada.pathname === '/contactos') {
        res.write('<h1>Contactos</h1>')
        res.write('<ul>')
        contactos.forEach(c => {
            res.write(`<li id="contacto-${c.id}">${c.nombre} - ${c.email} - ${c.telefono}</li>`)
        })
        res.write('</ul>')
        return res.end()
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
            const nuevoContacto = keyval.reduce((acc, val) => {
                const [key, value] = val.split('=')
                acc[key] = value
                return acc
            }, {id: contactos.length+1})
            console.log(nuevoContacto)
            contactos.push(nuevoContacto)
        })
        
        // Añadir el contacto a contactos
        return res.end()
    }

})
    .listen(3000, () => {
        console.log('Listening on http://localhost:3000')
    })