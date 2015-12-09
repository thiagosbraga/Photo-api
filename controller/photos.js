'use strict';

module.exports={

	list:list,
	create:create,
	delete:del,
	get:get
};

let faker = {message:'request OK'};

function list(req,res){
	res.json(faker);

}

function create(req,res){
	res.json(faker);

}

function get(req,res){
	res.json(faker);

}

function update(req,res){
	res.json(faker);

}

function del(req,res){
	res.json(faker);

}