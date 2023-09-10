import { IShape } from "../IShape";

export class Circle implements IShape {
    
    constructor() {
        
    }

    public draw(): void {
        console.log("Inside Circle::draw()");
    }
}