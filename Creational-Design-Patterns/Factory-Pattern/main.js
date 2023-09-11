"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeFactory_1 = require("./ShapeFactory");
var factory = new ShapeFactory_1.ShapeFactory();
var shapeOne = factory.createShape("Rectangle");
shapeOne === null || shapeOne === void 0 ? void 0 : shapeOne.draw();
var shapeTwo = factory.createShape("square");
shapeTwo === null || shapeTwo === void 0 ? void 0 : shapeTwo.draw();
var shapeThree = factory.createShape("CIRCLE");
shapeThree === null || shapeThree === void 0 ? void 0 : shapeThree.draw();