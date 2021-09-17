const { emiter } = require('../helpers/event-emitter.js')
const Vendehumo = require('../models/vendehumo.js')

exports.getVendehumos = (req, res, next) => {

    Vendehumo.getAllVendehumos()
        .then((vendehumos) => {
            console.log({vendehumos})
            vendehumos[0].forEach(v => {
                v.rrss = JSON.parse(v.rrss)
            })
        
            return res.json(vendehumos[0])
        })
}
exports.getVendehumo = (req, res, next) => {
    res.json({ok: true})
}
exports.createVendehumo = (req, res, next) => {
    const { nombre, tema, rrss } = req.body
    console.log({rrss})
    const vh = new Vendehumo(nombre, tema, rrss, null)
    vh.save()
        .then((datos) => {
            vh.id = datos[0].insertId
            emiter.emit('actualiza-la-vista', vh)
            res.json({ok: true})
        })
}
exports.updateVendehumo = (req, res, next) => {
    res.json({ok: true})
}
exports.deleteVendehumo = (req, res, next) => {
    res.json({ok: true})
}
