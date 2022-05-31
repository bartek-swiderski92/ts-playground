class WeatherStation {
    temperature;
    observers = [];
    setTemperature(temp) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    removeObserver(o) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
    notifyObservers() {
        for (let observers of this.observers) {
            observers.update(this.temperature);
        }
    }
}
class TemperatureDisplay {
    subject;
    constructor(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(temperature) {
        console.log('TemperatureDisplay: I need to update my display.');
    }
}
class Fan {
    subject;
    constructor(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(temperature) {
        if (temperature > 25) {
            console.log('Fan: its hot here, turning myself on...');
        }
        else {
            console.log('Fan: its nice and cool, turning myself off...');
        }
    }
}
let weatherStation = new WeatherStation();
let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
