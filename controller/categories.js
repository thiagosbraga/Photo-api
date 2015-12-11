'use strict';

let Categories = require('../models').categories;


module.exports={

	list:list,
	get:get,
	create:create,
	update:update,
	delete:del
};


function list(req,res){

	Categories
	.find({},'-__v')
	.then(function(categories){
		res.json(categories);	
	});
}

function create(req,res){
	console.log(req.body);

	let success = function(status){
		console.log(status);
		res
		.status(201)
		.json({
		message:'create'
		});

	};

	let error = function(err){
		console.log(err);
		res.status(400)
		.json({message:err.message});

	};

	let categorie = new Categories(req.body);

	categorie
	.save()
	.then(success,error);

	
}

function get(req,res){
	
	Categories
	.findById(req.params.id,'-__v')
	.then(function(categories){
		res.json(categories);

	});
	
}



function update(req,res){


	res.json({message:'Updated'});
	
}
function del(req,res){

	res.json({message:'deleted'});
}