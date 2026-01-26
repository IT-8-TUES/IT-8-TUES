function buildTaskList(tasksArray) {
  const listContainer = document.getElementById("task_list");

  tasksArray.forEach((taskText) => {
    // Create the list item
    const li = document.createElement("li");
    li.innerText = taskText;

    // Add a click event to each item to "cross it off"
    li.addEventListener("click", (event) => {
      event.target.classList.toggle("completed");
      console.log("Task status changed!");
    });

    listContainer.appendChild(li);
  });
}

/* SAFE FORM HANDLER */
const contactForm = document.querySelector("#contact_form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page from refreshing!

  const userEmail = event.target.querySelector("input[type='email']").value;
  const userMessage = event.target.querySelector("textarea").value;

  if (userEmail !== "" && userMessage !== "") {
    alert("Message sent for: " + userEmail);
    event.target.reset(); // Clear the form
  } else {
    alert("Please fill in all fields.");
  }
});

/* AUTO UPDATING CLOCK */
function startClock() {
  const clockDisplay = document.getElementById("timer");

  setInterval(() => {
    const now = new Date();
    // Using Template Literals for clean string formatting
    clockDisplay.innerText = `Current Time: ${now.toLocaleTimeString()}`;
  }, 1000);
}

/* DYNAMIC CARD CREATOR */
const createCard = (title, content) => {
  const container = document.getElementById("gallery");

  const card = document.createElement("div");
  card.classList.add("card-style"); // Adding a CSS class

  card.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

  container.appendChild(card);
};
