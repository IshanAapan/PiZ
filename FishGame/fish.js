console.log("Welcome to Fish Game!!");

function fun1() {
  let number = document.getElementById("inputBoxNumber").value;
  console.log("Number of Player:-", number);

  if (number == "" || number <= 1 || number > 10) {
    alert("Please Enter Valid Number!");
    return;
  }

  let hide = document.getElementById("border_id");
  console.log("Hide", hide);
  hide.style.display = "none";

  let show = document.getElementById("players_border");
  console.log("Show", show);
  show.style.display = "flex";

  //   let border = document.createElement("div");
  //   border.setAttribute("class", "border");

  let btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "playerNameBtn");
  btn.setAttribute("class", "btnId");
  btn.setAttribute("onclick", "fun2()");
  let txt = document.createTextNode("Next");
  btn.appendChild(txt);
  console.log("Button", btn);

  let players_border = document.getElementById("players_border");
  // console.log("Players_Border",players_border);

  for (let i = 0; i < number; i++) {
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "inputBox");

    let _label = document.createElement("LABEL");
    let _node = document.createTextNode(`Player${i + 1}`);
    _label.setAttribute("for", "name_of_player");
    _label.appendChild(_node);
    divElement.appendChild(_label);

    let elemCreate = document.createElement("input");
    elemCreate.setAttribute("type", "text");
    elemCreate.setAttribute("class", "nameInput");
    elemCreate.setAttribute("id", `inputElem_${i}`);
    divElement.appendChild(elemCreate);

    // border.appendChild(divElement);

    players_border.appendChild(divElement);
    players_border.appendChild(btn);

    // console.log("Players_Border",players_border);

    console.log("Element", divElement);
    // x
    // console.log("Value of i",i);
  }
}





let namesOFPlayers = [];

const fun2 = () => {
  console.log("Here, Function2 Started!!");

  let chapaak_border = document.getElementById("chapaak_border");
  console.log("Chhapaaaak", chapaak_border);

  let number = document.getElementById("inputBoxNumber").value;
  console.log("Fun2", number);

  // for (let i = 0; i < number; i++) {
  //   let checkNames = document.getElementById(`inputElem_${i}`).value;
  //   if (checkNames == "") {
  //     alert("Please Enter Valid Names");
  //     return;
  //   }
  // }

  let namesSet = new Set();
  namesOFPlayers = []; // Clear the array to avoid accumulation of previous entries
  for (let i = 0; i < number; i++) {
    let name = document.getElementById(`inputElem_${i}`).value.trim();
    if (name === "") {
      alert("Please Enter Valid Names");
      return;
    }
    if (namesSet.has(name)) {
      alert("Duplicate names are not allowed");
      return;
    }
    namesSet.add(name);
    namesOFPlayers.push(name);
  }

  let hide = document.getElementById("players_border");
  hide.style.display = "none";

  let show = document.getElementById("chapaak_border");
  show.style.display = "flex";

  for (let i = 0; i < number; i++) {
    let name = document.getElementById(`inputElem_${i}`).value;
    console.log("Check it", name);
    namesOFPlayers.push(name);
    console.log("Array of namesOFPlayers are", namesOFPlayers);
  }

  let len_namesOFPlayers = namesOFPlayers.length;

  // for()

  let nameHeading = document.createElement("h2");
  nameHeading.setAttribute("id", "naam");
  //   let txt = document.createTextNode(`${namesOFPlayers[0]}`);
  //   nameHeading.appendChild(txt);

  let machhali = document.createElement("h1");
  machhali.setAttribute("id", "mpmgtxt");
  machhali.setAttribute("class", "word");
  //   let machhaliTxt = document.createTextNode("Machhali");
  //   machhali.appendChild(machhaliTxt);

  let btn1 = document.createElement("button");
  btn1.setAttribute("type", "button");
  btn1.setAttribute("class", "nxtBtn");
  btn1.setAttribute("onclick", "nextTurn()");
  // btn1.style.backgroundColor = "green"
  let txt1 = document.createTextNode("Next");
  btn1.appendChild(txt1);
  console.log("Button", btn1);

  let btn2 = document.createElement("button");
  btn2.setAttribute("type", "button");
  btn2.setAttribute("class", "nxtBtn");
  btn2.setAttribute("onclick", "out()");
  // btn2.style.backgroundColor = "red"
  let txt2 = document.createTextNode("Out");
  btn2.appendChild(txt2);
  console.log("Button", btn2);

  let btn3 = document.createElement("button");
  btn3.setAttribute("type", "button");
  btn3.setAttribute("class", "nxtBtn");
  btn3.setAttribute("onclick", "quit()");
  // btn3.style.backgroundColor = "yellow"
  let txt3 = document.createTextNode("Quit Game");
  btn3.appendChild(txt3);
  console.log("Button", btn3);

  chapaak_border.appendChild(nameHeading);
  chapaak_border.appendChild(machhali);
  chapaak_border.appendChild(btn1);
  chapaak_border.appendChild(btn2);
  chapaak_border.appendChild(btn3);
};




let playerNameIndex = 0;
let currentRound = 1;
let wordIndex = 0;
let repeatCount = 1;
let repeatIndex = 0;
let words = ["Machhali", "Paani M Gayi", "Chappak"];

function nextTurn() {
  // console.log("Welcome to nextTurn function!!");
  // console.log("Current Round:", currentRound);
  // console.log("Word Index:", wordIndex);
  // console.log("Repeat Count:", repeatCount);
  // console.log("Repeat Index:", repeatIndex);

  let currentName = namesOFPlayers[playerNameIndex];
  document.getElementById("naam").innerHTML = currentName;
  // console.log("Changing name of player", currentName);

  let currentWord = words[wordIndex];

  if (currentWord === "Machhali") {
    document.getElementById(
      "mpmgtxt"
    ).innerHTML = `${currentRound} ${currentWord}`;
  } else {
    document.getElementById("mpmgtxt").innerHTML = currentWord;
  }

  // console.log("Displaying:", currentWord);

  repeatIndex++;

  if (repeatIndex >= repeatCount) {
    wordIndex++;
    repeatIndex = 0;
  }

  if (wordIndex >= words.length) {
    wordIndex = 0;
    repeatCount++;
    currentRound++;
  }

  playerNameIndex++;
  if (playerNameIndex >= namesOFPlayers.length) {
    playerNameIndex = 0;
  }

  console.log("After Arrrray...", namesOFPlayers);
}

function out() {
  if (namesOFPlayers.length === 0) {
    console.log("No players left in the game.");
    return;
  }
  console.log("PlayerIndex", playerNameIndex);
  let currentName = namesOFPlayers[playerNameIndex - 1];
  console.log("Quitting player:", currentName);

  if(namesOFPlayers.length>1){
  namesOFPlayers.splice(playerNameIndex - 1, 1);
  console.log("Hereee", namesOFPlayers[0]);
  // document.getElementById("mpmgtxt").innerText = namesOFPlayers[0];
  currentName=namesOFPlayers[0];
  currentWord=words[0];

  console.log("CURRENT",currentWord);
  playerNameIndex=0;
  wordIndex=0;
  currentRound=1;
  repeatCount=1;
  
  // namesOFPlayers[];

  }

  if (playerNameIndex >= namesOFPlayers.length) {
    playerNameIndex = 0;
  }
  if (namesOFPlayers.length === 1) {
    console.log("Winner is:", namesOFPlayers[0]);
    document.getElementById(
      "naam"
    ).innerHTML = `Winner is: ${namesOFPlayers[0]}`;
    document.getElementById("mpmgtxt").innerHTML = "";
  } else if (namesOFPlayers.length === 0) {
    console.log("No players left in the game.");
    document.getElementById("naam").innerHTML = "No players left in the game.";
    document.getElementById("mpmgtxt").innerHTML = "";
  } else {
    nextTurn();
  }
}

function quit() {
  let hide = document.getElementById("chapaak_border");
  hide.style.display = "none";

  console.log("In the quit function");

  let show = document.getElementById("border_id");
  console.log("Hide", hide);
  show.style.display = "flex";

  let number = (document.getElementById("inputBoxNumber").value = "");
  console.log("Number of Player:-", number);

  location.reload();
}
