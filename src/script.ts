// const country = "Bangladesh";
// console.log(country);

// let playerName = "Mashrafi";
// console.log(playerName);

// const multiply = (a: number, b: number) => {
//   return a * b;
// };

// console.log(multiply(4, 5));

// Array
// const fruits = ["Apple", "Banana", "Orange"];
// fruits.push("Pineapple");

// console.log(fruits);

// Object
// let person = {
//   name: "Mashrafi",
//   age: 43,
//   isCaptain: true,
// };

// person.name = "Rokib";

// ------------------------------------------------------
// ############### Explicit & Union Types ###############

// let a: string;
// let b: number;

// a = "Sumit";
// b = 45;

// console.log(a, b);

// let c: string[];
// c = ["Learn With Sumit"];
// console.log(c);

// let d: (string | number)[];
// d = ["Mixed", 45];
// console.log(d);
// d.push(44);
// console.log(d);

// Object

// let e: {
//   name: string;
//   age: number;
//   adult: boolean;
// };

// e = {
//   name: "sumit",
//   age: 35,
//   adult: true,
// };

// console.log(e);

// ########### How to use Functions ###########

// const myFunc = (a: string, b: string, c: string = "St") => {
//   console.log(c);
//   console.log(`Hello ${a} ${b}`);
// };

// myFunc("Robi", "Kobi");

// ########### Type aliases ###########

// type stringOrNumber = string | number;
// type userType = { name: string; age: number };

// const userDetails = (id: stringOrNumber, user: userType) => {
//   console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// };

// const sayHello = (user: userType) => {
//   console.log(`Hello ${user.age} ${user.name} `);
// };

// ########### Function Signature ###########
// let add: (x: number, y: number) => number;

// add = (a: number, b: number) => {
//   return a + b;
// };

// console.log(add(12, 45));

// ########### Classes ###########
class Player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 48, "Bangladesh");

const players: Player[] = [];

players.push(sakib);
