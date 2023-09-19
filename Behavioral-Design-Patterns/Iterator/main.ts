import { Patient } from "./Patient";
import { PatientArray } from "./PatientArray";

// Create patients
let patientOne = new Patient("Donny Granger", 1);
let patientTwo = new Patient("Herbert Truver", 2);
let patientThree = new Patient("Jane Rain", 3);
let patientFour = new Patient("Riley Williams", 4);
let patientFive = new Patient("Ted Teddy", 5);

// Store patients into a collection
let patientArray = new PatientArray();
patientArray.patients.push(patientOne);
patientArray.patients.push(patientTwo);
patientArray.patients.push(patientThree);
patientArray.patients.push(patientFour);
patientArray.patients.push(patientFive);

// Create an iterator
let patientIterator = patientArray.iterator();

// Traverse patientArray
let current: Patient | undefined = patientIterator.currentItem();
while(patientIterator.hasNext()) {
    console.log(current);
    current = patientIterator.next();
}