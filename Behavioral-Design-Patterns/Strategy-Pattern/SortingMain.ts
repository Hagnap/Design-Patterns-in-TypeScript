import { SortingManager } from "./SortingManager";
import { BubbleSortStrategy } from "./Strategies/BubbleSortStrategy";

function main(): void {

    // Creates a list of 10 random numbers ranging between 0-99
    let numbers: Array<number> = Array<number>(10);
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * 100);
    }

    console.log(`Before: ${numbers}`);

    // Creates a SortManager obj using the default sort strategy (NoSortStrategy) and then runs that sort strategy
    let sortManager = new SortingManager(numbers);
    sortManager.runSort();

     // Updates the Sorting Strategy to the BubbleSortStrategy and then runs that sort strategy
    sortManager.setSortingStrategy(new BubbleSortStrategy());
    sortManager.runSort();

    console.log(`After: ${numbers}`);
}

main();