// Number

let balance = 120;

//console.log(typeof balance);

//**let balance =120; */
let anotherBalance = new Number(120);

//**console.log(balance)
//console.log(anotherBalance.valueOf());**//
//console.log(typeof anotherBalance);


let isActive =false;
let isReallyActive = new Boolean(false) ;
//console.log(isReallyActive || isActive)

let firstname = null;
//console.log(firstname);

// String

let myString = "hello";
let myStringOne ="Hola";
let username = "hitesh";

let oldGreet = myString + " " + "hitesh";
//console.log(oldGreet)

// New Way This is also called String Interpolation.

let greetMessage =`Hello ${username} !`;
let demoOne = `value is ${2*2}`;
//console.log(demoOne);
//console.log(greetMessage);

let sm1 = Symbol("hitesh");
let sm2 = Symbol("hitesh");

console.log(sm1 == sm2); 