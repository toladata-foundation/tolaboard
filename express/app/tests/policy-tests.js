/* Test access policy model*/
var mongoose = require('mongoose');
var Policy = require('../models/access-policy');

var testPolicyA = {userId: "twall",
				  tolaboardId: "5805585cbb72a6d65dd7c0ed",
				  policy: "owner"},
	testPolicyB = {userId: "mtest",
				  tolaboardId: "5805585cbb72a6d65dd7c0ed",
				  policy: "read"};

var testId = testPolicyA.tolaboardId;


var callback = function(err, data) {
		if(err) {
			throw err;
		}
		// return data
		console.log(data)
	}

/* https://github.com/Automattic/mongoose/issues/4291 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tolaboard');
var db = mongoose.connection;



/*Policy.findOne({userId:'twall'}, function(err, found) {
	if(err) return err;
	console.log(found)
	process.exit()
})*/

/*console.log('run verify')
Policy.verify('twall', testPolicyA.tolaboardId, function(err,data) {
	if(err) return err;
	console.log(data == null ? false : true)
	process.exit()
})*/

/*Policy.add('twall', 'Board', '5806dd197955092a566cbe84', 'owner', callback)
Policy.add('msmith', 'Board', '5807a0bf89f88139a8577495', 'view', callback)
Policy.add('ftest', 'Board', '5807d21429fa3f4a01a71b3a', 'owner', callback)
Policy.add('twall', 'Board', '5806dd197955092a566cbe84', 'view', callback)

Policy.add('twall', 'Board', '5807a0bf89f88139a8577495', 'view', callback)*/

// Policy.add('twall', 'Source', '580a5a927a333bff0f715e6a', 'view', callback)
// Policy.getPoliciesByUser('all', callback)


// get policy list
// console.log(accessModel.getPolicyListByUser)
// var cTest = userModel.createUser(testUser2, callback);
// userId, type, sourceId, callback
/*Policy.verify('twall', 'Board', '5805585cbb72a6d65dd7c0ed', function(data) {
	console.log(data)
});*/
// console.log('valid user, valid policy: ', accessModel.verify('twall', testId, 'owner'));
// console.log('valid user, invalid policy: ', accessModel.verify('mtest', testId, 'update'));
// console.log('invalid user, invalid policy: ', accessModel.verify('fbar', testId, 'read'));

// process.exit();

Policy.deleteByBoardId('58573136731665a388aff9a4', callback);