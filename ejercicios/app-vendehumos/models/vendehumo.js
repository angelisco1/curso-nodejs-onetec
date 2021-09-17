const { getVendehumos } = require('../controllers/vendehumos.js')
const db = require('../helpers/db.js')

class Vendehumo {
    constructor(nombre, tema, rrss = [], id = null) {
        this.nombre = nombre
        this.tema = tema
        this.rrss = rrss
        this.id = id
    }

    save() {
        return db.execute(
            "INSERT INTO vendedores (nombre, tema, rrss) VALUES (?,?,?)",
            [this.nombre, this.tema, JSON.stringify(this.rrss)]
        )
    }

    static getAllVendehumos() {
        return db.execute("SELECT * FROM vendedores")
    }

}

module.exports = Vendehumo