const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    userName: {
        type: String
    },
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
    jumlahTiket: {
        type: Number
    },
    jumlahHarga: {
        type: Number
    },
    via: {
        type: String
    },
    gambar:{
        type: String
    },
    buktiTF: {
        type: String
    }

})

module.exports = mongoose.model('transaksi', userSchema)