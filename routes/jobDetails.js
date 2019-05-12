/**
 *
 * @type {createApplication}
 */
var express = require('express');
var router = express.Router();


/*  */
router.get('/', function(req, res) {
  console.log('***jobDetails***get***');
  res.render('jobDetails',{user:req.session.user});
});

router.post('/', function(req, res) {
    console.log('***jobDetails***post***');
    res.render('jobDetails',{user:req.session.user});
});


module.exports = router;
