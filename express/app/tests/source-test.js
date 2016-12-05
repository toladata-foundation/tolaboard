/* Test user model by doing CRUD operations*/
var mongoose = require('mongoose');
var Source = require('../models/data-source');
var express = require('express');

var app = express();


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

Source.findById('580a5a927a333bff0f715e6a', callback)