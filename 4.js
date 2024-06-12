// 61. JavaScript Program to Display Date and Time
console.log("Display Date and Time:-",Date());


// 62. JavaScript Program to Check Leap Year
const leapYear = (year) =>{
    if(year%4==0){
        console.log(year,"is a leap year");
    }
    else if(year%400==0){
        console.log(year,"is a leap year");
    }
    else if(year%100==0){
        console.log(year,"is not a leap year");
    }
    else{
        console.log(year, "is not a leap year" );
    }
}
leapYear(2024)
// 63. JavaScript Program to Format the Date
const formatDate = () =>{
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    const formattedDate1 = month + '/' + day + '/' + year;
    console.log(formattedDate1);

    const formattedDate2 = month + '-' + day + '-' + year;
    console.log(formattedDate2);

    const formattedDate3 = day + '-' + month + '-' + year;
    console.log(formattedDate3);

    const formattedDate4 = day + '/' + month + '/' + year;
    console.log(formattedDate4);
}
formatDate()

// 64. Javascript Program to Display Current Date
const currentDate = ()=>{
    const d= new Date();
    console.log("Current Date is:->",d.getDate());
}
currentDate()
// 65. JavaScript Program to Compare The Value of Two Dates
const compDate = () =>{
    const d1 = new Date();
    const d2 = new Date();

    // console.log("d1",d1);
    // console.log("d2",d2);
    
    const compare1 = d1>d2
    console.log("Compare1",compare1);

    const compare2 = d1<d2
    console.log("Compare2",compare2);

    const compare3 = d1<=d2
    console.log("Compare3",compare3);

    const compare4 = d1>=d2
    console.log("Compare4",compare4);

    const compare5 = d1.getTime()===d2.getTime();
    console.log("Compare5",compare5);
}
compDate()

// 66. JavaScript Program to Create Countdown Timer
const countDownTimer = (n) => {
    for (let i = n; i >= 0; i--) {
        setTimeout(() => {
            const timerElement = document.getElementById('timer');
            if (timerElement) {
                timerElement.innerHTML = i;
            } else {
                console.error("Element with id 'timer' not found");
            }
        }, (n - i) * 1000);
    }
}

countDownTimer(10);


// 67. JavaScript Program to Remove Specific Item From an Array
const fun = (idx)=>{
    const arr = [25,6,'Jack',true];
    console.log("Original Array",arr);
    delete arr[idx];
    console.log("After Deleting a specific index",arr);
}
fun(2)


// 68. JavaScript Program to Check if An Array Contains a Specified Value
const specifiedValue = (item) =>{
   const arr = [25,6,"Jack",true];
   let pos = arr.indexOf(item)
   if(pos!=-1){
    console.log(arr[pos],"found at index",pos);
   }
   else{
    console.log(item,"not found in an array");
   }
}
specifiedValue(5);


// 69. JavaScript Programto Insert Item in an Array
const insertElementEnd = () =>{
    const arr = ["Good","Great",569,23,false]
    arr.push("push");
    arr.push("again");
    console.log("Add Element at the end of an array:->",arr);
}
insertElementEnd();


// 70. JavaScript Program to Append an Object to An Array

function insertObject(arr, obj) {

    arr.push(obj);
    
    console.log("Append an object to an Array",arr);
}

let ar = [1, 2, 3];
let object = {x: 12, y: 8};
insertObject(ar, object);



// 71. JavaScript Program to Check if An Object is An Array
// const car = {
//     name:"BMW",
//     Model: 2016,
//     Auto :true
// }
const car = ["BMW",2016,true]
console.log(Array.isArray(car));



// 72. JavaScript Program to Empty an Array
const emptyArr = ()=>{
    const arr=[12,54,'Henry',true];
    console.log("72)Original Array:->",arr);
    while(arr.length!=0){
        arr.pop();
    }
    console.log("After pop Empty Array:->",arr);
}
emptyArr()



// 73. JavaScript Program to Add Element to Start of an Array
const startArrIn = ()=>{
    const arr = [59,77,'John',false];
    arr.unshift("Next");
    arr.unshift(true);
    console.log("Add Element to Start of an Array",arr);

}
startArrIn()


// 74. JavaScript Program to Remove Duplicates From Array
    const removeDuplicate = (arr)=>{
        const uniqueArr = [];
        for(item of arr){
            if(uniqueArr.indexOf(item)===-1){
                uniqueArr.push(item);
            }
        }
        console.log("After Remove Duplicate elements from an Array:-",uniqueArr);
    }
    const arr = [32,67,5,32,56,32,5,32]
    removeDuplicate(arr)


// 75. JavaScript Program to Merge Two Arrays and Remove Duplicate Items
const mergeDuplicateArr = ()=>{
    const arr1= [32,56,87,32,58];
    const arr2 = [5,45,32,56];
    const arr3 = [...arr1, ...arr2];

    const uniqueArr = [];
        for(item of arr3){
            if(uniqueArr.indexOf(item)===-1){
                uniqueArr.push(item);
            }
        }
        console.log(uniqueArr);

    // console.log(arr3);
}
mergeDuplicateArr()


// 76. JavaScript Program to Sort Array of Objects by Property Values

function compareName(a, b) {

    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];

console.log("Sort an Array of objects",students.sort(compareName));


// 77. JavaScript Program to Create Two Dimensional Array
const twoDimensional = () => {
    const arr = [[1, 2, 3], [4, 5, 6]];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
twoDimensional();


// 78. JavaScript Program to Extract Given Property Values from Objects as Array


function extractValue(arr, prop) {

    let extractedValue = [];

    for (let i=0; i < arr.length ; ++i) {
        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

const res = extractValue(objArray, 'a');
console.log(res);



// 79. JavaScript Program to Compare Elements of Two Arrays
const compareElements = ()=>{
    const arr1=[1,3,5,85];
    const arr2=[1,3,5,8];
    if(arr1.length!=arr2.length){
        return false;
    }
    else{
        let result= false;;
        for(let i=0;i<arr1.length;i++){
            if(arr1[i]==arr2[i]){
                result=true;
            }
            else{
                result= false;
                break;
            }
        }
        // return result;
if(result){
    console.log("Both Arrays are Same!!");
}
else{
    console.log("Both Arrays are Different!!");
}
    }
}
compareElements()



// 80. JavaScript Program to Get Random Item From an Array

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
const array = [1, 'hello', 5, 8];
const result = getRandomItem(array);
console.log(result);