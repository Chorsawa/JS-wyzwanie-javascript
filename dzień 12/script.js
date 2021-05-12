//zadanie 1

var obj = {
    id: 42,
    counter: function counter() {
      setTimeout(function() {
        console.log(this.id);
      }, 1000);
    }
};

obj.counter(); //zwraca undefined

var obj = {
    id: 42,
    counter: function counter(){
        setTimeout (() => {
            console.log(this.id);
        },1000);
    }
};

obj.counter(); //zwraca 42

//zadanie 2

const verifyPerson = (sex, age) => {
    if(sex === "female" && age >= 18){
        return true;
    }
    else{
        return false;
    }
}

console.log(verifyPerson("female", 23)); //zwraca true
console.log(verifyPerson("female", 16)); //zwraca false
console.log(verifyPerson("male", 5));  //zwraca false
console.log(verifyPerson("male", 45));  //zwraca false

//zadanie 3

function checkSpam(str) {
    let strToLowerCase = str.toLowerCase();
    return strToLowerCase.includes('spam') || strToLowerCase.includes('xxx');
}

console.log(checkSpam("nie ma słowa spam")); //zwraca true
console.log(checkSpam("nie ma słowa XXX")); //zwraca true
console.log(checkSpam("nie ma żadnego słowa")); //zwraca false
console.log(checkSpam("")); //zwraca false

//zadanie 4

function readNumber() {
    let number;
  
    do {
      number = prompt("Wpiszesz liczbę?", 0);
    }
    while (!isFinite(number));
    
    if (number === null || number === "") return null;
  
    return +number;
}
  
alert(`Read: ${readNumber()}`);