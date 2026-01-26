/* --- THE 27 NON-TRIVIAL CONCEPTS --- */

// console.log: Prints data to the debugger
console.log("Debug mode active");

// getElementById: Selects a unique element by its ID attribute
const myPar = document.getElementById("my_par");

// getElementsByClassName: Returns a collection of elements with a specific class
const items = document.getElementsByClassName("item");

// getElementsByTagName: Finds all elements of a specific tag type (e.g., h6)
const allH6 = document.getElementsByTagName("h6");

// querySelector: Finds the first element matching a CSS selector
const firstForm = document.querySelector("form");

// querySelectorAll: Returns a static NodeList of all matching elements
const allButtons = document.querySelectorAll(".btn");

// innerText: Sets or returns the visible text content of a node
myPar.innerText = "Updated Text";

// textContent: Sets or returns the raw text content
myPar.textContent = "Raw Content";

// className: Sets or returns the entire value of the class attribute
myPar.className = "new-style";

// classList.toggle: Adds a class if it exists, removes it if not
myPar.classList.toggle("selected");

// classList.add: Specifically adds a class to an element
myPar.classList.add("visible");

// createElement: Creates the HTML element specified by tagName
const newDiv = document.createElement("div");

// appendChild: Adds a node as the last child of a parent
document.body.appendChild(newDiv);

// removeChild: Removes a specified child node from the parent
document.body.removeChild(newDiv);

// addEventListener: Attaches an event handler to an element
myPar.addEventListener("click", (e) => {});

// event.target: Reference to the object that dispatched the event
// event.preventDefault: Cancels the event if it is cancelable (e.g., stop form refresh)

// Arrow Functions: A shorter syntax for writing function expressions
const greet = () => console.log("Hello");

// Template Literals: Strings allowing embedded expressions using ` ` and ${}
console.log(`The value is: ${pi}`);

// forEach: Calls a function for each element in an array
[1, 2].forEach((num) => console.log(num));

// value: Property used to get data from input/textarea fields
// submit event: Fired when a <form> is submitted

// alert: Displays an alert box with a message and an OK button
// window.location.reload: Reloads the current document

// form.reset: Restores a form element's default values

// Object definition: Storing data in Key-Value pairs
const user = { name: "Gemini", role: "AI" };

// setInterval: Repeatedly calls a function with a fixed time delay
setInterval(() => {
  console.log("Tick");
}, 1000);
