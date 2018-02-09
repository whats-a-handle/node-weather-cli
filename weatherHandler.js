const weatherHandler = function(){

	this.degreeType = 'F';

	this.weather = require('weather-js');

	this.find = function(parameter){
		
		const weatherHandler = this;

		this.weather.find({search:parameter, degreeType:weatherHandler.degreeType}, function(error, result) {
		 if(error){
		 	console.log("An Error has occurred during weather search for city: " + parameter);
		 	console.log("Error: " + error);
		 }
		 else{
		 	console.log(result);
		 }
		
		});

	},

	this.beautifyJSON = function(dirtyJSON){


	};

}

module.exports = weatherHandler;