import { SortingStrategy } from "../SortingStrategy";

export class BubbleSortStrategy implements SortingStrategy {

    public sort(list: Array<number>): Array<number>  {
        
        console.log("BubbleSort-Strategy");

        let temp: number;

        for(let i = 0; i < list.length; i++) {
            for(let j = 0; j < list.length - 1 - i; j++) {
                if(list[j] > list[j + 1]){
                    temp = list[j + 1];
                    list[j + 1] = list[j];
                    list[j] = temp;
                }
            }
        }

        return list;
    }
}