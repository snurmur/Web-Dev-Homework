document.addEventListener("DOMContentLoaded", function () {
  displayTasks();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    let tasks = getTasks();
    tasks.push({ text: task, completed: false });
    saveTasks(tasks);
    taskInput.value = "";
    displayTasks();
  }
}

function displayTasks() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  const tasks = getTasks();

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(index));
    taskElement.appendChild(checkbox);

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskText.style.textDecoration = task.completed ? "line-through" : "none";
    taskElement.appendChild(taskText);

    const editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.textContent = "Editare";
    editButton.addEventListener("click", () => editTask(index));
    taskElement.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Ștergere";
    deleteButton.addEventListener("click", () => deleteTask(index));
    taskElement.appendChild(deleteButton);

    todoList.appendChild(taskElement);
  });
}

function toggleTask(index) {
  let tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  displayTasks();
}

function deleteTask(index) {
  let tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  displayTasks();
}

function editTask(index) {
  let tasks = getTasks();
  const newText = prompt("Editați sarcina:", tasks[index].text);
  if (newText !== null) {
    tasks[index].text = newText.trim();
    saveTasks(tasks);
    displayTasks();
  }
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
