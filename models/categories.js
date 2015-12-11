'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({

	name:{type:String,required:true, unique:true},
	createdAt:{type:Date,default: Date.now}

});

module.exports = mongoose.model('categories',schema);
