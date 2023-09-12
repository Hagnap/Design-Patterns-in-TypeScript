import { Coffee } from "../Coffee";
import { CoffeeDecorator } from "../CoffeeDecorator";

export class CreamerDecorator extends CoffeeDecorator {

    private discountPercent = 0.15;
    private price: number = 0.25;
    private description: string = ", Creamer";

    public constructor(_coffee: Coffee) {
        super(_coffee);


        console.log("Adding creamer");
    }

    public getDescription(): string {
        return this.coffee.getDescription() + this.description;
    }

    public getCost(): number {
        return this.coffee.getCost() + this.price;
    }
}