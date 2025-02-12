const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ExhibitionsRouter = require('./routes/Exhibition.routes')
const EventsRouter = require('./routes/Event.routes')
const CollectionsRouter = require('./routes/Collection.routes')
const ShopRouter = require('./routes/Shop.routes')
const UserRouter = require('./routes/User.routes')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/exhibitions', ExhibitionsRouter)
app.use('/events', EventsRouter)
app.use('/collections', CollectionsRouter)
app.use('/shop', ShopRouter)
app.use('/uploads', express.static('uploads'))
app.use(UserRouter)

mongoose.connect(process.env.CONNECTION__STRING)
    .then(res => {
        console.log('connected');
    })

app.listen(process.env.PORT, (req, res) => {
    console.log('running');
})