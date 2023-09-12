import { Coffee } from "./Coffee";

export class DecafCoffee extends Coffee {
    public constructor() {
        super();
    }

    public getDescription(): string {
        return "Decaf Coffee";
    }

    public getCost(): number {
        return 2.00;
    }
}