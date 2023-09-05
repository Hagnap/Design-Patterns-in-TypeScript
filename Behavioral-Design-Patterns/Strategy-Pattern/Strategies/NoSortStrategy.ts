import { SortingStrategy } from "../SortingStrategy";

export class NoSortStrategy implements SortingStrategy {

    public sort(list: Array<number>): Array<number>  {
        
        console.log("NoSort-Strategy");
        console.log("No sort has been performed. Please assign a Sorting Strategy.");

        return list;
    }
}