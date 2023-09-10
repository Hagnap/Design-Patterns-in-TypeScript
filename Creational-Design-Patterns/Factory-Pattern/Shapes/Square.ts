import { IShape } from "../IShape";

export class Square implements IShape {
    
    constructor() {
        
    }

    public draw(): void {
        console.log("Inside Square::draw()");
    }
}