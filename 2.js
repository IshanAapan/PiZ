// 21. JavaScript Program to Find the Sum of Natural Numbers
function sumOfNaturalNumbers(n) {
    // let n = parseInt(prompt("How many natural numbers to find sum: "));
    console.log("Sum is: " + (n * (n + 1)) / 2);
  }
  sumOfNaturalNumbers(5)
   
  // 22. JavaScript Program to Check if the Numbers Have Same Last Digit
  function hasSameLastDigit(n1String,n2String) {
    // let n1String = prompt("Enter first number: ");
    // let n2String = prompt("Enter second number: ");
    i1 = n1String.length - 1;
    i2 = n2String.length - 1;
    if (n1String[i1] == n2String[i2]) {
      console.log("Last digit is same.");
    } else {
      console.log("Last digit is not same.");
    }
  }
  hasSameLastDigit(5000,500);
   
  // 23. JavaScript Program to Find HCF or GCD
  function findHcf(n1,n2) {
    // let n1 = parseInt(prompt("Enter first number: "));
    // let n2 = parseInt(prompt("Enter second number: "));
    let i;
    let hcf = 1;
    for (i = 2; i < n1; i++) {
      if (n1 % i == 0 && n2 % i == 0) {
        hcf = i;
        break;
      }
    }
    console.log("HCF is: " + hcf);
  }
  findHcf(12,17);

  // 24. JavaScript Program to Find LCM
  function findLcm(n1,n2) {
    // let n1 = parseInt(prompt("Enter first number: "));
    // let n2 = parseInt(prompt("Enter second number: "));
    let i;
    let hcf = 1;
    for (i = 2; i < n1; i++) {
      if (n1 % i == 0 && n2 % i == 0) {
        hcf = i;
        break;
      }
    }
    let lcm = (n1 * n2) / hcf;
    console.log("LCM is :" + lcm);
  }
  findLcm(18,20);
   
  // 25. JavaScript Program to Find the Factors of a Number
  function findFactors(num) {
    // let num = parseInt(prompt("Enter number: "));
    let i = 1;
    let factors = "";
    for (i; i <= num; i++) {
      if (num % i == 0) {
        factors += ", " + i;
      }
    }
    console.log("Factors are: " + factors);
  }
  findFactors(6);
   
  // 26. JavaScript Program to Find Sum of Natural Numbers Using Recursion
  function sumUsingRecursion(n) {
    // let n = parseInt(prompt("Enter number: "));
    function findSum(n) {
      if (n == 0) {
        return 0;
      } else {
        return n + findSum(n - 1);
      }
    }
    sum = findSum(n);
    console.log("Sum is: " + sum);
  }
  sumUsingRecursion(10);
   
  // 27. JavaScript Program to Guess a Random Number
  function GenerateRandomNumber() {
    console.log("Random number is: " + parseInt(Math.random() * 100));
  }
  GenerateRandomNumber();

  // 28. JavaScript Program to Shuffle Deck of Cards
  function shuffleCards() {
    let cardsType = ["Clubs", "Diamonds", "Hearts", "Spade"];
    let cardsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let cardsDeck = [];
   
    cardsType.forEach((type) => {
      cardsCount.forEach((value) => {
        cardsDeck.push("\n" + value + " of " + type);
      });
    });
   
    cardsDeck.sort(function () {
      return 0.5 - Math.random();
    });
    alert(cardsDeck);
    console.log(cardsDeck);
  }
  shuffleCards()
   
  // 29. JavaScript Program to Display Fibonacci Sequence Using Recursion
  function showFabonacciSeries() {
    let n = parseInt(prompt("Enter how length of series you want Fibonacci Series: "));
    series = [0, 1];
   
    function generateFabonacci(previous, current) {
      series.push(previous + current);
      if (series.length >= n) {
        return;
      }
      generateFabonacci(current, previous + current);
    }
    generateFabonacci(0, 1);
    alert("Fabonacci Series: " + series);
  }
  showFabonacciSeries();
   
  // 30. JavaScript Program to Find Factorial of Number Using Recursion
  function findFactorial() {
    let n = parseInt(prompt("Enter the number you want to find factorial: "));
    function fact(n) {
      if (n == 1) {
        return 1;
      } else {
        return n * fact(n - 1);
      }
    }
    alert("Factorial of " + n + " is: " + fact(n));
  }
  findFactorial();
   
  // 31. JavaScript Program to Convert Decimal to Binary
  function convertToBinary() {
    let n = parseInt(prompt("Enter the value for convert to Binary: "));
    alert(n + " in binary is: " + n.toString(2));
    let result = "";
    while (true) {
      let prev = n;
      n = Math.floor(prev / 2);
      result += prev % (n * 2);
      if (n == 0) {
        result += "0";
        break;
      } else if (n == 1) {
        result += "1";
        break;
      }
    }
    binaryNumber = "";
    for (i = result.length - 1; i >= 0; i--) {
      binaryNumber += result[i];
    }
    console.log(binaryNumber);
  }
  convertToBinary(5);
   
  // 32. JavaScript Program to Find ASCII Value of Character
  function findASCII(value) {
    // let value = prompt("Enter character here: ");
    console.log("ASCII value is :" + value.charCodeAt(0));
  }
  findASCII('A');
   
  // 33. JavaScript Program to Check Whether a String is Palindrome or Not
  function isPalindrome() {
    let numArray = parseInt(prompt("Enter value here: ")).toString().split("");
    let result = "Number is not a palindrome number.";
    let i = 0;
    let j = numArray.length - 1;
    while (true) {
      if (i == j) {
        result = "Number is Palindrome.";
        break;
      }
      if (numArray[i] == numArray[j]) {
        if (j - i == 1) {
          result = "Number is Palindrome.";
          break;
        }
        i += 1;
        j -= 1;
        continue;
      }
      break;
    }
    alert(result);
  }
  isPalindrome();
   
  // 34. JavaScript Program to Sort Words in Alphabetical Order
  function sortWords() {
    let wordsList = prompt("Enter all the words sort words in Alphabetical order: ").split(" ");
    let output = "";
    wordsList.sort().forEach((value) => {
      output += "\n" + value;
    });
    alert("Words in sorted way are: " + output);
  }
  sortWords()

  // 35. JavaScript Program to Replace Characters of a String
  function replaceCharacters() {
    let inputString = prompt("Enter the String for Replace Characters of a string: ");
    let replaceString = prompt(
      "Enter the character to replace with which word [this toThis] "
    );
    let arr = replaceString.split(" ");
    let outputString = inputString.replaceAll(arr[0], arr[1]);
    alert(outputString);
  }
  replaceCharacters();
   
  // 36. JavaScript Program to Reverse a String
  function reverseString() {
    let inputString = prompt("Enter the String for Reverse a String: ");
    let outputString = "";
    let i = 0;
    let lastIndex = inputString.length - 1;
    for (i; i <= lastIndex; i++) {
      outputString += inputString[lastIndex - i];
    }
    console.log(outputString);
  }
  reverseString(); 

  // 37. JavaScript Program to Create Objects in Different Ways
  function createObjects() {
    const object1 = { name: "BMW" };
    const object2 = new Object({ name: "BMW" });
    function createObject(value) {
      this.name = value;
    }
    const object3 = new createObject("BMW");
    const object4 = Object.create(object1);
   
    alert(
      "Using {} : " +
        object1.name +
        "\nUsing new Object(): " +
        object2.name +
        "\nUsing constructor: " +
        object3.name +
        "\nUsing Object.create(): " +
        object4.name
    );
  }
  createObjects();
   
  // 38. JavaScript Program to Check the Number of Occurrences of a Character in the String
  function findOccurances() {
    let inputString = prompt("Enter the string for Number of Occurrences of a Character in the String: ");
    let occuringCharacter = prompt("Enter the character: ");
    let occurrencesCount = 0;
    for (const x of inputString) {
      if (x == occuringCharacter) {
        occurrencesCount += 1;
      }
    }
    alert(
      "Number of occurances of " + occuringCharacter + " is: " + occurrencesCount
    );
  }
  findOccurances();
   
  // 39. JavaScript Program to Convert the First Letter of a String into UpperCase
  function captilizeString() {
    let inputString = prompt("Enter the string for First Letter of a String into UpperCase: ");
    let outputString = "";
    for (let i = 0; i < inputString.length; i++) {
      if (i == 0) {
        outputString = inputString[i].toUpperCase();
      } else {
        outputString += inputString[i];
      }
    }
    alert(outputString);
  }
  captilizeString();
   
  // 40. JavaScript Program to Count the Number of Vowels in a String
  function countVowels() {
    let inputString = prompt("Enter the string for check vowels: ").match(/[aeiouAEIOU]/g);
    let result = inputString;
    alert("Number of vowels in string is: " + result.length);
  }
  countVowels()
   
//   has context menu