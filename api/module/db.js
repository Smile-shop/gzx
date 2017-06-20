var mongodb = require('mongodb');

var ApiResult = require('./ApiResult')

var server = new mongodb.Server('192.168.1.101', 27017);

var db = new mongodb.Db('gzx', server);

module.exports = function(){
	return db;	
};
