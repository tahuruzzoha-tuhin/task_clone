console.log("It's working..!");

// Get all required elements

const add_task = document.getElementById('add-task');
const task_input = document.getElementById('task-input');
const task_list = document.getElementById('task-list');


// Add click event

add_task.addEventListener("click", () => {
    const li = document.createElement('li');
    li.innerText = task_input.value;
    li.classList = 'item'
    task_list.appendChild(li);
    task_input.value = '';
});


// Delete event

task_list.addEventListener('click',  (event) => {
    event.target.parentNode.removeChild(event.target);
})