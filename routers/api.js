'use strict';
let Router = require('express').Router;
let router = new Router();
let controllers = require('../controller');

let bodyparser = require('body-parser');
let multer = require('multer')({dest:'./public/images'});

router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
router.use(multer.single('picture')); 



router
  .route('/categories')
  .get(controllers.categories.list)
  .post(controllers.categories.create)

router
  .route('/categories/:id')
  .get(controllers.categories.get)


router
  .route('/images')
  .get(controllers.images.list)
  .post(controllers.images.create)

router
  .route('/images/:id')
  .get(controllers.images.delete)


module.exports=router;