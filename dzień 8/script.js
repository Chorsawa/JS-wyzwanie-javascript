//zadanie 1

const age = "33";

function stringToNum(){
    return parseInt(age);
}

console.log(stringToNum(age));

//zadanie 1.5

const age2 = "34";

function sumOfAges(){
    return parseInt(age2) + parseInt(age);
}

console.log(sumOfAges(age, age2));

//zadanie 2

const num = 1.65;

function toFixed(){
    return num.toFixed();
}

console.log(toFixed(num));

//zadanie 3

const name1 = "joanna";

function firstToUpperCase(){
    return name1.charAt(0).toUpperCase() + name1.slice(1);
}

console.log(firstToUpperCase(name1));