//zadanie 1

const obj = {
    name: "Jan",
    surname: "Kowalski",
    phoneNumber: "789 456 123",
    email: "małpa@gmail.com"
}

const paragraph3 = document.getElementById('first pargraph');

let i, objData = " ";
for (i in obj){
    objData += obj[i] + " ";
}

paragraph3.innerHTML = objData;

//zadanie 2

function Calculator(operator){
const a = document.getElementById('first number').value;
const b = document.getElementById('second number').value;

switch(operator)
    {case '+':
        var result = parseFloat(a) + parseFloat(b);
        break;
    case '*':
        var result = parseFloat(a) * parseFloat(b);
        break;
    case 'read':
        console.log(parseFloat(a), parseFloat(b));
    }
    document.getElementById('result').value = '= ' + result;
    
};

//zadanie 3

const person = [{
    firstName: "John",
    lastName: "Doe"
  },
  {firstName: "John",
    lastName: "Doe"
  }
]

const names = person.map(name => `${name.firstName}`); //używać w wypadku tablic
//console.log(`${person.firstName}`); używać gdy przypisany jest tylko jeden obiekt
console.log(names);

//zadanie 4

const person1 = {
    firstName: "John",
    lastName: "Doe"
};

console.log(person1);

delete(person1.lastName);

console.log(person1.lastName);