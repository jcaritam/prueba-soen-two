'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

const ul = document.querySelector('ul')


to_do.forEach(item => {
    console.log(item)
    let li = document.createElement('li')
    let p = document.createElement('p')
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            p.style.textDecoration = 'line-through';
            p.style.color = 'gray';
        } else {
            p.style.textDecoration = 'none';
            p.style.color = 'black';
        }
    });
    p.innerText = item
    li.appendChild(checkbox)
    li.appendChild(p)
    ul.appendChild(li)
})


