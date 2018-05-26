var friendInfo = require('../data/friends.js');

//==============================================
//ROUTING
//==============================================

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendInfo);
	});

	app.post('/api/friends', function(req, res){
		var newcharacter = req.body;
		friendInfo.push(newcharacter);
		res.json(newcharacter);
	})
};