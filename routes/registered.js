var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/registered', function(req, res, next){
	res.render('registered', { title: 'Express',
                          userid:req.body.userid,
						  password:req.body.password});	

});



module.exports = router;