export interface Iterator<T> {
    next(): T;
    currentItem(): T;
    hasNext(): boolean;
}