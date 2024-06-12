console.log("Welcome to Bracket Problem");


const myFun = () => {
  console.log("Inside the myFun");
  let inputElem = document.getElementById("number").value;
  if (inputElem == "") {
    alert("Please Enter Valid input");
    return;
  }
  let elements = inputElem.split(",");
  console.log("Output", elements);


  // let result = "";
  // const stack = [];

  // elements.forEach(element => {
  //   const levels = element.split('.').length - 1;

  //   while (stack.length > levels) {
  //     result += "]";
  //     stack.pop();
  //   }

  //   // Open brackets for new level
  //   if (stack.length < levels) {
  //     result += "[";
  //     stack.push("[");
  //   }

  //   // Add an empty bracket at the current level
  //   result += "[]";
  // });

  // // Close all remaining open brackets
  // while (stack.length) {
  //   result += "]";
  //   stack.pop();
  // }

  let result = '';
  let currentDepth = 0;

  elements.forEach(element => {
      const parts = element.split('.');
      const depth = parts.length - 1;

      // Close brackets if the current depth is higher than the new depth
      while (currentDepth > depth) {
          result += ']';
          currentDepth -= 1;
      }

      // Open new brackets if the new depth is higher
      while (currentDepth < depth) {
          result += '[';
          currentDepth += 1;
      }

      // Add an empty bracket for the current element
      result += '[]';
  });

  // Close any remaining open brackets
  while (currentDepth > 0) {
      result += ']';
      currentDepth -= 1;
  }

  // return result;
document.getElementById("output").innerHTML=result
}



  // return result;


// const inputString = "1,1.1,1.1.1,1.1.2,1.1.3,2.1,2.1.1,2.1.2";
// const output = createBrackets(inputString);
// console.log(output);


// };
