/* As with access-policy.js, this module contains methods used interanally within the API 
   to communicate with the backend database. Nothing here is exposed directly via the API.
   ie. Everything here requires a valid app token to have been verified.
*/
var mongoose = require('mongoose');

// create schema
var boardSchema = mongoose.Schema({	
	title: {
		type: String,
		required: true
	},
	items: {
		type: Array,
		"default": []
	},
	createUser: {
		type: String,
		required: true
	},
	createDate: {
		type: Date,
		default: Date.now
	}
}, {collection: 'boards'});

var Board = module.exports = mongoose.model('Board', boardSchema);


/* Methods called by the api-controller after it has validated access */

// Get particular tolaboard (GET on /api/board/:_id)
module.exports.getBoardById = function(id,callback) {
	Board.findById(id, callback);
}
// create new tolaboard (comes from POST route for /api/board)
module.exports.add = function(boardDef, policyType, callback) {	
	Board.create(boardDef, callback);
}
// update tolaboard (PUT) ... not working
module.exports.updateBoardById = function(id, update, callback) {
	Board.findByIdAndUpdate(id, { $set: { items: 'large' }}, { new: true }, function (err, tank) {
	  if (err) return handleError(err);
	  res.send(tank);
	});
}

// delete tolaboard (Comes from DELETE on /api/board/:_id) ... in development
module.exports.removeById = function(id, callback) {
	var query = {_id: mongoose.Types.ObjectId(id)};
	Board.remove(query, callback);
}
// Get all of a user's tolaboards (GET)
// CONSIDER HAVING getPoliciesByUser which contains id's... then 
module.exports.getBoards = function(boardsArr, callback) {
	/* Need to query access policies first, then bump that against boards */
	Board.find({_id : {
	  $in: boardsArr.map(function(boardId){ return mongoose.Types.ObjectId(boardId); })
	}}, callback);	
}

/* Not used, but future needs? */
// Get list of users allowed to view a given tolaboard
module.exports.getBoardReadUsers = function(id, callback) {	
}
// Get list of users allowed to update a given tolaboard
module.exports.getBoardUpdateUsers = function(id, callback) {	
}