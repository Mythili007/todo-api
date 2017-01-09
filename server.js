var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Todo API Root');
});
//GET /todos request
app.get('/todos', function (req, res) {
	res.json(todos);
});

app.get('/todos/:id', function (req, res) {
	//converting from string to number
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach(function (todo) {
		if(todoId === todo.id) {
			matchedTodo = todo;
		}
	});

	if(matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}

	// for(var i=0;i<todos.length;i++){
	// 	if(todoId === todos.id) {
	// 		res.json(todos);
	// 	} else {
	// 		res.status(404).send();
	// 	}
	// }

	//to send 404 status
	// res.status(404).send();

	// res.send('Asking for todo with id of ' + req.params.id);
});

//POST request - post can take data

app.post('/todos', function (req, res) {
	var body = req.body;
	body.id = todoNextId;
	todoNextId++;
	todos.push(body);
	// console.log('description: ' + body.description);
	res.json(body);
});
app.listen(PORT, function () {
	console.log('Express listening on PORT ' + PORT + '!');
});