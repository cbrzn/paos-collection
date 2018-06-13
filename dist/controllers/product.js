const express = require('express')
const multer = require('multer');
const cloudinary = require('cloudinary');
const product = require('./../helpers/product_db')
const router = express.Router()

router.get('/all', (req, res) => {
    product.all().then(products => {
        res.send({
            status: 200,
            products
        })
    })
})

const upload = multer({dest: "./uploads/"});

cloudinary.config({
    cloud_name: 'zingaring',
    api_key: '195729922234217',
    api_secret: 'rul2JCiaHBPULlxuKDd04N5zFJ8'
 });
 

router.post('/new', upload.array('files[]'), async (req, res) => {
    multipleUpload = new Promise(async (res, rej) => {
        let arr = []
        for (var i=0; i<req.files.length; i++) {
          await cloudinary.uploader.upload(req.files[i].path, (result) => {
              arr.push(result.secure_url);
              if (arr.length === req.files.length) {
                  res(arr);
              }
            })
          }
        }).then(result => result)
          .catch(error =>  error)
    
    cons = await multipleUpload.then(data => {
        for (var i=1; i<4; i++) {
            if (data[i] === undefined) {
                data[i] = null;
            }
        }
    })

})

module.exports = router