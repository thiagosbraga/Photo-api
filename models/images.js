'use strict';

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;


let schema = new Schema({
	url:{type:String,required:true},
	categoria:{type:Array,required:true},
	tag:{type:Array}
});


module.exports = mongoose.model('images',schema);