const EventEmitter = require('events')
const emiter = new EventEmitter()

module.exports = {
    // emit: (datos) => {
    //     emiter.emit('actualiza-la-vista', datos)
    // },
    // on: (cb) => {
    //     emiter.on('actualiza-la-vista', (datos) => {
    //         cb(datos)
    //     })
    // }
    emiter: emiter
}