var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
	sequelize = new Sequelize("postgres://hburrkhwpphavm:dbc76f38f3e508eb405fa2a30b1431729ed12184c85884a9e80c8e46cdd18cc4@ec2-54-225-104-61.compute-1.amazonaws.com:5432/d68lbhg8n5akh4", {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
		'dialect': 'sqlite',
		'storage': __dirname + '/data/dev-todo-api.sqlite'
	});

}


var db =	 {};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;