// const http = require('http')
const express = require('express')
const path = require('path')
const routerBienvenida = require('./routes/index.js')

const app = express()

function estasLogueado(req, res, next) {
    console.log('PRIMERO PASA POR AQUI')
    next()
}

app.use((req, res, next) => {
    console.log({ method: req.method })
    next()
})


app.use(estasLogueado, (req, res, next) => {
    console.log({ url: req.url })
    next()
})

app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'css')))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use('/contactos', (req, res, next) => {
    res.send('<h1>...</h1>')
})

app.use('/bienvenida', routerBienvenida)

app.use('/welcome', (req, res, next) => {
    res.redirect('/bienvenida')
})

// app.get('/bienvenida', (req, res, next) => {
//     res.send('<h1>Bienvenidos a mi aplicación web</h1>')
// })

// app.post('/bienvenida', (req, res, next) => {
//     res.status(201).send('<h1>Guardado</h1>')
// })

app.use((req, res, next) => {
    //res.status(404).send('<h1>Error 404: Page not found</h1>')
    //res.status(404).send(`<h1>El producto ${producto.nombre} no existe...</h1>`)
    res.status(404).sendFile(path.join(__dirname, 'pages', '404.html'))
})

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})