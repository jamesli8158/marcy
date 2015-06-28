var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:category', function(req, res, next) {
  var category = req.params.category;
  res.render('categoryList', {
    category: category,
    id: 1,
    name: category + ' No. 1'
  });
});

module.exports = router;
