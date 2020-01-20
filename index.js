
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var mongoOp = require('./models/mongo');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));

router.get('/', function(req, res){
	res.json({'error': false, 'message': 'Hello world'});
});




app.use('/', router);

app.listen(3000);
console.log('listening to port 3000')
