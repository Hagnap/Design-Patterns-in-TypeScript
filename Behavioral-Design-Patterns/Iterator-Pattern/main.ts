import { Patient } from "./Patient";
import { PatientArray } from "./PatientArray";
import { LinkedList } from "./LinkedList";
import { Node } from "./node";
import { Iterator } from "./Iterator";

// Create patients
let patientOne = new Patient("Donny Granger", 1);
let patientTwo = new Patient("Herbert Truver", 2);
let patientThree = new Patient("Jane Rain", 3);
let patientFour = new Patient("Riley Williams", 4);
let patientFive = new Patient("Ted Teddy", 5);

// Array Iterator
console.log("Array Iterator");

// Store patients into a collection
let patientArray = new PatientArray();
patientArray.patients.push(patientOne);
patientArray.patients.push(patientTwo);
patientArray.patients.push(patientThree);
patientArray.patients.push(patientFour);
patientArray.patients.push(patientFive);

// Create an iterator
let patientArrayIterator = patientArray.iterator();

// Traverse patientArray
let iteratorOne: Patient | undefined = patientArrayIterator.currentItem();
while(patientArrayIterator?.currentItem()) {
    console.log(iteratorOne);
    iteratorOne = patientArrayIterator.next();
}

// LinkedList Iterator
console.log("\n\nLinked-List Iterator");

// Create nodes to store patient objects
let nodeOne = new Node(patientOne);
let nodeTwo = new Node(patientTwo);
let nodeThree = new Node(patientThree);
let nodeFour = new Node(patientFour);
let nodeFive = new Node(patientFive);

// Store nodes into linked list
let patientLinkedList = new LinkedList();
patientLinkedList.append(nodeOne);
patientLinkedList.append(nodeTwo);
patientLinkedList.append(nodeThree);
patientLinkedList.append(nodeFour);
patientLinkedList.append(nodeFive);

// Create an iterator
let patientLinkedListIterator = patientLinkedList.iterator();

// Traverse patientArray
let iteratorTwo:  Node | undefined = patientLinkedListIterator?.currentItem(); 
while(patientLinkedListIterator?.currentItem()) {
    console.log(iteratorTwo?.getValue());
    iteratorTwo = patientLinkedListIterator.next();
}
