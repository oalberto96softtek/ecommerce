
var mongoose = require('mongoose');
mongoose.connect('mongodb://172.17.0.2:27017/ecommerce');

var mongoSchema = mongoose.Schema;

var userSchema = {
	'userEmail': String,
	'userPassword': String
};

module.exports = mongoose.model('userLogin', userSchema);
