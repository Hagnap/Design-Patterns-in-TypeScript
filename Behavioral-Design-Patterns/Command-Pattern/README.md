# Command-Pattern

## What is the Command Pattern
Simply put the Command Pattern is a way to encapsulate a request (the command itself). An object is used to encapsulate all of the information (values for a method parameters, the object that owns the method, values, methods, etc.) needed to perform an action/trigger an evernt at a later time. Typically for each command there is an undo command to complement it. This pattern is also known as the Action Pattern or the Transition Pattern.

**Terminology**
  - Command: An interface for performing an action.

  - Concrete Command: The implementation of an action being performed. Defines a connection between the receiver object and an action.

  - Client: Creates a Concrete Command and sets its receiver. 

  - Invoker: Asks the command to perform the request.

  - Receiver: Knows how to perform the operations associated with carrying out a request.

## Generic UML
![command](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/594a10a2-dae5-4364-b5f7-0aa46929a831)

[Source](https://www.cs.mcgill.ca/~hv/classes/CS400/01.hchen/doc/command/command.html) (also page 236 in Design Patterns)

## Example Explanation

The example was inspired by the UML below. The main difference being there are more than commands implemented in the this example and I included the undo functionality for commands as well. The added commands are increaseVolume, decreaseVolume, increaseChannel, decreaseChannel, and four misc. buttons that can be set to any command. If not set to a command they have a NoOperation command to serve as a default, it does nothing. Each of these commands have their respective undo commands as well. 

![command-1](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/969cf334-ecfd-475a-8b8f-40d71a88185d)

[Source](https://www.google.com/url?sa=i&url=https%3A%2F%2Fanjanashankar.com%2F2021%2F08%2F01%2Fcommand-design-pattern-implementation-in-java%2F&psig=AOvVaw0hzR5p7g5JsGWxuazdh9if&ust=1696163862164000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIi6tfas0oEDFQAAAAAdAAAAABAJ)


## How to Run the Code

Instructions

Step 0: Install node if you do not have it. If you have it installed already, then skip this. I also recommend installing an IDE (ex. VS Code) but any text editor will work.

Step 1: Open your terminal

Step 2: Go into the "Design-Patterns-in-TypeScript/Creational-Design-Patterns/Factory-Pattern" directory on your local machine.

Step 3: Run the node main.js command in your terminal

------------------------------------------------------------------------

When you run the code you will see the result below.

![Capture](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/046b2768-490f-470e-a6da-c6dca39a6767)

It is just the output of the commands being executed.
