import { Coffee } from "./Coffee";

export abstract class CoffeeDecorator implements Coffee {

    protected coffee: Coffee;

    public constructor(_coffee: Coffee) {
        this.coffee = _coffee;
    }

    public getDescription(): string {
        return this.coffee.getDescription();
    }

    public getCost(): number {
        return this.coffee.getCost();
    }
}