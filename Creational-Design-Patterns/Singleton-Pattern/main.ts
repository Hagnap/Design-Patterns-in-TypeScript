import { Singleton } from "./Singleton";
import { SimpleClass } from "./SimpleClass";

// Creates a singleton
let singleton = Singleton.getInstance();

// Creates an object --- Constructed with string ""
let objOne = new SimpleClass();
console.log(objOne.getValue());

// Updates the Singleton's value
singleton.setData("Singleton data");

// Creates two more values  --- Constructed with string "Singleton data"
let objTwo = new SimpleClass();
console.log(objTwo.getValue());

let objThree = new SimpleClass();
console.log(objThree.getValue());