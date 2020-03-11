alert('EPAAAAAA');

/*var _funcoes = require('./funcoes');

console.log((0, _funcoes.soma)(1, 2));
*/



/*
//SPREAD

const arr1=[1, 5, 6];
const arr2= [4, 2, 3,];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 ={
    nome:'Lucas',
    idade:20,
    empresa:'GFT',
};

const usuario2 ={...usuario1, nome:'Vinicus'};

console.log(usuario2);




//REST

function soma(...params) {
    return params.reduce((total, next)=> total + next);
}

console.log(soma(5,7));

//COM VETORES
const arr=[1, 6, 9, 8]

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

const usuario ={
    nome:'Lucas',
    idade:20,
    empresa:'GFT'
}

//COM OBJETO
const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);
*/



/*const usuario ={
    nome: 'Lucas',
    idade: 20,
    endereco: {
        cidade: 'Barueri',
        estado:'SP',
    },
};


//CONCEITO DE DESESTRUTURAÇÃO
function mostraNome({nome, idade, endereco}){
    console.log(nome);
    console.log(idade);
    console.log(endereco);
}
mostraNome(usuario);

    
    //COM DESESTRUTURAÇÃO
    const { nome, idade, endereco:{cidade} } = usuario;
    //SEM DESESTRUTURAÇÃO
    const nome = usuario.nome;
    const idade = usuario.idade;
    const cidade = usuario.endereco.cidade;
*/





/*const arr = [1, 5, 7, 9, 4];
//FAZER UMA ARROW FUNÇÂO MAIS LIMPAR
const newArr =  arr.map(item => item * 2);

console.log(newArr);

const test = () => ({nome : 'Lucas'});
console.log(test());
const soma = (a =3, b=6)=> a+b;

console.log(soma(1));
console.log(soma());
*/

/*const arr = [1, 8, 10, 5, 6];

//PARA CADA ELEMENTO SOMAR COM A POSIÇÂO DELE
const newArr = arr.map(function(item, index){
    return item + index;
});
console.log(newArr);

//SOMAR TODOS OS ELEMENTOS DO ARRAY
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

//LISTAR OS NUMEROS DO ARR PARES
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

//PROCURAR O NUMERO DENTRO DA LISTA
const find = arr.find(function(item){
    return item === 1;
});
console.log(find);
*/



/*METODO STATIC
class Matematica{


    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 5));
*/



/*HERANÇA
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Lucas';

    }

    mostraUsuario(){
        console.log(this.usuario);
    }
    
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('novo todo');
}

MinhaLista.mostraUsuario();*/



/*PROMISE COM BIBLIOTEXA
axios.get('https://api.github.com/users/diego3g')

    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
*/



/*PROMISE SEM UTILIZAR BIBLIOTECA
var xhr = new XMLHttpRequest();
    var minhaPromise = function(){
        return  new Promise(function(resolve, reject){
            xhr.open('GET', 'https://api.github.com/users/diego3g');
            
            xhr.send(null); 
    
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    console.log(JSON.parse(xhr.responseText));
                    if(xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject('Erro na requisição');
                    }
                }          
            }
        })
    }
    
    minhaPromise()
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })*/
    