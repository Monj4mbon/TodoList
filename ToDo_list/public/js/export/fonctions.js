import {btnAdd, input, body} from './style.js'

// ajoutter une tache
btnAdd.addEventListener('click', () => {
    let a = document.createElement('div');
    a.setAttribute('class', 'liste');
    divListe.appendChild(a);
    let b = document.createElement('h4');
    b.setAttribute('class', 'listeNom');
    a.appendChild(b);
    b.innerText = input.value;
})


body.onkeydown = (e) =>{
    if (e.code === 'NumpadEnter') {
        // creation div
        let a = document.createElement('div');
        a.setAttribute('class', 'liste');
        divListe.appendChild(a);


        // creation nom
        let y = document.createElement('div')
        y.setAttribute('id', 'divText');
        a.appendChild(y);

        let b = document.createElement('h4');
        b.setAttribute('class', 'listeNom');
        y.appendChild(b);
        b.innerText = input.value;


        // creation boutons
        let x = document.createElement('div')
        x.setAttribute('id', 'divBout');
        a.appendChild(x);

        let c = document.createElement('button');
        c.setAttribute('id', 'boutCheck');
        x.appendChild(c);

        let d = document.createElement('button');
        d.setAttribute('id', 'boutEdit');
        x.appendChild(d);

        let e = document.createElement('button');
        e.setAttribute('id', 'boutSupp');
        x.appendChild(e);
    }
};
