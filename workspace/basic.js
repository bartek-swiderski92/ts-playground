async function hello() {
    return 'world';
}
// Instances
const url = new URL('...');
// Variables
let lucky;
lucky = '23';
lucky = 23;
let font;
font = 'bold';
const person = {
    first: 'Jeff',
    last: 'Delaney'
};
const person2 = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
};
// Functions
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(23, 15);
function pow1(x, y) {
    Math.pow(x, y).toString();
}
pow(23, 15);
//Arrays
const arr = [];
arr.push(1);
// arr.push('23');
// arr.push(false)
const arr1 = [];
arr1.push({
    first: 'Henry',
    last: "ford",
    hobby: "cars"
});
const arr2 = [];
arr2.push(1);
arr2.push('23');
arr2.push(false);
// Generics
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);
export {};
