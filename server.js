var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var dbhandle = require('./routes/dbhandle');
var methodOverride = require('method-override');
var session = require('express-session');
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');

var app=express();
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(methodOverride());
app.use(session({ resave: true, saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(cookieParser("swapnil"));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname,'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
var port=4000;

//var db =mongoose.connect('mongodb://localhost/loginapp');
var Account = require('./models/account');
//passport.use(Account.createStrategy());
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.use('/',index);
app.use('/api',tasks);
app.use('/db',dbhandle);
app.all('/*', function(req, res, next) {
    res.render('index.html');
});

app.listen(port,function(){
  console.log('Server Started...');
});
