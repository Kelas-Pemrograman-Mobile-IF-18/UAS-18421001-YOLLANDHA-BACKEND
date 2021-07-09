const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    kodeBus: {
        type: String
    },
    namaBus:{
        type: String
    },
    jurusanBus: {
        type: String
    },
    jamOperasional:{
        type: String
    },
    hargaTiket: {
        type: Number
    },
    gambar:{
        type: String
    }

})

module.exports = mongoose.model('bus', userSchema)