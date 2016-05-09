/**
  * @module UberAPILib
  *  
  * The Uber API makes it easy to tap into the digital mesh that runs across cities. Make requests to our API endpoints and we'll give you everything you need to create new and magical experiences for your users. The possibilities are endless!
  */

var configuration = require('./configuration'),
    APIController = require('./Controllers/APIController'),
    RequestBody = require('./Models/RequestBody');


function initializer(){}

//Main functional components of UberAPILib
initializer.configuration = configuration;
initializer.APIController = APIController;

//Main Models of UberAPILib
initializer.RequestBody = RequestBody;

module.exports = initializer;