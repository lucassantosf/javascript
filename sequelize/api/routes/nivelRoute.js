const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis',NivelController.index)
router.get('/niveis/:id',NivelController.show)
router.post('/niveis',NivelController.store)
router.put('/niveis/:id',NivelController.update)
router.delete('/niveis/:id',NivelController.destroy)

module.exports = router