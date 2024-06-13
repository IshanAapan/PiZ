console.log("Welcome to Bracket Problem");

document.getElementById("number").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("myBtn").click();
  }
});

const myFun = () => {
  console.log("Inside the myFun");
  let inputElem = document.getElementById("number").value.trim();
  if (inputElem === "") {
    alert("Please Enter Valid input");
    return;
  }
  let elements = inputElem.split(",");
  console.log("Output", elements);

  let result = "";
  let stack = [];

  for (let i = 0; i < elements.length; i++) {
    while (stack.length > 0 && !elements[i].startsWith(stack[stack.length - 1])) {
      stack.pop();
      result += "]";
    }

    stack.push(elements[i]);
    result += "[";
  }

  while (stack.length > 0) {
    stack.pop();
    result += "]";
  }

  console.log("Result", result)
  document.getElementById("output").innerHTML = result;
};
