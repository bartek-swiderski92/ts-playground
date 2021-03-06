interface IPhone {
    useLighting();
}

interface Android {
    useMicroUSB();
}

class iPhone7 implements IPhone {
    useLighting() {
        console.log('Using lighting port...');
    }
}

class GooglePixel implements Android {
    useMicroUSB() {
        console.log('Using micro USB...');
    }
}

class LightingToMicroUSBAdapter implements Android {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone
    }

    useMicroUSB() {
        console.log('Want to use micro USB, converting to Lighting...');
        this.iphoneDevice.useLighting();
    }
}

let iphone = new iPhone7();
let changeAdapter = new LightingToMicroUSBAdapter(iphone);;

changeAdapter.useMicroUSB();