/**
 * Module dependencies.
 */

var express = require('express');

var host = "localhost";
var port = "27017";
var database = "IUT-METZ"
var databaseUrl = host+":"+port+"/"+database; 
var collections = ["todos", "users"];
var db = require("mongojs").connect(databaseUrl, collections);


var app = express();

app.configure(function(){
	app.set('views', __dirname + '/public/views');
  	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(request, response) {
	response.render("login.jade");
});

app.post("/user/login", function(request, response){
	db.users.find({_id:request.body.email}, function(error, user){
		if (user.length == 0 || user[0].password != request.body.password){
	    	response.render('login.jade',{messageError:"Mauvais login ou mot de passe"});
		} else {
			response.render("welcome.jade",request.body);
		}
	});
});
app.post("/user/register", function(request, response){
	db.users.find({_id:request.body.email}, function(error, user){
		if (user.length == 0){
			db.users.insert({_id:request.body.email, password:request.body.password});
			response.render('welcome.jade',request.body);
	    } else {
			response.render('login.jade',{messageError:"L'utilisateur existe déjà"});
		}
		
	});
});
app.listen(8080);
console.log('Express server listening on port 8080');