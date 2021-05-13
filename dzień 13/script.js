//zadanie 1

const par1 = document.getElementById('text-1');
const par2 = document.getElementById('text-2');
const par3 = document.getElementById('text-3');

const bttn_3 = document.getElementById('bttn3');

function hideFirst(){
    par1.style.display = "none";
}

document.getElementById('bttn2').onclick = function hideSecond(){
    par2.style.display = "none";
}

function hideThird(){
    par3.style.display = "none";
}

bttn_3.addEventListener('click', hideThird);

//zadanie 2

const par4 = document.getElementById('text-4');
const bttn_4 = document.getElementById('bttn4');

function addPln(){
    const string = " PLN";
    const result = par4.innerHTML + string;
    par4.innerHTML = result;
}

bttn4.addEventListener('click', addPln);