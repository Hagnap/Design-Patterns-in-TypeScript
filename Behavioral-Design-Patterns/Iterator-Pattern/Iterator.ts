export interface Iterator<T> {
    next(): T | undefined;
    currentItem(): T | undefined;
    hasNext(): boolean;
}