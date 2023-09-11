"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
var SimpleClass_1 = require("./SimpleClass");
// Creates a singleton
var singleton = Singleton_1.Singleton.getInstance();
// Creates an object --- Constructed with string ""
var objOne = new SimpleClass_1.SimpleClass();
console.log(objOne.getValue());
// Updates the Singleton's value
singleton.setData("Singleton data");
// Creates two more values  --- Constructed with string "Singleton data"
var objTwo = new SimpleClass_1.SimpleClass();
console.log(objTwo.getValue());
var objThree = new SimpleClass_1.SimpleClass();
console.log(objThree.getValue());
