var express = require('express');
var fileSystem = require('fs'),
    path = require('path'),
    url = require('url');
var mongoose = require('mongoose');
var app = express();

app.configure(function () {
    app.use(express.static(path.join(__dirname, 'static')));
    app.use(express.bodyParser());
    app.use(express.logger("short"));
});

console.log(path.join(__dirname, 'static'));
app.get('/', function (req, res) {
//    var body = 'Hello World';
//    res.setHeader('Content-Type', 'text/plain');
//    res.setHeader('Content-Length', body.length);
//    res.end(body);
    getStream("pages/index.html").pipe(res);
});

app.get('/login', function (req, res) {
    getStream("pages/login.html").pipe(res);
});

app.post('/login', function (req, res) {
    console.log("In login  request!");
    if (req.body.username == "pooya") {
        getStream("pages/main.html").pipe(res);
    } else {
        getStream("pages/loginerror.html").pipe(res);
    }

});

app.post('/addTodo', function (req, res) {
//    console.log(req.body);
    console.log("In add todo request!");
    var todo = new Todo({text: req.body.text, done: false});
    todo.save();
});

app.post('/archive', function (req, res) {
    for (var i = 0; i < req.body.length; i++) {
        console.log(req.body[i]);
        var item = req.body[i];
//        var todo = new Todo({text: item.text, done: item.done, _id: item._id});
        var options = {upsers: true};

        Todo.update({_id: item._id}, {text: item.text, done: item.done}, options, function (err, numberAffected, raw) {
            if (err) return console.log(err);
            console.log('The number of updated documents was %d', numberAffected);
            console.log('The raw response from Mongo was ', raw);
        });
//        todo.save();
    }
});

app.post('/getTodos', function (req, res) {
    console.log("In get todo request!");

//    function find(callback) {
    Todo.find({done: false},
        function (err, todo) {
            if (err) {
                console.log("Error!");
                return;
            }
            console.log("in here!");
            var body = JSON.stringify(todo);
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', body.length);
            res.end(body);
        }
    );
//    }

//    find(function (todo) {
//        var body = JSON.stringify(todo);
//        var body = JSON.stringify(f);
//        console.log("body is " + body);

//    });
//    res.write(find());
});

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Already connected to mongodb!");
});

var todoSchema = mongoose.Schema({
    text: String, done: Boolean
});

var Todo = mongoose.model('Todo', todoSchema);

//find(function (todo) {
//    console.log(todo);
//});

app.listen(8081);

function getStream(path) {
    return fileSystem.createReadStream(path);
}