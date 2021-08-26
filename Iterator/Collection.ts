import {ArrayIterator} from "./ArrayIterator";
import {Iterator} from "./Iterator";

export interface Collection <T> {
    // Retrieve an external iterator.
    getIterator(): Iterator<unknown>;
    addItem(data: T): void;
}