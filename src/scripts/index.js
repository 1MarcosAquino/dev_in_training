import { database } from './database.js';

const containerMenu = document.querySelector('.containerMenu');

const createCard = (text, link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = link;
    a.target = '_blank';
    a.innerText = text;

    li.className = 'card';
    li.append(a);

    return li;
};

const createMenu = ({ category, list }) => {
    const itemMenu = document.createElement('li');
    const text = document.createElement('p');
    const containerCard = document.createElement('ul');

    itemMenu.className = 'category';
    containerCard.className = 'containerCard';

    text.innerText = category;

    list.forEach(({ text, link }) => {
        containerCard.append(createCard(text, link));
    });

    itemMenu.append(text, containerCard);

    return itemMenu;
};

database.forEach((obj) => containerMenu.append(createMenu(obj)));

/*

// RASPAGEM
const titulos = document.querySelectorAll('li.category');

const elements = (element) => {
    const category = element.innerText;
    const lists = element.querySelectorAll('a');

    const list = [...lists].map((element) => {
        return {
            link: element.href,
            text: element.innerText,
        };
    });

    return { category, list };
};

const mDatabase = [];

titulos.forEach((titulo) => mDatabase.push(elements(titulo)));

console.log(mDatabase);
*/
