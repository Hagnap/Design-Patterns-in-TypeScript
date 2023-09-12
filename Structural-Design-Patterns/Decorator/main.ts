import { SoyDecorator } from "./Decorators/SoyDecorator";
import { EspressoShotDecorator } from "./Decorators/EspressoShotDecorator";
import { CreamerDecorator } from "./Decorators/CreamerDecorator";
import { Coffee } from "./Coffee";

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