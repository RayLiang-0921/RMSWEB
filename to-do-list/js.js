const to_top= document.getElementById("to_top");
to_top.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
    });
}
);









//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletecheck);
filterOption.addEventListener("click" , filterTodo);
document.addEventListener("DOMContentLoaded", getTodos)

//function
todoButton.addEventListener("click", function(){
    const todoInput = document.querySelector(".todo-input");
    if (todoInput.innerText==""){
        alert("You need to input things... or it will be no use...");
    };
});
function addTodo(event){
    //prevent
    event.preventDefault();
    //create Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //li
    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);
    saveLocalTodos(todoInput.value);
    //create complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check-square"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //apend to list
    todoList.appendChild(todoDiv);
    //clear todoinput
    todoInput.value="";

}
function deletecheck(e){
    const item= e.target;
    if (item.classList[0]==="trash-btn"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        removelocalStorage(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    //check mark
    if (item.classList[0]==="complete-btn") {
        const todo = item.parentElement;
        todo.classList.add("completed");
    }
}
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex"
                break;
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none"
                }
                break;
        }
    })
}
function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}
function getTodos(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        //create Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");
        //li
        const newtodo = document.createElement('li');
        newtodo.innerText = todo;
        newtodo.classList.add("todo-item");
        todoDiv.appendChild(newtodo);
        //create complete button
        const completedButton = document.createElement('button');
        completedButton.innerHTML= '<i class="fas fa-check-square"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //create trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML='<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        //apend to list
        todoList.appendChild(todoDiv);
    })
}
function removelocalStorage(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
};

const navslide = ()=>{
    const NavBar = document.querySelector(".burger");
    const Navigation = document.querySelector(".pointer");
    NavBar.addEventListener("click", ()=>{
        Navigation.style.transform = "translateY(0%)";
    });
    Navigation.addEventListener("click",()=>{
        Navigation.style.transform = "translateY(-100%)";
    });
};

navslide();
