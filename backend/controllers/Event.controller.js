const { Events } = require('../models/Event.model')

const EventsController = {
    getAll: async (req, res) => {
        try {
            const response = await Events.find()
            res.send(response)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Events.findById(id)
            res.send(target)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newItem = new Events({ ...req.body, image: 'http://localhost:8080/uploads/' + req.file.filename })
            await newItem.save()
            const allItems = await Events.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Events.findByIdAndUpdate(id, { ...req.body })
            const allItems = await Events.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)

        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Events.findByIdAndDelete(id)
            const allItems = await Events.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)
        }
    }
}

module.exports = { EventsController }