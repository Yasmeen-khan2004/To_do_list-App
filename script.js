document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Function to create a new task item
    function createTaskItem(taskText) {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        return li;
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    addTaskBtn.addEventListener("click", addTask);

    // Optional: Allow pressing Enter to add a task
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
