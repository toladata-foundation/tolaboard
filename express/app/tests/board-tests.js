/* Test user model by doing CRUD operations*/
var mongoose = require('mongoose').set('debug',true);
var Board = require('../models/board');
// var Flower = require('../models/flower');



var createUser = 'twall';

var callback = function(err, data) {
		if(err) return err;

		console.log('new id: ', data._id);
		process.exit();
	}

mongoose.connect('mongodb://localhost/tolaboard');
var db = mongoose.connection;

var tulipId = "5807efc393a4e7540a7a51ce"

/*Flower.findOne({name: 'rose'}, function(err,rose) {
	if(err) return handleError(err);

	console.log('found rose: ' + rose.name + ' ' + rose.color)
});*/

/*Flower.findById(tulipId, function(err, found) {
	if(err) return handleError(err);
	console.log('findByOne result..', found.name)
	process.exit()
})*/

// Board.add(testBoard, callback);

// Board.findById("5805585cbb72a6d65dd7c0ed", callback)

var testTBID = "5805585cbb72a6d65dd7c0ed"
var testVal = 'ObjectId("5805585cbb72a6d65dd7c0ed")'

var boardArr = ['5805585cbb72a6d65dd7c0ed', '5806dd197955092a566cbe84']
// console.log('getBoards')
// Board.getBoards(boardArr, callback)
/*Board.findById(testTBID, 'title id items', function (err, docs) {
  console.log('docs: ', docs)
});*/

/*Board.findOne({ _id: 'ObjectId("5805585cbb72a6d65dd7c0ed")' }, function(err,docs) {
	console.log(docs);
})*/

// fooResult.then(function(data) { console}, function() { console.log('error')})
// Board.findById('mwall', callback);

// Board.add({widget: {row:2, col:1}, graph: [{source: 12},{source:43}]}, callback);
Board.deleteBoardById('58573136731665a388aff9a4', callback)




