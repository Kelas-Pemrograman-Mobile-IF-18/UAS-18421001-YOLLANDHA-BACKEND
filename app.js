const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 5050
const dbConfig = require('./config/DbConfig')
const cors = require('cors')
const path = require('path')

mongoose.connect(dbConfig.mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("connect mongodb nih"))
    .catch(err => console.log(err))

app.use(cors())

app.use(express.json({
    extended: true,
    limit: '50mb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}))

app.use('/gambar', express.static(path.join(__dirname, 'gambar')))
app.use('/user', require('./routes/User'))
app.use('/bus', require('./routes/Bus'))
app.use('/cart', require('./routes/Cart'))
app.use('/transaksi', require('./routes/Transaksi'))

app.listen(port, function() {
    console.log('Server Berjalan di Port nih '+ port)
})