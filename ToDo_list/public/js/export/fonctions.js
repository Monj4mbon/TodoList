import {btnAdd, input, body, btnToDo, btnChecked, btnAll, divListe} from './style.js';

// ajoutter une tache
btnAdd.addEventListener('click', () => {
    // creation div
    if (input.value === "") {
        alert('veuillez entrer un nom');
    } else {
        let a = document.createElement('div');
        a.setAttribute('class', 'liste');
        divListe.appendChild(a);


        // creation nom
        let y = document.createElement('div');
        y.setAttribute('class', 'divText');
        a.appendChild(y);

        let b = document.createElement('h4');
        b.setAttribute('class', 'listeNom');
        y.appendChild(b);
        b.innerText = input.value;


        // creation boutons
        let x = document.createElement('div');
        x.setAttribute('class', 'divBout');
        a.appendChild(x);

        let c = document.createElement('span');
        c.setAttribute('class', 'boutCheck');
        c.innerText = 'check';
        x.appendChild(c);
        c.addEventListener('click', ()=> {
            if (c.innerText === 'check') {
                a.setAttribute('class', 'checked');
                c.innerText = 'checked';
                d.setAttribute('class', 'd-none');
                e.setAttribute('class', 'd-none');
            } else {
                a.setAttribute('class', 'liste');
                c.innerText = 'check';
                d.setAttribute('class', 'boutEdit');
                e.setAttribute('class', 'boutSupp');
            };
        });

        let d = document.createElement('span');
        d.setAttribute('class', 'boutEdit');
        d.innerText = 'edit';
        x.appendChild(d);
        let changer;
        d.addEventListener('click', ()=> {
            if (d.innerText === 'edit') {
                d.innerText = 'editing'
                c.setAttribute('class', 'd-none');
                e.setAttribute('class', 'd-none');
                b.remove();
                changer = document.createElement('input');
                changer.setAttribute('class', 'inputNom');
                y.appendChild(changer);
            } else {
                if (changer.value === "") {
                    alert('veuillez entrer un nom')
                } else {
                    a.setAttribute('class', 'liste');
                    d.innerText = 'edit';
                    c.setAttribute('class', 'boutCheck');
                    e.setAttribute('class', 'boutSupp');
                    changer.remove();
                    b = document.createElement('h4');
                    b.setAttribute('class', 'listeNom');
                    y.appendChild(b);
                    b.innerText = changer.value;
                };
            };
        });

        let e = document.createElement('span');
        e.setAttribute('class', 'boutSupp');
        e.innerText = 'supp';
        x.appendChild(e);
        e.addEventListener('click', ()=> {
            c.setAttribute('class', 'd-none');
            d.setAttribute('class', 'd-none');
            if (e.innerText != 'êtes-vous sûr de vouloir supprimer ?') {
                e.innerText = 'êtes-vous sûr de vouloir supprimer ?';
                let oui = document.createElement('span');
                oui.setAttribute('class', 'boutSupp');
                oui.innerText = 'oui';
                x.appendChild(oui);
                oui.addEventListener('click', () =>{
                    a.remove();
                });
                let non = document.createElement('span');
                non.setAttribute('class', 'boutSupp');
                non.innerText = 'non';
                x.appendChild(non);
                non.addEventListener('click', () =>{
                    oui.remove();
                    non.remove();
                    c.setAttribute('class', 'boutCheck');
                    d.setAttribute('class', 'boutEdit');
                    e.innerText = 'supp';
                });
            };
        });
    };
    let tab = Array.from(divListe.children);
    tab.forEach(element => {
        btnToDo.addEventListener('click', () => {
            if (element.children[1].children[0].innerText === 'checked') {
                element.setAttribute('class','d-none');
                element.children[0].setAttribute('class','d-none');
                element.children[0].children[0].setAttribute('class','d-none');
                element.children[1].setAttribute('class','d-none');
                element.children[1].children[0].setAttribute('class','d-none');
                element.children[1].children[1].setAttribute('class','d-none');
                element.children[1].children[2].setAttribute('class','d-none');
            } else if (element.children[1].children[0].innerText === 'check') {
                element.setAttribute('class','liste');
                element.children[0].setAttribute('class','divTexte');
                element.children[0].children[0].setAttribute('class','listeNom');
                element.children[1].setAttribute('class','divBout');
                element.children[1].children[0].setAttribute('class','boutCheck');
                element.children[1].children[1].setAttribute('class','boutEdit');
                element.children[1].children[2].setAttribute('class','boutSupp');
            };
        });
    });
    tab.forEach(element => {
        btnChecked.addEventListener('click', () => {
            if (element.children[1].children[0].innerText === 'check') {
                element.setAttribute('class','d-none');
                element.children[0].setAttribute('class','d-none');
                element.children[0].children[0].setAttribute('class','d-none');
                element.children[1].setAttribute('class','d-none');
                element.children[1].children[0].setAttribute('class','d-none');
                element.children[1].children[1].setAttribute('class','d-none');
                element.children[1].children[2].setAttribute('class','d-none');
            } else if (element.children[1].children[0].innerText === 'checked') {
                element.setAttribute('class','checked');
                element.children[0].setAttribute('class','divTexte');
                element.children[0].children[0].setAttribute('class','listeNom');
                element.children[1].setAttribute('class','divBout');
                element.children[1].children[0].setAttribute('class','boutCheck');
                element.children[1].children[1].setAttribute('class','boutEdit');
                element.children[1].children[2].setAttribute('class','boutSupp');
            };
        });
    });
    tab.forEach(element => {
        btnAll.addEventListener('click', () => {
            if (element.children[1].children[0].innerText === 'check') {
                element.setAttribute('class','liste');
                element.children[0].setAttribute('class','divTexte');
                element.children[0].children[0].setAttribute('class','listeNom');
                element.children[1].setAttribute('class','divBout');
                element.children[1].children[0].setAttribute('class','boutCheck');
                element.children[1].children[1].setAttribute('class','boutEdit');
                element.children[1].children[2].setAttribute('class','boutSupp');
            } else if (element.children[1].children[0].innerText === 'checked') {
                element.setAttribute('class','checked');
                element.children[0].setAttribute('class','divTexte');
                element.children[0].children[0].setAttribute('class','listeNom');
                element.children[1].setAttribute('class','divBout');
                element.children[1].children[0].setAttribute('class','boutCheck');
                element.children[1].children[1].setAttribute('class','boutEdit');
                element.children[1].children[2].setAttribute('class','boutSupp');
            };
        });
    });
});

// ajoutter une tache avec la touche : enter
body.onkeydown = (e) =>{
    if (e.code === 'NumpadEnter') {
        // creation div
        if (input.value === "") {
            alert('veuillez entrer un nom');
        } else {
            let a = document.createElement('div');
            a.setAttribute('class', 'liste');
            divListe.appendChild(a);


            // creation nom
            let y = document.createElement('div');
            y.setAttribute('class', 'divText');
            a.appendChild(y);

            let b = document.createElement('h4');
            b.setAttribute('class', 'listeNom');
            y.appendChild(b);
            b.innerText = input.value;


            // creation boutons
            let x = document.createElement('div');
            x.setAttribute('class', 'divBout');
            a.appendChild(x);

            let c = document.createElement('span');
            c.setAttribute('class', 'boutCheck');
            c.innerText = 'check';
            x.appendChild(c);
            c.addEventListener('click', ()=> {
                if (c.innerText === 'check') {
                    a.setAttribute('class', 'checked');
                    c.innerText = 'checked';
                    d.setAttribute('class', 'd-none');
                    e.setAttribute('class', 'd-none');
                } else {
                    a.setAttribute('class', 'liste');
                    c.innerText = 'check';
                    d.setAttribute('class', 'boutEdit');
                    e.setAttribute('class', 'boutSupp');
                };
            });

            let d = document.createElement('span');
            d.setAttribute('class', 'boutEdit');
            d.innerText = 'edit';
            x.appendChild(d);
            let changer;
            d.addEventListener('click', ()=> {
                if (d.innerText === 'edit') {
                    d.innerText = 'editing'
                    c.setAttribute('class', 'd-none');
                    e.setAttribute('class', 'd-none');
                    b.remove();
                    changer = document.createElement('input');
                    changer.setAttribute('class', 'inputNom');
                    y.appendChild(changer);
                } else {
                    if (changer.value === "") {
                        alert('veuillez entrer un nom')
                    } else {
                        a.setAttribute('class', 'liste');
                        d.innerText = 'edit';
                        c.setAttribute('class', 'boutCheck');
                        e.setAttribute('class', 'boutSupp');
                        changer.remove();
                        b = document.createElement('h4');
                        b.setAttribute('class', 'listeNom');
                        y.appendChild(b);
                        b.innerText = changer.value;
                    };
                };
            });

            let e = document.createElement('span');
            e.setAttribute('class', 'boutSupp');
            e.innerText = 'supp';
            x.appendChild(e);
            e.addEventListener('click', ()=> {
                c.setAttribute('class', 'd-none');
                d.setAttribute('class', 'd-none');
                if (e.innerText != 'êtes-vous sûr de vouloir supprimer ?') {
                    e.innerText = 'êtes-vous sûr de vouloir supprimer ?';
                    let oui = document.createElement('span');
                    oui.setAttribute('class', 'boutSupp');
                    oui.innerText = 'oui';
                    x.appendChild(oui);
                    oui.addEventListener('click', () =>{
                        a.remove();
                    });
                    let non = document.createElement('span');
                    non.setAttribute('class', 'boutSupp');
                    non.innerText = 'non';
                    x.appendChild(non);
                    non.addEventListener('click', () =>{
                        oui.remove();
                        non.remove();
                        c.setAttribute('class', 'boutCheck');
                        d.setAttribute('class', 'boutEdit');
                        e.innerText = 'supp';
                    });
                };
            });
        };
    };

    let tab = Array.from(divListe.children);
    tab.forEach(element => {
        btnToDo.addEventListener('click', () => {
            if (element.children[1].children[0].innerText === 'checked') {
                element.setAttribute('class','d-none');
                element.children[0].setAttribute('class','d-none');
                element.children[0].children[0].setAttribute('class','d-none');
                element.children[1].setAttribute('class','d-none');
                element.children[1].children[0].setAttribute('class','d-none');
                element.children[1].children[1].setAttribute('class','d-none');
                element.children[1].children[2].setAttribute('class','d-none');
            } else if (element.children[1].children[0].innerText === 'check') {
                element.setAttribute('class','liste');
                element.children[0].setAttribute('class','divTexte');
                element.children[0].children[0].setAttribute('class','listeNom');
                element.children[1].setAttribute('class','divBout');
                element.children[1].children[0].setAttribute('class','boutCheck');
                element.children[1].children[1].setAttribute('class','boutEdit');
                element.children[1].children[2].setAttribute('class','boutSupp');
            };
        });
    });
    tab.forEach(element => {
        btnChecked.addEventListener('click', () => {
            if (element.children[1].children[0].innerText === 'check') {
                element.setAttribute('class','d-none');
                element.children[0].setAttribute('class','d-none');
                element.children[0].children[0].setAttribute('class','d-none');
                element.children[1].setAttribute('class','d-none');
                element.children[1].children[0].setAttribute('class','d-none');
                element.children[1].children[1].setAttribute('class','d-none');
                element.children[1].children[2].setAttribute('class','d-none');
            } else if (element.children[1].children[0].innerText === 'checked') {
                element.setAttribute('class','checked');
                element.children[0].setAttribute('class','divTexte');
                element.children[0].children[0].setAttribute('class','listeNom');
                element.children[1].setAttribute('class','divBout');
                element.children[1].children[0].setAttribute('class','boutCheck');
                element.children[1].children[1].setAttribute('class','boutEdit');
                element.children[1].children[2].setAttribute('class','boutSupp');
            };
        });
    });
    tab.forEach(element => {
        btnAll.addEventListener('click', () => {
            if (element.children[1].children[0].innerText === 'check') {
                element.setAttribute('class','liste');
                element.children[0].setAttribute('class','divTexte');
                element.children[0].children[0].setAttribute('class','listeNom');
                element.children[1].setAttribute('class','divBout');
                element.children[1].children[0].setAttribute('class','boutCheck');
                element.children[1].children[1].setAttribute('class','boutEdit');
                element.children[1].children[2].setAttribute('class','boutSupp');
            } else if (element.children[1].children[0].innerText === 'checked') {
                element.setAttribute('class','checked');
                element.children[0].setAttribute('class','divTexte');
                element.children[0].children[0].setAttribute('class','listeNom');
                element.children[1].setAttribute('class','divBout');
                element.children[1].children[0].setAttribute('class','boutCheck');
                element.children[1].children[1].setAttribute('class','boutEdit');
                element.children[1].children[2].setAttribute('class','boutSupp');
            };
        });
    });
};