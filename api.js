var express = require('express');        
var app = express();                 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 80;  
const router = express.Router();
router.get('/', function(req, res) {
    res.json({ message: 'I can smell you...' });   
});

app.use('/shelby', router);
app.listen(port);
console.log('Listening on port ' + port);
