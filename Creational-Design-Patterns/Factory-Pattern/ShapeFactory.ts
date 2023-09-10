import { IShape } from "./IShape";
import { Circle } from "./Shapes/Circle";
import { Rectangle } from "./Shapes/Rectangle";
import { Square } from "./Shapes/Square";

export class ShapeFactory {
    public createShape(shapeType: string): IShape | null {
        let shape: IShape | null = null; 

        switch(shapeType.toLowerCase()) {
            case "square":
                shape = new Square();
                break;

            case "rectangle":
                shape = new Rectangle();
                break;

            case "circle":
                shape = new Circle();
                break;

            default:
                console.log("ERROR: Undefined shape was selected.");
        }

        return shape;
    }
}