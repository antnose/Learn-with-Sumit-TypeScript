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
// ########### How to use Functions ###########3
const myFunc = (a, b, c = "St") => {
    console.log(c);
    console.log(`Hello ${a} ${b}`);
};
myFunc("Robi", "Kobi");
export {};
//# sourceMappingURL=script.js.map