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
