var mongoose = require('mongoose').set('debug',true)
var Flower = require('../models/flower');

mongoose.connect('mongodb://localhost/tolaboard');
var db = mongoose.connection;


/*Flower.create({ name: 'daffodil', color: 'yellow' }, function (err, flower) {
  if (err) return handleError(err);
  // saved!
  console.log('new flower: ' + flower.name)
});*/
var tulipId = "5807efc393a4e7540a7a51ce"

Flower.findOne({name: 'rose'}, function(err,rose) {
	if(err) return handleError(err);

	console.log('found rose: ' + rose.name + ' ' + rose.color)
});

Flower.findById(tulipId, function(err, found) {
	if(err) return handleError(err);
	console.log('findByOne result..', found.name)
	process.exit()
})



