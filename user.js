const WeatherHandler = require("./weatherHandler.js");
var moment = require("moment");

var User = function(name, location){
	this.name = name;
	this.location = location;
	this.time = moment().format("YYYY-MM-DD");
	this.search = function(param){

		const weatherHandler = new WeatherHandler();

		weatherHandler.find(param);

		};
	};

module.exports = User;