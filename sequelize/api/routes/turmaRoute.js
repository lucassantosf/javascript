const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas',TurmaController.index)
router.get('/turmas/:id',TurmaController.show)
router.post('/turmas',TurmaController.store)
router.put('/turmas/:id',TurmaController.update)
router.delete('/turmas/:id',TurmaController.destroy)

module.exports = router