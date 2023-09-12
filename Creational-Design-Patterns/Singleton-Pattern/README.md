# Singleton-Pattern

## What is the Singleton Pattern?

The Singleton Pattern is a pattern that utilizes a Singleton, a Singleton is an object where only one can exists and it is shared globally with all resources in the project. The way we ensure only instance can exist is by a static variable to store the sole instance of the object. The Singleton is responsible for keeping track of its sole instance. 

## Generic UML

<img width="556" alt="uml-singleton-1" src="https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/5285a636-930f-45e8-8c82-5ab90bacb5ea">

[Source](https://www.carloscaballero.io/design-patterns-singleton/) (Also page 127 in Design Patterns)

## Example Explanation

In this example a Singleton object is created along with three SimpleClass objects, the SimpleClass objects only store a string called value that will be used to store the data from the Singleton.
The Singleton's data variable only stores an empty string when instantiated. In the code we instantiate the Singleton object along with one SimpleClass object. We store the Singleton's data (a blank string) into the SimpleClass instance and then display the SimpleClass objects value. We then update the Singleton's data to now store the string "Singleton data", instantiate two more SimpleClass objects, store the Singleton's data into the previously instantiated SimpleClass objects, and then display the SimpleClass objects values.

## How to Run the Code
