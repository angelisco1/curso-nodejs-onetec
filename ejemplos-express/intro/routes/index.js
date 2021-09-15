const express = require('express')

const router = express.Router()

router.get('/:nombre', (req, res, next) => {
    const nombre = req.params.nombre
    const enMayusculas = req.query.mayus === 'true'
    res.send(`<h1>Bienvenido ${enMayusculas ? nombre.toUpperCase() : nombre}</h1>`)
})

router.post('/', (req, res, next) => {
    console.log(req.body)
    console.log({h: req.headers})
    const {name} = req.body
    if (req.headers['content-type'] === 'application/json') {
        res.status(201).json({ mensaje: 'Hola ' + name})
    } else {
        res.status(201).send(`<h1>Hola ${name}</h1>`)
    }
    
})

module.exports = router