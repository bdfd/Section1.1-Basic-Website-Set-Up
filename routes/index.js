var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Passcode', { layout: 'Passcode_layout' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { layout: 'Passcode_layout' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { layout: 'Passcode_layout' });
});

router.get('/msg', function(req, res, next) {
  res.render('message', { layout: 'Passcode_layout' });
});

module.exports = router;
