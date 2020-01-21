var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerce');

var mongoSchema = mongoose.Schema;

var userSchema = {
	'name': String,
    'price': Number,
    'inventory': Number
};

module.exports = mongoose.model('products', userSchema);
