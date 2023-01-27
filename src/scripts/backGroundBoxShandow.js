import { selector } from './genericFunctions.js';

function selectInputsBackGround(call) {
    const inputs = selector.$All('.backGround');
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            call();
        });
    });
}

function changeBackGround() {
    let tipo = 'linear';
    const body = selector.$One('body');
    const input1 = selector.$One('.cor1');
    const input2 = selector.$One('.cor2');
    const input3 = selector.$One('.deg');
    const input4 = selector.$One('.valor1');
    const input5 = selector.$One('.valor2');
    const textarea = selector.$One('textarea');
    const style = `background: ${input1.value};background: ${tipo}-gradient(${input3.value}deg, ${input1.value}, ${input4.value}%, ${input2.value} ${input5.value}%);background: -moz-${tipo}-gradient(${input3.value}deg, ${input1.value} ${input4.value}%, ${input2.value} ${input5.value}%);background: -webkit-${tipo}-gradient(${input3.value}deg, ${input2.value} ${input4.value}%, ${input1.value} ${input5.value}%);`;
    textarea.innerText = style;
    body.setAttribute('style', style);
}

selectInputsBackGround(changeBackGround);

const textAreaShadow = selector.$One('#bordas');
const horizontal = selector.$One('#horizontal');
const vertical = selector.$One('#vertical');
const borrar = selector.$One('#tamanho');
const espalhar = selector.$One('#espalhar');
const cor = selector.$One('#box-color');
const opacidade = selector.$One('#opacidade');
const container = selector.$One('.container');

const inputShadow = selector.$All('.bordas input');
for (let i = 0; i < inputShadow.length; i++) {
    inputShadow[i].addEventListener('input', function () {
        let bodBorderShabow = `${horizontal.value}px ${vertical.value}px ${borrar.value}px ${espalhar.value}px ${cor.value}${opacidade.value}`;
        let textAreaPrint = `
      -webkit-box-shadow: ${horizontal.value}px ${vertical.value}px ${borrar.value}px ${espalhar.value}px ${cor.value}${opacidade.value};
      -moz-box-shadow: ${horizontal.value}px ${vertical.value}px ${borrar.value}px ${espalhar.value}px ${cor.value}${opacidade.value};
      box-shadow: ${horizontal.value}px ${vertical.value}px ${borrar.value}px ${espalhar.value}px ${cor.value}${opacidade.value};
      `;

        textAreaShadow.innerText = textAreaPrint;
        container.style.boxShadow = bodBorderShabow;
    });
}

function selectInputsBoxShadow(call) {
    const inputs = selector.$All('.bordas input');
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            call(input.value);
        });
    });
}
function changeBoxShadow(value) {
    const t = _.pick(value);
    console.log(t);
}
selectInputsBoxShadow(changeBoxShadow);

const obj = {
    All: (param) => document.querySelectorAll(param),
    Select: (param) => document.querySelector(param),
    Creator: (param) => document.createElement(param),
};
console.log(obj.All('.backGround'));

/*
function changeBoxShadow() {
  const textAreaShadow = $Select("#bordas");
  const horizontal = $Select("#horizontal");
  const vertical = $Select("#vertical");
  const borrar = $Select("#tamanho");
  const espalhar = $Select("#espalhar");
  const cor = $Select("#box-color");
  const opacidade = $Select("#opacidade");
  const container = $Select(".container");

  let bodBorderShabow = `${horizontal.value}px ${vertical.value}px ${borrar.value}px ${espalhar.value}px ${cor.value}${opacidade.value}`;
  let textAreaPrint = `
      -webkit-box-shadow: ${horizontal.value}px ${vertical.value}px ${borrar.value}px ${espalhar.value}px ${cor.value}${opacidade.value};
      -moz-box-shadow: ${horizontal.value}px ${vertical.value}px ${borrar.value}px ${espalhar.value}px ${cor.value}${opacidade.value};
      box-shadow: ${horizontal.value}px ${vertical.value}px ${borrar.value}px ${espalhar.value}px ${cor.value}${opacidade.value};
      `;

  textAreaShadow.innerText = textAreaPrint;
  container.style.boxShadow = bodBorderShabow;
}

selectInputsBoxShadow(changeBoxShadow);
*/

window.onload = () => {
    const divs = selector.$All('.red');
    divs.forEach((div) => {
        div.addEventListener('click', () => {
            const input = selector.$One('.cor2').value;
            //console.log(div.style);
            const info = (div.style.backgroundColor = input);

            console.log(info);
        });
    });
};
