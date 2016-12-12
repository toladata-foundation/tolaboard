var mongoose = require('mongoose');

// create schema
var userSchema = mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	fName: {
		type: String,
		required: true
	},
	lName: {
		type: String,
		required: true
	},

	createDate: {
		type: Date,
		default: Date.now
	}
});

var User = module.exports = mongoose.model('User', userSchema);

/* verify user is in database, and update info using google hash */
module.exports.verifyUpdate = function(userObj, callback) {
	// find if user exists... 
	var verified = false;
	User.find({email: 'twall@mercycorps.org'}, function(err, data) {
		// self contained callback to handle verify
		if(err) {
			throw err;
		}
		if(data.length>0)
		{
			verified = true; // found, now update
			
		} else {
				
		}
	})
	
	/* var pattern = {
		userId: userId,
		type: type,
		sourceId: sourceId
	};	
	Policy.findOne(pattern, callback);*/
	
}
// get particular user info (GET)
module.exports.findByUserId = function(userId,callback) {
	var query = { userId: userId };
	User.findOne(query, callback);
}
module.exports.findByGoogleId = function(googleId,callback) {
	var query = { googleId: googleId };
	User.findOne(query, callback);
}
// create new user (POST)
module.exports.createUser = function(user, callback) {
	User.create(user, callback);
}
module.exports.updateUser = function(user, callback) {

}