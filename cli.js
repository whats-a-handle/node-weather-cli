var inquirer = require("inquirer");

function Programmer(name, location) {
  this.name = name;
  this.location = location;
}

Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nLocation: " + this.location + "\n")
};

inquirer.prompt([
  {
    name: "name",
    message: "What is your name?"
  }, {
    name: "location",
    message: "where do you want to search for the weather?"
  }
]).then(function(answers) {
  var newClient = new Programmer(answers.name, answers.location);
  newClient.printInfo();
});