var express = require('express');
var router = express.Router();


/* GET index page after login. */
router.get('/', function(req, res, next) {
  console.log('***personDetails***get***');
  res.render('personDetails', {user:req.session.user});
});


/* validation of the login email and password */
router.post('/', function(req, res, next) {
  console.log("***personDetails***post***");

});


module.exports = router;
