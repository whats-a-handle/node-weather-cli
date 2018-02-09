var weather = require("./weather.js");
var moment = require("moment");

var User = function(name, location){
	this.name = name;
	this.location = location;
	this.time = moment().format("YYYY-MM-DD");
	this.search = function(param){
		//will's code here
	};
}

module.exports = User;