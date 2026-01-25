const pi = 3.14;

//variables
var a = 7; //v1
let b = 6; //v2 - recommended
b = 5;

if (a == b) {} // check by address !=
if (a === b) {} // check by value !==


//loops
for (let index = 0; index < 10; index++) {
    //body of loop
}

while(a > 0){
    a--;
    b++;
}

do {
    b--;
}while(b> 0);


//functions

function abc(array, size) {
    for (let index = 0; index < array.length; index++) {
        size += array[index];
    }

    return "22";
}

//JS for HTML

// key word document

const smallTxt = document.getElementById("small_txt"); // <small ...>...</small>
const elements = document.getElementsByClassName("item"); //[<div>, <div> ... ]
const allH6 = document.getElementsByTagName("h6"); 

smallTxt.innerText = "asdfghjk";// <small ...>asdfghjk</small>
smallTxt.textContent = "asdfghjkqqqqqq";


//classList ["important_txt", "small_txt", "main_page", "selected"];
//className "important_txt small_txt main_page";

smallTxt.classList.toggle("selected");
smallTxt.className = "important_txt"; 

// function func(event) {...}

smallTxt.addEventListener("click", (event) => {
    event.target.classList.toggle("selected");
    event.target.css("font-weight: bolder");
});


submitBtn.addEventListener("click", addElement(event));

function addElement(event){
    const container = document.createElement("div"); //<div></div>
    const title = document.createElement("h6"); //<h6>Title</h6>
    const desc = document.createElement("p"); //<p>Hello</p>

    title.innerText = "Title";
    desc.textContent = "Hello"; 

    container.appendChild(title); //<div><h6>Title</h6></div>
    container.appendChild(desc); //<div> <h6>Title</h6> <p>Hello</p> </div>
    container.appendChild(desc); //<div> <h6>Title</h6> <p>Hello</p> <p>Hello</p> </div>

    container.removeChild(desc); //<div> <h6>Title</h6> <p>Hello</p> </div>

    document.appendChild(container);
}

//example for creating an event listener for a form
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
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

elements.forEach(element => {
    element.addEventListener("click", (event) =>{
            event.target.css("font-weight: bolder");
    });
});



