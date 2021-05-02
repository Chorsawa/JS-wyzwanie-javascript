alert('Twój kod JS jest widoczny w przeglądarce jako alert');
console.log('Twój kod JS jest widoczny w konsoli');

const paragraph1 = document.getElementById('text-1');
const paragraph2 = document.getElementById('text-2');
const buttons = document.querySelector('.button');
const colorOfBackground = document.getElementById('body');

paragraph1.innerHTML = "Pojawił się dynamiczy paragraf i zmieniono tło."
paragraph2.innerHTML = "Znikam po kliknęciu"

function changeParagraphs(){
    paragraph1.style.display = "flex";
    paragraph2.style.display = "none";
}

function changeBackground(){
    colorOfBackground.style.backgroundColor = "#4f4870";
    colorOfBackground.style.transition = "all 3s";
}

function addHighlight(){
    paragraph2.classList.add('highlight');
    paragraph1.classList.add('highlight');
}

function removeHighlight(){
    paragraph2.classList.remove('highlight');
    paragraph1.classList.remove('highlight');
}

buttons.addEventListener('click', changeParagraphs);
buttons.addEventListener('click', changeBackground);
paragraph2.addEventListener('mouseenter', addHighlight);
paragraph2.addEventListener('mouseleave', removeHighlight);
paragraph1.addEventListener('mouseenter', addHighlight);
paragraph1.addEventListener('mouseleave', removeHighlight);
