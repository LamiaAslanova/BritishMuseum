const { Exhibitions } = require('../models/Exhibition.model')

const ExhibitionsController = {
    getAll: async (req, res) => {
        try {
            const response = await Exhibitions.find()
            res.send(response)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Exhibitions.findById(id)
            res.send(target)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newItem = new Exhibitions({ ...req.body, image: 'http://localhost:8080/uploads/' + req.file.filename })
            await newItem.save()
            const allItems = await Exhibitions.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Exhibitions.findByIdAndDelete(id)
            const allItems = await Exhibitions.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)
        }
    }
}

module.exports = { ExhibitionsController }