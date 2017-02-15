var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;
var User= require('../models/user.js')
router.get('/users',function(req,res,next){
  User.find(function(err,users){
    if(err){
      res.send(err);
    }
    res.json(users);
  });
});

var kittySchema = mongoose.Schema({
    name: String
});
var Kitten = mongoose.model('Kitten', kittySchema);

router.get('/Kittenadd/:name',function(req,res,next){
  var fluffy = new Kitten({ name: req.params.name });
  console.log(req.name);
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
  });
  Kitten.find(function(err,users){
    if(err){
      res.send(err);
    }
    res.json(users);
  });
});

router.get('/useradd/:name',function(req,res,next){
  var fluffy = new User({ usersname: req.params.name });
  console.log(req.name);
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
  });
  User.find(function(err,users){
    if(err){
      res.send(err);
    }
    res.json(users);
  });
});

router.get('/user/:id',function(req,res,next){
  db.users.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,user ){
    if(err){
      res.send(err);
    }
    res.json(user);
  });
});

router.post('/user',function(req,res,next){
  var user=req.body;
  if(!users.name || !(user.isDone+'')){
    res.status(400);
    res.json({
      "error":"Bad Data"
    });
  }
  else{
    db.users.save(user,function(err){
      if(err){
        res.send(err);
      }
      res.json(user);
    });
  }
});

router.delete('/user/:id',function(req,res,next){
  db.users.remove({_id:mongojs.ObjectId(req.params.id)},function(err,user ){
    if(err){
      res.send(err);
    }
    res.json(user);
  });
});

router.put('/user/:id',function(req,res,next){
  var user=req.body;
  var upUser={};

  if(user.isDone){
    upUser.isDone=user.isDone;
  }

  if(user.title){
    upUser.title=user.title;
  }

  if(!updTask){
    res.status(400);
    res.json({
      "error":"Bad Data"
    });
  }
  else{
    db.tasks.update({_id:mongojs.ObjectId(req.params.id)},updTask,{},function(err,task ){
      if(err){
        res.send(err);
      }
      res.json(task);
    });
  }
});

module.exports=router;
