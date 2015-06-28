var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var zip = req.cookies.zip;
  if (zip) {
    console.log('redirect to index');
    res.redirect('/index');
  } else {
    res.render('welcome', { product: 'PlantEZ' });
  }
});

router.post('/', function(req, res, next) {
  var zip = req.body.zip;
  if (zip) {
    res.cookie('zip', zip, { maxAge: 100 *365 *24 * 60 * 60 * 1000 });
    res.redirect('/index');
  } else {
    res.redirect('/welcome');
  }
});

module.exports = router;
