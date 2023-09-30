# README.md

## What is the Iterator Pattern
The Iterator Pattern is one that allows us to traverse a collection as it encapsulates the traversal behavior, it traverses in a sequential manner without exposing how the underlying representation. Various types of collections (ex Arrays, Lists, etc.) will have a uniform interface for traversal.

## Generic UML
![UML-iterator](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/93514faf-c6f8-4676-9578-463ed5e18823)

[Source](https://www.researchgate.net/figure/UML-class-diagram-for-Iterator-pattern_fig22_249885094) (Also page 259 in Design Patterns)


## Example Explanation

You can see the UML that inspired the example below. I did not follow that UML to a T but isn't too far off from it. One of the main differences is that PatientList is called LinkedList (should be PatientLinkedList) and there is another data structure used, PatientArray. Two data-structures are used to showcase how traversal varies across data-structures. Both methods of traversal for arrays and linked list are simple. For an array we go to the next index (if it exists) and for a linked list we go to the next reference until the reference is null/undefined.

![Iterator-Design-Pattern](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/05f70f13-41d5-4914-acf9-35bcddb8666c)

[Source](https://www.researchgate.net/figure/UML-class-diagram-for-Iterator-pattern_fig22_249885094)


## How to Run the Code
