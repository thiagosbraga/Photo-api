'use strict';
let Router = require('express').Router;
let router = new Router();
let controllers = require('../controller');

let bodyparser = require('body-parser');
let multer = require('multer')();

router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
router.use(multer.array());	

router
.route('/photos')
.get(controllers.photos.list)
.post(controllers.photos.create)

router
.route('/photos/:id')
.get(controllers.photos.get)


module.exports=router;