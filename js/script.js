console.log("Hello, World!");

let tasks = [];

function addTask() {
    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");

    if (taskInput.value === "" || dateInput.value === "") {
        alert("Please enter a task and a date.");
    } else {
        tasks.push({
            title: taskInput.value,
            date: dateInput.value,
            completed: false 
        });

        console.log("Task added:", taskInput.value, "on", dateInput.value);
        renderTasks();
    }
}

function removeAllTask() {
    tasks = [];
    renderTasks();
}

function toggleFilter() {
    renderTasks(); 
}

function renderTasks() {
    const taskList = document.getElementById("todo-list");
    taskList.innerHTML = ""; 

    const filter = document.getElementById("filter-select").value; // Get the selected filter
    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true; 
    });

    filteredTasks.forEach((task, index) => {
        taskList.innerHTML += `
        <li class="todo-item flex justify-between items-center bg-white p-4 mb-2">
            <span>${task.title} - ${task.date}</span>
            <div>
                <button class="px-[10px] py-[2px] bg-green-500 text-white rounded-md" onclick="editTask(${index});">Edit</button>
                <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md" onclick="deleteTask(${index});">Delete</button>
                <input type="checkbox" onchange="toggleTask(${index});" ${task.completed ? 'checked' : ''}>
            </div>
        </li>
        `;
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; 
    renderTasks(); 
}

function editTask(index) {
    
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    renderTasks(); 
}