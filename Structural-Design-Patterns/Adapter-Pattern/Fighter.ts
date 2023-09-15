import { IFighter } from "./ifighter";

export class Fighter implements IFighter {

    public attack(): string {
        return "Attacking...";
    }

    public defend(): string {
        return "Defending...";
    }

    public escape(): string {
        return "Escaping...";
    }
}