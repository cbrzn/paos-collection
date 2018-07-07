const express = require('express')
const multer = require('multer');
const cloudinary = require('cloudinary');
const product = require('./../helpers/product_db')
const router = express.Router()

router.get('/all', (req, res) => {
    var arr_img = []
    product.all().then(async products => {
        for (var i in products) {
           await product.images(products[i].id).then( images => {
                 arr_img.push(images[0])
            }).catch(err => {
                res.send({ status: 404 })
            })
        }
        res.send({
            status: 200,
            products,
            image:arr_img
        })
    }).catch(err => { 
       res.send({status: 500})
    })
})

router.post('/show', (req, res) => {
    const { id } = req.body
    product.show(id).then(prod => {
        product.images(id).then(images => {
            res.send({
                status: 200,
                prod,
                images
            })
        }).catch(err => {
            res.send({ status: 404 })
        })
    })
})

const upload = multer({dest: "./uploads/"});

cloudinary.config({
    cloud_name: 'zingaring',
    api_key: '195729922234217',
    api_secret: 'rul2JCiaHBPULlxuKDd04N5zFJ8'
 })
 

router.post('/new', upload.array('files[]'), async (req, res) => {
    console.log(req.body)
    multipleUpload = new Promise(async (res, rej) => {
        let arr = []
        for (var i in req.files) {
          await cloudinary.uploader.upload(req.files[i].path, result => {
              arr.push(result.secure_url);
              if (arr.length === req.files.length) {
                  res(arr);
              }
            })
          }
        }).then(result => result)
          .catch(error =>  error)
    
    consume = await multipleUpload.then(data => {
        const { description, price, stock } = req.body
         product.new(description, price, stock).then(async new_product => {
            for (var i in data) {
               await product.add_image(new_product[0].id, data[i]).then(success => {
                }).catch(async err => {
                   res.send({ status: 503 })
                })
            }
            res.send({ status: 200 })
        }).catch(err => {
            console.log(err)
        })
    })
})

module.exports = router