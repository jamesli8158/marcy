function ensureAuthenticated(req, res, next) {
  var zip = req.cookies.zip;
  if (zip) {
    next();
  } else {
    res.redirect('/welcome');
  }
}

module.exports = ensureAuthenticated;
