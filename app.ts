import loadJSON from "./loadJson";
import {Iterable, WeatherData} from "./Iterator/WeatherData";
import {WeatherDataCollection} from "./Iterator/WeatherDataCollection";
import {Iterator} from "./Iterator/Iterator";
import {Collection} from "./Iterator/Collection";


const weatherDataCollection:Collection<Iterable> = new WeatherDataCollection();

addCity("Dhaka");
addCity("Chittagong");
addCity("Rajshahi");
addCity("Khulna");
addCity("Barishal");
addCity("Sylhet");
addCity("Mymensingh");
addCity("Faridpur");

function addCity(cityName:string){
    loadJSON(`https://api.openweathermap.org/data/2.5/weather?q=`+cityName+`&appid=9dd687e56990c001e77aa23b2db5ab5c`).then(data=>{
        weatherDataCollection.addItem(new WeatherData(data.name,data.main.temp));
    })
}


const iterator = weatherDataCollection.getIterator();
setTimeout(()=>{
    while (iterator.hasNext()){
        iterator.advance();
        const data = iterator.current();
        console.log(data);

    }
},2000)