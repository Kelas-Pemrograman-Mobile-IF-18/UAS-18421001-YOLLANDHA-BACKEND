const multer = require('multer')
const fs = require('fs')
const router = require('express').Router()
const cart = require('../controller/Cart')

router.post('/list', (req, res)=>{
    // console.log(req.body)
    cart.createCart(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))   
})

router.get("/dataCart/:id", (req,res)=>{
    cart.lihatDataCartPembeli(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/dataCartaja", (req,res)=>{
    cart.lihatDataCart()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.delete("/hapusCart/:id", (req,res)=>{
    cart.hapuscart(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

module.exports = router