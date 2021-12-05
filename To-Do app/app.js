// Defining DOM elements

const tasks = document.getElementById("tasks");
const button = document.getElementById("button");
const textField = document.getElementById("text-field");
const formField = document.getElementById("form-field");

let count = 0;

// Start app empty
tasks.innerText = "";

// Creates new div element and displays in current page

button.addEventListener("click", addElement);

function addElement() {
  if (textField.value !== "") {
    // if entered text field is empty

    // checkbox created
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + count;
    checkbox.className = "checkbox";
    checkbox.name = "checkbox" + count;

    //div container created for the task information
    const newDiv = document.createElement("div");
    newDiv.id = "task-line" + count;
    newDiv.className += "general-task-line";

    // body text for the task
    const newLabel = document.createElement("label");
    newLabel.textContent = textField.value;
    newLabel.className = "task-text";
    newLabel.htmlFor = "checkbox" + count;

    //delete button created
    const delButton = document.createElement("button");
    delButton.innerText = "X";
    delButton.className = "delete-button";
    delButton.id = newDiv.id;

    //newly created html elements addedinto the newly created div
    newDiv.appendChild(checkbox);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(delButton);

    console.log(newLabel);
    textField.value = ""; // resets text field value to empty
    //tasks.insertBefore(newDiv, tasks.firstChild); // inserts element into html document
    tasks.insertAdjacentElement("beforebegin", newDiv);
    //tasks.after(newDiv);
    count++; //id counter
    console.log("done with fucntion");
    delButton.onclick = deleteElement;
  }
}

if (document.getElementById("delete-buttonId") === true) {
  console.log("iekš ifa");
  const delButtonMain = document.getElementById("delete-buttonId");
  delButtonMain.addEventListener(click, console.log("strādā"));
  function checkId(elem) {
    console.log("Inside function");
    console.log(elem.parentNode);
  }
}

function deleteElement(element) {
  console.log("Inside delete element function", element.path[2]);
  element.path[1].remove(); // Removed selected div element
  console.log(element);
}
