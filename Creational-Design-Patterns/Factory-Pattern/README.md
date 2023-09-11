# Factory Pattern

## What is the Factory Pattern?

This pattern allows us to create a variety of classes at runtime when we don't know what we will have to instantiate at the moment. We store the factory in a class so we can take advantage of Polymorphism and lets us swap what class we want to instantiate during runtime. We also store the factory in a class as it encapsulates the logic needed for instantiating classes.

## Generic UML

![IMG](https://www.dofactory.com/img/diagrams/net/factory.png)

[Source](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dofactory.com%2Fnet%2Ffactory-method-design-pattern&psig=AOvVaw04IIoPqfV0h-o8mjV2n0qb&ust=1694550816645000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjlgo7ts6OBAxW7gIkEHcdaB_cQr4kDegQIARB4) (Also page 108 in Design Patterns)

## Example Explanation

Below is the UML the code for this implementation was inspired by. It takes a group of shapes, creates them using a factory, and then "draws" them using each shapes respective `draw()` function. One of the two  differences is that in the factory, instead of using `getShape()` I used a function named `createShape()`. Also, instead of having a file called `FactoryPatternDemo.ts` I called it `main.ts`.

![IMG](https://www.tutorialspoint.com/design_pattern/images/factory_pattern_uml_diagram.jpg)

[Source](https://www.tutorialspoint.com/design_pattern/factory_pattern.html)
