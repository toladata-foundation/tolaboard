var mongoose = require('mongoose');
// var policySchema = require('./access-policy').policySchema;

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
	/*policies: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Policy' 
	}],	*/
	createDate: {
		type: Date,
		default: Date.now
	}
}, {collection: 'boards'});

var Board = module.exports = mongoose.model('Board', boardSchema);

// var Policy = module.exports = mongoose.model('Policy', policySchema);

/* API helpers */

// Get list of users allowed to view a given tolaboard
module.exports.getBoardReadUsers = function(id, callback) {
	return [{userId: 'twall', fullName: 'Tom Wall'}];
}
// Get list of users allowed to update a given tolaboard
module.exports.getBoardWriteUsers = function(id, callback) {
	return [{userId: 'twall', fullName: 'Tom Wall'}];
}
/* Methods called by the api-controller after it has validated access */

// Get particular tolaboard (GET)
module.exports.getBoardById = function(id,callback) {
	// console.log('getBoardById in board model invoked with ' + id + ' and ' + callback)
	// var query = {}; query.
	Board.findById(id, callback);
}
// create new tolaboard (POST)
module.exports.add = function(tolaboard, callback) {
	Board.create(tolaboard,callback);
}
// update tolaboard (PUT)
module.exports.updateBoardById = function(id, update, callback) {

}
// delete tolaboard (DELETE)
module.exports.deleteBoardById = function(id, callback) {

}
// Get all of a user's tolaboards (GET)
// CONSIDER HAVING getPoliciesByUser which contains id's... then 
module.exports.getBoards = function(boardsArr, callback) {
	/* Need to query access policies first, then bump that against boards */
	Board.find({_id : {
	  $in: boardsArr.map(function(boardId){ return mongoose.Types.ObjectId(boardId); })
	}}, callback);	
}
