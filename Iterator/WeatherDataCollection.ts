import {WeatherDataIterator} from "./WeatherDataIterator";
import {Collection} from "./Collection";
import {WeatherData} from "./WeatherData";


export class WeatherDataCollection implements Collection {
    private items: WeatherData[] = [];

    public getItems(): WeatherData[] {
        return this.items;
    }


    public addItem(item: WeatherData): void {
        this.items.push(item);
    }

    public getIterator(): WeatherDataIterator {
       return new WeatherDataIterator(this.items);
    }


}
