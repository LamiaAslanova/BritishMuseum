const { baseURL } = require('../baseURL')
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
            const images = req.files.map((file) => `${baseURL}${file.filename}`)
            const newItem = new Shop({ ...req.body, images })
            await newItem.save()
            const allItems = await Shop.find()
            res.send(allItems)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            const images = req.files ? req.files.map((file) => `${baseURL}${file.filename}`) : undefined
            const updatedFields = req.files ? { ...req.body, images } : { ...req.body }
            await Shop.findByIdAndUpdate(id, updatedFields)
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