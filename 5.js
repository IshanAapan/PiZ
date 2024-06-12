// 81) Generate Random Item from an array

const randomNo = ()=>{
    const arr = [2, 54, 46, 32, 5];
    console.log("Generate Random Item from an array",(arr[(Math.floor(Math.random() * arr.length))]));
}
randomNo()

// 82) Intersection between two Arrays

const intersectTwoArrays = () => {
  const arr1 = [2, 54, 46, 32, 5];
  const arr2 = [23, 54, 86, 32, 6];
  const intersection = arr1.filter((item) => arr2.indexOf(item) !== -1);
  return intersection;
};
console.log("Intersection between two Arrays are:->", intersectTwoArrays());

// 83) Split Array into smaller chunks

const splitSmallerChunks = () => {
  let text = "How are you doing today?";
  const arr = text.split(" ");
  console.log(arr);
};
splitSmallerChunks();


// 85) get file Extension
const getFileExtension = (filename)=>{
    const extension = filename.split(".").pop();
    console.log("Extension of a file is",extension);
}
getFileExtension("javaScript.txt")



// 86) Check if a variable is null or undefined

const nullOrUndefined = () => {
  let a;
  let b = null;
  console.log(a);
  console.log(b);
  if (a == undefined) {
    console.log("Value of a is", a);
  }
  if (b == null) {
    console.log("Value of b is", b);
  }
};
nullOrUndefined();

// 87) set Default value for a parameter

const defaultParameter = (x = 4, y = 10) => {
  let sum = x + y;
  console.log("Default Parameter is:-", sum);
};
defaultParameter();

// 89) Generate Random number between two numbers

const randomTwoNo = (num) => {
  console.log(
    "Generate Random numbers between",
    num,
    "and",
    num + 10,
    ":->",
    Math.floor(Math.random() * 10) + num
  );
};
randomTwoNo(5);



// 90) Javascript program to get the current url
console.log(window.location.href);

// 92) if a variable is a function type in js
const funType = (val) => {
  if (typeof val === "function") {
    console.log("Variable is a function type");
  } else {
    console.log("Variable is not a function type");
  }
};
funType("hello");

//93) Work with constants

const constantNumber = () => {
  const a = 10;
  // a=15;
  console.log("Value of a never change, after reassign the value", a);

  const arr = [1, 2, 7, 4, 5];
  arr[2] = 3;
  console.log("array is", arr);

  const obj = {
    name: "Nitish",
    age: 22,
  };
  obj.name = "Sunny";
  console.log(obj);

  const fun = function () {
    console.log("This is an Anonymous Function");
  };
  fun();
};
constantNumber();

// 94) Pass parameter to setTimeOut function

const param = () => {
  let timeout = setTimeout(() => {
    console.log("Hello World!!");
  }, 5000);
};
param();

// 96) Perform function Overloading

// function funOverloading(){
//     console.log("First function, without parameter");
// }
// function funOverloading(a){
//     console.log("Second function, Only one parameter",a);
// }
// function funOverloading(a,b){
//     console.log("Third function, Two parameters",a,"and",b);
// }
// function funOverloading(a,b,c){
//     console.log("Fourth function, three parameters",a,b,"and",c);
// }

// funOverloading();
// funOverloading(23);
// funOverloading(84,"Hello");
// funOverloading(23,"Great","buzz");

// 96) Generate of Numbers and Characters

const generateNumAndChar = () => {
  const startChar = "A";
  const endChar = "J";
  const result = [];

  for (
    let charCode = startChar.charCodeAt(0);
    charCode <= endChar.charCodeAt(0);
    charCode++
  ) {
    result.push(String.fromCharCode(charCode));
  }

  console.log("Generate Numbers and Characters",result);
};
generateNumAndChar();

// 97 Implement a Stack
// const stack = (n) => {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     let val = prompt("Enter the value");
//     arr.push(val);
//   }
//   arr.pop();
//   console.log("Stack", arr);
// };
// stack(5);

// 98) Implement a Queue
// const queue = (n) => {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     let val = prompt("Enter the value");
//     arr.push(val);
//   }
//   arr.shift();
//   console.log("Queue", arr);
// };
// queue(5);

// 99 Number is Integer or Float
const numIntegerOrFloat = (num) => {
  if (num % 1 === 0) {
    console.log(num, "is Integer");
  } else {
    console.log(num, "is float");
  }
};
numIntegerOrFloat(5.2);

// 100) Pass function as a parameter
const add = (a, b) => {
  let sum = a + b;
  console.log("Sum of two nos are:->", sum);
};
add(67, 23);

// 102 Remove all whitespaces from string
const removeWhitespaces = (str) => {
  // let txt = str.split().join();
  console.log(
    "Remove all the whitespaces from a string is",
    str.split(" ").join("")
  );
};
removeWhitespaces("Hello, Good Morning!!");

// 104) Convert Date to Number

let d = new Date();
console.log("Date", d);
let num = d.getTime();
console.log("Convert Date to Number:->", num);
