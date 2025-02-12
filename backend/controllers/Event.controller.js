const { baseURL } = require('../baseURL')
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
            const image = `${baseURL}${req.file.filename}`
            const newItem = new Events({ ...req.body, image })
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
            const image = req.file ? `${baseURL}${req.file.filename}` : undefined
            const updatedFields = req.file ? { ...req.body, image } : { ...req.body }
            await Events.findByIdAndUpdate(id, updatedFields)
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