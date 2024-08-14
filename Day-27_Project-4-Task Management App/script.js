// Grabbing necessary DOM elements
const addTaskBtn = document.getElementById("add-task-btn");
const taskModal = document.getElementById("task-modal");
const closeModalBtn = document.getElementById("close-modal");
const taskForm = document.getElementById("task-form");
const todoList = document.getElementById("todo-list");
const doingList = document.getElementById("doing-list");
const doneList = document.getElementById("done-list");
let tasks = [];
let editingTaskIndex = -1;

// Ensure the modal is hidden on initial load
document.addEventListener("DOMContentLoaded", () => {
  taskModal.classList.add("hide");
});

// Open modal on "Add Task" button click
addTaskBtn.addEventListener("click", () => {
  taskModal.classList.remove("hide");
  clearForm();
});

// Close modal on close button click
closeModalBtn.addEventListener("click", () => {
  taskModal.classList.add("hide");
  clearForm();
});

// Form submission logic
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskName = document.getElementById("task-name").value;
  const taskDesc = document.getElementById("task-desc").value;
  const taskDueDate = document.getElementById("task-due-date").value;
  const taskStatus = document.getElementById("task-status").value;

  const task = {
    name: taskName,
    desc: taskDesc,
    dueDate: taskDueDate,
    status: taskStatus,
  };

  if (editingTaskIndex === -1) {
    // Add new task
    tasks.push(task);
  } else {
    // Update existing task
    tasks[editingTaskIndex] = task;
    editingTaskIndex = -1;
  }

  renderTasks();
  clearForm();
  taskModal.classList.add("hide");
});

// Render tasks in appropriate sections
function renderTasks() {
  todoList.innerHTML = "";
  doingList.innerHTML = "";
  doneList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <span>${task.name}</span>
      <p>${task.desc}</p>
      <p>Due: ${task.dueDate}</p>
      <button onclick="deleteTask(${index})">Delete</button>
      <button class="update" onclick="editTask(${index})">Update</button>
    `;

    if (task.status === "todo") {
      todoList.appendChild(taskItem);
    } else if (task.status === "doing") {
      doingList.appendChild(taskItem);
    } else {
      doneList.appendChild(taskItem);
    }
  });
}

// Edit task logic
function editTask(index) {
  const task = tasks[index];
  document.getElementById("task-name").value = task.name;
  document.getElementById("task-desc").value = task.desc;
  document.getElementById("task-due-date").value = task.dueDate;
  document.getElementById("task-status").value = task.status;

  editingTaskIndex = index;
  taskModal.classList.remove("hide");
}

// Delete task logic
function deleteTask(index) {
  const confirmDeletion = confirm("Are you sure you want to delete this task?");
  if (confirmDeletion) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

// Clear form after task submission
function clearForm() {
  taskForm.reset();
  editingTaskIndex = -1;
}
