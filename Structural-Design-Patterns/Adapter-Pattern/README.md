# Adapter-Pattern

## What is the Adapter Pattern?
The Adapter Pattern is a design pattern that allows us to convert an interface of a class into another interface that a client expects. It's a way for classes to work together that couldn't have before due to incompatible interfaces. I like to think of it as a mapping layer, it maps the actions of interface to correspond with the actions of another interface to make them compatible. 

### Terminology
* Adapter: Adapts the interface of Adaptee to the Target interface.

* Adaptee: Defines an interface that needs to be adapted to another interface

* Target: Defines the interface that the client uses.

* Class Adapter: Wraps an adapter around a class. Uses inheritance.

* Object Adapter: Wraps an adapter around an instance. Uses interfaces.

## Generic UML

![objectadapter](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/4a3c2c7b-267f-4d5c-aac3-54c7b0eb4ae6)

[Source](https://javajazzle.wordpress.com/2011/03/02/adapter-pattern-wrapper-pattern/) (Also on page 141 of Design Patterns)


## Example

The code used in the implementation of the Adapter Pattern example was inspired by the UML below.

![adapter_design_pattern_in_java_example](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/b6745610-6ca3-4e39-ba00-b0492325b7b2)
[Source](https://www.google.com/url?sa=i&url=https%3A%2F%2Fjavarevisited.blogspot.com%2F2016%2F08%2Fadapter-design-pattern-in-java-example.html&psig=AOvVaw33rZEoc8Du7CtJvEF6Qhu5&ust=1694887441715000&source=images&cd=vfe&opi=89978449&ved=0CBAQjhxqFwoTCLD1yPKZrYEDFQAAAAAdAAAAABAE)

## How to Run the Code
Instructions

Step 0: Install node if you do not have it. If you have it installed already, then skip this. I also recommend installing an IDE (ex. VS Code) but any text editor will work.

Step 1: Open your terminal

Step 2: Go into the "Design-Patterns-in-TypeScript/Structural-Design-Patterns/Adapter-Pattern" directory on your local machine.

Step 3: Run the node main.js command in your terminal

When you run the code you will see the result below

![Capture](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/d2a9dbe3-b67f-420c-8c01-abd5ab6f7998)
