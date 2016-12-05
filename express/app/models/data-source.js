var mongoose = require('mongoose');
var request = require('request');
var config = require('../config');

// create schema
var sourceSchema = mongoose.Schema({	
	name: {
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
	createDate: {
		type: Date,
		default: Date.now
	}
}, {collection: 'data_sources'});

var Source = module.exports = mongoose.model('Source', sourceSchema);

module.exports.getSources = function(sourceArr, callback) {
	/* Need to query access policies first, then bump that against boards */
	Source.find({_id : {
	  $in: sourceArr.map(function(sourceId){ return mongoose.Types.ObjectId(sourceId); })
	}}, callback);	
}
/* Function to query the data source requested along with selection criteria */
module.exports.findById = function(id, callback) {
	// using source type and source id, get the data
	Source.findOne({_id: id}, function(err,data) {
		// data.sourceId has the url for Tables
		var options = {
		  url: config.tablesAPIUrl + data.sourceId + '/data',
		  headers: {
		    'Content-Type': 'application/json',
		    'Authorization': config.tablesAPIToken
		  }
		};

		console.log('url', options.url)

		request(options, callback);
	});
		
}
