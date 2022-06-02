class iPhone7 {
    useLighting() {
        console.log('Using lighting port...');
    }
}
class GooglePixel {
    useMicroUSB() {
        console.log('Using micro USB...');
    }
}
class LightingToMicroUSBAdapter {
    iphoneDevice;
    constructor(iphone) {
        this.iphoneDevice = iphone;
    }
    useMicroUSB() {
        console.log('Want to use micro USB, converting to Lighting...');
        this.iphoneDevice.useLighting();
    }
}
let iphone = new iPhone7();
let changeAdapter = new LightingToMicroUSBAdapter(iphone);
;
changeAdapter.useMicroUSB();
