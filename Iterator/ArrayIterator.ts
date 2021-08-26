import {WeatherData} from "./WeatherData";
import {Iterator} from "./Iterator";
import {Collection} from "./Collection";


export class ArrayIterator<T> implements Iterator<T> {
    private array: T[];

    private position: number = -1;


    constructor(collection: T[]) {
        this.array = collection;
    }


    public current(): T {
        return this.array[this.position];
    }


    public advance() :void{
       this.position++;
    }

    public hasNext(): boolean {
        return this.array[this.position+1]!==undefined;
    }

}