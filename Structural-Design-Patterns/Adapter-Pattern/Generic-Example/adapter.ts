import { Adaptee } from "./adaptee";
import { Target } from "./target";

export class Adapter extends Target {

    private adaptee: Adaptee;

    constructor() {
        super();
        this.adaptee = new Adaptee();
    }

    public request(): void {
        this.adaptee.specificRequest();
    }
}