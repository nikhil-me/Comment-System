var express = require('express');
var router = express.Router();


var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

/************************************************************
* The commentSchema which is used to generate the Model
*************************************************************/
var commentSchema = mongoose.Schema({
	username : String,
	body : String,
	upvote : Number,
	downvote : Number
});

var comment = mongoose.model('Comment', commentSchema);

/* GET home page. */
router.post('/insert', function(req, res, next) {
	console.log(req.body);
  	comment.create(req.body,function(err,newComment){
		if(err){
			console.log(err);
		}else{
			res.send({"status" : "Ok"});
		}
	});
});

router.get('/fetch', function(req, res, next) {
	comment.find()
		.exec(function(err,result){
			res.send(result);
	});
});

router.post('/upvote', function(req, res, next) {
	console.log(req.body);
	comment.update({"_id" : req.body.id},{$set :{"upvote" : req.body.upvote}},function(err,updatedComment){
		if (err){
			console.error(err);
		}
		else{
			res.send({"status" : "Ok"});
		}
	});
});

router.post('/downvote', function(req, res, next) {
	comment.update({"_id" : req.body.id},{$set :{"downvote" : req.body.downvote}},function(err,updatedComment){
		if (err){
			console.error(err);
		}
		else{
			res.send({"status" : "Ok"});
		}
	});
});


module.exports = router;
