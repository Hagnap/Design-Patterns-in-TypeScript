import { Singleton } from "./Singleton";

export class SimpleClass {
    
    private value; 
    
    constructor() {
        this.value = Singleton.getInstance().getData();
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(_value: string) {
        this.value = _value;
    }
}