/* Module used for access controls within Tolaboard API
   These methods are only used by other modules within the API and are not exposed externally */
var mongoose = require('mongoose').set('debug',true);

// create schema
var policySchema = new mongoose.Schema({	
	userId: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	sourceId: {
		type: String,
		required: true
	},
	policy: {
		type: String,
		required: true
	},
	createDate: {
		type: Date,
		default: Date.now
	}
}, {collection:'access_policies'});

var Policy = module.exports = mongoose.model('Policy', policySchema);

// verify if user has a valid access policy to the board
module.exports.verify = function(userId, type, sourceId, callback) {
	var pattern = {
		userId: userId,
		type: type,
		sourceId: sourceId
	};	
	Policy.findOne(pattern, callback);
	
}
/* Get all of a given user's access policies */
module.exports.getBoardPoliciesByUser = function(userId, policy, callback) {
	var query = { 
		userId: userId,
		type: 'Board',
		policy: policy 
	};
	Policy.find(query, callback);
}
/* Get all the access policies for data sources for a given user */
module.exports.getSourcePoliciesByUser = function(userId, policy, callback) {
	var query = { 
		userId: userId,
		type: 'Source',
		policy: policy 
	};
	Policy.find(query, callback);
}
/* add a new access policy (used when a new board is created, or shared) */
module.exports.add = function(userId, type, sourceId, policy, callback) {
	var newPolicy = {
		userId: userId, 
		type: type,
		sourceId: sourceId, 
		policy: policy	
	};
	Policy.create(newPolicy, callback)
}
/* delete access policy... used when a board is deleted by the owner */
module.exports.deleteByBoardId = function(boardId, callback) {
	var query = {sourceId: boardId};
	Policy.remove(query, callback);
}
/* Note: There's no update method here as I can't see why a policy would ever be updated
   Just create, read, and deleted */
