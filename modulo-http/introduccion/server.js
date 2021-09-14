const fs = require('fs')
const http = require('http')
const url = require('url')
const path = require('path')

const types = {
    json: 'application/json',
    html: 'text/html',
    css: 'text/css'
}

const server = http.createServer((req, res) => {
    console.log(req.method, req.url)
    
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 201
        //res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
                <head>
                    <meta charser="utf8" />
                </head>
                <body>
                    <marquee style="color: blue">Hola mundo :)</marquee>
                </body>
            </html>
        `)
        res.end()
        return
    } else if (req.method === 'GET' && req.url === '/datos.json') {
        const path1 = req.url.split('/')[1]
        const urlParseada = url.parse(req.url)
        const urlNormalizada = path.normalize(urlParseada.pathname)
        //console.log({urlNormalizada})
        const extension = urlNormalizada.split('.')[1]
        const urlRecurso = path.join(__dirname, 'static', urlNormalizada)
        //console.log({urlRecurso})
        fs.readFile(urlRecurso, (err, datos) => {
            res.setHeader('Content-Type', types[extension])
            res.write(datos)
            return res.end()
        })        
    } else {
        res.write('Error')
        res.end()
    }

})

server.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})