// let playerName = "Mashrafi";
// console.log(playerName);

// playerName = 31;

// function multiply(a: number, b: number) {
//   return a * b;
// }

// console.log(multiply(13, 4));

// Array
// let fruits = ["apple", "banana", "orange"];
// fruits.push(12) //It's give an error in code editor!
// console.log(fruits);

// let num: number[] = [];
// num.push(12, 21, 34);
// console.log(num);

// let a: number;
/**
 * let a: number => it's called explicitly define the type. Here we can't use any string or other type of data it's only accept number type of data.
 *
 *  */
// let b: string;

// let c: string[] = [];
// // c.push(12) -> It's give an error because we are explicitly say this array take only string type of data but when we push the 12 it give error because 12 is a number type of data! If we are push '12' it will be accepted by c because '12' is a string type of data that's why.

// let d: (string | number)[] = [];
/**
 * Now here comes a problem which is if we want to put number type of data as well as string type of data then we should define union type of data types. 
 like: let d: (number | string)[] = []
 * in the parenthesis we are explicitly told in the d array it accept the number type of data and also string type of data.
 */

// d.push(12, "aasdf");
// console.log(d);

/**
 * and if we normally want to use number or string type of data in a normal variable we don't need to use union type of explicit data types. There we can normally define data types by pipe sign (|) 
 like => let e: number | string
 */

// let e: number | string;

// e = 12;
// console.log(e);
// e = "Rohim";
// console.log(e);

/**
 * when it's come into object data types
 * it will be define like: let f: object
 * we are directly use object because of object is a data types in javascript that's why we don't need to use any other word to define a object.
 *
 * if we are use an array it will accept because of array is a certain type of object!
 */
// let f: object;

/**
 * now if we are specifically define the structure of an object then we should define the object like this: 
 * let g = {
  name: string,
  age: number,
  adult: boolean
 }

 note: if you are define specific schema in object you should fill every single key and put value in every single key. and also here are not accept any kind array or object like anything example: null, array etc.
 */

// let g: {
//   name: string;
//   age: number;
//   adult: boolean;
// };

// g = {
//   name: "Rohim",
//   age: 32,
//   adult: true,
// };

// console.log(g);

// const myFunc = () => {
//   console.log("Hello");
// };

type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
