const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas',PessoaController.index)
router.get('/pessoas/:id',PessoaController.show)
router.post('/pessoas',PessoaController.store)
router.put('/pessoas/:id',PessoaController.update)
router.delete('/pessoas/:id',PessoaController.destroy)
router.get('/pessoas/:estudante_id/matricula/:matricula_id',PessoaController.matricula)
router.post('/pessoas/:estudante_id/matricula',PessoaController.storeMatricula)
router.put('/pessoas/:estudante_id/matricula/:matricula_id',PessoaController.updateMatricula)
router.delete('/pessoas/:estudante_id/matricula/:matricula_id',PessoaController.destroyMatricula)

module.exports = router