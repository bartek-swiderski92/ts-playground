import * as _ from 'lodash';

async function hello() {
    return 'world'
}

// Instances

const url = new URL('...')

// Variables

let lucky;

lucky = '23';
lucky = 23;


type Style = 'bold' | 'italic' | 23;
let font: Style;
font = 'bold'

// Objects

interface Person {
    first: string;
    last: string
    [key: string]: any
}

const person: Person = {
    first: 'Jeff',
    last: 'Delaney'
}

const person2: Person = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
}

// Functions

function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}

pow(23, 15)

function pow1(x: number, y: number): void {
    Math.pow(x, y).toString();
}

pow(23, 15)

//Arrays

const arr: number[] = []

arr.push(1);
// arr.push('23');
// arr.push(false)

const arr1: Person[] = []

arr1.push({
    first: 'Henry',
    last: "ford",
    hobby: "cars"
})

type MyList = [number?, string?, boolean?]

const arr2: MyList = []

arr2.push(1);
arr2.push('23');
arr2.push(false)

// Generics

class Observable<T> {
    constructor(public value: T) { }
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);