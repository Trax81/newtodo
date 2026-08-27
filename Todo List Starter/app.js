const list = document.querySelector('.list')
const input = document.querySelector('input')
let todoList = []
let todoInputValue = '';



function onInputChange(event) {
    todoInputValue = event.target.value
}


function addTodo() {
    if (!todoInputValue) {
        return;
    }


    const task = {
        id: Math.floor(Math.random() * 10000),
        task: todoInputValue
    }
    todoList.push(task);
    renderTodos()
    input.value = ''
    todoInputValue = ''
}




function deleteTodo(id) {
   todoList = todoList.filter((todo) => {
        return todo.id !== id
    })
    
}


function renderTodos() {
list.innerHTML = todoList.map(
    (element) =>
        `<li>
    ${element.task}
    Finish Frontend Simplified
    <button class="todo__delete" onclick="deleteTodo(${element.id})">
    x
    </button>
    </li>`
).join("");
}