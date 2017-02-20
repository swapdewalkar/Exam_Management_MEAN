var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');

router.get('/',function(req,res,next){
  res.render('index.html');
});
router.get('/register', function(req, res) {
      res.render('register.html', { info :"" });
  });
router.get('/home', function(req, res) {
  console.log(req.user);
      res.render('home.html', { user : req.user });
  });

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render("register.html", {info: "Sorry. That username already exists. Try again."});
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('/home');
        });
    });
});

router.get('/login', function(req, res) {
    //console.log(user);
    res.render('login.html', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/home');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/home');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});
module.exports=router;
