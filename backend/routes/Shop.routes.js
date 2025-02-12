const express = require('express')
const { ShopController } = require('../controllers/Shop.controller')
const upload = require('../middlewares/multer.middleware')

const router = express.Router()

router.get('/', ShopController.getAll)
router.get('/:id', ShopController.getById)
router.post('/', upload.array('images', 5), ShopController.add)
router.put('/:id', upload.array('images', 5), ShopController.edit)
router.delete('/:id', ShopController.delete)

module.exports = router