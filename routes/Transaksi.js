const multer = require('multer')
const fs = require('fs')
const router = require('express').Router()
const transaksi = require('../controller/Transaksi')


var storage = multer.diskStorage( {
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
        cb(null, Date.now() + ext);
    },
    destination: function (req, file, cb) {
        cb(null, './gambar')
    }
    
})

const cekNull = (fileUpload) => {
    if (fileUpload === undefined || fileUpload === null) {
      return null
    } else {
      return fileUpload[0].filename
    }
  }



var upload = multer({storage: storage}).single("gambar")

router.get("/dataTransaksi", (req,res)=>{
    transaksi.lihatDataTransaksi()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.delete("/hapusTransaksi/:id", (req,res)=>{
    transaksi.hapustransaksi(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.put("/ubahTransaksi/:id", (req,res)=>{
    transaksi.updateTransaksi(req.params.id, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.put("/ubahBuktiTF/:id", upload, (req,res)=>{
    let data = req.body
        data.gambar =req.file.filename
        console.log(data)
    transaksi.updateBuktiTF(req.params.id, data)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

module.exports = router