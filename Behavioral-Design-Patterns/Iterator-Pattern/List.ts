import { Iterator } from "./Iterator"

export interface List<T> {
    iterator(): Iterator<T>;
}