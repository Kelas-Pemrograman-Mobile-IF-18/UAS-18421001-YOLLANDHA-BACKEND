const bus = require('../model/Bus.js')
const response = require('../config/response')
const mongoose= require('mongoose')
const ObjectID = mongoose.Types.ObjectId

exports.inputPemesananBus = (data, gambar) =>
    new Promise(async (resolve, reject) =>{

        const pemesananBaru = new bus({
            kodeBus : data.kodeBus,
            namaBus : data.namaBus,
            jurusanBus : data.jurusanBus,
            jamOperasional : data.jamOperasional,
            hargaTiket : data.hargaTiket,
            gambar : gambar
        })

        await bus.findOne({kodeBus : data.kodeBus})
        .then(bus => {
            if (bus){
                reject(response.commonErrorMsg('Kode buku sudah digunakan'))
            }else {
                pemesananBaru.save()
                    .then(r=>{
                        resolve(response.commonSuccessMsg('Berhasil menginput data nih'))
                    }).catch(err =>{
                        reject(response.commonErrorMsg('Mohon Maaf Input Pemesanan Gagal nih :('))
                    })
            }
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
        })
    })

exports.lihatDataBus = () =>
    new Promise(async (resolve, reject) => {
        await bus.find({})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :(')))
    })

exports.lihatDetailDataBus = (kodeBus) =>
    new Promise(async (resolve, reject) => {
        await bus.findOne({kodeBus: kodeBus})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :(')))
    })

exports.updateBus = (id, data) =>
    new Promise(async (resolve, reject)=>{
        await bus.updateOne(
            {_id: ObjectID(id)},
            {
                $set: {
                    kodeBus : data.kodeBus,
                    namaBus : data.namaBus,
                    jurusanBus : data.jurusanBus,
                    jamOperasional : data.jamOperasional,
                    hargaTiket : data.hargaTiket
                }
            }
        ).then(bus => {
            resolve(response.commonSuccessMsg('Berhasil mengubah data nih'))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
        })
    })

    exports.updateBusgambar = (id, data) =>
    new Promise(async (resolve, reject)=>{
        await bus.updateOne(
            {_id: ObjectID(id)},
            {
                $set: {
                    gambar : data.gambar
                }
            }
        ).then(bus => {
            resolve(response.commonSuccessMsg('Berhasil mengubah gambar nih'))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
        })
    })

    exports.hapusbus = (_id) =>
        new Promise(async (resolve, reject)=>{
            await bus.remove({_id: ObjectID(_id)})
                .then(() =>{
                    resolve(response.commonSuccessMsg('Berhasil menghapus data nih'))
                }).catch(() =>{
                    reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
                })
        })