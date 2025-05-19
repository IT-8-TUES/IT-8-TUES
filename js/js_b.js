const pi = 3.14;

//variables
var a = 5; // v1 
let b = 6; // v2

//if-else
if (a == b) {} // address of a and b !=
if (a === b) {} // value of a and b !==

// loops 
for (let index = 0; index < 10; index++) {
    console.log(index);  
}
while(a > 5){
    a--;
}

do {
    b--;
} while (b > 3);

function avg(arr, avg_var){ // arr [1,2,3,4,5] arr "asdfghjk"
    for (let index = 0; index < arr.length; index++) {
        avg_var += arr[index]; 
    }
    return avg_var/arr.length;
}

// JS with HTML

// key word document 

const uText = document.getElementById("underlined-text"); // uText = <u> Lorem, ipsum dolor sit </u>
uText.innerText = "Hello world!"; // uText = <u> Hello World! </u>
uText.textContent = "..."

uText.classList.add("italic_txt"); //<u id = "underlined-text" class = "main_txt important_txt italic_txt">
uText.classList.toggle("italic_txt"); //<u id = "underlined-text" class = "main_txt important_txt italic_txt">
uText.className = "bold_txt"; //<u id = "underlined-text" class = "bold_txt">

const h1Main = document.getElementsByTagName("h1"); // all h1s in the file
const h2Main = document.querySelector("h2"); // first occurence h2;

let uTextVar = document.getElementById("underlined-text"); // uTextVar = <u> Lorem, ipsum dolor sit </u>
uTextVar = document.getElementById("p-main"); // uTextVar = <p> .... </p>

const submitBtn = document.getElementById("submitBtn");

// h1Main.array.forEach(element => {
//     element.addEventListener
// });

submitBtn.addEventListener("click", (event) => {
    event.target.css("color: red;");
    event.target.classList.add("marked_element");
});

submitBtn.addEventListener("hover-enter", (event) => {
    event.target.classList.add("marked_element");
});

submitBtn.addEventListener("hover-exit", (event) => {
    event.target.classList.remove("marked_element");
});

submitBtn.addEventListener("hover-exit", exit_hover_fun(event));


function createACard(){
    const card = document.createElement("div"); // <div></div>
    const title = document.createElement("h1"); // <h1></h1>
    const desc = document.createElement("p"); // <p></p>

    // desc.appendChild(title); // <p> <h1> </h1> </p>

    card.appendChild(title); // <div><h1></h1></div>
    card.appendChild(desc); // <div> <h1>...</h1> <p>...</p> </div>

    card.appendChild(desc); // <div> <h1>...</h1> <p>...</p> </div>

    card.className = "card_obj";

    card.removeChild(desc);

    document.appendChild(card);
}

//example for creating an event listener for a form
document.querySelector("form").addEventListener("submit", (event) => {
  //prevents refresh of the screen
  event.preventDefault();
  const form = event.target;
  const title = form.querySelector("input").value;
  const description = form.querySelector("textarea").value;

  /* modification of the data */
  alert(title);

  //reset the form and trigger manual refresh
  form.reset();
  window.location.reload();

});


