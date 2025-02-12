const express = require('express')
const { ExhibitionsController } = require('../controllers/Exhibition.controller')
const upload = require('../middlewares/multer.middleware')

const router = express.Router()

router.get('/', ExhibitionsController.getAll)
router.get('/:id', ExhibitionsController.getById)
router.post('/', upload.single('image'), ExhibitionsController.add)
router.put('/:id', upload.single('image'), ExhibitionsController.edit)
router.delete('/:id', ExhibitionsController.delete)

module.exports = router