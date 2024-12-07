const { Collections } = require('../models/Collection.model')

const CollectionsController = {
    getAll: async (req, res) => {
        try {
            const response = await Collections.find()
            res.send(response)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Collections.findById(id)
            res.send(target)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newItem = new Collections({ ...req.body, image: 'http://localhost:8080/uploads/' + req.file.filename })
            await newItem.save()
            const allItems = await Collections.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Collections.findByIdAndDelete(id)
            const allItems = await Collections.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)
        }
    }
}

module.exports = { CollectionsController }