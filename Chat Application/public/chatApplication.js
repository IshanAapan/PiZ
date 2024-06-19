console.log("Welcome to Chat Application!!");

let arr = JSON.parse(localStorage.getItem(' ')) || [];

let name = prompt("Enter your Name");
console.log("name", name);

arr.push(name);

// Save the updated array back to localStorage
localStorage.setItem('userNames', JSON.stringify(arr));

console.log("Array of names", arr);

document.getElementById("userName").innerHTML = name;
// document.getElementById("userName").innerHTML = arr[arr.length - 1];

// let roomid;

function send (){
    let val = document.getElementById("inputTxt").value;
    console.log("Value",val);

    if(val==""){
        alert("Please Enter Some Message!!")
        return;
    }

    let mainSec = document.getElementById("mainSection");
    console.log("Main Secc",mainSec);

    let msgContainer = document.createElement("div");
    msgContainer.setAttribute("class","message-container")
    console.log("msgContainer",msgContainer);

    let msgSender = document.createElement("div");
    msgSender.setAttribute("class","message-sender");
    // console.log("msgSnd",msgS);
    console.log("msgSender",msgSender);

    mainSec.appendChild(msgContainer);
    msgContainer.appendChild(msgSender);

    let msg = document.createElement("div");
    msg.setAttribute("class","message");
    msg.innerHTML=val
    console.log("msg",msg);
    msgSender.appendChild(msg);

    document.getElementById("inputTxt").value=""
}





// console.log("Welcome to Chat Application!!");

// let username = prompt("Enter your Name");
// console.log("name", username);

// document.getElementById("userName").innerHTML = username;

// function send() {
//     let val = document.getElementById("inputTxt").value;
//     console.log("Value", val);

//     if (val === "") {
//         alert("Please Enter Some Message!!");
//         return;
//     }

//     fetch('/send-message', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `username=${encodeURIComponent(username)}&message=${encodeURIComponent(val)}`
//     })
//         .then(response => {
//             if (response.ok) {
//                 console.log("Message sent successfully");
//                 fetchMessages();
//             } else {
//                 console.error("Failed to send message");
//             }
//         })
//         .catch(error => {
//             console.error("Error sending message:", error);
//         });

//     document.getElementById("inputTxt").value = "";
// }

// function fetchMessages() {
//     fetch('/fetch-messages')
//         .then(response => response.json())
//         .then(messages => {
//             let mainSec = document.getElementById("mainSection");
//             mainSec.innerHTML = ""; // Clear existing messages

//             messages.forEach(msg => {
//                 let msgContainer = document.createElement("div");
//                 msgContainer.setAttribute("class", "message-container");

//                 let msgSender = document.createElement("div");
//                 msgSender.setAttribute("class", "message-sender");

//                 let msgElement = document.createElement("div");
//                 msgElement.setAttribute("class", "message");
//                 msgElement.textContent = `${msg.username}: ${msg.message}`;

//                 msgContainer.appendChild(msgSender);
//                 msgSender.appendChild(msgElement);
//                 mainSec.appendChild(msgContainer);
//             });
//         })
//         .catch(error => {
//             console.error("Error fetching messages:", error);
//         });
// }

// // Fetch messages every 2 seconds
// setInterval(fetchMessages, 2000);

// // Initial fetch of messages
// fetchMessages();

