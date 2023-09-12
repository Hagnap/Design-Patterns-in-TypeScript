import { SoyDecorator } from "./Decorators/SoyDecorator";
import { EspressoShotDecorator } from "./Decorators/EspressoShotDecorator";
import { CreamerDecorator } from "./Decorators/CreamerDecorator";
import { Coffee } from "./Coffee";
import { DecafCoffee } from "./DecafCoffee";

function outputCoffeeData(coffee) {
    console.log(`
    Coffee Description: ${coffee.getDescription()}
    Coffee Price: ${coffee.getCost()}
`);
}

// Create a plain coffee (no decorators)
let coffee: Coffee = new Coffee();
outputCoffeeData(coffee);

// Adds creamer
coffee = new CreamerDecorator(coffee);
outputCoffeeData(coffee);

// Adds shot of espresso
coffee = new EspressoShotDecorator(coffee);
outputCoffeeData(coffee);

// Adds soy
coffee = new SoyDecorator(coffee);
outputCoffeeData(coffee);




// Create a decaf coffee (no decorators)
let decafCoffee: Coffee = new DecafCoffee();
outputCoffeeData(decafCoffee);

// Adds creamer
decafCoffee = new CreamerDecorator(decafCoffee);
outputCoffeeData(decafCoffee);

// Adds soy
decafCoffee = new SoyDecorator(decafCoffee);
outputCoffeeData(decafCoffee);