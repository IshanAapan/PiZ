console.log("Welcome to the 3rd sheet!!");

// 41. JavaScript Program to Remove a Property from an Object

const student = {
  namess: "John",
  classes: 12,
  done: true,
  fun: () => {
    console.log(
      "Name of the student is",
      this.namess,
      "and class is",
      this.classes
    );
  },
};
console.log("Before deleting", student);
delete student.classes;
delete student.namess;
student.namess = "John";
console.log("After deleting", student);



// 42. JavaScript Program to Check Whether a String Starts and Ends With Certain Characters




// 43. JavaScript Program to Check if a Key Exists in an Object
console.log("namess" in student);




// 44. JavaScript Program to Clone a JS Object
const obj2 = { ...student };
console.log("Second object are:-", obj2);



// 45. JavaScript Program to Loop Through an Object
for (let key in student) {
  console.log(key, ":", student[key]);
}

 


// 46. JavaScript Program to Merge Property of Two Objects
const car = {
  naam: "BMW",
  model: 2022,
  airbag: true,
  arr: [22, true, "abc"],
};




const mergeObj = {
  ...student,
  ...car,
};
console.log("Merge the properties of two object", mergeObj);




// 47. JavaScript Program to Count the Number of Keys/Properties in an Object
let count1 = 0;
for (const key in student) {
  count1 += 1;
}
console.log("Number of properties of a student object", count1);

let count2 = 0;
for (const key in car) {
  count2 += 1;
}
console.log("Number of properties of a car object", count2);





// 48. JavaScript Program to Add Key/Value Pair to an Object
car.automaticGear = true;
car.tyres = 5;
console.log("After Adding some properties into the car object", car);





// 49. JavaScript Program to Replace All Occurrences of a String
const replaceAllOccurences = (str, ch1, ch2) => {
  let newString = str.replaceAll(ch1, ch2);
  console.log("Replace All Occurrences of a String are:-", newString);
};
replaceAllOccurences("AGGDGFGHIJGLG", "G", "X");





// 50. JavaScript Program to Create Multiline Strings
const str = `Lorem Ipsum is simply dummy text
 of the printing and typesetting industry.
  Lorem Ipsum 
  has been the industry's
   standard dummy text ever
    since 
    the 1500s,`;
    console.log(str);



// 51. JavaScript Program to Format Numbers as Currency Strings

const convertRsToDollar = (dollar)=>{
    let rupee = dollar*83;
    console.log("US Dollar was $",dollar,"and now convert to Rs.",rupee);
}
convertRsToDollar(10)



// 52. JavaScript Program to Generate Random String
console.log("Generate Random String",Math.random().toString(36).substring(2,7));

// 53. JavaScript Program to Check if a String Starts With Another String
const start = (str1,str2)=>{
    console.log(str2);
    let flag=0;
    let newStr1 = str1.split(' ')[0];
    // console.log(newStr1);
    for(let i=0;i<str2.length;i++){    
        if(newStr1[i]==str2[i]){
            flag=1;
        }
        else{
            flag=0;
            break;
        }
    }
    if(flag){
        return true;
    }
    else{
        return false;
    }

}
console.log(start("My name is John","my"));



//54. JavaScript Program to Trim a String
const trimString = (str)=>{
    let newString = str.trim();
    console.log("After trim the string",newString);
}
trimString("      Hello World        ");


// 55. JavaScript Program to Convert Objects to Strings
const ObjStr = ()=>{
    console.log("Convert object to stringify",JSON.stringify(car));
}
ObjStr();


// 56 JavaScript Program to Check Whether a String Contains a Substring
const subst = (str,n1,n2)=>{
let result = str.substr(n1,n2);
console.log("Substring is",result);
}
subst("Hello World",0,8)




//57. JavaScript Program to Compare Two Strings
const cmp = (str1,str2)=>{
    let len = str1.length;
    let flag=0;
    for(let i=0;i<len;i++){
        if(str1[i]==str2[i]){
            flag=1;
        }
        else{
            flag=0;
            break;
        }
    }
    if(flag){
        console.log(str1,"and",str2,"these are same");
    }
    else{
        console.log(str1,"and",str2,"these are different");
    }
}
cmp("Jack","JAck")

// 58. JavaScript Program to Encode a String to Base64

const encode = (str)=>{
    let newStr = btoa(str);
    console.log("Encode a string to Base64",newStr);
}
encode("Hello World")



// 59. JavaScript Program to Replace all Instances of a Character in a String
const replaceAllInstances = (str, ch1, ch2) => {
    let newString = str.replaceAll(ch1, ch2);
    console.log("Replace All Instances of a Character are:-", newString);
  };
  replaceAllInstances("AGGDGFGHIJGLG", "G", "Z");



// 60. JavaScript Program to Replace All Line Breaks with <br></br>
const br = ()=>{
    let str = "Lorem Ipsum is simply dummy text of the printing<br></br> and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard<br></br> "
    console.log(str);
}
br();
