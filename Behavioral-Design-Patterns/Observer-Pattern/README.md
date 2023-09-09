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


  
## Generic UML

![IMG](https://i.stack.imgur.com/w5Cqy.png)

[Source](https://www.cs.mcgill.ca/~hv/classes/CS400/01.hchen/doc/observer/observer.html) (Also page 294 in "Design Patterns")

## Example Explanation

In this example the Subject is the YoutubeChannel object and the Observers are the YoutubeSubscriber objects. The YoutubeSubscribers when created are registered to the Subject and also store a reference to the Subject. The YoutubeChannel object has an array to store references of its Observers. The example follows the UML seen above but the concrete implementations are Youtube oriented. Now this isn't an accurate representation of a Youtube subscriber as their state probably isn't a video of a Youtube channel but it is a *simple* system that notifies subscribers of a new video (videos are the state in this example) from a they subscribed (registered) to channel. If a subscriber unsubscribes (unregisters) they no longer recieve notifications of a new video from that channel.

