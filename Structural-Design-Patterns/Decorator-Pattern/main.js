"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoyDecorator_1 = require("./Decorators/SoyDecorator");
var EspressoShotDecorator_1 = require("./Decorators/EspressoShotDecorator");
var CreamerDecorator_1 = require("./Decorators/CreamerDecorator");
var Coffee_1 = require("./Coffee");
var DecafCoffee_1 = require("./DecafCoffee");
function outputCoffeeData(coffee) {
    console.log("\n    Coffee Description: ".concat(coffee.getDescription(), "\n    Coffee Price: ").concat(coffee.getCost(), "\n"));
}
// Create a plain coffee (no decorators)
var coffee = new Coffee_1.Coffee();
outputCoffeeData(coffee);
// Adds creamer
coffee = new CreamerDecorator_1.CreamerDecorator(coffee);
outputCoffeeData(coffee);
// Adds shot of espresso
coffee = new EspressoShotDecorator_1.EspressoShotDecorator(coffee);
outputCoffeeData(coffee);
// Adds soy
coffee = new SoyDecorator_1.SoyDecorator(coffee);
outputCoffeeData(coffee);
// Create a decaf coffee (no decorators)
var decafCoffee = new DecafCoffee_1.DecafCoffee();
outputCoffeeData(decafCoffee);
// Adds creamer
decafCoffee = new CreamerDecorator_1.CreamerDecorator(decafCoffee);
outputCoffeeData(decafCoffee);
// Adds soy
decafCoffee = new SoyDecorator_1.SoyDecorator(decafCoffee);
outputCoffeeData(decafCoffee);
