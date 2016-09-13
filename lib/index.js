/**
  * @module UberAPILib
  *  
  * The Uber API makes it easy to tap into the digital mesh that runs across cities. Make requests to our API endpoints and we'll give you everything you need to create new and magical experiences for your users. The possibilities are endless!
  */

var configuration = require('./configuration'),
    APIController = require('./Controllers/APIController'),
    ProductCollection = require('./Models/ProductCollection'),
    PriceEstimateCollection = require('./Models/PriceEstimateCollection'),
    TimeEstimateCollection = require('./Models/TimeEstimateCollection'),
    Location = require('./Models/Location'),
    History = require('./Models/History'),
    UserActivity = require('./Models/UserActivity'),
    UserProfile = require('./Models/UserProfile'),
    PromotionsResponse = require('./Models/PromotionsResponse'),
    Request = require('./Models/Request'),
    ErrorBase = require('./Models/ErrorBase'),
    Meta = require('./Models/Meta'),
    SurgeConfirmation = require('./Models/SurgeConfirmation'),
    Errors = require('./Models/Errors'),
    Vehicle = require('./Models/Vehicle'),
    RequestMapResponse = require('./Models/RequestMapResponse'),
    Product = require('./Models/Product'),
    TimeEstimate = require('./Models/TimeEstimate'),
    PriceEsitmate = require('./Models/PriceEsitmate'),
    RequestDetailsCollections = require('./Models/RequestDetailsCollections'),
    Driver = require('./Models/Driver'),
    RequestBody = require('./Models/RequestBody');


function initializer(){}

//Main functional components of UberAPILib
initializer.configuration = configuration;
initializer.APIController = APIController;

//Main Models of UberAPILib
initializer.ProductCollection = ProductCollection;
initializer.PriceEstimateCollection = PriceEstimateCollection;
initializer.TimeEstimateCollection = TimeEstimateCollection;
initializer.Location = Location;
initializer.History = History;
initializer.UserActivity = UserActivity;
initializer.UserProfile = UserProfile;
initializer.PromotionsResponse = PromotionsResponse;
initializer.Request = Request;
initializer.ErrorBase = ErrorBase;
initializer.Meta = Meta;
initializer.SurgeConfirmation = SurgeConfirmation;
initializer.Errors = Errors;
initializer.Vehicle = Vehicle;
initializer.RequestMapResponse = RequestMapResponse;
initializer.Product = Product;
initializer.TimeEstimate = TimeEstimate;
initializer.PriceEsitmate = PriceEsitmate;
initializer.RequestDetailsCollections = RequestDetailsCollections;
initializer.Driver = Driver;
initializer.RequestBody = RequestBody;

module.exports = initializer;