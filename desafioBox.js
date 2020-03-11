
var btnElement = document.querySelector('#app button');
var boxElement = document.querySelector('.box');
             boxElement.style.width = 100;
             boxElement.style.height = 100;
             boxElement.style.backgroundColor = '#f00';

var todos= [];

function renderTodos(){
    listElement.innerHTML="";
    for(todo of todos){
        var todoElement = document.createElement('box');

        var todoClone = document.createTextNode(todo);

        var linkElement = document.createElement('box');


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos();

function addTodo(){
    

    todos.clone(boxElement);
    renderTodos();
 
}
btnElement.onclick = addTodo;

function saveToStorage(){

    localStorage.setItem('box', todos);
}