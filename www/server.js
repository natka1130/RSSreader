//zmienne dla bibliotek z node'a
var express = require('express');
var app = express();
var serv = require('http').Server(app);

var io = require('socket.io')(serv, {});
io.origins('*:*');

// ustawienia serewra (express.io)
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
}); 
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/css', express.static(__dirname + '/css/'));
app.use('/js', express.static(__dirname + '/js/'));

//zmienne mongodb
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:qwert6789@ds129031.mlab.com:29031/rss-reader', ['users']);
//start servera
serv.listen(4000, function () {
    console.log("Listening on *:" + '4000');
});

// ustawienia response'ow w socket.io - zachowabnie backendu przy rejestracji i logowaniu
io.sockets.on('connection', function(socket){

	socket.on('signIn', function(data){
		isValidPassword(data, function(res) { 
			if(res) {
				socket.emit('signInResponse', {success: true});	
				console.log(data);
			} else {
				socket.emit('signInResponse', {success: false});
			}
		});		
	});
	socket.on('signUp', function(data){
		isUsernameTaken(data,function(res){
			if(res) {
				socket.emit('signUpResponse', {success: false});
			} else {
				addUser(data, function() {
					socket.emit('signUpResponse', {success: true});
				});
			}
		}); 			
	});

});

// sprawdzanie hasla w bazie
var isValidPassword = function(data, callback) {
	db.users.find({username: data.username, password: data.password}, function(err, res) {
		if(res.length > 0) {
			callback(true);
		} else {
			callback(false);
		}
	});
}
// sprawdzaqnie loginu
var isUsernameTaken = function(data, callback) {
	db.users.find({username: data.username}, function(err, res) {
		if(res.length > 0) {
			callback(true);
		} else {
			callback(false);
		}
	});
}	
//rejestracja - dodawanie usera do bazy
var addUser = function(data, callback) {
	db.users.insert({username: data.username, password: data.password, email: data.email}, function(err) {
		callback();
	});
}
