import {ArrayIterator} from "./ArrayIterator";
import {Collection} from "./Collection";
import {Iterable, WeatherData} from "./WeatherData";
import {Iterator} from "./Iterator";


export class WeatherDataCollection implements Collection<Iterable> {
    private items: Iterable[] = [];

    public getItems(): Iterable[] {
        return this.items;
    }


    public addItem(item: Iterable): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<Iterable> {
       return new ArrayIterator<Iterable>(this.items);
    }


}
