import { Coffee } from "../Coffee";
import { CoffeeDecorator } from "../CoffeeDecorator";

export class SoyDecorator extends CoffeeDecorator {

    private price: number = 0.75;
    private description: string = ", Soy";

    public constructor(_coffee: Coffee) {
        super(_coffee);


        console.log("Adding soy");
    }

    public getDescription(): string {
        return this.coffee.getDescription() + this.description;
    }

    public getCost(): number {
        return this.coffee.getCost() + this.price;
    }
}