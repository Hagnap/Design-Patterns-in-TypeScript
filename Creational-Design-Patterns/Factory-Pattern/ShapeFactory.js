"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeFactory = void 0;
var Circle_1 = require("./Shapes/Circle");
var Rectangle_1 = require("./Shapes/Rectangle");
var Square_1 = require("./Shapes/Square");
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.prototype.createShape = function (shapeType) {
        var shape = null;
        switch (shapeType.toLowerCase()) {
            case "square":
                shape = new Square_1.Square();
                break;
            case "rectangle":
                shape = new Rectangle_1.Rectangle();
                break;
            case "circle":
                shape = new Circle_1.Circle();
                break;
            default:
                console.log("ERROR: Undefined shape was selected.");
        }
        return shape;
    };
    return ShapeFactory;
}());
exports.ShapeFactory = ShapeFactory;
