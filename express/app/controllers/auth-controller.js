/* auth-controller handles requests from Ember app to validate and decode authorizaiton tokens...
  /auth for google and /auth/session for the Ember app
  These routes expect a token in the header Authorization value
*/
var express = require('express');
var request = require('request');
var jwt = require('jsonwebtoken'); // sign and verify app token (https://github.com/auth0/node-jsonwebtoken)
var jws = require('jws-jwk'); // verify google token 
var config = require('../config');

/* Models */
var User = require('../models/user')

var router = express.Router();

// /auth
router.post('/', function(req, res) {
    // console.log('POST on auth');
    var id_token = req.headers.authorization;

    // get google keys for auth test
    request(config.discoveryDocUrl, function (error, response, body) {      
      if (!error && response.statusCode === 200) {
        var googleKeys = JSON.parse(body)

       // use jws library to bump the token against the google keys
       try {
        
        if(jws.verify(id_token, googleKeys)) {
            // token good, parse and figure out if it's MC

            // parse the token into components, and decode
            var parts = id_token.split('.');
            var headerBuf = new Buffer(parts[0], 'base64');
            var bodyBuf = new Buffer(parts[1], 'base64');
            var header = JSON.parse(headerBuf.toString());
            var body = JSON.parse(bodyBuf.toString());
            body.googleToken = id_token; 
            console.log(body)           

            // temporary until we connect to users model and verify
            /* lookup user in db, and if they're legit, let'm in */
            if(body.hd === 'mercycorps.org') {

              body.userId = body.email.split('@')[0];

              // verify userId
              User.findByUserId(body.userId, function(err, userData) {
                // some error when trying to obtain user
                if(err) {
                  res.statusCode = 403;
                  res.json({error: err});
                }
                // no errors, grant user session
                console.log('find user result..', userData === null)
                if(userData !== null) {
                  var appToken = jwt.sign({
                  data: body
                  }, config.cikrit, { expiresIn: '30d' });

                  body.appToken = appToken;
                  res.statusCode = 200;
                  res.json(body);
                }
                else {
                  res.statusCode = 403;             
                  res.json({"error": "Not a valid"});
                }
                

                




              });

              
                    
            } else {
              // valid google account, but not MC
              // redirect to 401
              res.statusCode = 401;
              res.json({error: 'Unauthorized domain'})
            }
           
          // failed google auth test
          } 
          
        } // end try
        catch(err) {
          res.statusCode = 401;
          res.json({error: 'invalid token'})
        }
      } // end original if
      else { 
        console.log('Server could not obtain valid kid from Google');
        res.statusCode = 500;
        res.send('Server error');
      }
    }) // end request

});

/* /auth/session 
	Validates token from Ember app, and responds with hash containing user info.
	Looks for token in header Authorization
*/
router.post('/session', function(req, res) {
	var appToken = req.headers.authorization;
	if(!appToken) {
		res.statusCode = 401;
		res.json({error: 'No token specificed in header'});
	}
	else {
		jwt.verify(appToken, config.cikrit, function(err, decoded) {
		    if(err) {
		      res.statusCode = 401;
		      res.json({error: 'Bad Token'});
		    } else {
		      res.statusCode = 200;
		      res.json(decoded)
		    }
		  });
	}

  

});

module.exports = router;