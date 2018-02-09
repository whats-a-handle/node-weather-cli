var weather = require("weather-js");
var moment = require("moment");

var User = function(name, location){
	this.name = name;
	this.location = location;
	this.time = moment().format("YYYY-MM-DD");
	this.search = function(param){

		weather.find({search: param, degreeType: 'F'}, function(error, result) {
		 if(error){
		 	console.log("An Error has occurred during weather search for city: " + param);
		 	console.log("Error: " + error);
		 }
		 else{
		 	console.log(result);
		 }
		
		});
	};
}

module.exports = User;