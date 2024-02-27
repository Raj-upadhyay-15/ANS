var express = require('express');
var router = express.Router();
const userModel = require("./users");
const passport = require('passport');
const localStrategy = require('passport-local')

passport.use(new localStrategy(userModel.authenticate()))

router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/About', function(req, res, next) {
  res.render('about');
});
router.get('/community', function(req, res, next) {
  res.render('community');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/product',
  failureRedirect: '/login'
}));

router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/register', function(req, res, next) {
  const userData = new userModel({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email
  });
  
  userModel.register(userData, req.body.password)
    .then(function() {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/product');
      });
    })
    .catch(function(err) {
      console.error('Error registering user:', err);
      res.redirect('/register'); // Redirect to registration page if registration fails
    });
});

router.get('/product', isLoggedIn, function(req, res) {
  res.render('product');
});


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;

