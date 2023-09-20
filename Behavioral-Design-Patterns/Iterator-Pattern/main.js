"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Patient_1 = require("./Patient");
var PatientArray_1 = require("./PatientArray");
var LinkedList_1 = require("./LinkedList");
var node_1 = require("./node");
// Create patients
var patientOne = new Patient_1.Patient("Donny Granger", 1);
var patientTwo = new Patient_1.Patient("Herbert Truver", 2);
var patientThree = new Patient_1.Patient("Jane Rain", 3);
var patientFour = new Patient_1.Patient("Riley Williams", 4);
var patientFive = new Patient_1.Patient("Ted Teddy", 5);
// Array Iterator
console.log("Array Iterator");
// Store patients into a collection
var patientArray = new PatientArray_1.PatientArray();
patientArray.patients.push(patientOne);
patientArray.patients.push(patientTwo);
patientArray.patients.push(patientThree);
patientArray.patients.push(patientFour);
patientArray.patients.push(patientFive);
// Create an iterator
var patientArrayIterator = patientArray.iterator();
// Traverse patientArray
var iteratorOne = patientArrayIterator.currentItem();
while (patientArrayIterator === null || patientArrayIterator === void 0 ? void 0 : patientArrayIterator.currentItem()) {
    console.log(iteratorOne);
    iteratorOne = patientArrayIterator.next();
}
// LinkedList Iterator
console.log("\n\nLinked-List Iterator");
// Create nodes to store patient objects
var nodeOne = new node_1.Node(patientOne);
var nodeTwo = new node_1.Node(patientTwo);
var nodeThree = new node_1.Node(patientThree);
var nodeFour = new node_1.Node(patientFour);
var nodeFive = new node_1.Node(patientFive);
// Store nodes into linked list
var patientLinkedList = new LinkedList_1.LinkedList();
patientLinkedList.append(nodeOne);
patientLinkedList.append(nodeTwo);
patientLinkedList.append(nodeThree);
patientLinkedList.append(nodeFour);
patientLinkedList.append(nodeFive);
// Create an iterator
var patientLinkedListIterator = patientLinkedList.iterator();
// Traverse patientArray
var iteratorTwo = patientLinkedListIterator === null || patientLinkedListIterator === void 0 ? void 0 : patientLinkedListIterator.currentItem();
while (patientLinkedListIterator === null || patientLinkedListIterator === void 0 ? void 0 : patientLinkedListIterator.currentItem()) {
    console.log(iteratorTwo === null || iteratorTwo === void 0 ? void 0 : iteratorTwo.getValue());
    iteratorTwo = patientLinkedListIterator.next();
}
