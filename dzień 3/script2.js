const cursorOnTable = document.getElementById('table');
const paragraphs = document.querySelector('.first');
const forms = document.getElementsByName('my-form')[0];
const firstElement = document.querySelectorAll('ul li')[0];
const lastElement = document.querySelectorAll('ul li');

const last = lastElement[lastElement.length - 1];

function changeCursor(){
    cursorOnTable.classList.add('cursor');
}

function sizeDown(){
    paragraphs.classList.remove('first');
}

function sizeUp(){
    paragraphs.classList.add('first');
}

function changeBorder(){
    forms.style.border = "10px dotted white";
}

function remove(){
    firstElement.style.display = "none";
}

function removeLast(){
    last.style.display = "none";
}

cursorOnTable.addEventListener('mouseenter', changeCursor);
paragraphs.addEventListener('mouseenter', sizeDown);
paragraphs.addEventListener('mouseleave', sizeUp);
forms.addEventListener('mouseenter', changeBorder);
firstElement.addEventListener('click', remove);
last.addEventListener('click', removeLast);