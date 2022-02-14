const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas',PessoaController.index)
router.get('/pessoas/:id',PessoaController.show)
router.post('/pessoas',PessoaController.store)
router.put('/pessoas/:id',PessoaController.update)
router.delete('/pessoas/:id',PessoaController.destroy)

module.exports = router