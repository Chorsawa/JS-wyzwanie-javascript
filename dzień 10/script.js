//zadanie 1

const counties = [0];

console.table(counties); // zwraca 1 element o indeksie 0

//zadanie 2

counties.push(5);

console.table(counties); //po dodaniu kolejnego elementu zwraca 2 elementy zaczynając od indeksu 0

//counties.pop(0); // usuwa ostatnią wartość
counties.shift(0); // usuwa pierwszą wartość

console.table(counties);

//zadanie 3

const allText = document.querySelectorAll('p');

console.log(allText);

function coloredText(obj){
    for(let i = 0; i < obj.length; i++){
       obj[i].style.color = "red";
    }
}

coloredText(allText);

//zadanie 4

const text = ["To", "jest", "przykładowy", "tekst"];

let strResult = "";
for(let i = 0; i < text.length; i++){
    strResult = `${strResult} ${text[i]}`;
}

//bez pętli można użyć: return result = text.join(" ");

console.log(strResult);

//zadanie 5

const numbers = [1, 2, 3, 4, 5, 6]

let total = 0;
for(let i = 0; i < numbers.length; i++){
    total += numbers[i];
    }

//bez pętli można użyć: return result = numbers.reduce((a, b) => a + b, 0);

console.log(total);