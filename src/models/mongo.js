const crudSchema = require('../database/schema/mongo.schema');
const mongoose = require('mongoose');

module.exports = mongoose.model('User', crudSchema);
