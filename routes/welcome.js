var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('welcome', { product: 'PlantEZ' });
});

router.post('/', function(req, res, next) {
  var zip = req.body.zip;
  if (zip) {
    res.cookie('zip', zip, { maxAge: 100 *365 *24 * 60 * 60 * 1000 });
    res.redirect('./index');
  }
  res.redirect('./');
});

module.exports = router;
