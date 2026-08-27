const list = document.querySelector('.list')


let todoList = [
    {
        id: 1,
        task: 'Finish Frontend Simplified'
    },
    {   id: 2,
        task: 'Finish Interview Questions'
    },
    {   id: 3,
        task: 'Land $100k job'
    }
];

let todoInputValue = '';
function onInputChange(event) {
    todoInputValue = event.target.value
}


function addTodo() {
    console.log('@@')
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