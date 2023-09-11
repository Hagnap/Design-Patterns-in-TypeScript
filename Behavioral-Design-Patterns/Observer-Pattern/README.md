# Observer Pattern

## What is the Observer Pattern?

Aka the Publish/Subscribe Design Pattern.

The Observer Pattern is when an object referred to as the Subject has a container of objects called Observers, Observers are dependent on the Subject and get notified when the Subject has changed its state. This is a one to many relationship, there is one Subject being observed by zero or more Objects. It also utilizes a Push architecture for notifying the Observers of the Subject's change in state and the Observers are updated automatically which allows the observers to have a value that is consistent with the Subject's state. Observers will register to the Subject to get their notifications for updating values, they can also be unregistered to stop the changes being made. 

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

### Instructions
  Step 0: [Install node](https://nodejs.org/en/download) if you do not have it. If you have it installed already, then skip this. I also recommend installing an IDE (ex. VS Code) but any text editor will work.
  
  Step 1: Open your terminal
  
  Step 2: Go into the "Design-Patterns-in-TypeScript/Behavioral-Design-Patterns/Observer-Pattern" directory on your local machine. 
  
  Step 3: Run the `node main.js` command in your terminal

----------------------------
When you run the code you will see the result below

![Capture - Result Example](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/ec2b5fd2-0234-43b2-9ba0-854b60961502)

We first check the status of the Observers when created, they're nothing as their respective Subjects have not updated their initial values. Then the two Subjects are updated which results in all Observers getting updated and we then display those values. We repeat that process but only for one Subject. After that we unregister an Observer from the previously updated Subject, updated that Subject, and then display the values of all of the Observers.


