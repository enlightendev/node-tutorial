var express = require('express');
var cons = require("consolidate");

var app = express();

/**
 * templating & views
 */
app.engine('html', cons.swig);
app.set('view engine','html');
app.set('views', __dirname + '/views');

/**
 * register a GET route that listens for GET requests on /debug,
 * and when requested, sends the string 'Hello, World'.
 *
 *  Express has methods for all of the HTTP verbs, so we could have also
 *  done app.post, app.put, app.delete, or even app.all, which responds
 *  to all HTTP verbs.
 */
app.get('/debug', function(req, res){
    res.send('Hello World');
});

app.get('/swig', function(req, res){
    res.render('swig', {'title':'First swig template!'})
});

app.get('*', function(req, res){
    res.send(404,'Not exist');
});

app.listen(3000, function(){
    console.log('Express started');
});