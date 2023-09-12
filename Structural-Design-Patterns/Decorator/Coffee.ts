import { ICoffee } from "./ICoffee";

// Concrete class
export class Coffee implements ICoffee {
    getDescription(): string {
        return "Cup of coffee";
    }

    getCost(): number {
        return 3.00;
    }
}