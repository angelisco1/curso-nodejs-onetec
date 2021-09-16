const { getVendehumos } = require('../controllers/vendehumos.js')
const db = require('../helpers/db.js')

class Vendehumo {
    constructor(nombre, tema, rrss = [], id = null) {
        this.nombre = nombre
        this.tema = tema
        this.rrss = rrss
        this.id = id
    }

    static getAllVendehumos() {
        return db.execute("SELECT * FROM vendedores")
    }

}

module.exports = Vendehumo