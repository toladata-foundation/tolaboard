/* Test user model by doing CRUD operations*/
var mongoose = require('mongoose');
var User = require('../models/user');
var express = require('express');

var app = express();

var testUser = {"userId": "twall",
					"email": "twall@mercycorps.org",
					"fName": "Tom",
					"lName": "Wall",
					"createDate": "10/10/2016"
				};
var testUser2 = {"userId": "mwall",
					"email": "mwall@mercycorps.org",
					"fName": "Megan",
					"lName": "Gerhardt",
					"createDate": "10/10/2016"
				};
var callback = function(err, data) {
		if(err) {
			throw err;
		}
		console.log(data);
		process.exit()
	}

mongoose.connect('mongodb://localhost/tolaboard');
var db = mongoose.connection;

// var cTest = userModel.createUser(testUser2, callback);

User.find({email: 'twall@mercycorps.org'}, function(err, data) {
		if(err) {
			throw err;
		}
		if(data.length>0)
		{
			// found
		} else {
			
		}
		process.exit()
	});