import {WeatherDataIterator} from "./WeatherDataIterator";

export interface Collection {
    // Retrieve an external iterator.
    getIterator(): WeatherDataIterator;
}