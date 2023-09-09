# Observer Pattern (WIP)

## What is the Observer Pattern?

Aka the Publish/Subscribe Design Pattern.

The Observer Pattern is when an object referred to as the subject has a container of objects called observers, observers are dependent on the subject and get notified when the subject has changed its state. This is a one to many relationship, there is one subject being observed by zero or more objects. It also utilizes a Push architecture for notifying the observers of the subject's change in state and the observers are updated automatically which allows the observers to have a value that is consistent with the subject's state. Observers will register to the Subject to get their notifications for updating values, they can also be unregistered to stop the changes being made. 

## Terminology
- Subject
    - Only one in a relationship. 
    - The object being observed.
    - Has references to its observers.
    - Can register (add) an observer and unregister (remove) an observer.  

- Observer(s)
    - There are many in a relationship.
    - "Observe" the subject.
    - Have a reference of the Subject passed into them when constructed as this allows us to retrieve the state of the Subject when notified of it getting updated if registered.
 
- One to Many
    - A relationship where one entity is connected to multiple other entities

  ![OneToMany](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/69bdb305-a0e4-4e51-a05d-f89b43cc4699)


  
## Generic UML Example

![IMG](https://i.stack.imgur.com/w5Cqy.png)

[Source](https://www.cs.mcgill.ca/~hv/classes/CS400/01.hchen/doc/observer/observer.html) (Also page 294 in "Design Patterns")
