const inputValue = document.getElementById("inputValue");
const btn = document.getElementById("btn");
const todos = document.getElementById("todo");
const list = document.querySelector("ul");

let todoValue = [];
inputValue.addEventListener("input", function (e) {
  todoValue = e.target.value;
});

btn.addEventListener("click", function () {
  todoList();
});

todos.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);

function todoList() {
  if (todoValue !== undefined && todoValue !== null && todoValue !== "") {
    let createTag = document.createElement("li");
    let closeTag = document.createElement("span");
    createTag.classList = "item";
    closeTag.classList = "closeStyle";
    let closeText = document.createTextNode("\u00D7");

    let textNode = document.createTextNode(todoValue);
    createTag.appendChild(textNode);
    closeTag.appendChild(closeText);
    todos.appendChild(createTag);
    todos.appendChild(closeTag);
    todoValue = "";
    inputValue.value = "";
  } else {
    alert("Please enter your todo");
  }
}

var currentTask = document.querySelectorAll(".closeStyle");
for (var i = 0; i < currentTask.length; i++) {
  currentTask[i].addEventListener("click", function () {
    this.previousElementSibling.remove();
  });
}
