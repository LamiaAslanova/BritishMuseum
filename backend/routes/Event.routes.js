const express = require('express')
const { EventsController } = require('../controllers/Event.controller')
const upload = require('../middlewares/multer.middleware')

const router = express.Router()

router.get('/', EventsController.getAll)
router.get('/:id', EventsController.getById)
router.post('/', upload.single('image'), EventsController.add)
router.put('/:id', upload.single('image'), EventsController.edit)
router.delete('/:id', EventsController.delete)

module.exports = router