import { Coffee } from "../Coffee";
import { CoffeeDecorator } from "../CoffeeDecorator";

export class EspressoShotDecorator extends CoffeeDecorator {

    private price: number = 0.50;
    private description: string = ", Shot of Espresso";

    public constructor(_coffee: Coffee) {
        super(_coffee);


        console.log("Adding shot of espresso");
    }

    public getDescription(): string {
        return this.coffee.getDescription() + this.description;
    }

    public getCost(): number {
        return this.coffee.getCost() + this.price;
    }
}