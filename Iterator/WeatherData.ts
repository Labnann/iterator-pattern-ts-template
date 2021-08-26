export class WeatherData{
   private _name:string;
    private _temperature: number;

    get name(): string {
        return this._name;
    }

    get temperature(): number {
        return this._temperature;
    }

    constructor(name: string, temperature: number) {
        this._name = name;
        this._temperature = temperature;
    }

}