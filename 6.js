// 1. Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

const boom = (arr) => {
  let flag = 0;
  for (item of arr) {
    let num = item.toString().includes("7");
    if (num) {
      flag = 1;
      break;
    } else {
      flag = 0;
    }
  }
  if (flag) {
    console.log("Boom!");
  } else {
    console.log("None of the items contain 7 within them.");
  }
};
const arr = [2, 55, 60, 97, 86];
boom(arr);




// 2.Create a function that takes two dates and returns the number of days between the first and second date.

const dates = () => {
  let date1 = new Date("01/16/2024");
  let date2 = new Date("03/01/2024");

  let utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  let utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  let timeDiff = Math.abs(utc2 - utc1);

  let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  console.log(`Total number of days between dates:
${date1.toDateString()} and ${date2.toDateString()} is: ${daysDiff} days`);
};
dates();



// 3) Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

function containsNumber(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            return true;
        }
    }
    return false;
}
function filterStringsWithNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (containsNumber(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterStringsWithNumbers((["1a", "a", "2b", "b"]))); 




// 4.	Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.
function totalPermutations(...groups) {
    console.log("Groups",groups);
    return groups.reduce((first, second) => first * second, 1);
}

console.log(totalPermutations(3, 4, 5));
console.log(totalPermutations(2, 2, 2)); 
console.log(totalPermutations(1, 2, 3, 4));
console.log(totalPermutations()); 





// 5. Given a string, reverse all the words which have odd length. The even length words are not changed.

const fifth = (str) =>{
 let len = str.length;
 if(len%2!=0){
    let strRev = str.split('').reverse().join('');
    console.log("Reversed String is:->",strRev);
 }
 else{
    console.log("String can'not be change,because string has even length",str);
 }
}
fifth("Hellojw")
