/* Test user model by doing CRUD operations*/
var mongoose = require('mongoose');
var User = require('../models/user');
var express = require('express');
var config = require('../config');

var app = express();

var testUser = {"userId": "twall",
					"email": "twall@mercycorps.org",
					"fName": "Tom",
					"lName": "Wall",
					"createDate": "10/10/2016"
				};
var callback = function(err, data) {
		if(err) {
			throw err;
		}
		console.log(data);
		process.exit()
	}

var conStr = 'mongodb://' + config.mongoUser + ':' + config.mongoPassword + config.mongoUri; 
mongoose.connect(conStr);
var db = mongoose.connection;

// var cTest = userModel.createUser(testUser2, callback);

// User.findByGoogleId('102796170459547869801',callback);
User.findByUserId('twall', callback)