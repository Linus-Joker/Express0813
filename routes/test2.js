var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/test1');

/* POST userlist page. */
router.post('/', function (req, res, next) {
    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var password = req.body.password;

    // Set our collection
    var collection = db.get('user');

    // Submit to the DB
    collection.insert({
        "username": userName,
        "password": password
		
    });
    });



module.exports = router;