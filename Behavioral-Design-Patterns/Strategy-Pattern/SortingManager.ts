import { SortingStrategy } from "./SortingStrategy";
import { NoSortStrategy } from "./Strategies/NoSortStrategy";

export class SortingManager {
    private list: Array<number>;
    private strategy: SortingStrategy;

    public constructor(_list: Array<number>) {
        this.list = _list;
        this.strategy = new NoSortStrategy();
    }

    public getSortingStrategy(): SortingStrategy {
        return this.strategy;
    }

    public setSortingStrategy(_strategy: SortingStrategy): void {
        this.strategy = _strategy;
    }

    public getList(): Array<number> {
        return this.list;
    }

    public setList(_list: Array<number>): void {
        this.list = _list;
    }

    public runSort(): void {
        this.strategy.sort(this.list);
    }
}