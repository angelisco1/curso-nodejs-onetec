const express = require('express')
const VendehumosCtrl = require('../controllers/vendehumos.js')

const router = express.Router()

router.get('/vendehumos', VendehumosCtrl.getVendehumos)
router.post('/vendehumos', VendehumosCtrl.createVendehumo)
router.get('/vendehumos/:id', VendehumosCtrl.getVendehumo)
router.put('/vendehumos/:id', VendehumosCtrl.updateVendehumo)
router.delete('/vendehumos/:id', VendehumosCtrl.deleteVendehumo)


module.exports = router