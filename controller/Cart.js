const cart = require('../model/Cart')
const response = require('../config/response')
const bcrypt = require('bcrypt')


exports.createCart = (data) =>
    new Promise((resolve, reject) =>{
        cart.create(data)
        .then(() => {
            resolve(response.commonSuccessMsg("berhasil menambahkan tiket"))
        }).catch(() => {
            reject(response.commonErrorMsg("gagal menambahkan"))
        })
    })

exports.lihatDataCartPembeli = (userName) =>
    new Promise(async (resolve, reject) => {
        await cart.find({userName: userName})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :(')))
    })

exports.lihatDataCart = () =>
    new Promise(async (resolve, reject) => {
        await cart.find({})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :(')))
    })

    exports.hapuscart = (_id) =>
        new Promise(async (resolve, reject)=>{
            await cart.remove({_id: ObjectID(_id)})
                .then(() =>{
                    resolve(response.commonSuccessMsg('Berhasil menghapus tiket ini'))
                }).catch(() =>{
                    reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
                })
        })

        // exports.updateCart = (id, data) =>
        // new Promise(async (resolve, reject)=>{
        //     await bus.updateOne(
        //         {_id: ObjectID(id)},
        //         {
        //             $set: {
        //                 jumlahTiket : data.jumlahTiket
        //             }
        //         }
        //     ).then(bus => {
        //         resolve(response.commonSuccessMsg('Berhasil mengubah jumlah tiket nih'))
        //     }).catch(err => {
        //         reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server nih :('))
        //     })
        // })