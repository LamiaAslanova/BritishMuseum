const express = require('express')
const { CollectionsController } = require('../controllers/Collection.controller')
const upload = require('../middlewares/multer.middleware')

const router = express.Router()

router.get('/', CollectionsController.getAll)
router.get('/:id', CollectionsController.getById)
router.post('/', upload.single('image'), CollectionsController.add)
router.put('/:id', upload.single('image'), CollectionsController.edit)
router.delete('/:id', CollectionsController.delete)

module.exports = router