# Decorator Pattern

## What is the Decorator Pattern?

## Generic UML
![decorator-design-pattern-uml](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/d4664096-73e8-44e9-b661-3463c2fd31c4)

[Source](http://coursegalaxy.com/design-patterns/decorator.html) (Also on page 177 in Design Patterns)

## Example

The code for this example was inspired by the UML below. The only differences are the decorators implemented and the types of Coffees implemented. When it comes to decorators I used soy, espresso shot, and creamer. For types of coffee I used coffee (black coffee) and decaf cofee. Each type of coffee can have any decorator added to it, so you can add an espresso shot to a decaf coffee if you please.

![1 dbwssnHb4v1oegDH83S2sQ](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/a2af21d5-62fc-4148-86af-ff66f6377592)


## How to Run the Code
Instructions

Step 0: Install node if you do not have it. If you have it installed already, then skip this. I also recommend installing an IDE (ex. VS Code) but any text editor will work.

Step 1: Open your terminal

Step 2: Go into the "Design-Patterns-in-TypeScript/Structural-Design-Patterns/Decorator-Pattern" directory on your local machine.

Step 3: Run the node main.js command in your terminal

When you run the code you will see the result below

![Capture](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/223877f2-a2c7-4c59-aa26-0ba40ae49d40)

In this example there are two types of coffee
  1) Coffee (aka Black Coffee)
  2) Decaf Coffee

There are also three add-ons for the coffee
  1) Espresso shot ($0.50)
  2) Soy ($0.75)
  3) Creamer ($0.25)

In the output seen above you can see the creation of two coffees. The first is a normal coffee that gets all three add-ons. Then you see the creation of a Black Cofee where Creamer and Soy get added to it.
