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
    let  p = document.createElement('p')
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    p.innerText = item
    // checkbox.labels = item
    li.appendChild(checkbox)
    li.appendChild(p)
    // li.innerHTML = item
    ul.appendChild(li)
})

console.log('tes')

