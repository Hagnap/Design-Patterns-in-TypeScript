import { IShape } from "./IShape";
import { ShapeFactory } from "./ShapeFactory";

let factory: ShapeFactory = new ShapeFactory();

let shapeOne: IShape | null = factory.createShape("Rectangle");
shapeOne?.draw();

let shapeTwo: IShape | null = factory.createShape("square");
shapeTwo?.draw();

let shapeThree: IShape | null = factory.createShape("CIRCLE");
shapeThree?.draw();
