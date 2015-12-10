'use strict';

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;


let schema = new Schema({

	categoria:{type:String,require:true},
	tag:{type:String,require:true}
});


