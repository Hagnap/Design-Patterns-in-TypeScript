# Singleton-Pattern

## What is the Singleton Pattern?

The Singleton Pattern is a pattern that utilizes an object (a Singleton) where only one can exists and it is shared globally with all resources in the project. The way we ensure only instance can exist is by a static variable to store the sole instance of the object. The Singleton is responsible for keeping track of its sole instance. 

## Generic UML

<img width="556" alt="uml-singleton-1" src="https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/5285a636-930f-45e8-8c82-5ab90bacb5ea">

[Source](https://www.carloscaballero.io/design-patterns-singleton/) (Also page 127 in Design Patterns)

## Example Explanation

In this example a Singleton object is created along with three SimpleClass objects, the SimpleClass objects only store a string called value that will be used to store the data from the Singleton.
The Singleton's data variable only stores an empty string when instantiated. In the code we instantiate the Singleton object along with one SimpleClass object. We store the Singleton's data (a blank string) into the SimpleClass instance and then display the SimpleClass objects value. We then update the Singleton's data to now store the string "Singleton data", instantiate two more SimpleClass objects, store the Singleton's data into the previously instantiated SimpleClass objects, and then display the SimpleClass objects values. I used the UML below to help get inspiration for this example.

![images](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/dd81c061-34ef-4798-9a17-35d2918fda46)

[Source](https://technicaljungle.com/singleton-design-pattern-using-java/)

## How to Run the Code

Instructions

Step 0: Install node if you do not have it. If you have it installed already, then skip this. I also recommend installing an IDE (ex. VS Code) but any text editor will work.

Step 1: Open your terminal

Step 2: Go into the "Design-Patterns-in-TypeScript/Creational-Design-Patterns/Singleton-Pattern" directory on your local machine.

Step 3: Run the `node main.js` command in your terminal

----------------------------------------------------------------------------------------------------------

When you run the code you will see the result below

![Capture](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/58377ca6-2692-400d-9098-2734da5c41fe)

The first thing you see is the command to run the program, below that is three lines. Those three lines are the output. The first line displays the first SimpleObject's value, it's a blank string since it stored the Singleton value before it gets updated and then the next to lines display the two SimpleClass objects values that store the updated Singleton value. 
