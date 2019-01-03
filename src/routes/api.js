const express 				= require('express');
const Route 				= express.Router();
const Middleware 			= require('../helpers/verify-jwt-token');
const MongoController 		= require('../controllers/api/v1/mongo.controller');
const Registration 			= require('../controllers/api/v1/registration');

/**
 * APIs V1 Routes
 */
Route.get('/v1/home', MongoController.home);
Route.post('/v1/register', Registration.register);
Route.get('/v1/getUsers', Registration.ListUser);
// Route.post('/v1/login', MongoController.login);
// Route.get('/v1/users', MongoController.users);
// Route.get('/v1/users/:userId', Middleware.verifyJwtToken, MongoController.details);
// Route.put('/v1/users/:userId', Middleware.verifyJwtToken, MongoController.update);
// Route.delete('/v1/users/:userId', Middleware.verifyJwtToken, MongoController.delete);

module.exports = Route