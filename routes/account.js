var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');

router.get('/',function(req,res,next){
  res.redirect('/account/home');
});
router.get('/register', function(req, res) {
      res.render('register.html', { info :"" });
  });
router.get('/home', function(req, res) {
      res.render('home.html', { user : req.user });
  });

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render("register.html", {info: "Sorry. That username already exists. Try again."});
        }
        passport.authenticate('local')(req, res, function () {
          res.redirect('/account/home');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login.html', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/account/home');
});

router.get('/logout', function(req, res) {
    req.logout();
    req.session.destroy();
    res.json({"status":false});
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});


router.post('/angularLogin', passport.authenticate('local'), function(req, res) {
  req.user.status="Login";
  res.send(req.user);
});

router.post('/registerAngular',function(req,res,next){

  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      res.send('{"status":"'+err.message+'"}');
      }
    else {
      passport.authenticate('local')(req, res, function () {
       res.send('{"status":"Registered Successfully"}');
      });
    }
  });
});


router.get('/check',  function(req, res,next) {
  if (req.isAuthenticated()){
    return 	res.send({"status":true});
  }
	return res.send({"status":false});
});

module.exports=router;
