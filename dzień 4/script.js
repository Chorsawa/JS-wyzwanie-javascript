let a = 7;
let b = a;
console.log(b); // zwraca 7

let flower = "rose";
console.log(flower); // zwraca rose

// dodan pod komentarz aby nie wyrzucało błędu
// const a = 9;
// console.log(a); // zwraca a już zostało zadeklarowane (ze względu na zadanie nr 1, inaczej zwraca 9)

const trippyTrip = "California";
console.log(trippyTrip);

let abc = "123";
abc = "456";
abc = "789";
console.log(abc); // zwraca ostatnią wpisaną wartość

let language = "Javascript";
let paragraph = document.getElementById('p1');
const result = paragraph.innerHTML + language;
paragraph.innerHTML = result;