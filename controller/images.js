'use strict';

module.exports={

	list:list,
	create:create,
	delete:del,
	
};

let faker = {message:'request OK'};

function list(req,res){
	res.json(faker);

}

function create(req,res){
	console.log(req.body);
	console.log(req.file);

	res.json(faker);

}

function update(req,res){
	res.json(faker);

}

function del(req,res){
	res.json(faker);

}