

function funcBody(){
    let header = document.createElement('header');
    header.id = 'header';
    
    let title = document.createElement('h1')
    title.id = 'title'
    title.innerText = 'Exercicio - JavaScript'

    header.appendChild(title)
    document.body.appendChild(header)

    let main = document.createElement('main')
    main.className = 'main-content'
    document.body.appendChild(main)

    let section0 = document.createElement('section')
    section0.className = 'center-content'
    main.appendChild(section0)

    let paragrafo = document.createElement('p');
    paragrafo.innerText = 'Que exercicio dificil até entender a lógica...'
    section0.appendChild(paragrafo)

    let section1 = document.createElement('section');
    section1.className = 'left-content'
    main.appendChild(section1)

    let section2 = document.createElement('section');
    section2.className = 'right-content'
    main.appendChild(section2);

    let img0 = document.createElement('img');
    img0.src = 'https://picsum.photos/200'
    img0.className = 'small-image'
    section0.appendChild(img0);

    let listaNaoOrdenada = document.createElement('ul');
     section2.appendChild(listaNaoOrdenada)
     let listaPorExtenso = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
     for (let numeros of listaPorExtenso) {
        let numerosDaLista = document.createElement('li');
        numerosDaLista.innerHTML = numeros;
        listaNaoOrdenada.appendChild(numerosDaLista);  
    }

    for (let index = 0; index < 3; index += 1) {
        let h3 = document.createElement('h3');
        h3.className = 'description';
        main.appendChild(h3);
    }

    main.removeChild(section1);

    section2.style.marginRight = 'auto';

    main.style.backgroundColor = 'black';

    listaNaoOrdenada.lastChild.remove();
    listaNaoOrdenada.lastChild.remove();


}

funcBody()