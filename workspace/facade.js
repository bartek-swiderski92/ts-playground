class BluerayPlayer {
    on() {
        console.log('Blueray turning on...');
    }
    off() {
        console.log('Blueray turning off...');
    }
    play() {
        console.log('Playing blueray disc...');
    }
}
class Amplifier {
    on() {
        console.log('Amp turning on...');
    }
    off() {
        console.log('Amp turning off...');
    }
    setSource(source) {
        console.log('Setting source to ' + source);
    }
    setVolume(volumeLevel) {
        console.log('Setting volume to ' + volumeLevel);
    }
}
class Lights {
    dim() {
        console.log('Lights are dimming');
    }
}
class TV {
    turnOn() {
        console.log('TV turning on...');
    }
    turnOff() {
        console.log('TV turning on...');
    }
}
class PopcornMaker {
    turnOn() {
        console.log('Popcorn maker turning on...');
    }
    turnOff() {
        console.log('Popcorn maker turning off...');
    }
    pop() {
        console.log('Popping corn!');
    }
}
class HomeTheaterFacade {
    blueray;
    amp;
    lights;
    tv;
    popcornMaker;
    constructor(blueray, amp, lights, tv, popcornMaker) {
        this.blueray = blueray;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }
    watchMovie() {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource('blueray');
        this.amp.setVolume(11);
        this.blueray.on();
        this.blueray.play();
    }
    endMovie() {
        this.popcornMaker.turnOff();
        this.amp.off();
        this.tv.turnOff();
        this.blueray.off();
    }
}
let blueray = new BluerayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();
let homeTheater = new HomeTheaterFacade(blueray, amp, lights, tv, popcornMaker);
