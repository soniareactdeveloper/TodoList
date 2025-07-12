let result = document.querySelector(".result");
let error = document.querySelector(".error");
let todoInput = document.querySelector(".todoInput");
let todoButton = document.querySelector(".todoButton");
let todoList = document.querySelector(".todoList");
let i = 0;

todoButton.addEventListener("click", () => {
  const inputVal = todoInput.value.trim();

  if (inputVal === "") {
    error.textContent = "Please enter a value";
    return;
  }

  error.textContent = "";
  i++;
  result.textContent = i;

  // Create todo container
  const singleTodo = document.createElement("div");
  singleTodo.classList.add("singleTodo");

  // Create input
  const todoSingleInput = document.createElement("input");
  todoSingleInput.classList.add("todoSingleInput");
  todoSingleInput.value = inputVal;
  todoSingleInput.setAttribute("readonly", true);

  // Create edit button
  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.innerHTML = `<i class="fa-solid fa-user-pen"></i>`;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

  // Append to todo div
  singleTodo.appendChild(todoSingleInput);
  singleTodo.appendChild(editBtn);
  singleTodo.appendChild(deleteBtn);
  todoList.appendChild(singleTodo);

  // Clear input
  todoInput.value = "";

  // Edit functionality
  editBtn.addEventListener("click", () => {
    if (todoSingleInput.hasAttribute("readonly")) {
      todoSingleInput.removeAttribute("readonly");
      todoSingleInput.focus();
    } else {
      todoSingleInput.setAttribute("readonly", true);
    }
  });

  // Delete functionality
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(singleTodo);
    i--;
    result.textContent = i;
  });
});
