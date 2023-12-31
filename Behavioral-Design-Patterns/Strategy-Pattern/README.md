# Strategy Pattern

## What is the Strategy Pattern?
Simply put the Strategy Pattern is a way for an algorithm's behavior to be changed at runtime. This allows us to plug and play different implementations of an algorithm. 
To accomplish this we must
  - Define a family of algorithms
  - Encapsulate each algorithm
  - Make the algorithms interchangable with the algorithm within the family

Interfaces are needed for this as this allows us to have a method in various classes that can all have their own unique implementations. In the example `sort()` is the function we declare in our interface and then implement in each of the strategies.

## Generic UML
![3918654_orig](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/f3c2ba8c-1ee7-4cf2-acdf-d0d40cdedff8)

[Source](http://www.hsufengko.com/notes/strategy-design-pattern-example) (Also on page 316 of Design Patterns)

## Example Explanation

Below is the UML the code for this implementation was inspired by. The main difference is the sorting algorithms used. They used Merge Sort and Quick Sort. For the sake of implementating different algorithms in a simple manner I used Bubble Sort and No Sort (just a console.log saying no sorting algorithm was used). As I review Data Structures and Algorithms I plan to implement Merge Sort, Quick Sort, and a few others to expand the family of (sorting) algorithms in this implementation of the Strategy Pattern.

![UML Image](https://java2blog.com/wp-content/webpc-passthru.php?src=https://java2blog.com/wp-content/uploads/2018/04/classDigramStrategyPattern.jpg&nocache=1)

[UML Source](https://java2blog.com/strategy-design-pattern-java/)

## How to Run the Code

### Instructions
  Step 0: [Install node](https://nodejs.org/en/download) if you do not have it. If you have it installed already, then skip this. I also recommend installing an IDE (ex. VS Code) but any text editor will work.
  
  Step 1: Open your terminal
  
  Step 2: Go into the "Design-Patterns-in-TypeScript/Behavioral-Design-Patterns/Strategy-Pattern" directory on your local machine. 
  
  Step 3: Run the `node SortingMain.js` command in your terminal

----------------------------
When you run the code you will see the result below

![Image of result](https://github.com/Hagnap/Design-Patterns-in-TypeScript/assets/60297426/d95db22a-aa7c-4556-8865-860040173ca5)

We first run the SortingManager's `sort()` function using the NoSortStrategy. This results in nothing as no sort was performed. Then we assign the BubbleSortStrategy to the SortingManager and call the `sort()` function again. This results in the numbers being sorted via Bubble Sort.
