const { Shop } = require('../models/Shop.model')

const ShopController = {
    getAll: async (req, res) => {
        try {
            const response = await Shop.find()
            res.send(response)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Shop.findById(id)
            res.send(target)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newItem = new Shop({ ...req.body, image: 'http://localhost:8080/uploads/' + req.file.filename })
            await newItem.save()
            const allItems = await Shop.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Shop.findByIdAndDelete(id)
            const allItems = await Shop.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)
        }
    }
}

module.exports = { ShopController }