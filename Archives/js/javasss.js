
// const a = 3;
// var b = 4; // older version !!!no security checks 
// let g = 3;

// console.log(a); // print smth in the console

// if(a === g) { //
//  //do smth
// } else {}

// while(g !== 4) {
    
// }

// for(let i = 0; i < 10; i++){

// }


function toggleClassList(event) {
    event.target.classList.toggle("selected");
}


// js for html pages

const myPar = document.getElementById("my_par"); // <p> .... </p>
myPar.innerText = "asdfghjkl";
myPar.className = "italic_par";


myPar.addEventListener("click", (event) => {
    event.target.css("background-color: red;") // myPar which is clicked 
});




const welcome_message = document.getElementById("welcome_msg");
welcome_message.className = "welcome_msg_new";

welcome_message.addEventListener("click", (event) => {
    event.target.css()
});