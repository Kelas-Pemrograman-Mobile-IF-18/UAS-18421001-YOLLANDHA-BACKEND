const mongoose = require('mongoose');
// const ObjectID = mongoose.Types.ObjectId

const userSchema = mongoose.Schema({

    // _id:{
    //     type: String
    // },
    userName:{
        type: String
    },
    kodeBus: {
        type: String
    },
    namaBus: {
        type: String
    },
    jurusanBus: {
        type: String
    },
    jamOperasional: {
        type: String
    },
    hargaTiket: {
        type: Number
    },
    jumlahTiket: {
        type: Number
    },
    gambar: {
        type: String
    }

})

module.exports = mongoose.model('cart', userSchema)