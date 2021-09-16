const express = require('express')


const coches = [
    { id: 1, modelo: 'S3', marca: 'Tesla', precio: 45000 },
    { id: 2, modelo: 'Ceed', marca: 'Kia', precio: 18000 },
]

const app = express()

app.set('port', 3000)
// app.set('view engine', 'ejs')
app.set('view engine', 'pug')
app.set('views', 'plantillas')

app.get('/coches', (req, res, next) => {
    res.render('coches', {
        coches
    })
})



app.listen(app.get('port'), () => {
    console.log(`Listening on http://localhost:${app.get('port')}`)
})