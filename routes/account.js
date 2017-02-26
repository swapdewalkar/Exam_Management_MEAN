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

console.log(req.body.username);
console.log(req.body.password);
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

router.post('/angularLogin', passport.authenticate('local'), function(req, res) {
  console.log(JSON.toString(res));
  req.user.status="Login";
  res.send(req.user);
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/account/home');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

router.post('/reg',function(req,res,next){
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        return res.render("register.html", {info: "Sorry. That username already exists. Try again."});
      }
      passport.authenticate('local')(req, res, function () {
        res.redirect('/account/home');
      });
  });
});


// router.get('/l',function(req,res,next){
//
//   console.log("Here");
//   Account.register(new Account({ username : "swapnil" }), "swapnil", function(err, account) {
//     if (err) {
//       console.log(err);
//       }
//     else {
//       passport.authenticate('local')(req, res, function () {
//       //  res.redirect('/account/home');
//       });
//     }
//   });
// });
router.post('/registerAngular',function(req,res,next){

  console.log("Here"+req.body.username+req.body.password);
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      console.log(err);
      }
    else {
      passport.authenticate('local')(req, res, function () {
       res.send('{"status":"Registered Successfully"}');
      });
    }
  });
});


router.get('/log',  function(req, res) {
res.json({"status":"okay"});
});


module.exports=router;
