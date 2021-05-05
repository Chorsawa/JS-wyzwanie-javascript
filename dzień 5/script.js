let klasaMyProgramistki = [
    {name: 'Adam', surname: 'Kowalski', age: 25},
    {name: 'Karol', surname: 'Nowak', age: 24},
    {name: 'Anna', surname: 'Kotek', age: 22},
    {name: 'Kamila', surname: 'Socha', age: 23},
]

let student = 
    {name: 'Kasia', surname: 'Godlewska', age: 23}


klasaMyProgramistki.push(student);

console.table(klasaMyProgramistki);

let pets = [
    {name: 'Gucio', age: 10, color: 'orange', animal: 'cat'},
    {name: 'Azor', age: 15, color: 'brown', animal: 'dog'},
    {name: 'Stefan', age: 1, color: 'black', animal: 'hamster'},
    {name: 'Birdie', age: 4, color: 'blue', animal: 'parrot'},
    {name: 'Goldie', age: 2, color: 'gold', animal: 'goldfish'},
]

let pet = {name: 'Pufka', age: 12, color: 'silver', animal: 'cat'}

pets.unshift(pet);

console.log(pets);