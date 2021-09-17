const http = require('http')
const express = require('express')
const cors = require('cors')
const SocketIO = require('socket.io')
require('dotenv').config()
const routes = require('./routes/routes.js')
const { emiter } = require('./helpers/event-emitter.js')
const { emitKeypressEvents } = require('readline')

const URL_BASE = process.env.URL_BASE || 'http://localhost'
const PORT = process.env.PORT || 4000

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

const server = http.createServer(app)
const io = SocketIO(server, {
    cors: {
        origin: '*'
    }
})

//let socketGlobal = null

io.on('connection', socket => {
    console.log('Nueva conexión: ', socket.id)
    //socketGlobal = socket

    emiter.on('actualiza-la-vista', (datos) => {
        socket.emit('guardado', datos)
    })
    // on((datos) => {
    //     console.log('PASA POR AQUI')
    //     socket.emit('guardado', datos)
    // })
})

server.listen(PORT, () => {
    console.log(`Listening on ${URL_BASE}:${PORT}`)
})

// module.exports = {
//     socketGlobal
// }