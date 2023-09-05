"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SortingManager_1 = require("./SortingManager");
var BubbleSortStrategy_1 = require("./Strategies/BubbleSortStrategy");
function main() {
    // Creates a list of 10 random numbers ranging between 0-99
    var numbers = Array(10);
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * 100);
    }
    console.log("Before: ".concat(numbers));
    // Creates a SortManager obj using the default sort strategy (NoSortStrategy) and then runs that sort strategy
    var sortManager = new SortingManager_1.SortingManager(numbers);
    sortManager.runSort();
    // Updates the Sorting Strategy to the BubbleSortStrategy and then runs that sort strategy
    sortManager.setSortingStrategy(new BubbleSortStrategy_1.BubbleSortStrategy());
    sortManager.runSort();
    console.log("After: ".concat(numbers));
}
main();
