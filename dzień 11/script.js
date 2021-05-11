// zadanie 1

const textResult = document.getElementById('result');

function verifyAge(){
    const ageOfUser = document.getElementById('age').value; //ta zmienna musi być w funkcji, inaczej wynik nie zgadza się z rzeczywistością
    if(parseInt(ageOfUser) >= 18){
        textResult.innerHTML = "Użytkownik jest pełnoletni";
    }
    else if(parseInt(ageOfUser) < 18 && parseInt(ageOfUser) >= 1){
        textResult.innerHTML = "Użytkownik nie ma 18lat";
    }
    else{
        textResult.innerHTML = "Błąd, wprowadź poprawną wartość";
    }
}

//zadanie 2

const odd = [];
const even = [];
const all = [1, 4, 6, 7, 8, 9, 11, 13];


for(var i = 0; i < all.length; i++){
    if(all[i] % 2 === 0){
        even.push(all[i]);
    }
    else{
        odd.push(all[i]);
    }
}

console.log(even);
console.log(odd);

//zadanie 3


const car1 = {
rok: 2000,
przebieg: 145000,
model: "Audi"
}

const car2 = {
rok: 2019,
przebieg: 20000,
model: "Toyota"
}

const car3 = {
rok: 2016,
przebieg: 120000,
model: "Renault"
}

const cars = [car1, car2, car3];

//przy użyciu metody filter
//const findPerfectCar = cars.filter(car => (car.rok >= 2015 && car.przebieg <= 25000)); 
//console.log(findPerfectCar);

perfectCar = [];
for(var i = 0; i < cars.length; i++){
    if(cars[i].rok >= 2015 && cars[i].przebieg <= 25000){
        perfectCar.push(cars[i]);
    }
}

console.log(perfectCar);