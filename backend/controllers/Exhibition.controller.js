const { Exhibitions } = require('../models/Exhibition.model')
const { baseURL } = require('../baseURL')

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
            const image = `${baseURL}${req.file.filename}`
            const newItem = new Exhibitions({ ...req.body, image })
            await newItem.save()
            const allItems = await Exhibitions.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            const image = req.file ? `${baseURL}${req.file.filename}` : undefined;
            const updatedFields = req.file ? { ...req.body, image } : { ...req.body };
            await Exhibitions.findByIdAndUpdate(id, updatedFields)
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