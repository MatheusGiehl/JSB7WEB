//Trocar a cor do texto da div com a classe teste para azul
document.querySelector('.teste').style.color = 'blue'

//Adicionar a classe titulo ao h1 e trocar a cor do texto para vermelho
document.querySelector('h1').classList.add('titulo')
document.querySelector('.titulo').style.color = 'red'

//Inserindo novo elemento
let h3 = document.createElement('h3')
h3.innerText = 'Novo elemento h3'
document.body.appendChild(h3)

//adionando uma lista

let lista = ['Item 1', 'Item 2', 'Item 3']
let ul = document.createElement('ul')
for (let i = 0; i < lista.length; i++) {
    let li = document.createElement('li')
    li.innerText = lista[i]
    ul.appendChild(li)
}
document.body.appendChild(ul)