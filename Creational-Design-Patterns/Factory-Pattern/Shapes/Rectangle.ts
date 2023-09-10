import { IShape } from "../IShape";

export class Rectangle implements IShape {

    constructor() {
        
    }

    public draw(): void {
        console.log("Inside Rectangle::draw()");
    }
}