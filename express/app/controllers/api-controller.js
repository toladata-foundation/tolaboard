/* api-controller provides an API for:
	1. Create, retrieve, update and delete (CRUD) a single tolaboard
	2. Retrieve all of a user's tolaboards
	3. CRUD for users
	4. CRUD for data sources (TolaTables sources)
*/
var express = require('express');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var request = require('request');
// var Client = require('node-rest-client').Client;

/* Models */
var Board = require('../models/board');
var Policy = require('../models/access-policy');
var Source = require('../models/data-source');

var config = require('../config');
var router = express.Router();


var apiTolaTables = { 
    	"Content-Type": "application/json",
    	"Authorization": config.TolaTablesAPIToken
    	 };

// localhost dev db
// mongoose.connect('mongodb://localhost/tolaboard');

// external mLab
// mongodb://<dbuser>:<dbpassword>@ds015584.mlab.com:15584/tolaboard 
var conStr = 'mongodb://' + config.mongoUser + ':' + config.mongoPassword + config.mongoUri; 
mongoose.connect(conStr);
var db = mongoose.connection;

// var apiDoc = require('./api-documentation')

// /api
router.get('/', function(req, res) {
	res.statusCode = 200;
	res.send('Welcome to the TolaBoard API');
});
/* .findRecord()
	Get the JSON representation of a TolaBoard
   /api/tolaboard/<id> along with app token in header */
router.get('/board/:_id', function(req, res) {
	// verify token, verify user has access to this tolaboard
	var appToken = req.headers.authorization;
	var tolaboardId = req.params._id;

	if(!appToken) {
		res.statusCode = 401;
		res.json({error: 'No token specificed in header'});
	}
	else {
		jwt.verify(appToken, config.cikrit, function(err, decoded) {
		    if(err) {
		      res.statusCode = 403;
		      res.json({error: 'invalid token'});
		      // valid token, now validate access
		    } else {
		    	// use access policy .verify() method to confirm user's access
		    	Policy.verify(decoded.data.userId, 'Board', tolaboardId, function(verifyErr, validPolicy) {
		    		if(verifyErr) {
		    			res.statusCode = 403; 
		    			res.json(verifyErr);
		    		}
		    		// no verify error, check if there is a policy
		    		if(validPolicy == null ? false : true) {
		    			// valid policy, go get it
		    			res.statusCode = 200;		    			
		    			Board.findById(tolaboardId, function(err, data) {
		    				// some error when trying to obtain board
							if(err) {
								res.statusCode = 410;
								res.json({error: err});
							}
							// no errors, send the board
							res.statusCode = 200;							
							res.json({"board": data});
						});
		    			
		    		} 
		    		// no valid policy found for 
		    		else {
		    			res.statusCode = 403
		    			res.json({error: 'No valid access policy found'})
		    		}
		    	})
		    }
		  });
	} // end first else
});
/* .findAll()
	Get all the tolaboards this user has access to (owned and shared) 
	Makes use of query string argument "policy" and defaults to ?policy=view
*/
router.get('/board', function(req, res) {
	// use token to get user id, and then pull the titles, and id's of their boards
	var appToken = req.headers.authorization;
	var policy = req.query.policy || 'view'; // owner, update, view

	// maybe parameterize this at some point
	if(policy === 'owner' || policy === 'update' || policy === 'view') {
		// keep going
		jwt.verify(appToken, config.cikrit, function(err, decoded) {
			if(err) {
				res.statusCode = 403;
				res.json({error: 'Invalid Token'})
			}
			else { // get the userId and then their access policies
			var userId = decoded.data.userId;
			console.log('userId from api call', userId)
			Policy.getBoardPoliciesByUser(userId, policy, function(err, data) {
				if(err) {
					res.statusCode = 404;
					res.json({error: 'unknown error'})
				}
				// iterate over returned policies to get tolaboardId's
				var boardArr = data.map(function(d) { return d.sourceId});				
				Board.getBoards(boardArr, function(err, data) {
					if(err) { // error obtaining boards
						res.statusCode = 403;
						res.json({error: 'Nothing found?'})
					}
					// else
					res.statusCode = 200;
					res.json({"boards": data})
				}) 			
			}) // end jwt.verify()
			}
		})
	} else {
		res.statusCode = 400;
		res.send('Invalid policy parameter. Use owner, update, or view');
	}
	
	

});

/* Data Sources */
// GET list of sources
router.get('/data', function(req, res) {
	// use token to get user id, and then pull the titles, and id's of their boards
	var appToken = req.headers.authorization;
	
	jwt.verify(appToken, config.cikrit, function(err, decoded) {
		if(err) {
			res.statusCode = 403;
			res.json({error: 'Invalid Token'})
		}
		else { // get the userId and then their access policies
		var userId = decoded.data.userId;
		
		Policy.getSourcePoliciesByUser(userId, 'view', function(err, data) {
				if(err) {
					res.statusCode = 404;
					res.json({error: 'unknown error'})
				}
				// iterate over returned policies to get tolaboardId's
				var sourceArr = data.map(function(d) { return d.sourceId});				
				Source.getSources(sourceArr, function(err, data) {
					if(err) { // error obtaining boards
						res.statusCode = 403;
						res.json({error: 'Nothing found?'})
					}
					// else
					res.statusCode = 200;
					res.json({"datasources": data})
				}) 			
			}) // end jwt.verify()
			}
		})
	
	
	


});

// GET a particular data set
router.get('/data/:_id', function(req, res) {
	// verify token, verify user has access to this tolaboard
	var appToken = req.headers.authorization;
	var dataSourceId = req.params._id;

	if(!appToken) {
		res.statusCode = 401;
		res.json({error: 'No token specificed in header'});
	}
	else {
		jwt.verify(appToken, config.cikrit, function(err, decoded) {
		    if(err) {
		      res.statusCode = 403;
		      res.json({error: 'invalid token'});
		      // valid token, now validate access
		    } else {
		    	// use access policy .verify() method to confirm user's access
		    	Policy.verify(decoded.data.userId, 'Source', dataSourceId, function(verifyErr, validPolicy) {
		    		if(verifyErr) {
		    			res.statusCode = 403; 
		    			res.json(verifyErr);
		    		}
		    		// no verify error, check if there is a policy
		    		if(validPolicy == null ? false : true) {
		    			// valid policy, go get it
		    			res.statusCode = 200;
		    			// res.json({"status": "OK!!"})
		    			Source.findById(dataSourceId, function(error, response, body) {
						  if (!error && response.statusCode == 200) {		    
						    res.json(body)		    
						  }
						});
		    			
		    		} 
		    		// no valid policy found for 
		    		else {
		    			res.statusCode = 403
		    			res.json({error: 'No valid access policy found'})
		    		}
		    	})
		    }
		  });
	} // end first else
});

/* 
	Return all the tables for a given user (per their token)
*/
/*router.get('/table', function(req, res) {
	var options = {
	  url: 'https://tola-tables-demo.mercycorps.org/api/silo/551/data',
	  headers: {
	    'Content-Type': 'application/json',
	    'Authorization': 'Token 38108f20551fb0bdd4eb2cef30c4d2a66df2a015'
	  }
	};

	function callback(error, response, body) {
	  if (!error && response.statusCode == 200) {	    
	    res.json(body)
	  }
	}

	request(options, callback);
});*/



module.exports = router;