let head = document.querySelector('head');
// let body = document.querySelector('.backGround');
let input1 = document.querySelector('.cor1');
let input2 = document.querySelector('.cor2');
let input3 = document.querySelector('.deg');
let input4 = document.querySelector('.valor1');
let input5 = document.querySelector('.valor2');
let textarea = document.querySelector('textarea');
let inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; i++) {
    let inputAtual = inputs[i];
    inputAtual.addEventListener('input', function () {
        let a = input1.value;
        let b = input2.value;
        let c = input3.value;
        let d = input4.value;
        let e = input5.value;
        //.backGround
        head.innerHTML = `<style>body {height: 100vh; background: ${a};background: linear-gradient(${c}deg, ${a}, ${d}%, ${b} ${e}%);background: -moz-linear-gradient(${c}deg, ${a} ${d}%, ${b} ${e}%);background: -webkit-linear-gradient(${
            c * 2
        }deg, ${b} ${d}%, ${a} ${e}%);}
         * {
         margin: 0%;
         padding: 0%;
     }

     li.titulo {
         margin: 2px;
         padding: 15px;
         text-transform: uppercase;
     }

     li.titulo:hover {
         padding: 15px;
         background: #666;
         text-transform: uppercase;
     }

     div {
         background-color: rgba(59, 90, 173, 0.5);
         padding: 1vh;
     }

     div a {
         text-decoration: none;
         color: white;
         font-size: 20px;
         padding: 15px;
         display: inline-block;
     }

     ul {
         display: inline;
         margin: 0;
         padding: 0;
     }

     ul li {
         display: inline-block;
     }

     ul li:hover {
         background: #555;
     }

     ul li:hover ul {
         display: block;
     }

     ul li ul {
         position: absolute;
         width: 200px;
         display: none;
     }

     ul li ul li {
         background: #555;
         display: block;
     }

     ul li ul li a {
         display: block !important;
     }

     ul li ul li:hover {
         background: #666;
     }</style>`;
        textarea.innerText = `background: ${a};background: linear-gradient(${c}deg, ${a}, ${d}%, ${b} ${e}%);background: -moz-linear-gradient(${c}deg, ${a} ${d}%, ${b} ${e}%);background: -webkit-linear-gradient(${
            c * 2
        }deg, ${b} ${d}%, ${a} ${e}%);`;
    });
}
