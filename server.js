var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var dbhandle = require('./routes/dbhandle');

var port=3001;

var app=express();

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',tasks);
app.use('/db',dbhandle);
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.render('index.html');
});

app.listen(port,function(){
  console.log('Server Started...');
});
