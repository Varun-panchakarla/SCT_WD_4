let addBtn = document.getElementById('new');
let container = document.querySelector('.container');

// Find the last element before the "Add new task" button to insert before it
addBtn.addEventListener('click', () => {
    // Create a new div for the task
    let newTaskDiv = document.createElement('div');
    newTaskDiv.className = 'task ms';

    // Create a new input for the task
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Task to do';
    input.className = 'task-input';

    // Optionally, add finish and delete buttons for each new task
    let finishBtn = document.createElement('button');
    finishBtn.textContent = 'Finished';
    finishBtn.className = 'finish';

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';

    // Append input and buttons to the new task div
    newTaskDiv.appendChild(input);
    newTaskDiv.appendChild(finishBtn);
    newTaskDiv.appendChild(deleteBtn);

    // Insert the new task div before the "Add new task" button
    container.insertBefore(newTaskDiv, addBtn);
});