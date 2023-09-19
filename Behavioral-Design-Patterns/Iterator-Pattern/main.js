"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Patient_1 = require("./Patient");
var PatientArray_1 = require("./PatientArray");
// Create patients
var patientOne = new Patient_1.Patient("Donny Granger", 1);
var patientTwo = new Patient_1.Patient("Herbert Truver", 2);
var patientThree = new Patient_1.Patient("Jane Rain", 3);
var patientFour = new Patient_1.Patient("Riley Williams", 4);
var patientFive = new Patient_1.Patient("Ted Teddy", 5);
// Store patients into a collection
var patientArray = new PatientArray_1.PatientArray();
patientArray.patients.push(patientOne);
patientArray.patients.push(patientTwo);
patientArray.patients.push(patientThree);
patientArray.patients.push(patientFour);
patientArray.patients.push(patientFive);
// Create an iterator
var patientIterator = patientArray.iterator();
// Traverse patientArray
var current = patientIterator.currentItem();
while (patientIterator.hasNext()) {
    console.log(current);
    current = patientIterator.next();
}
