// titre
let body = document.getElementsByTagName("BODY")[0];
let div = document.createElement('div');
div.setAttribute('id', 'divTitre');
body.appendChild(div);
let titre = document.createElement('h1');
titre.setAttribute('id', 'titre');
titre.innerText = 'TodoList';
div.appendChild(titre);



// div du dessous
let div2 = document.createElement('div');
div2.setAttribute('id', 'divTodo');
body.appendChild(div2);



// add task
let divTask = document.createElement('div');
divTask.setAttribute('id', 'divTask');
div2.appendChild(divTask);
// titre
let add = document.createElement('h3');
add.setAttribute('id', 'ajout');
add.innerText = 'Ajouter une tâche :';
divTask.appendChild(add);
// input
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('class', 'form-control');
divTask.appendChild(input);
// bouton
let btnAdd = document.createElement('button');
btnAdd.setAttribute('id', 'add');
btnAdd.innerText = 'Ajouter';
divTask.appendChild(btnAdd);



// filtre
let divFiltre = document.createElement('div');
divFiltre.setAttribute('id', 'divFiltre');
div2.appendChild(divFiltre);
// a faire
let btnToDo = document.createElement('button');
btnToDo.setAttribute('id', 'btnTodo');
btnToDo.innerText = 'A faire';
divFiltre.appendChild(btnToDo);
// terminer
let btnChecked = document.createElement('button');
btnChecked.setAttribute('id', 'btnChecked');
btnChecked.innerText = 'Terminés';
divFiltre.appendChild(btnChecked);
// tous
let btnAll = document.createElement('button');
btnAll.setAttribute('id', 'btnAll');
btnAll.innerText = 'Tous';
divFiltre.appendChild(btnAll);



// liste
let divListe = document.createElement('div');
divListe.setAttribute('id', 'divListe');
div2.appendChild(divListe);

export {btnAdd, input, body};