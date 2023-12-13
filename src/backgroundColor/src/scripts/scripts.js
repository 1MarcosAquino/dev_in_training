const body = document.querySelector('body');

const inputsList1 = document.querySelectorAll('.gradiente input');

const cor1 = document.querySelector('#cor1');
const cor2 = document.querySelector('#cor2');
const deg = document.querySelector('#deg');
const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');

const linear = document.getElementById('linear');
const radial = document.getElementById('radial');

const textarea = document.querySelector('textarea');

let tipo = '';
inputsList1.forEach((input) =>
    input.addEventListener('input', (e) => {
        if (linear.checked == true) {
            tipo = 'linear';
            deg.removeAttribute('disabled');
            body.style.background = `${tipo}-gradient(${deg.value}deg, ${cor1.value}, ${valor1.value}%, ${cor2.value} ${valor2.value}%)`;
            textarea.innerText = `background: ${cor1.value};background: ${tipo}-gradient(${deg.value}deg, ${cor1.value}, ${valor1.value}%, ${cor2.value} ${valor2.value}%);`;
        } else {
            tipo = 'radial';
            deg.setAttribute('disabled', 'true');
            body.style.background = `${tipo}-gradient(circle, ${cor1.value}, ${valor1.value}%, ${cor2.value} ${valor2.value}%)`;
            textarea.innerText = `background: ${cor1.value}; background: ${tipo}-gradient(circle, ${cor1.value}, ${valor1.value}%, ${cor2.value} ${valor2.value}%);`;
        }
    })
);

let textAreaShadow = document.querySelector('#bordas');
const inputList2 = document.querySelectorAll('.bordas input');

let horizontal = document.querySelector('#horizontal');
let vertical = document.querySelector('#vertical');
let borrar = document.querySelector('#tamanho');
let espalhar = document.querySelector('#espalhar');
let cor = document.querySelector('#box-color');
let opacidade = document.querySelector('#opacidade');
const container = document.querySelector('.container');

inputList2.forEach((input) => {
    input.addEventListener('input', () => {
        container.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${borrar.value}px ${espalhar.value}px ${cor.value}${opacidade.value}`;
        textAreaShadow.innerText = `box-shadow: ${horizontal.value}px ${vertical.value}px ${borrar.value}px ${espalhar.value}px ${cor.value}${opacidade.value};
      `;
    });
});
