var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos= JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML="";
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute("href", '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick", 'deleteTodo('+pos+')');

        var linkText = document.createTextNode("Excluir")
       // var linkTitle = document.create

       linkElement.appendChild(linkText)

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();

}

function saveToStorage(){

    localStorage.setItem('list_todos', JSON.stringify(todos));
}



            /*DEFINIR STYLE DO BOX PELO JS
             var boxElement = document.querySelector('.box');
             boxElement.style.width = 100;
             boxElement.style.height = 100;
             boxElement.style.backgroundColor = '#f00';*/

            /*CRIAR UM LINK EM JS NO HTML
             var linkElement = document.createElement('a');
             linkElement.setAttribute('href', 'https://casashow-api.herokuapp.com/swagger-ui.html#/');
             linkElement.setAttribute('title', 'Site da Casa de Show');
            
             var textElement = document.createTextNode('Acessar documento da casa de show');
             linkElement.appendChild(textElement);

             var contairnerElement = document.querySelector("#app");
             contairnerElement.appendChild(linkElement);*/


            /*Removento input pelo js
             var inputElement = document.querySelector("#nome");
             contairnerElement.removeChild(inputElement)*/

            /*Buscando Input pelo js
            var inputElemento = document.querySelector('input[name=nome]');  
            var btnElemento = document.querySelector('button.botao');
           
            btnElemento.onclick = function(){
               var text =  inputElemento.value;

               alert(text);
            }*/