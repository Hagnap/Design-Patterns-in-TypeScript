import { Iterator } from "./Iterator"

export interface Collection<T> {
    iterator(): Iterator<T> | undefined;
}