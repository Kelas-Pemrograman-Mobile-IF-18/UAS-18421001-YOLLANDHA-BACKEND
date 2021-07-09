const transaksi = require('../model/Transaksi')
const response = require('../config/response')
const mongoose= require('mongoose')
const ObjectID = mongoose.Types.ObjectId

exports.lihatDataTransaksi = () =>
    new Promise(async (resolve, reject) => {
        await btransaksi.find({})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :(')))
    })

exports.updateTransaksi = (id, data) =>
    new Promise(async (resolve, reject)=>{
        await transaksi.updateOne(
            {_id: ObjectID(id)},
            {
                $set: {
                    via : data.via
                }
            }
        ).then(transaksi => {
            resolve(response.commonSuccessMsg('Berhasil transaksi nihhh'))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
        })
    })

    exports.updateBuktiTF = (id, data) =>
    new Promise(async (resolve, reject)=>{
        await transaksi.updateOne(
            {_id: ObjectID(id)},
            {
                $set: {
                    buktiTF : data.buktiTF
                }
            }
        ).then(transaksi => {
            resolve(response.commonSuccessMsg('Berhasil mengupload bukti transfer nih'))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
        })
    })

    exports.hapustransaksi = (_id) =>
        new Promise(async (resolve, reject)=>{
            await transaksi.remove({_id: ObjectID(_id)})
                .then(() =>{
                    resolve(response.commonSuccessMsg('Berhasil menghapus transaksi nih'))
                }).catch(() =>{
                    reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
                })
        })