const multer = require('multer')
const fs = require('fs')
const router = require('express').Router()
const bus = require('../controller/Bus')


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

router.post("/input", upload, (req, res) => {
    
    bus.inputPemesananBus(req.body, req.file.filename)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/databus", (req,res)=>{
    bus.lihatDataBus()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/databus/:id", (req,res)=>{
    bus.lihatDetailDataBus(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.delete("/hapus/:id", (req,res)=>{
    bus.hapusbus(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.put("/ubah/:id", (req,res)=>{
//     let fileName;
//     console.log("adadad")
//     if (req.body.gambar) {
//         console.log(req.body)
//         fileName = req.body.gambar;
//     }else {
//         console.log(req.file.filename)
//         fileName = req.file.filename;
//     }
    bus.updateBus(req.params.id, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.put("/ubahgambar/:id", upload, (req,res)=>{
    let data = req.body
        data.gambar =req.file.filename
        console.log(data)
    bus.updateBusgambar(req.params.id, data)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

module.exports = router