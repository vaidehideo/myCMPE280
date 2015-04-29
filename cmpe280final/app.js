var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , session = require('express-session')
  , home = require('./routes/home')
  , path = require('path');

var app = express();
app.use(express.cookieParser());
app.use(express.session({ secret: 'keyboard cat'}));
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

 var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
 var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/index', routes.index);
//app.post('/insertUser', home.insertUser);
//app.get('/successInsert', home.successInsert);
app.get('/signin', home.signin);
app.post('/signin', home.afterSignIn);
app.get('/dashboard', home.dashboard);
app.get('/getDashboardData', home.getData);
app.get('/getToppingsData', home.toppingData);
app.get('/signout', home.signout);
app.get('/highmap', home.highmap);
app.get('/highmapdata', home.highmapdata);
app.get('/vegnonvegchart', home.vnvchart);
app.get('/populartoppings', home.populartoppings);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


/* http.createServer(app).listen(server_port, server_ip_address, function(){
  console.log('Express server listening on server' +server_ip_address+ ' and port ' + server_port);
});*/
 
