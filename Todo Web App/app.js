// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



// Add Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);




// Function
function addTodo(event) {
    // Prevent from submitting
    event.preventDefault();

    // Create todoDiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;

    todoDiv.appendChild(newTodo);

    // Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    // Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Add todoDiv to todoList
    todoList.appendChild(todoDiv);

    // Clear todoinput value
    todoInput.value = ""
}

function deleteCheck(event){
    const item = event.target;

    // Delete Todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    } else if  (item.classList[0] === 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
